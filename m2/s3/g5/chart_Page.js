const getChart = function(){ 
    if(localStorage.getItem("chart")){
let chartToParse = localStorage.getItem("chart")
console.log(chartToParse);
let chart = JSON.parse(chartToParse)
let correctChart =[]
for (const i of chart) {
    // let x = JSON.parse(i)
    correctChart.push(i)    
    
}
return correctChart}else{
    return []
}
}

let chart = getChart()
console.log(chart);

if(chart.length === 0){
    let chartP = document.getElementById("chartDescription")
    chartP.innerText = "Il tuo carrello è vuoto"
}
let mainRow = document.getElementById("mainRow")

if(chart.length > 0){
    chart.forEach(product => {
        mainRow.innerHTML +=
        `<div class="col-10">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${product.imageUrl}"
                class="img-fluid rounded-start w-100"
                alt="immagine prodotto"
                id="productImg"
              />
            </div>
            <div class="col-md-8">
              <div
                class="card-body h-100 d-flex flex-column justify-content-around"
              >
                <h5 id="productTitle" class="card-title">${product.name}</h5>
                <p class="card-text fw-bold" id="productBrand">
                  ${product.brand}
                </p>
                <p class="card-text" id="productDescription">
                  ${product.description}
                </p>
                <p class="card-text" id="productPrice">
                  €${product.price}
                </p>

                <span
                  class="d-flex justify-content-between align-items-end"
                >
                  <a href="#" class="text-decoration-none"
                    ><button
                      type="button"
                      class="btn btn-danger"
                      onclick="remove(event)"
                    >
                      Rimuovi dal carrello
                    </button></a
                  >
                  <a href="?productID=${product._id}" class="text-decoration-none"
                    ><button
                      type="button"
                      class="btn btn-success"
                      
                    >
                      Procedi al pagamento
                    </button></a
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>`
      
      
    });
  }
  const remove = function(event){
    button = event.target
    let col = button.closest(".col-10")
    col.style.display ="none"
    let cardBody = button.closest(".card-body")
    const titolo = cardBody.querySelector(".card-title").innerText
    
    const position = chart.findIndex((product)=>{
      return product.name === titolo
    })
    chart.splice(position,1)
    let chartJson= JSON.stringify(chart)
    console.log(chart);
    console.log("json",chartJson);
    localStorage.setItem("chart", chartJson) 
    getTotalChart()
   }
   const getTotalChart = function(){
    if (chart.length > 0) {
      let totalChart = document.getElementById("totalChart")
      
      let total = 0
      for (const product of chart) {
        total += product.price
      }
      totalChart.innerText = `il totale del tuo carrello è : ${total}€`
    }else{
      let totalChart = document.getElementById("totalChart")
      totalChart.innerText = `il totale del tuo carrello è : 0€`
      let chartP = document.getElementById("chartDescription")
    chartP.innerText = "Il tuo carrello è vuoto"
      
    }
   }
   getTotalChart()
   