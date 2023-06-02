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
 loading:boolean = true
 constructor(private todoSvc:ToDoServiceService){}



ngOnInit(){

  this.todoSvc.getList()
  .then((res)=>{this.lista = res;
     this.lista = this.lista.filter((punto)=> punto.completed===false);
     console.log("lista task all'inizializzazione",this.lista);
     this.loading=false
  })

}

creaTask(){
  this.loading=true
  this.todoSvc.createTask(this.punto)
  .then(res => {console.log("è stato creato questo task =>",res),this.loading=false});
  //aggiorno dopo avere creato nuova task
  this.todoSvc.getList()
  .then((res)=>{this.lista = res;
     this.lista = this.lista.filter((punto)=> punto.completed===false);
     console.log("lista task all'inizializzazione",this.lista);
  })

}
cancellaTask(id :number | undefined){
  this.loading=true
  this.todoSvc.deleteTask(id)
  this.todoSvc.getList()
  .then((res)=>{this.lista = res;
     this.lista = this.lista.filter((punto)=> punto.completed===false);
     console.log("lista task all'inizializzazione",this.lista),this.loading=false
  })

}
taskCompletato(punto:TodoClass){
  this.loading=true
  this.todoSvc.completedTask(punto)
  this.todoSvc.getList()
  .then((res)=>{this.lista = res;
    this.lista = this.lista.filter((punto)=> punto.completed===false);
    this.loading=false
    console.log("lista task all'inizializzazione",this.lista);
 })


}
}
