const createCard = function(img,title,price){
   let row = document.getElementById("booksRow")
   let col = document.createElement("div")
   col.classList.add("col")
   col.classList.add("col-12")
   col.classList.add("col-lg-3")
   col.classList.add("mb-3")

   col.innerHTML = 
   `<div class="card" style="width: 18rem; height:100%" >
        <img src="${img}" class="card-img-top" alt="copertina libro">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">Prezzo : ${price}$</p>
            <a class="btn btn-primary " onclick="addAtShoppingCart(event)">Add to chart</a>
            <a class="btn btn-primary " onclick="destroy(event)">delete</a>

        </div>
 </div>`
 row.append(col)

}
const destroy = function(event){
   
    let button = event.target;
    let cardbody = button.parentNode
    let card = cardbody.parentNode
    let col = card.parentNode
    col.remove()

} 
const addAtShoppingCart = function(event){
   let row = document.getElementById("chart")

    let button = event.target;
    let cardbody = button.parentNode
    let card = cardbody.parentNode
    let col = card.parentNode
    let colClone = document.createElement("div")
    colClone.classList.add("col")
    colClone.classList.add("col-12")
    colClone.classList.add("col-lg-3")
    colClone.classList.add("mb-3")
    colClone.innerHTML= col.innerHTML
    
    row.append(colClone)
}


fetch("https://striveschool-api.herokuapp.com/books")
.then((res)=> {
    
    if(res.ok){
        return res.json()
    }else{
        throw new Error("qualcosa è andato storto")
    }
})
.then(((books) => 
{
books.forEach(book => {
 createCard(book.img,book.title,book.price)
})}))
.catch()