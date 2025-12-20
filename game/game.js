let pen = document.getElementById("game").getContext("2d")
let x = 200 // left of player position; global
let y = 100 // top of player position; global 
let dx = 10 // speed along x; 
let dy = 5 // speed along y; delta y- increasement of y 
let g = 2 // increasement of dy; gravity sim
let is_left = false // state to indicate if I press down arrow left
let is_right = false // state to indicate if I press down arrow right
const jump_power = -20
const limit = 1// limits amount of jumps in air
const sq = 20
let jump_times = limit

let p1x = 100, p1y = 350, p1w = 80, p1h = 20
let p2x = 225, p2y = 300, p2w = 80, p2h = 20
let p3x = 325, p3y = 250, p3w = 80, p3h = 20
let p4x = 0,   p4y = 275, p4w = 100, p4h = 20
let p5x = 75,  p5y = 175, p5w = 80, p5h = 20
let p6x = 225, p6y = 190, p6w = 80, p6h = 20
let p7x = 275, p7y = 125, p7w = 120, p7h = 20
let f1x = 350, f1y = 60, f1w = 30, f1h = 20 
let f2x = 350, f2y = 60, f2w = 3, f2h = 75

document.addEventListener("keydown", onkeydown)
document.addEventListener("keyup", onkeyup)
drawBackground()

function onkeydown(event_object){
    if(event_object.key === "ArrowLeft"){ // go left 
        is_left = true 
    } else if (event_object.key === "ArrowRight"){ // go right
        is_right = true 
    } else if (event_object.key === "Enter"){ // fall starts 
        setInterval(drawFrame, 50)
    }
}

function onkeyup(event_object){
    if(event_object.key === "ArrowLeft"){ // go left 
        is_left = false
    } else if (event_object.key === "ArrowRight"){ // go right
        is_right = false
    } else if(event_object.key === " "){
        if(jump_times > 0){
            dy = jump_power 
            -- jump_times
        }
    }
}

function drawFrame(){

    dy = dy + g
    y = y + dy

    if (y + sq > 400){
        y = 400 -sq
        dy = 0
        jump_times = limit
    }
    if (is_left){
        x = x - dx  
        if(x < 0){
            x = 0 
        }
    } 
    if (is_right){
        x = x + dx
        if(x > 400 - sq ){
            x = 400 - sq
        }
    }
    processPlatform()
    drawBackground()
    drawPlayer(x, y)
    drawFlag(f1x, f1y, f1w, f1h)
    drawFlag(f2x, f2y, f2w, f2h)
    drawPlatform1(p1x, p1y, p1w, p1h)
    drawPlatform1(p2x, p2y, p2w, p2h)
    drawPlatform1(p3x, p3y, p3w, p3h)
    drawPlatform1(p4x, p4y, p4w, p4h)
    drawPlatform1(p5x, p5y, p5w, p5h)
    drawPlatform1(p6x, p6y, p6w, p6h)
    drawPlatform1(p7x, p7y, p7w, p7h)
}

function drawBackground(){
    pen.fillStyle = "#000000"
    pen.fillRect(0, 0, 400, 400)
}

function drawPlayer(x, y){
    pen.fillStyle = "#ffffffff"
    pen.fillRect(x, y, 20, 20)
}

function drawPlatform1(x, y, w, h){
    pen.fillStyle = "#00ff00ff"
    pen.fillRect(x, y, w, h)
}

function drawFlag(x, y, w, h){
    pen.fillStyle = "#ff0000ff"
    
    pen.fillRect(x, y, w, h)
}

function processPlatform() {
  // p1
  if (y + 20 - dy <= p1y && y + 20 >= p1y && x + 20 > p1x && x < p1x + p1w) {
    y = p1y - 20
    dy = 0
    jump_times = limit
  }
  // p2
  if (y + 20 - dy <= p2y && y + 20 >= p2y && x + 20 > p2x && x < p2x + p2w) {
    y = p2y - 20
    dy = 0
    jump_times = limit
  }
  // p3
  if (y + 20 - dy <= p3y && y + 20 >= p3y && x + 20 > p3x && x < p3x + p3w) {
    y = p3y - 20;
    dy = 0
    jump_times = limit
  }
  // p4
  if (y + 20 - dy <= p4y && y + 20 >= p4y && x + 20 > p4x && x < p4x + p4w) {
    y = p4y - 20
    dy = 0
    jump_times = limit
  }
  // p5
  if (y + 20 - dy <= p5y && y + 20 >= p5y && x + 20 > p5x && x < p5x + p5w) {
    y = p5y - 20
    dy = 0
    jump_times = limit
  }
  // p6
  if (y + 20 - dy <= p6y && y + 20 >= p6y && x + 20 > p6x && x < p6x + p6w) {
    y = p6y - 20
    dy = 0
    jump_times = limit
  }
  // p7
  if (y + 20 - dy <= p7y && y + 20 >= p7y && x + 20 > p7x && x < p7x + p7w) {
    y = p7y - 20
    dy = 0
    jump_times = limit
  }
} // probably a much better way to do this but this is what I got to work with the time I had


