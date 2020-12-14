import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secure-scan-pwa';
  recMessage : string = "";

  // TODO : add an 'add to home screen' feature
  constructor() {}
}
