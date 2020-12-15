import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../utils/user';
import { StorageService } from '../utils/storage.service';
import { environment } from 'src/environments/environment';
import { of } from "rxjs";
import { map , mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formModel : User;

  constructor( private storageService : StorageService , 
               private route : ActivatedRoute,
               private router : Router ) { }

  ngOnInit(): void {
    this.formModel = new User('',-1,'','','','');
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
    this.formModel.name = `${formValue.personal.firstName} ${formValue.personal.middleInitial} ${formValue.personal.lastName}`;
    this.formModel.name += formValue.personal.suffix != "none" ? ` ${formValue.personal.suffix}` : '';
    this.formModel.age = formValue.personal.age;
    this.formModel.birthdate = formValue.personal.birthdate;
    this.formModel.sex = formValue.personal.sex;
    this.formModel.phoneNumber = formValue.personal.phoneNumber;
  }

  addAddress( formValue : any ) : void {
    let addressString : string = '';
    const addressParts = Object.values(formValue.address);
    for( const addressPart of addressParts )
      addressString += addressPart != '' ? addressPart + ', ' : '';
    this.formModel.address = addressString.substr(0,addressString.length-2);
  }
}
