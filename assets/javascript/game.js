let win = 0;
let loss = 0;
let totalScore = 0;

// let startGame = function(){}

let randomNumber = Math.floor(Math.random() * 101) + 19;
// console.log(randomNumber);
$(".numberRandom").html('Reach this Number: ' + randomNumber);


// for(let i = 0; i < 4; i++){}


let crystalNumber = Math.floor(Math.random() * 11) + 1;
// console.log(crystalNumber);

// startGame();


$(".crystals").on('click', function() {
    // console.log($(this));
let number = totalScore + crystalNumber;
  totalScore += number;
  console.log(totalScore);
  
if(totalScore === randomNumber){
     win++;
    //  startGame();
    console.log("win");
}
else if(totalScore > randomNumber){
    loss++;
    // startGame();
    console.log("loss");
}

let html = 
"<h3> Wins: " + win + "</h3>" +
"<h3> Losses: " + loss + "</h3>"

document.querySelector('#count').innerHTML = html;
});



   


