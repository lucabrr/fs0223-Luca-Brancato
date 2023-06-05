import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostClass } from './Classes/post-class';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  apiUrl:string = "http://localhost:3000/post"

  constructor(private http:HttpClient) {}
  get(){
    return this.http.get<PostClass[]>(this.apiUrl)
  }
  delete(id:number){
    return this.http.delete(this.apiUrl+"/"+id)
  }

}

