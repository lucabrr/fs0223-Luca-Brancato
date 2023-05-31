import { Component } from '@angular/core';
import { PostsService } from 'src/app/MODULE/posts.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
arrayPost:Post[] = []
constructor(private dati:PostsService){
  this.arrayPost = dati.getData()
}
}
