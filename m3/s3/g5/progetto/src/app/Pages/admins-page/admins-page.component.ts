import { Component } from '@angular/core';
import { AuthorizzationService } from '../authorizzation/authorizzation.service';

@Component({
  selector: 'app-admins-page',
  templateUrl: './admins-page.component.html',
  styleUrls: ['./admins-page.component.scss']
})
export class AdminsPageComponent {
constructor(private authSvc:AuthorizzationService){}
logout(){
  this.authSvc.logout()
}
}
