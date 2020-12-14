import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstallHelpComponent } from './install-help/install-help.component';
import { QrShowComponent } from './qr-show/qr-show.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { QrGuardService } from './utils/qr-guard.service';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';


const routes: Routes = [
  { path : 'welcome' , component : WelcomeScreenComponent },
  { path : 'install' , component : InstallHelpComponent },
  {path : 'users' , component : UserListComponent },
  { path : 'qr/:id' , 
    component : QrShowComponent,
    canActivate : [QrGuardService]
  },
  { path : 'registration' , component : RegistrationComponent },
  { path : '' , redirectTo : '/welcome' , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
