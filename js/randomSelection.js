window.score = {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }

$(document).ready(function(){
	var myWords = ["Rock","Paper","Scissors"];
	$(".btn-info").on("click",function() {
		var myRandomNumber = Math.floor(Math.random() * myWords.length);
		var computerWord = myWords[myRandomNumber]
		var userChoice = $(this).attr("data-tag");
		$(".userthrow").fadeIn(0, function() {
			$(this).empty();
			$(this).html(userChoice);
			$(this).fadeOut(1500);
		});
		$(".computerthrow").fadeIn(0, function() {
			$(this).empty();
			$(this).html(computerWord);
			$(this).fadeOut(1500);
		});

	});	
});
