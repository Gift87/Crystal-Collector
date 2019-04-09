var winCount = 0;
var lossCount = 0;

//the number the other numbers will check/compare to to determine win/lose
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#target-score").text(targetNumber);

//define values for indivual crystals
var blue = Math.floor(Math.random() * 11) + 1;
var green = Math.floor(Math.random() * 11) + 1;
var red = Math.floor(Math.random() * 11) + 1;
var yellow = Math.floor(Math.random() * 11) + 1;

$("win-count").html(winCount);
$("#loss-count").html(lossCount);

var counter= 0;
$("#your-score").text(counter);

//Resets the Game-->
function restartGame() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#targetNumber").text(targetNumber);
    blue = Math.floor(Math.random() * 11) + 1;
    green = Math.floor(Math.random() * 11) + 1;
    red = Math.floor(Math.random() * 11) + 1;
    yellow = Math.floor(Math.random() * 11) + 1;
    counter = 0;
    $("#your-score").text(counter);

}
//Alert winner
function win() {

	alert("You win!");
	winCount ++;
	$("#win-count").text(winCount);
	restartGame();
}

//Alert lose
function lose() {

	alert("You lose!");
	lossCount ++;
	$("#loss-count").text(lossCount);
	restartGame();
}

//onClick button functions

$('#blue').on ('click', function(){
    counter = counter + blue;
    
    $('#your-score').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

  $('#green').on ('click', function(){
    counter = counter + green;
    
    $('#your-score').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

  $('#red').on ('click', function(){
    counter = counter + red;
    
    $('#your-score').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });

  $('#yellow').on ('click', function(){
    counter = counter + yellow;
    
    $('#your-score').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  