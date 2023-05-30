import { Component } from '@angular/core';
import { PostsService } from 'src/app/MODULE/posts.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent {
  arrayPost:Post[] = []

  constructor(private PostSvc: PostsService){
    PostSvc.getPost()
    .then((res)=>{this.arrayPost = res.filter((p)=> !p.active)})



  }
}
