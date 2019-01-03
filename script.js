
var output1 = document.querySelector("#h3_1");
var output2 = document.querySelector("#h3_2");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#body");
var random = document.querySelector("#random");

var leftTop = document.querySelector("#blt");
var rightTop = document.querySelector("#brt");
var left = document.querySelector("#bl");
var t0p = document.querySelector("#bt");
var right = document.querySelector("#br");
var bottom = document.querySelector("#bb");
var leftBottom = document.querySelector("#blb");
var rightBottom = document.querySelector("#brb");

function start() {
	color1.value = "#e2ddf4";
	color2.value = "#3259c3";

	body.style.background = "linear-gradient(" +
	color1.value + ", " + color2.value + ")";

	body.style.backgroundRepeat = "non-repeat";
	body.style.backgroundAttachment = "fixed";

	output1.textContent = "background: " + body.style.backgroundImage + ";";
	
	output2.textContent = "background: linear-gradient("
	+ color1.value + ", " + color2.value + ");";
}

function setGradient(event) {
	if (event.type === "click") {
		if (event.target.id === "random") { // to bottom (default)
			body.style.background = "linear-gradient(" 
			+ color1.value + ", "  + color2.value + ")";

			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(" 
			+ color1.value + ", " + color2.value + ");";
		} else if (event.target.id === "blt") { // to left top
			body.style.background = "linear-gradient(to left top, "
			+ color1.value + ", "  + color2.value + ")";

			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(to left top, " 
			+ color1.value + ", " + color2.value + ");";
		} else if (event.target.id === "brt") { // to right top
			body.style.background = "linear-gradient(to right top, "
			+ color1.value + ", "  + color2.value + ")";
		
			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(to right top, " 
			+ color1.value + ", " + color2.value + ");";
		} else if (event.target.id === "bl") { // to left
			body.style.background = "linear-gradient(to left, "
			+ color1.value + ", "  + color2.value + ")";
		
			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(to left, " 
			+ color1.value + ", " + color2.value + ");";
		} else if (event.target.id === "bt") { // to top
			body.style.background = "linear-gradient(to top, "
			+ color1.value + ", "  + color2.value + ")";
		
			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(to top, " 
			+ color1.value + ", " + color2.value + ");";
		} else if (event.target.id === "br") { // to right
			body.style.background = "linear-gradient(to right, "
			+ color1.value + ", "  + color2.value + ")";
		
			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(to right, " 
			+ color1.value + ", " + color2.value + ");";
		} else if (event.target.id === "bb") { // to bottom (default)
			body.style.background = "linear-gradient(to bottom, "
			+ color1.value + ", "  + color2.value + ")";

			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(" 
			+ color1.value + ", " + color2.value + ");";
		} else if (event.target.id === "blb") { // to left bottom
			body.style.background = "linear-gradient(to left bottom, "
			+ color1.value + ", "  + color2.value + ")";
		
			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(to left bottom, " 
			+ color1.value + ", " + color2.value + ");";
		} else if (event.target.id === "brb") { // to right bottom
			body.style.background = "linear-gradient(to right bottom, "
			+ color1.value + ", "  + color2.value + ")";
		
			output1.textContent = "background: " + body.style.backgroundImage + ";";
		
			output2.textContent = "background: linear-gradient(to right bottom, " 
			+ color1.value + ", " + color2.value + ");";
		}

		body.style.backgroundRepeat = "non-repeat";
		body.style.backgroundAttachment = "fixed";

	} 
	else if (event.type === "input"){
		body.style.background = "linear-gradient(" 
		+ color1.value + ", " + color2.value +  ")";

		output1.textContent = "background: " + body.style.backgroundImage + ";";

		output2.textContent = "background: linear-gradient(" 
		+ color1.value + ", " + color2.value + ");";
	}

}

function randomColor() {
	var color = "#";
	var values = "0123456789ABCDEF";

	for (var i = 0; i < 6; i++) {
		color = color + values[Math.floor(Math.random()*16)];
	}

	return color;
}

function changeColors(event) {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient(event);
}

start();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", changeColors);

leftTop.addEventListener("click", setGradient);
rightTop.addEventListener("click", setGradient);
left.addEventListener("click", setGradient);
t0p.addEventListener("click", setGradient);
right.addEventListener("click", setGradient);
bottom.addEventListener("click", setGradient);
leftBottom.addEventListener("click", setGradient);
rightBottom.addEventListener("click", setGradient);
