const timeString = document.getElementById("time");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(upDate, 10);
    console.log(timer)
    isRunning = true;
}
}
function stop(){

}
function reset(){
    
}
function upDate(){
const currentTime = Date.now();
elapsedTime = currentTime - startTime;

let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
let seconds = Math.floor(elapsedTime / (1000 % 60));
let miliseconds = Math.floor(elapsedTime % 1000 / 10);

hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
miliseconds = String(miliseconds).padStart(2, "0");
timeString = textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
