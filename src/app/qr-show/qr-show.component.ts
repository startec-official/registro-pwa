import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { User } from '../utils/user';
import { StorageService } from '../utils/storage.service';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-show.component.html',
  styleUrls: ['./qr-show.component.css']
})
export class QrShowComponent implements OnInit {

  currentId : number;
  currentUser : User;
  paramSubs: Observable<ParamMap>;
  qrData : string;
  dataReady : boolean;

  constructor( private route : ActivatedRoute,
               private router : Router,
               private storageService : StorageService ) { }

  ngOnInit(): void {
    this.dataReady = false;
    this.paramSubs = this.route.paramMap;
    this.paramSubs.subscribe(params => {
      this.currentId = parseInt(params.get('id'));
    });
    this.getInfo();
  }

  generateCode( userData : User ) : void {
    console.log(`Code generation for ${this.currentId} begins here...`);
    this.qrData = userData.name + "|" + userData.age + "|" + userData.birthdate + "|" + userData.sex + "|" + userData.phoneNumber + "|" + userData.address;
    // TODO : convert data into encrypted text
    this.dataReady = true;
  }

  getInfo() : void {
    this.storageService.readData('user-' + this.currentId).subscribe((userData : User) => {
      console.log(userData);
      this.generateCode(userData);
    });
  }
}
