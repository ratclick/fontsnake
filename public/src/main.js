import snake from "./snake.js";

let pwidth = 1920;
let pheight = 1080;


window.onload = ()=>{
    console.log('start')
    // enter execution here
    pwidth = window.innerWidth ;
    pheight = window.innerHeight;
}


window.onblur = (e)=>{
    // focus moved from game
}

window.onkeydown = (e)=>{
    // key pressed down continously
}

window.onkeyup = (e)=>{
    // key is released
}
