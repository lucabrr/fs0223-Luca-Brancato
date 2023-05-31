import { Injectable } from '@angular/core';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 arrayDeiPost :Post[] = [
  {
"id" : 1,
"body" : "Testo a caso del primo post ",
"title": "Titolo primo post",
"active": true,
"type":"news"
},
{
  "id" : 2,
  "body" : "Testo a caso del secondo post",
  "title": "titolo secondo post",
  "active": true,
  "type":"politic"


  },
  {
    "id" : 3,
    "body" : "Testo a caso del terzo post",
    "title": "titolo 3 poost",
    "active": true,
    "type":"education"

    },
    {
      "id" : 4,
      "body" : "Testo a caso del quarto post",
      "title": "titolo 4 post",
      "active": false,
      "type":"news"

      },
      {
        "id" : 5,
        "body" : "Testo a caso del quinto post ",
        "title": " titolo dell' quinto",
        "active": false,
        "type":"politic"

        }
]
getData():Post[]{
  return this.arrayDeiPost
}
deletePost(post:Post):void{
  let index = this.arrayDeiPost.indexOf(post)
  this.arrayDeiPost.splice(index,1)
}
}
