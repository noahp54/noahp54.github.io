document.getElementById("btn").addEventListener("click", onclick);

function onclick() {
    let first = document.getElementById("fst").valueAsNumber;
    let second = document.getElementById("sec").valueAsNumber;
    let third = document.getElementById("thd").valueAsNumber;
   
    let max
    if (first >= second && first >= third) {
        max = first;
    } else if (second >= first && second >= third) {
        max = second;
    } else {
        max = third;
    }

    document.getElementById("max").innerHTML = max;
}

