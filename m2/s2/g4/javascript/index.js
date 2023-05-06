const getData = function () {
    let todayDate = new Date()
    currentYear= todayDate.getFullYear()
    return currentYear
}
const insertData =function (year) {
    let dataValueContainer = document.getElementById("data")
    dataValueContainer.innerText = year
}

window.onload = ()=>insertData(getData());