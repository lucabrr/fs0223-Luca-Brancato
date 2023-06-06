import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.scss']
})
export class FormNormalComponent {

  constructor(private http:HttpClient,fb:FormBuilder){}
  apiUrl:string = "http://localhost:3000/heroes"



  post(heroForm:NgForm){
    if(heroForm.valid){

      this.http.post(this.apiUrl,heroForm).subscribe((res)=> {console.log(res);
        heroForm.reset()

      })
    }
    else{
      console.log("il form è invalido");

    }
    }
}
