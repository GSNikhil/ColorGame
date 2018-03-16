console.log("Hooking...\nHooked!");

var message = document.getElementById("message");
var title = document.querySelector("h1");
var colors = generateRandomColors(6);
var reset = document.querySelector("#reset");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
// var mode = document.querySelectorAll("mode");
var numSq = 6;

// for(var i = 0; i < mode.length; i++)
// {
// 	mode[i].addEventListener("click", function()
// 	{
// 		mode[0].classList.remove("selected");
// 		mode[1].classList.remove("selected");
// 		this.classList.add("selected");
// 		if(this.textContent === "EASY")
// 			numSq = 3;
// 		else
// 			numSq = 6;

// 		reset();
// 	});
// }

// function reset()
// {
// 	colors = generateRandomColors(numSq);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0 ; i < boxes.length; i++)
// 		if (colors[i])
// 		{
// 			boxes[i].style.display = "block";
// 			boxes[i].style.backgroundColor = colors[i];
// 		}
// 		else
// 			boxes[i].style.display = "none";
// 	title.style.backgroundColor = "steelblue";
// 	reset.textContent = "NEW COLORS";
// 	message.textContent = "";	
// }

easy.addEventListener("click", function(){
	easy.classList.toggle("selected");
	hard.classList.toggle("selected");
	numSq = 3;
	colors = generateRandomColors(numSq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < boxes.length ; i++)
	{
		if(colors[i])
			boxes[i].style.backgroundColor = colors[i];
		else
			boxes[i].style.display = "none";
	}
});

hard.addEventListener("click", function(){
	easy.classList.toggle("selected");
	hard.classList.toggle("selected");
	numSq = 6;
	colors = generateRandomColors(numSq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < boxes.length ; i++)
	{
			boxes[i].style.backgroundColor = colors[i];
			boxes[i].style.display = "block";
	}
});

reset.addEventListener("click", function(){
	colors = generateRandomColors(numSq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < boxes.length; i++)
		if (colors[i])
		{
			boxes[i].style.display = "block";
			boxes[i].style.backgroundColor = colors[i];
		}
		else
			boxes[i].style.display = "none";
	title.style.backgroundColor = "steelblue";
	reset.textContent = "NEW COLORS";
	message.textContent = "";
} );

var boxes = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for(var i = 0; i < boxes.length; i++)
{
	// Color to square
	boxes[i].style.backgroundColor = colors[i];
	// Click Event detection
	boxes[i].addEventListener("click", function(){
		// grab the color and compare it the colorDisplay
		var clickedColor = this.style.backgroundColor;	

		if(clickedColor === pickedColor)
		{
			boxes.forEach(setColor);
			message.textContent = "Correct!";
			title.style.backgroundColor = pickedColor;
			reset.textContent = "PLAY AGAIN?";

		}
		else
		{
			this.style.backgroundColor = "rgb(23,23,23)";
			message.textContent = "Try Again!";
		}
	});
}

function setColor(item)
{
	item.style.backgroundColor = pickedColor;
}

function pickColor()
{
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(n)
{
	var colors = [];
	for(var i = 0; i < n ; i++)
	{
		//get Random color and push to array
		colors.push(randomColor());
	}
	return colors;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = "rgb(" + r +", " + g +", " + b + ")" ;
	return color;
}