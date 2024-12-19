let preload = document.querySelector(".preload")
let head = document.querySelector("body")
let minTime = 2000;

window.addEventListener('load',()=>
this.setTimeout(()=>
{
    preload.style.display = "none"
    head.style.display = "block"

},minTime))