import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { StorageService } from '../utils/storage.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];
  lastVisible : number;
  isVisible : boolean[];
  dataReady : boolean;
  listEmpty : boolean;

  constructor( private storageService : StorageService ) { }

  ngOnInit(): void {
    this.users = [];
    this.isVisible = [];
    this.lastVisible = -1;
    this.dataReady = false;
    this.listEmpty = true;
    this.getUsers();
  }

  getUsers() : void {
    this.storageService.retrieveUserEntries().then((userData : User[]) => {
      this.users = userData;
      // FIXME : set list empty to false only when a user is detected
      if( this.users.length > 0 ) { 
        this.listEmpty = false;
        console.log( this.users.length );
      }
      this.listEmpty = false; // debug only
      this.dataReady = true;
      console.log( this.users );
    });
  }

  showMenu( i : number ) {
    if( this.lastVisible > -1 ) {
      if( this.lastVisible != i ) {
        this.isVisible[ this.lastVisible ] = false;
      }
    }
    this.lastVisible = i;
    console.log( `last visible : ${ this.lastVisible }` );
    this.isVisible[i] = !this.isVisible[i];
  }
}
