var count = [1,2,3,4,5,6]

var colors = count.map((ele) =>{
    var red = Math.floor(Math.random()*255)
    var green = Math.floor(Math.random()*255)
    var blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
})
    
var square = document.querySelectorAll(".square");
var randomIndex= Math.floor(Math.random()*6);
var pickedColor = colors[randomIndex]
var color_text = document.getElementById("rgb-span")

color_text.textContent = pickedColor;


square.forEach((element,index) => {
    
    element.style.backgroundColor = colors[index]
    
    element.addEventListener("click", () =>{
        console.log(element.style.backgroundColor,pickedColor)
        if(element.style.backgroundColor == pickedColor){
            alert("Correct")
        }else{
            alert("try again")
        }
    })
    
});