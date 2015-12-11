window.score = {
	gamePlace: {
	    userScore: 0,
	    computerScore: 0,
	    roundCount: 1
	}
  }
$(document).ready(function() {
	$(".btn-info").on("click", function() {
		var tagName = $(this).attr("data-tag");
		score.gamePlace[tagName]++;
		$("#" + tagName).html(score.gamePlace[tagName]);
	})
})