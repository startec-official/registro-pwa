import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private storageService : StorageMap ) { }

  writeData() {
    return this.storageService.set('user','hello world');
  }

  readData() {
    return this.storageService.get('user');
  }
}
