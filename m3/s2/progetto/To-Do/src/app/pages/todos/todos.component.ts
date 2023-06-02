import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/Classi/todo-class';
import { ToDoServiceService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
 lista:TodoClass[] = []
 punto:TodoClass = new TodoClass("",false)
 constructor(private todoSvc:ToDoServiceService){}



ngOnInit(){
  this.todoSvc.getList()
  .then((res)=>{this.lista = res;
     this.lista = this.lista.filter((punto)=> punto.completed===false);
     console.log("lista task all'inizializzazione",this.lista);
  })
}
creaTask(){
   this.todoSvc.createTask(this.punto)
  .then(res => console.log("è stato creato questo task =>",res));
  //aggiorno dopo avere creato nuova task
  this.todoSvc.getList()
  .then((res)=>{this.lista = res;
     this.lista = this.lista.filter((punto)=> punto.completed===false);
     console.log("lista task all'inizializzazione",this.lista);
  })
}
cancellaTask(id :number | undefined){
  this.todoSvc.deleteTask(id)
  this.todoSvc.getList()
  .then((res)=>{this.lista = res})
}
taskCompletato(punto:TodoClass){
  this.todoSvc.completedTask(punto)
  this.todoSvc.getList()
}
}
