import { PostsService } from 'src/app/MODULE/posts.service';
import { Component } from '@angular/core';

import { Post } from 'src/app/post';
@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent {

arrayDeiPost:Post[] = []

constructor( private dati:PostsService){
this.arrayDeiPost = dati.getData()
this.arrayDeiPost = this.arrayDeiPost.filter((p)=>{return p.active})


}
deletePost(post:Post){
  this.dati.deletePost(post)
  this.dati.arrayDeiPost = this.arrayDeiPost
  this.arrayDeiPost = this.arrayDeiPost.filter((p)=> p != post)
}
}


