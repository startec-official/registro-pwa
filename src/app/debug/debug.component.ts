import { Component, OnInit } from '@angular/core';
import { StorageService } from '../utils/storage.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  constructor( private storageService : StorageService ) { }

  ngOnInit(): void {
  }

  debug() : void {    
  }
  
  clearMemory() : void {
    this.storageService.removeAllEntries().subscribe(()=>{
      console.log('successfully removed all entries...');
    });
  }

  getNextIndex() {
    this.storageService.getNextIndex().then(( nextIndex : number ) => {
      console.log( nextIndex );
    });
  }

}
