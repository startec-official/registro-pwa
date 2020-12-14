import { Component } from '@angular/core';
import { QrGuardService } from './utils/qr-guard.service';
import { StorageService } from './utils/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secure-scan-pwa';
  recMessage : string = "";

  // TODO : configure serviceWorker to complete full offline caching, and sync
  // TODO : add an 'add to home screen' feature
  constructor() {}
}
