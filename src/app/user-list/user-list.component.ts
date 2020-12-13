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

  constructor( private storageService : StorageService ) { }

  ngOnInit(): void {
    this.users = [];
    this.isVisible = [];
    this.lastVisible = -1;
    this.dataReady = false;
    this.getUsers();
  }

  getUsers() : void {
    this.storageService.retrieveUserEntries().then((userData : User[]) => {
      this.users = userData;
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
