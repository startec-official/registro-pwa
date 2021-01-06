import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private storage : StorageMap ) { }

  writeData( key : string , userData : User ) : any {
    return this.storage.set( key , userData );
  }

  readData( key : string ) {
    return this.storage.get( key );
  }

  getNextIndex() : Promise<number> {
    return new Promise((resolve,reject) =>{
      let nextIndex : number = -1;
      this.storage.keys().subscribe({
        next: (key : string ) => {
          if( key.indexOf( environment.prefix ) > -1 ) {
            let comparator : number = parseInt(key.toString().split( environment.prefixDelim )[1]);
            if( comparator > nextIndex )
              nextIndex = comparator;
          }
        },
        complete: () => {
          resolve(nextIndex+1);
        },
        error : (error) => {
          reject(error);
        }
      });
      return nextIndex;
    });
  }

  retrieveUserEntries() : Promise<{ userArray : User[] , userKeys : string[] }> {
    return new Promise((resolve,reject) =>{
      let users = [];
      let keys = [];
      this.storage.keys().subscribe({
        next: (key : string ) => {
          if( key.indexOf( environment.prefix ) > -1 ) {
            this.storage.get(key).subscribe((user : User)=>{
              users.push( user );
              keys.push(key);
            });
          }
        },
        complete: () => {
          resolve( { userArray : users , userKeys : keys } );
        },
        error : (error) => {
          reject( error );
        }
      });
    });
  }

  removeUser(key : string ) {
    return this.storage.delete( key );
  }

  removeAllEntries() {
    return this.storage.clear();
  }
}
