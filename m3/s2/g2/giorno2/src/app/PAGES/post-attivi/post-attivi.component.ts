import { Component } from '@angular/core';
import {PostsService} from "../../MODULE/posts.service"
import { Post } from 'src/app/post';
@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent {

arrayPost:Post[] = []

constructor(private PostSvc: PostsService){
  PostSvc.getPost()
  .then((res)=>{this.arrayPost = res.filter((p)=> p.active)})



}
showArray(){
  console.log(this.arrayPost);

}

}


