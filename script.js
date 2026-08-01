// =====================================
// CYBER IT MEMBER SYSTEM | BOPINZZ
// =====================================

// Jam Digital
const clock = document.getElementById("clock");

function updateClock(){

const now = new Date();

let jam = String(now.getHours()).padStart(2,"0");
let menit = String(now.getMinutes()).padStart(2,"0");
let detik = String(now.getSeconds()).padStart(2,"0");

clock.innerHTML = jam + ":" + menit + ":" + detik;

}

setInterval(updateClock,1000);

updateClock();


// Loading Text

const loadingText = document.getElementById("loadingText");

const loadingMessage = [

"Initializing System...",

"Connecting Server...",

"Loading Database...",

"Checking Security...",

"Access Granted..."

];

let index = 0;

setInterval(function(){

index++;

if(index >= loadingMessage.length){

index = 0;

}

loadingText.innerHTML = loadingMessage[index];

},600);

// =====================================
// AUDIO CONTROL
// =====================================

const bgMusic = document.getElementById("bgMusic");
const audioBtn = document.getElementById("audioBtn");

let musicOn = false;

// Volume
bgMusic.volume = 0.4;

// Tombol Audio
audioBtn.addEventListener("click", function(){

if(musicOn){

bgMusic.pause();

audioBtn.innerHTML = "🔇 AUDIO OFF";

musicOn = false;

}else{

bgMusic.play();

audioBtn.innerHTML = "🔊 AUDIO ON";

musicOn = true;

}

});

// =====================================
// LOADER
// =====================================

window.addEventListener("load", function(){

setTimeout(function(){

const loader = document.getElementById("loader");

loader.style.display = "none";

},3000);

});

// =====================================
// EFFECT BUTTON
// =====================================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(function(btn){

btn.addEventListener("mouseenter",function(){

btn.style.transform = "scale(1.05)";

});

btn.addEventListener("mouseleave",function(){

btn.style.transform = "scale(1)";

});

});

// =====================================
// TERMINAL EFFECT
// =====================================

const terminal = document.querySelectorAll(".terminal p");

terminal.forEach(function(line, i){

line.style.opacity = "0";

setTimeout(function(){

line.style.transition = "0.6s";

line.style.opacity = "1";

}, i * 600);

});

// =====================================
// GLOW CURSOR
// =====================================

document.addEventListener("mousemove", function(e){

document.body.style.backgroundPosition =
(e.clientX / 25) + "px " + (e.clientY / 25) + "px";

});

// =====================================
// STATUS ONLINE BERKEDIP
// =====================================

const status = document.querySelector(".status");

setInterval(function(){

status.style.opacity = "0.5";

setTimeout(function(){

status.style.opacity = "1";

},500);

},1000);

// =====================================
// CONSOLE MESSAGE
// =====================================

console.log("%cCYBER IT MEMBER SYSTEM",
"color:#00ffff;font-size:22px;font-weight:bold;");

console.log("%cSYSTEM ONLINE",
"color:#00ff88;font-size:14px;");

console.log("%cDeveloped By BOPINZZ",
"color:white;font-size:12px;");