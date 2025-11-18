let pen = document.getElementById("c").getContext("2d")
let pen2 = document.getElementById("c2").getContext("2d")

drawBackground(pen)
drawBackground(pen2)

let n = 13
let i = 0


for (let r = 0; r < n; ++r) {
     for (let c = 0; c < n; ++c){
            drawSquare(pen, 10+c*30, 10+r*30, "#ff0000")
        }
    } 

while (i < n) {
    drawSquare(pen2, 10+12*30-i*30, 10+i*30, "#ff0000")
    drawSquare(pen2, 10 + i*30, 10 + i*30, "#00ff11ff")
    ++i;
}

function drawBackground (p) { 
p.fillStyle = "#a"
p.fillRect(0, 0, 400, 400)
}


function drawSquare (p, x, y, c){ 
 p.fillStyle = c
 p.fillRect(x, y, 20, 20)
}

