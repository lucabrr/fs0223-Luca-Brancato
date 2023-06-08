import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorizzazioneRoutingModule } from './autorizzazione-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrazioneComponent } from './registrazione/registrazione.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrazioneComponent

  ],
  imports: [
    CommonModule,
    AutorizzazioneRoutingModule,
    FormsModule
  ]
})
export class AutorizzazioneModule { }
