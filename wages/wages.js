document.getElementById("btn").addEventListener("click", onclick)

function onclick () {
    let normal_hours = document.getElementById("nh").valueAsNumber
    let normal_rate = document.getElementById("nr").valueAsNumber
    let overtime_rate = document.getElementById("or").valueAsNumber
    let hours_worked  = document.getElementById("hw").valueAsNumber
    let wages 
    if (hours_worked <= normal_hours) {// no overtime 
       wages = hours_worked * normal_rate 
    } else {
        wages =normal_hours*normal_rate+(hours_worked-normal_hours)*overtime_rate
    }
    document.getElementById("wages").innerHTML = wages + " dollars"; 
}  



    
