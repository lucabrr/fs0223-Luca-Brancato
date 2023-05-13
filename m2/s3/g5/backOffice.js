const form = document.getElementsByTagName("form")[0]
   let productName = document.querySelector("#productName")
   let productDescription = document.querySelector("#productDescription")
   let productBrand = document.querySelector("#productBrand")
   let productImg = document.querySelector("#productImg")
   let productPrice = document.querySelector("#productPrice")
   let productID = new URLSearchParams(window.location.search).get("productID")
   const alertSuccess = document.getElementById("alertSuccess")
   const alertFailed = document.getElementById("alertFailed")
   const deleteButton = document.getElementById("deleteButton")
   const resetButton = document.getElementById("resetButton")
   const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTNiYzg4Zjc0MDAwMTQyODc1ODEiLCJpYXQiOjE2ODM4ODcwMzYsImV4cCI6MTY4NTA5NjYzNn0.K-DF3hxzRy62vf3Iv4CghVIMHWxtKgAvQRky_dOvflA"
   const endPoint = "https://striveschool-api.herokuapp.com/api/product/" 

    if(productID){
        console.log("vengo da modifica");
        resetButton.classList.add("d-none")
        const title = document.getElementsByTagName("h2")[0]
        title.innerText = "Modifica i dati del prodotto"
        let deleteButton = document.getElementById("deleteButton")
        deleteButton.classList.remove("d-none")
        let addOrEditButton = document.getElementById("addOrEdit")
        addOrEditButton.innerText = "Modifica prodotto"
        let productID = new URLSearchParams(window.location.search).get("productID")
         fetch(`${endPoint}${productID}`,
        {
            headers:{
                 "Authorization": key
                }
        } 

    )
    .then((res)=>{
        if(res.ok){
            return res.json()
        }else{
            throw new Error ("dalla modifica qualcosa è andato storto")
        }
    })
    .then((product)=>{
        console.log("Ho il prodotto",product)
        productName.value = product.name
        productDescription.value = product.description
        productBrand.value = product.brand
        productImg.value = product.imageUrl
        productPrice.value = product.price

    })
    .catch((err)=>
    console.log(err))
    }
    resetButton.addEventListener("click",()=>{
        productName.value = ""
        productDescription.value = ""
        productBrand.value = ""
        productImg.value = ""
        productPrice.value = ""

    })
    
    deleteButton.addEventListener("click",()=>{
        fetch(endPoint+productID,{
            method : "DELETE", 
            headers : {
                "Authorization" : key

            }
        }
    )
    .then((res)=>{
        if (res.ok) {
            console.log("Eliminazione effettuata");
            alertSuccess.classList.remove("d-none")

            }else{
                throw new Error("qualcosa è andato storto")
            }
            
            
        
    })
    .catch((err)=>{
        console.log(err);
        alertFailed.classList.remove(d-none)

    })
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
   
   
   let objToSend = {
    name : productName.value,
    description : productDescription.value,
    brand : productBrand.value,
    imageUrl : productImg.value,
    price : productPrice.value
   }
   console.log(objToSend);

   fetch(productID ? `${endPoint}${productID}`: `${endPoint}`,{
    method : productID ? "PUT" : "POST",
    headers: {
        "Authorization": key,
        "Content-Type": "application/json"
},
    body : JSON.stringify(objToSend)
})
.then((res)=>{
    if(res.ok){
        console.log("Prodotto inviato");
        alertSuccess.classList.remove("d-none")
        
    }
    else{
        throw new Error("qualcosa è andato storto")
        
    }
    

})
.catch((err)=>{
    console.log(err);
    alertFailed.classList.remove(d-none)
})
    productName.value = ""
    productDescription.value = ""
    productBrand.value = ""
    productImg.value = ""
    productPrice.value = ""





})