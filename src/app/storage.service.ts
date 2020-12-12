import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private storageService : StorageMap ) { }

  writeData() {
    this.storageService.set('user','hello world').subscribe(()=>console.log('message written!'));
  }

  readData() {
    this.storageService.get('user').subscribe((data)=>console.log(data));
  }
}
