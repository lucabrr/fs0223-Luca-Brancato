import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  constructor(private admSvc:AdminService , private router:Router){}

makePost(form:NgForm){
  this.admSvc.createPost(form).subscribe(res => {this.router.navigate([''])})


}
  }


