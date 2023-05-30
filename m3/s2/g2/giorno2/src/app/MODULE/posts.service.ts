import { Injectable } from '@angular/core';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl:string = "assets/db.json"
  constructor() {

  }
   getPost():Promise<Post[]> {
     return fetch(this.apiUrl)
     .then((res)=> res.json())




  }
}
