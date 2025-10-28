document.getElementById("btn").addEventListener("click", onclick)

function onclick (e) {
    let p = document.getElementById("P").valueAsNumber
    let n = 12*document.getElementById("Year").valueAsNumber
    let r = document.getElementById("ARate").valueAsNumber / 100 / 12
    let a = p * r * (1+r)**n / ((1+r)**n - 1)

    let result = "The monthly payment is $" + a.toFixed(2) +
                "<br> The total payment is $" + (a*n).toFixed(2) +
                "<br> The total interest is $" + (a*n - p).toFixed(2)

    document.getElementById("result").innerHTML = result; 
}  

// code for amortization payment calculation 


    
