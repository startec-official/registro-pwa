import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../utils/user';
import { StorageService } from '../utils/storage.service';
import { environment } from 'src/environments/environment';
import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formModel : User;
  
  months : string[] = ["January","February","March","April","May","June","July","August","September","October","November", "December"]
  dayCors : number[] = [1,2,1,0,1,0,1,1,0,1,0,1];
  
  currentMonthIndex : number;

  days : any[];
  years : number[];

  monthSelected : boolean;
  yearSelected : boolean;
  showDate : boolean = false;

  constructor( private storageService : StorageService , 
               private route : ActivatedRoute,
               private router : Router ) { }

  ngOnInit(): void {
    this.formModel = new User('',-1,'','','','');
    this.currentMonthIndex = 0;
    this.monthSelected = false;
    this.yearSelected = false;
    this.days = [];
    this.years = [];
    this.generateDateInput();
    this.showDate = true;
  }

  generateDateInput() : void {
    let daysToPush = [];
    for (let i = 1; i <= 30; i++) {daysToPush.push(i);}
    this.days.push(daysToPush);
    daysToPush = [];
    for (let i = 1; i <= 31; i++) {daysToPush.push(i);}
    this.days.push(daysToPush);
    daysToPush = [];
    for (let i = 1; i <= 28; i++) {daysToPush.push(i);}
    this.days.push(daysToPush);
    daysToPush = [];
    for (let i = 1; i <= 29; i++) {daysToPush.push(i);}
    this.days.push(daysToPush);
    for (let i = 2020; i >= 1900; i--) {this.years.push(i);}
  }

  changedMonth(monthIdx : number) {
    this.monthSelected = true;
    this.currentMonthIndex = monthIdx - 1;
  }

  onSubmit( formValue : any ) {
    this.addPersonalInfo(formValue);
    this.addAddress(formValue);

    const writeDataProcess = of(2);
    let index : number;
    writeDataProcess.pipe(
      mergeMap((taskCount)=>{
        return this.storageService.getNextIndex();
      }),
      mergeMap((nextIndex : number )=> {
        index = nextIndex;
        return this.storageService.writeData(environment.prefix + nextIndex, this.formModel);
      })
    ).subscribe(() => {
      this.router.navigate(['qr', environment.prefix + index] , {relativeTo : this.route.parent });
    });
  }

  addPersonalInfo( formValue : any ) : void {
    for( let property in formValue.personal ) {
      if( this.formModel.hasOwnProperty(`${property}`) ) {
        this.formModel[property] = formValue.personal[property].toString();
        if( typeof ( this.formModel[property] ) == 'number' )
          this.formModel[property] = parseInt(formValue.personal[property]);
      }
    }
    this.formModel.name = `${formValue.personal.lastName}, ${formValue.personal.firstName} ${formValue.personal.middleInitial}`.trim();
    this.formModel.name += formValue.personal.suffix != "none" ? ` ${formValue.personal.suffix}` : '';
    this.formModel.birthdate = `${formValue.personal.year}-${formValue.personal.month}-${formValue.personal.day}`;
  }

  addAddress( formValue : any ) : void {
    let addressString : string = '';
    const addressParts = Object.values(formValue.address);
    for( const addressPart of addressParts )
      addressString += addressPart != '' ? addressPart + ', ' : '';
    this.formModel.address = addressString.substr(0,addressString.length-2);
  }
}
