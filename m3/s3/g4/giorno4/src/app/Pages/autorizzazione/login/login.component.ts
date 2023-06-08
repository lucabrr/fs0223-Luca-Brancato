import { Component } from '@angular/core';
import { IuserLogin } from 'src/app/Interface/iuser-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
userLoginData:IuserLogin = {
  email:"",
  password:""
}
}
