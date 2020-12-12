import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from 'rxjs';
import { User } from '../user';
import { QRCodeModule } from "angularx-qrcode";
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-show.component.html',
  styleUrls: ['./qr-show.component.css'],
})
export class QrShowComponent implements OnInit {

  currentId : number;
  currentUser : User;
  paramSubs: Observable<ParamMap>;

  constructor( private route : ActivatedRoute ) { }

  // TODO : add guard to prevent null exceptions

  ngOnInit(): void {
    this.paramSubs = this.route.paramMap;
    this.paramSubs.subscribe(params => {
      this.currentId = parseInt(params.get('id'));
    });
    this.getInfo();
    this.generateCode();
  }

  generateCode() : void {
    console.log(`Code generation for ${this.currentId} begins here...`);
  }

  getInfo() : void {
    // TODO : replace with retrieved info from storage
    this.currentUser = new User( 'CLIVE BIXBY' , 20 ,'M' , '705 Artex Building435 Juan Luna Street Binondo 1000, Manila' );
  }
}
