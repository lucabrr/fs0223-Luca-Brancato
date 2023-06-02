import { Itodo } from "../itodo"

export class TodoClass implements Itodo {
  id?:number
  title:string
  completed:boolean
  constructor(_title:string, _completed:boolean=false, _id?:number){
    this.title = _title ,
    this.completed = _completed
    this.id = _id
}}
