import { Injectable } from '@angular/core';
import { TodoClass } from './Classi/todo-class';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  apiUrl:string = "http://localhost:3000/liste"
  loading:boolean =true

  constructor() {}
  getList():Promise<TodoClass[]>{
    return fetch(this.apiUrl)
    .then((res)=>res.json())
  }

  createTask(task:TodoClass):Promise<TodoClass>{
    return fetch(this.apiUrl,{
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(task)
    })
    .then(res => res.json())
  }

  deleteTask(id:number| undefined){
    return fetch(this.apiUrl+'/'+id,{
      method:'DELETE',
    }).then(response => console.log("Stato della richiesta delete =>",response.status)
    );
  }

  completedTask(task:TodoClass){
    task.completed = true
    return fetch(this.apiUrl+'/'+task.id,
    {
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(task)
    })
    .then(response => console.log("Stato della richiesta modifica stato =>",response.status)
    );

  }
}
