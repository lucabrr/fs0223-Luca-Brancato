import { Component,  } from '@angular/core';
import { AuthorizzationService } from '../authorizzation.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authSvc:AuthorizzationService, private router:Router ){}

  isLogged!:boolean
  loginErr:boolean = false

 ngOnInit():void{
  this.authSvc.isLogged$.subscribe(dato => { this.isLogged = dato; console.log(this.isLogged);
  })
 }

 login(loginForm: NgForm) {
  this.authSvc.login(loginForm.value)
    .pipe(
      catchError(err => {
        this.loginErr = true;
        return throwError(err);
      })
    )
    .subscribe(res => {
      this.router.navigate(['/Admin']);
    });
}

}
