import { Component } from '@angular/core';
import { AuthorizzationService } from '../authorizzation/authorizzation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private authSvc:AuthorizzationService ){
  this.authSvc.restoreUser()
}
}
