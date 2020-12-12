import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];
  lastVisible : number;
  isVisible : boolean[];

  constructor() { }

  ngOnInit(): void {
    this.users = [];
    this.isVisible = [];
    this.lastVisible = -1;
    this.users.push( new User( 'CLIVE BIXBY' , 20 ,'M' , '705 Artex Building435 Juan Luna Street Binondo 1000, Manila' ) );
    this.isVisible.push(false);
    this.users.push( new User( 'CLIVE BIXBY' , 20 ,'M' , '705 Artex Building435 Juan Luna Street Binondo 1000, Manila' ) );
    this.isVisible.push(false);
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
