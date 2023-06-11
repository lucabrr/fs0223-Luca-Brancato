import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from 'src/app/Interface/Ipost';
import { IregisterRes } from 'src/app/Interface/iregister-res';
import { IUserRegData } from 'src/app/Interface/iuser-reg-data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {}
  postUrl:string="http://localhost:3000/post"

  createPost(form:NgForm){
   return this.http.post(this.postUrl,form.value)
  }
  deletePost(id:number){
    return this.http.delete(this.postUrl+"/"+id)
  }
  editPost(form:NgForm,id:number){
    return this.http.put(this.postUrl+"/"+id,form.value)
  }


  getPost(){
    return this.http.get<Ipost[]>(this.postUrl)
  }

  getUser():string{
    const userJson = localStorage.getItem("userData")
    if(userJson){
      const userData:IregisterRes = JSON.parse(userJson)
      return userData.user.username
    }
    return ""

  }
}
