import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../utils/user';
import { StorageService } from '../utils/storage.service';

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
    this.formModel.name = formValue.personal.firstName + " " + formValue.personal.middleInitial + " " + formValue.personal.lastName;
    this.formModel.name += formValue.personal.suffix == "" ? " " + formValue.personal.suffix : "";
    this.formModel.age = formValue.personal.age;
    this.formModel.birthdate = formValue.personal.birthdate;
    this.formModel.sex = formValue.personal.sex;

    let addressString : string = "";
    const addressParts = Object.values(formValue.address);
    for( const addressPart of addressParts ) {
      addressString += addressPart != "" ? addressPart + ", " : "";;
    }
    this.formModel.address = addressString.substr(0,addressString.length-2);
    
    console.log( this.storageService.countDataEntries().then(( nextIndex : number ) => {
      this.storageService.writeData('user-' + nextIndex,this.formModel).subscribe(()=>console.log(`user-${nextIndex} successfully written to memory!`));
      this.router.navigate(['qr', nextIndex] , {relativeTo : this.route.parent });
    }));
  }
}
