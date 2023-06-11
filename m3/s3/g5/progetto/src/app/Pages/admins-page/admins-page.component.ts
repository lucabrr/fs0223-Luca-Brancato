import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';
import { AuthorizzationService } from '../authorizzation/authorizzation.service';
import { Ipost } from 'src/app/Interface/Ipost';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-admins-page',
  templateUrl: './admins-page.component.html',
  styleUrls: ['./admins-page.component.scss']
})
export class AdminsPageComponent implements OnInit {

constructor(private authSvc:AuthorizzationService,private AdminSvc:AdminService){}

username!:string
postArray:Ipost[]=[]
isEditButtonClicked:boolean = false
selectedPostId: number | null = null


ngOnInit(): void {
  this.username = this.AdminSvc.getUser()
  this.AdminSvc.getPost().subscribe(post => {this.postArray = post})
}

showForm(id:number){
  if(this.selectedPostId){this.selectedPostId = null; return}
  this.selectedPostId = id
}

eliminatePost(id:number){
  this.AdminSvc.deletePost(id).subscribe(res =>
     {const postIndex = this.postArray.findIndex(post => post.id === id )
    if (postIndex > -1 ){
      this.postArray.splice(postIndex,1)
      console.log(this.postArray)

    }});


}



logout(){
  this.authSvc.logout()
}
}
