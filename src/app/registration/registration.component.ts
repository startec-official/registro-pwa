import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { StorageService } from '../utils/storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formModel : User;

  constructor( private storageService : StorageService , 
               private router : Router ) { }


  // TODO: data validation *sighs*

  ngOnInit(): void {
    this.formModel = new User('',0,'','');
  }

  onSubmit( formValue : any ) {
    this.formModel.name = formValue.firstName + " " + formValue.middleInitial + " " + formValue.lastName;
    this.formModel.age = formValue.age;
    this.formModel.sex = formValue.sex;

    let addressString : string = "";
    addressString += formValue.houseNumber != "" ? formValue.houseNumber + ", " : "";
    addressString += formValue.street != "" ? formValue.street + ", " : ""; 
    addressString += formValue.zone != "" ? formValue.zone + ", " : ""; 
    addressString += formValue.subdivision != "" ? formValue.subdivision + ", " : ""; 
    addressString += formValue.barangay != "" ? formValue.barangay + ", " : ""; 
    addressString += formValue.city != "" ? formValue.city + ", " : ""; 
    addressString += formValue.province != "" ? formValue.province + ", " : ""; 
    addressString += formValue.region != "" ? formValue.region : ""; 
    this.formModel.address = addressString;

    console.log( this.storageService.countDataEntries().then(( nextIndex : number ) => {
      this.storageService.writeData('user-' + nextIndex,this.formModel).subscribe(()=>console.log(`user-${nextIndex} successfully written to memory!`));
      this.router.navigate(['/qr',{ id : nextIndex }]);
    }));
  }
}
