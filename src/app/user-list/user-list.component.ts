import { Component, OnInit } from '@angular/core';
import { User } from '../utils/user';
import { StorageService } from '../utils/storage.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];
  keys : string[];
  
  lastVisible : number;

  isVisible : boolean[];
  dataReady : boolean;

  constructor( private storageService : StorageService ) { }

  ngOnInit(): void {
    this.users = [];
    this.keys = [];
    this.isVisible = [];
    this.lastVisible = -1;
    this.dataReady = false;
    this.getUsers();
  }

  getUsers() : void {
    this.storageService.retrieveUserEntries().then((userDataWithKeys : { userArray : User[] , userKeys : string[] } ) => {
      this.users = userDataWithKeys.userArray;
      this.keys = userDataWithKeys.userKeys;
      console.log(this.users);
      console.log(this.keys);
      this.dataReady = true;
    });
  }

  showMenu( i : number ) {
    if( this.lastVisible > -1 ) {
      if( this.lastVisible != i ) {
        this.isVisible[ this.lastVisible ] = false;
      }
    }
    this.lastVisible = i;
    this.isVisible[i] = !this.isVisible[i];
  }
}
