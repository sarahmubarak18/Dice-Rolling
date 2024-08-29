var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomimage = "dice" + randomNumber1 + ".png"; 

var imagesource = "./images/" + randomimage; 

document.querySelector(".img1").setAttribute("src", imagesource);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomimage1 = "dice" + randomNumber2 + ".png"; 

var imagesource1 = "./images/" + randomimage1; 

document.querySelector(".img2").setAttribute("src", imagesource1);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}


