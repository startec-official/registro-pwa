import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  encryptQr( message : string ) {
    let key : string = this.makeRandom( environment.keyCharCount );
    return CryptoJS.AES.encrypt( message , key ).toString().trim() + key.trim() + environment.terminator;
  }

  makeRandom(lengthOfCode: number) : string {
    let possible : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]=-)(*&^%$#@!~`";
    let text : string = '';
    for (let i = 0; i < lengthOfCode; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
