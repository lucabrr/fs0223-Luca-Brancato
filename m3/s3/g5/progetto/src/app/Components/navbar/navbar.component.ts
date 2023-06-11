import { AuthorizzationService } from './../../Pages/authorizzation/authorizzation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private authSvc:AuthorizzationService){
    this.checkLogged()
    console.log("islogged",this.isLogged);


  }
  isLogged:boolean = false

  checkLogged(){
    this.authSvc.isLogged$.subscribe(res=> this.isLogged = res
    )
  }


  logout(){
    this.authSvc.logout()
  }


}
