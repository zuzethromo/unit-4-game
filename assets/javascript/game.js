let win = 0;
let loss = 0;
let totalScore = 0;

let startGame = function () {

    // $(".crystals").empty();

    randomNumber = Math.floor(Math.random() * 101) + 19;
// console.log(randomNumber);
$(".numberRandom").html('Reach this Number: ' + randomNumber);

for(let i = 0; i < 4; i++){

 crystalNumber = Math.floor(Math.random() * 11) + 1;
// console.log(crystalNumber);

}
}

startGame();

$(".crystals").on('click', function() {
    // console.log($(this));
let number = totalScore + crystalNumber;
  totalScore += number;
//   console.log(totalScore);
  
if(totalScore === randomNumber){
     win++;
     totalScore = 0;
     startGame();
    // console.log("win");
}
else if(totalScore > randomNumber){
    loss++;
    totalScore = 0;
    startGame();
    // console.log("loss");
}

let html = 
"<h3> Total Score: " + totalScore + "</h3>" +
"<h4> Wins: " + win + "</h4>" +
"<h4> Losses: " + loss + "</h4>"

document.querySelector('.count').innerHTML = html;
});



   


