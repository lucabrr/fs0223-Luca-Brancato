import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IregisterRes } from 'src/app/Interface/iregister-res';
import { IUserRegData } from 'src/app/Interface/iuser-reg-data';

@Injectable({
  providedIn: 'root'
})
export class AuthorizzationService {
  apiUrl:string ="http://localhost:3000/users"

  constructor(private http:HttpClient) {}

  register(formData:IUserRegData){
   return  this.http.post<IregisterRes>(this.apiUrl,formData)

  }
}
