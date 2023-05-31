import { Component } from '@angular/core';
import { PostsService } from 'src/app/MODULE/posts.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent {
  arrayDeiPost:Post[] = []

  constructor(private dati: PostsService){
    this.arrayDeiPost = dati.getData()
  this.arrayDeiPost = this.arrayDeiPost.filter((p)=>{return !p.active})



  }
}
