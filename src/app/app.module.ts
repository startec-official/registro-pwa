import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { UserListComponent } from './user-list/user-list.component';
import { QRCodeModule , QRCodeComponent } from 'angularx-qrcode';
import { QrShowComponent } from './qr-show/qr-show.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    UserListComponent,
    QrShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [QRCodeComponent]
})
export class AppModule { }
