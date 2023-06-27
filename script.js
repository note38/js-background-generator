var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function changeColor() {
    body.style.background = "linear-gradient(to right," 
    + color1.value 
    + "," 
    + color2.value 
    + ")"

    css.textContent = body.style.background + ";";
}
function changeColorLeft (){
    body.style.background = "linear-gradient(to left," 
    + color2.value 
    + "," 
    + color1.value 
    + ")"
}

color1.addEventListener("input", changeColor)
color2.addEventListener("input", changeColor)