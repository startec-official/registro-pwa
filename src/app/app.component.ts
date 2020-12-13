import { Component } from '@angular/core';
import { StorageService } from './utils/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secure-scan-pwa';
  recMessage : string = "";

  constructor( private storageService : StorageService ) {}
}
