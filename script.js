var userLives = document.body.querySelector(".userHealth");

var dragonLives = document.body.querySelector(".dragonHealth");

var results = document.body.querySelector(".finalResults");

var hits = 0;

var dragonTurn = 0;

var user = 5;

var dragon = 10;

while (user > 0 && dragon > 0) {
  hits = Number(
    prompt(
      "Pick a number. This will determine the the number of hits you are going to attempt to slay the dragon!"
    )
  );
  dragonPlace = Math.floor(Math.random() * (1, 2) + 1);
  dragon = dragon - hits;
  user = user - dragonPlace;
}

if (user > dragon) {
  results.innerHTML = "Great job! You have defeated the dragon!";
} else {
  results.innerHTML = "Game over! You've lost against a  dragon!";
}

userLives.innerHTML = "Your health was " + user;
dragonLives.innerHTML = "The dragon's health was " + dragon;