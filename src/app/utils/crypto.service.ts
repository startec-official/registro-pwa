import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';  

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  encryptQr( message : string ) {
    let key : string = this.makeRandom(4); // UPGRADE : custom key lengths
    return CryptoJS.AES.encrypt( message , key ).toString().trim() + key.trim() + "<<";
  }

  makeRandom(lengthOfCode: number) : string {
    let possible : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }
}
