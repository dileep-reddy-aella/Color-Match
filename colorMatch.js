var colors = colorsArr(6);
var winColor = newColor(6);
var displayColor = document.querySelector("#displayColor");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var message = document.getElementById("message");
var level = document.querySelectorAll(".level");

var squares = document.querySelectorAll(".squares");

displayColor.textContent = winColor;

for(var i=0;i<level.length;i++){
	level[i].addEventListener("click",function(){
		if(this.textContent === "Easy"){
			colors = colorsArr(3);
			winColor = newColor(3);
			displayColor.textContent = winColor;
			this.classList.add("selected");
			level[1].classList.remove("selected");
			for(var i = 0;i<squares.length;i++){
				if(colors[i]){
					squares[i].style.backgroundColor = colors[i];	
				}
				else{
					squares[i].style.display = "none";
				}
			}
		}else{
			//Picking new colors
			colors = colorsArr(6);
			//Change display color
			winColor = newColor(6);
			displayColor.textContent = winColor;
			message.textContent = "";
			h1.style.backgroundColor = "steelblue";
			this.classList.add("selected");
			level[0].classList.remove("selected");
			//coloring squares
			for(var i=0;i<colors.length;i++){
				squares[i].style.backgroundColor = colors[i];
				squares[i].style.display = "block";
			}
		}
	})
}

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === winColor){
			message.textContent = "Correct";
			h1.style.backgroundColor = winColor;
			for(var i=0;i<squares.length;i++){
				squares[i].style.backgroundColor = winColor;
			}
		}
		else{
			message.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	})
}

resetButton.addEventListener("click",function(){
	//Picking new colors
	colors = colorsArr(6);
	//Change display color
	winColor = newColor(6);
	displayColor.textContent = winColor;
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	level[1].classList.add("selected");
	level[0].classList.remove("selected");
	//coloring squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block"
	}
})

function newColor(len){
	var index =  Math.floor(Math.random()*len);
	return colors[index];
}

function generateColors(){
	// red color
	var r = Math.floor(Math.random()*256);
	// green color
	var g = Math.floor(Math.random()*256);
	// blue color
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r +", "+ g +", "+ b+")";
}

function colorsArr(num){
	var arr = [];
	for(var i = 0;i<num;i++){
		arr.push(generateColors());
	}
	return arr;
}
