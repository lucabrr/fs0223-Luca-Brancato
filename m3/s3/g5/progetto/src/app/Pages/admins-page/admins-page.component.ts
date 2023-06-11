import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';
import { AuthorizzationService } from '../authorizzation/authorizzation.service';

@Component({
  selector: 'app-admins-page',
  templateUrl: './admins-page.component.html',
  styleUrls: ['./admins-page.component.scss']
})
export class AdminsPageComponent implements OnInit {

constructor(private authSvc:AuthorizzationService,private AdminSvc:AdminService){}

username!:string

ngOnInit(): void {
  this.username = this.AdminSvc.getUser()
}


logout(){
  this.authSvc.logout()
}
}
