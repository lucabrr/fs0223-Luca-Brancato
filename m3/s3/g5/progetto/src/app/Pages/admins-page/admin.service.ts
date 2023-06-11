import { Injectable } from '@angular/core';
import { IregisterRes } from 'src/app/Interface/iregister-res';
import { IUserRegData } from 'src/app/Interface/iuser-reg-data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getUser():string{
    const userJson = localStorage.getItem("userData")
    if(userJson){
      const userData:IregisterRes = JSON.parse(userJson)
      return userData.user.username
    }
    return ""

  }
}
