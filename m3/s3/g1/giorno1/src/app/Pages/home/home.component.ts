
import { PostClass } from 'src/app/Classes/post-class';
import { PostServiceService } from './../../post-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postArray:PostClass[] = []
  LikedArray:PostClass[] = []
   post:PostClass = new PostClass()
constructor(private postSvc:PostServiceService){}

  ngOnInit(): void {
    this.postSvc.get().subscribe((array)=> this.postArray = array)
  }
  cancella(id:number){
    this.postSvc.delete(id).subscribe()
    this.postSvc.get().subscribe((array)=> this.postArray = array)

  }
  save(post:PostClass){
    if(this.LikedArray.find(p=> p.id === post.id)){console.log("il post è gia salvato");
    }else{
    this.LikedArray.push(post)}
    console.log(this.LikedArray);

  }

}
