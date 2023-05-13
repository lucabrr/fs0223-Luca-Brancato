
    let barID = new URLSearchParams(window.location.search).get("productID")
    



    fetch(`https://striveschool-api.herokuapp.com/api/product/${barID}`,
    {
        headers:{
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTNiYzg4Zjc0MDAwMTQyODc1ODEiLCJpYXQiOjE2ODM4ODcwMzYsImV4cCI6MTY4NTA5NjYzNn0.K-DF3hxzRy62vf3Iv4CghVIMHWxtKgAvQRky_dOvflA"
            }
    }   
)
    

.then((res)=>{
    if(res.ok){
        console.log("tutto ok");
       return res.json()
    }else{
        throw new Error ("qualcosa è andato storto")
    }
})
.then((product)=>{
    console.log("prodotto", product);
    let productImg = document.getElementById("productImg")
    let productTitle = document.getElementById("productTitle")
    let productBrand = document.getElementById("productBrand")
    let productDescription = document.getElementById("productDescription")
    let productPrice = document.getElementById("productPrice")
    productImg.src = product.imageUrl
    productTitle.innerText = product.name
    productBrand.innerText = product.brand
    productDescription.innerText = product.description
    productPrice.innerText = `Prezzo : ${product.price}$`



})
.catch((err)=>console.log(err))