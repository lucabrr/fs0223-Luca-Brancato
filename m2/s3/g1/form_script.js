class UserNpet{
    constructor(nomeProprietario,nomeAnimale,specie,razza){
        this.nomeProprietario = nomeProprietario
        this.nomeAnimale = nomeAnimale
        this.specie = specie
        this.razza = razza
    }
}


let nomeProprietario = document.querySelector("#nome")
let nomeAnimale = document.querySelector("#nomeAnimale")
let specie = document.querySelector("#specie")
let razza = document.querySelector("#razza")
let lista = document.querySelector("#list")
let users= []

const showList = function(){
    lista.innerText = ""
    users.forEach(element => {
   let li = document.createElement("li")
   li.innerText = `nome proprietario:${element.nomeProprietario} nome pet:${element.nomeAnimale} specie:${element.specie} razza:${element.razza}`
   lista.append(li)

           
    });
} 






const form = document.getElementsByTagName("form")
form-addEventListener("submit",(e)=>{
e.preventDefault()
let user = new UserNpet(nomeProprietario.value,nomeAnimale.value,specie.value,razza.value)
users.push(user)
nomeProprietario.value= ""
nomeAnimale.value= ""
specie.value= ""
razza.value= ""
console.log(users);
showList()


})