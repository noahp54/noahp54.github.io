let pen = document.getElementById("c").getContext("2d")

function drawSquare(x, y, size, color){
    pen.fillStyle = color 
    pen.fillRect(x,y,size, size)
}

let s1 = 10 // size of large square
let n = 400/s1 // number of squares in  a row  or column 

for (let r = 0; r < n; ++r){
    for (let c = 0; c < n; ++c){
        let x  = c * s1
        let y = r * s1 
        if ((r+c)%2 === 0){
        drawSquare(x, y, s1, '#333333')
        }else {
        drawSquare(x, y, s1, '#999999')
        }
    }
}

let s2 = 4 // s2 is small square 
let offset = s1 -s2/2 

for (let r = 0; r < n-1; ++r){
    for (let c = 0; c < n-1; ++c){
        let x  = c * s1 + offset 
        let y = r * s1 + offset 

    if (c >= 1/4*n && c <= 3/4*n && r >= 1/4*n && r<= 3/4*n){
       if ((r+c)%2 === 0){
        drawSquare(x, y, s2, '#000000')
        }else {
        drawSquare(x, y, s2, '#ffffff')
        } 
    } else {
        if ((r+c)%2 === 0){
        drawSquare(x, y, s2, '#ffffff')
        }else {
        drawSquare(x, y, s2, '#000000')
         } 
        }    
    }
}




