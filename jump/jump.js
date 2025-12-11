let pen = document.getElementById("jump").getContext("2d")
let x = 200 // left of player position; global
let y = 100 // top of player position; global 
let dx = 10 // speed along x; 
let dy = 5 // speed along y; delta y- increasement of y 
let g = 2 // increasement of dy; gravity sim
let is_left = false // state to indicate if I press down arrow left
let is_right = false // state to indicate if I press down arrow right
const jump_power = -20
const limit = 2 // limits amount of jumps in air
const sq = 20
let jump_times = limit


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
    drawBackground()
    drawPlayer(x, y)
}

function drawBackground(){
    pen.fillStyle = "#000000"
    pen.fillRect(0, 0, 400, 400)
}

function drawPlayer(x, y){
    pen.fillStyle = "#ff0000"
    pen.fillRect(x, y, 20, 20)
}













