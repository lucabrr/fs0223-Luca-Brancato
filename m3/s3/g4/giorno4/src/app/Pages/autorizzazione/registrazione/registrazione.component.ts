import { Component } from '@angular/core';
import { AutorizzazioneService } from '../autorizzazione.service';
import { UserRegister } from 'src/app/Interface/user-register';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
constructor(private autSvc:AutorizzazioneService){}
data:UserRegister = {
   email : "",
   password: "",
   nome : "",
   cognome:""
}
registrazione(data:UserRegister){
  this.autSvc.registra(data).subscribe(data => {console.log(data)})
}
}
