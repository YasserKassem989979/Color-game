// to generate colors array
function generateColors(n){

   var colors=[];

   for(var i = 0 ; i < n ; i++){
    var r = randomColor();
    var g = randomColor();
    var b = randomColor();

    var color = `rgb(${r}, ${g}, ${b})`

    colors.push(color)
   }

  return colors

}

//colors array
var colors = generateColors(6);

//DOM variables

var numSquares = 6
var square = document.querySelectorAll(".square");
var empty  = document.getElementById("empty");
var pickedColor = colors[ranIndex(numSquares)]
var color_text = document.getElementById("rgb-span");
var answer = document.querySelector("#answer-span");
var difficulty = document.getElementById("difficulty");

//change the content of rgb 
color_text.textContent = pickedColor;

 // change the color of squares
    for(var i = 0 ; i<square.length;i++){
    //add initial color
    square[i].style.backgroundColor = colors[i]
    
    
    //add eventlistener
    square[i].addEventListener("click", function(){
        var clickedColor  = this.style.backgroundColor
        if( clickedColor === pickedColor){
            changeColor(clickedColor);
            answer.textContent = " Correct!"
        }else{
            this.style.backgroundColor = "white";
            answer.textContent = "Try Again"
             colors = generateColors();
        }
        
    })
}

// give all squares the same color
function changeColor(color){
    for(var i = 0 ; i < square.length ; i++ ){
        square[i].style.backgroundColor = color
    }
}

// make randon color between 0-255
function randomColor(){
 return Math.floor(Math.random()*255)
}

//random index of colors array
function ranIndex(n){
    return Math.floor(Math.random()*n);
}
    

// options functionality


var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var reset   = document.getElementById("reset");

// add events 

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected")
    numSquares = 3
    // new colors
    colors = generateColors(numSquares);
    //new picked color
    pickedColor = colors[ranIndex(numSquares)];

    color_text.textContent = pickedColor;
    answer.textContent = ""

    for(var i = 0 ; i < square.length ; i++ ){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i]
        }else{
            square[i].style.display = "none"
        }
    }
})


hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6
    // new colors
    colors = generateColors(numSquares);
    //new picked color
    pickedColor = colors[ranIndex(numSquares)];

    color_text.textContent = pickedColor;
    answer.textContent = ""

    for(var i = 0 ; i < square.length ; i++ ){
        
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
        
    }
})


//reset game

reset.addEventListener("click",function(){
     // new colors
     colors = generateColors(numSquares);
     //new picked color
     pickedColor = colors[ranIndex(numSquares)];
 
     color_text.textContent = pickedColor;
     answer.textContent = ""
 
     for(var i = 0 ; i < square.length ; i++ ){
         
        if(colors[i]){
            square[i].style.backgroundColor = colors[i]
        }else{
            square[i].style.display = "none"
        }
     }
})




