import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { User } from '../utils/user';
import { StorageService } from '../utils/storage.service';
import { CryptoService } from '../utils/crypto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-show.component.html',
  styleUrls: ['./qr-show.component.css']
})
export class QrShowComponent implements OnInit {

  currentKey : string;
  currentUser : User;
  
  paramSubs: Observable<ParamMap>;
  
  qrData : string;
  qrSize : number;

  dataReady : boolean;

  constructor( private route : ActivatedRoute,
               private storageService : StorageService,
               private cryptoService : CryptoService ) { }

  ngOnInit(): void {
    this.dataReady = false;
    this.qrSize = environment.qrSize;
    this.currentUser = new User('',-1,'','','','');
    this.getParameters();
    this.getInfo();
  }

  getParameters() : void {
    this.paramSubs = this.route.paramMap;
    this.paramSubs.subscribe(params => {
      this.currentKey = params.get('id').toString();
    });
  }

  generateCode( userData : User ) : void {
    let plaintext : string = "";
    for( const property in userData )
      plaintext += userData[property] + environment.delimiter;
    plaintext = plaintext.slice(0,plaintext.length-1);
    console.log(plaintext);
    this.qrData = this.cryptoService.encryptQr( plaintext ); // encrypt with AES append the key to ciphertext
    this.dataReady = true;
  }

  getInfo() : void {
    this.storageService.readData(this.currentKey).subscribe((userData : User) => {
      this.currentUser = userData;
      this.generateCode(userData);
    });
  }
}
