import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }
  
  encryptData( data : any , encryptSecretKey : string ) {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decryptData( ciphertext : string , decryptSecretKey : string ) {
    let bytes  = CryptoJS.AES.decrypt(ciphertext, decryptSecretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
