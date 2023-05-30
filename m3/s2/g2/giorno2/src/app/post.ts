export class Post {
  id:string
  body:string
  title:string
  active:boolean
  constructor( id:string,
    body:string,
    title:string,
    active:boolean){
      this.id = id
      this.body = body
      this.title = title
      this.active = active
    }
}
