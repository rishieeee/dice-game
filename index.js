var randomNO1=Math.floor(Math.random()*6)+1;
var randomImage="dice" + randomNO1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);
var randomNO2=Math.floor(Math.random()*6)+1;
var randomImage2="dice" + randomNO2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
if (randomNO1>randomNO2){
  document.querySelector("h1").innerHTML="Player 1 won";
}
else if (randomNO2>randomNO1) {
  document.querySelector("h1").innerHTML="Player 2 won";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
