import { Component, OnInit } from '@angular/core';
import { StorageService } from '../utils/storage.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  constructor( private storageService : StorageService ) { }

  ngOnInit(): void {}
}
