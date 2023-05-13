window.onload = function (){
    fetch("https://striveschool-api.herokuapp.com/api/product/",
    {
        headers:{
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTNiYzg4Zjc0MDAwMTQyODc1ODEiLCJpYXQiOjE2ODM4ODcwMzYsImV4cCI6MTY4NTA5NjYzNn0.K-DF3hxzRy62vf3Iv4CghVIMHWxtKgAvQRky_dOvflA"
            }
    }   
)
.then((res)=>{
    if(res.ok){
        console.log("richiesta oK!");
     return  res.json()
    }else{
        throw new Error("qualcosa è andato storto")
    }
})
.catch((err)=>{
    console.log(err);
})
.then((products)=>{
    console.log(products)
    let mainRow = document.getElementById("mainRow")
    products.forEach(product => {
        let template = `<div class="col-8">
        <div class="card m-2 shadow-lg">
          <a href="./productPage.html?productID=${product._id}">
          <img
            src="${product.imageUrl}"
            class="card-img-top "
            alt="immagine del prodotto"
            style = "height:250px"
          />
          <div class="card-body p-2">
          <a href="./productPage.html?productID=${product._id}" class="text-decoration-none text-dark">
            <h4 class="card-title fw-bold">${product.name}</h4>
            </a>
            <p class="m-1 fw-bold">
              ${product.brand}
            </p>
            <p class="card-text truncate">
              ${product.description}
            </p>
            <p class="card-text">
              prezzo : ${product.price}$
            </p>
            <span class="d-flex justify-content-between">
              <a href="./backOffice.html?productID=${product._id}" class="text-decoration-none">Modifica</a>
              <a href="./productPage.html?productID=${product._id}" class="text-decoration-none">Scopri di più</a>
            </span>
          </div>
        </div>
      </div>`
      mainRow.innerHTML += template
        
    });
})
}  