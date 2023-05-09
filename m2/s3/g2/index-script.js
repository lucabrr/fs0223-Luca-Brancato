let form = document.querySelector("#formName")
let nameInput = document.querySelector("#nome")
let removeButton = document.querySelector("#removeButton")
let saveButton = document.querySelector("#saveButton")
let previousName = document.querySelector("#previousName")

form.addEventListener("submit",(e) => {
e.preventDefault()
})

saveButton.addEventListener("click",()=>{
    localStorage.setItem("nome",nameInput.value)
    nameInput.value = ""
    previousName.textContent = `nome precedente : ${localStorage.getItem("nome")}`

})
removeButton.addEventListener("click",(e)=>{
    localStorage.removeItem("name")
    previousName.textContent = ""
})



let timerContainer = document.querySelector("#timer")
let seconds = sessionStorage.getItem("tempo") || 0
let minutsContainer = document.getElementById("minuts")
let minuts = sessionStorage.getItem("minuts") || 0


const timer = function(){  
    sessionStorage.setItem("minuts",minuts)
    sessionStorage.setItem("tempo",seconds) 
   seconds++
   if(seconds === 60){minuts++, seconds = 0}
   timerContainer.innerText = seconds
   minutsContainer.innerText = minuts
}

setInterval(timer,1000)
