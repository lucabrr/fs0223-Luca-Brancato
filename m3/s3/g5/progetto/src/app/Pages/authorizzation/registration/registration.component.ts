import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizzationService } from '../authorizzation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private autSvc:AuthorizzationService ){}

  resPositiva:boolean = false
  resNegativa:boolean = false


submit(form:NgForm){
  this.autSvc.register(form.value)
    .subscribe((res => {
        if (res.accessToken)
        {this.resPositiva = true;
          form.reset()}
          else{this.resNegativa=true}
     }
  ))


}
}
