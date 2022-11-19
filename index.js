//Change dice image//
var randomNumber1 = Math.floor(Math.random()*6) + 1; //random number from 1-6
var randomNumber2 = Math.floor(Math.random()*6) + 1; //random number from 1-6
 
var images1 = "Dicee Challenge/images/dice"+ randomNumber1 +".png"; //dice1.png - dice6.png
var images2 = "Dicee Challenge/images/dice"+ randomNumber2 +".png"; //dice1.png - dice6.png
 
document.querySelector(".dice .img1").setAttribute("src",images1); 
document.querySelector(".dice .img2").setAttribute("src",images2);

//Who Won change Header//   
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
