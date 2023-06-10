import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizzationRoutingModule } from './authorizzation-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent

  ],
  imports: [
    CommonModule,
    AuthorizzationRoutingModule,
    FormsModule,


  ]
})
export class AuthorizzationModule { }
