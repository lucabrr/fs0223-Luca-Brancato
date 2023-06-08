import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRegister } from 'src/app/Interface/user-register';

@Injectable({
  providedIn: 'root'
})
export class AutorizzazioneService {

  constructor(private http:HttpClient) { }
  apiUrl:string = "http://localhost:3000/users"
  loginUrl:string = "http://localhost:3000/login"

  jwtHelper:JwtHelperService = new JwtHelperService()






  registra(data:UserRegister){
    return this.http.post(this.apiUrl,data)
  }
}
