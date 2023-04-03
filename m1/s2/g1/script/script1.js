var peso = prompt('Scrivi il tuo peso in Kg');
var altezza = prompt('Scrivi la tua altezza in metri. ESEMPIO:1.75 --- ATTENZIONE--- USA IL PUNTO NON LA VIRGOLA' ); 

console.log(peso);
console.log(altezza);

var bmi = peso /(altezza*altezza)
bmi = bmi.toFixed(1)
console.log(bmi);

if(bmi < 16.5){
    document.getElementById("risultato").innerHTML = "Sei gravemente sottopeso"
}  else if ( bmi > 16.5 && bmi < 18.4){ 
    document.getElementById("risultato").innerHTML = "Sei sottopeso"
}       else if ( bmi > 18.5 && bmi < 24.9){ 
             document.getElementById("risultato").innerHTML = "Sei normo peso"
}           else if ( bmi > 25 && bmi < 30){ 
                document.getElementById("risultato").innerHTML = "Sei sovrappeso"
}                else if ( bmi > 30.1 && bmi < 34.9){ 
                    document.getElementById("risultato").innerHTML = "Sei un Obeso di primo grado"
}                   else if ( bmi > 35 && bmi < 40){ 
                        document.getElementById("risultato").innerHTML = "Sei un Obeso di secondo grado"
}                       else if ( bmi > 40){ 
                            document.getElementById("risultato").innerHTML = "Sei un Obeso di terzo grado"
}      