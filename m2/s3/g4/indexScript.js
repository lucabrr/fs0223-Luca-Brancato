let loadButton = document.getElementById("loadButton")
console.log(loadButton);
const key = "uo1PYp090cQv1dmUZicQmL8t0yUU9ZFDHRT20AebZHeip81bN9AF6YFR"
loadButton.addEventListener("click",()=>{
    fetch("https://api.pexels.com/v1/search?query=sky", {headers: {authorization: key}})
    .then((res)=>{
        if (res.ok){
            return res.json()
            console.log(res);
        }else{
            throw new Error ("qualcosa è andato storto")
        }
    })
    .then((obj)=>{
        console.log("queste sono le foto",obj)
        let arr =[...obj.photos]
        console.log("foto",arr);
        let AllPhotosContainer = document.querySelectorAll(".photoContainer")
        
        
        for(i=0; i<AllPhotosContainer.length; i++){
            AllPhotosContainer[i].src = arr[i].src.small
        }
})
    .catch((err)=>{
        console.log(err);
    })
})
let secondaryButton = document.getElementById("loadSecondayButton")
secondaryButton.addEventListener("click",()=> {
    fetch("https://api.pexels.com/v1/search?query=dogs", {headers: {authorization: key}})
    .then((res)=>{
        if (res.ok){
            return res.json()
            console.log(res);
        }else{
            throw new Error ("qualcosa è andato storto")
        }
    })
    .then((obj)=>{
        console.log("queste sono le foto",obj)
        let arr =[...obj.photos]
        console.log("foto",arr);
        let AllPhotosContainer = document.querySelectorAll(".photoContainer")
        
        
        for(i=0; i<AllPhotosContainer.length; i++){
            AllPhotosContainer[i].src = arr[i].src.small
        }
})
    .catch((err)=>{
        console.log(err);
    })
})
const hide = function(e){
    let button = (e.target)
    let buttonGroup = button.parentElement
    let buttonRow = buttonGroup.parentElement
    let cardBody = buttonRow.parentElement
    let card = cardBody.parentElement
    let cardCol = card.parentElement
    cardCol.remove()

}
    

