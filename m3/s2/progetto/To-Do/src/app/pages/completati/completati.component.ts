import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/Classi/todo-class';
import { ToDoServiceService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  lista:TodoClass[] = []
  loading:boolean = true
  constructor(private todoSvc:ToDoServiceService){}
  ngOnInit(){
    this.todoSvc.getList()
  .then((res)=>{this.lista = res;
     this.lista = this.lista.filter((punto)=> punto.completed===true)
     ,this.loading= false
  }
  )
  }
}
