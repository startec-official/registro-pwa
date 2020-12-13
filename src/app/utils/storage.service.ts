import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private storage : StorageMap ) { }

  writeData( key : string , userData : User ) {
    return this.storage.set( key , userData );
  }

  readData( key : string ) {
    return this.storage.get( key );
  }

  countDataEntries() : Promise<number> {
    return new Promise((resolve,reject) =>{
      let entriesCount : number = 0;
      this.storage.keys().subscribe({
        next: (key : string ) => {
          if( key.indexOf('user-') > -1 )
            entriesCount ++;
        },
        complete: () => {
          resolve(entriesCount);
        },
        error : (error) => {
          reject(-1);
        }
      });
      return entriesCount;
    });
  }

  retrieveUserEntries() : Promise<User[]> {
    return new Promise((resolve,reject) =>{
      let users = [];
      this.storage.keys().subscribe({
        next: (key : string ) => {
          if( key.indexOf('user-') > -1 ) {
            this.storage.get(key).subscribe((user : User)=>{
              users.push( user );
            });
          }
        },
        complete: () => {
          resolve(users);
        },
        error : (error) => {
          reject([]);
        }
      });
    });
  }

  removeAllEntries() {
    return this.storage.clear();
  }
}
