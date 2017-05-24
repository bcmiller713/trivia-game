// On Click Events
$(".button").on("click", function() {
	$(this ).toggle();
	game.loadQuestion();
});

$(document).on("click", ".answers", function(event) {
	game.clicked(event);
});

$(".restart").on("click", function() {
	game.reset();
});

// Questions Object; contains questions, answers, and gifs
var questions = [{
	question: "Who is Ash Ketchum's rival?",
	answers: ["Gary", "Brock", "Misty", "Professor Oak"],
	correctAnswer: "Gary",
	gif: "<video width='320' autoplay loop><source src='assets/images/gary.mp4' type='video/mp4'></video>"
}, {
	question: "Where do pokemon trainers store their pokemon?",
	answers: ["Pokedex", "Poke Balls", "Pokemon Center", "Tote Bag"],
	correctAnswer: "Poke Balls",
	gif: "<video width='320' autoplay loop><source src='assets/images/pokeball.mp4' type='video/mp4'></video>"
}, {
	question: "What type of pokemon is Pikachu?",
	answers: ["Fire", "Grass", "Rock", "Electric"],
	correctAnswer: "Electric",
	gif: "<video width='320' autoplay loop><source src='assets/images/pikachu.mp4' type='video/mp4'></video>"
}, {
	question: "What pokemon does Charmander evolve into?",
	answers: ["Charizard", "Charodile", "Charmeleon", "None of the above"],
	correctAnswer: "Charmeleon",
	gif: "<video width='320' autoplay loop><source src='assets/images/charmander-evolve.mp4' type='video/mp4'></video>"
}, {
	question: "Which pokemon does Professor Oak offer new pokemon trainers to choose from when they start their journey?",
	answers: ["Bulbasaur", "Squirtle", "Charmander", "All of the above"],
	correctAnswer: "All of the above",
	gif: ["<video width='320' autoplay loop><source src='assets/images/bulbasaur.mp4' type='video/mp4'></video>",
		 "<video width='320' autoplay loop><source src='assets/images/squirtle.mp4' type='video/mp4'></video>",
		 "<video width='320' autoplay loop><source src='assets/images/charmander.mp4' type='video/mp4'></video>"]
}];

// Game Object
var game = {
	questions: questions,
	currentQuestion: 0,
	timeRemaining: 15,
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	countDown: function(){
		game.timeRemaining--;
		$(".time").html("<p>Time Remaining: " + game.timeRemaining + "</p>");
		if (game.timeRemaining <= 0) {
			game.timeUp();
		}
	},
	loadQuestion: function(){
		timer = setInterval(game.countDown, 1000);
		$(".time").html("<p>Time Remaining: " + game.timeRemaining + "</p>");
		$(".question").html("<p>" + questions[game.currentQuestion].question + "</p>");
		for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
			$(".all-answers").append("<p class='answers' id='answer" + i + "' data-name='" +
									questions[game.currentQuestion].answers[i] + "'>" + 
									questions[game.currentQuestion].answers[i] + "</p>");
		}
	},
	nextQuestion: function(){
		$(".gif").toggle();
		game.timeRemaining = 15;
		$(".time").html(game.timeRemaining);
		game.currentQuestion++;
		game.loadQuestion();
	},
	timeUp: function(){
		clearInterval(timer);
		game.unanswered++;
		$(".all-answers").empty();
		$(".gif").toggle();
		$(".gif").html(questions[game.currentQuestion].gif);
		$(".question").html("<p>You ran out of time!");
		$(".question").append("<p>The correct answer was: " + questions[game.currentQuestion].correctAnswer + "</p>");
		if (game.currentQuestion == questions.length-1) {
			setTimeout(game.results, 3000);
		} else {
			setTimeout(game.nextQuestion, 3000);
		}
	},
	results: function(){
		clearInterval(timer);
		$(".gif").toggle();
		$(".time").html("Quiz Results");
		$(".question").html("<p>Correct: " + game.correct + "</p>");
		$(".question").append("<p>Incorrect: " + game.incorrect + "</p>");
		$(".question").append("<p>Unanswered: " + game.unanswered + "</p>");
		$(".restart").toggle();

	},
	clicked: function(e){
		clearInterval(timer);
		if ($(e.target).data("name")==questions[game.currentQuestion].correctAnswer) {
			game.answeredCorrectly();
		} else {
			game.answeredIncorrectly();
		}
	},
	answeredCorrectly: function(){
		console.log("Win");
		clearInterval(timer);
		game.correct++;
		$(".all-answers").empty();
		$(".gif").toggle();
		$(".gif").html(questions[game.currentQuestion].gif);
		$(".question").html("<p>Correct!</p>");
		if (game.currentQuestion == questions.length-1) {
			setTimeout(game.results, 3000);
		} else {
			setTimeout(game.nextQuestion, 3000);
		}
	},
	answeredIncorrectly: function(){
		console.log("Lose");
		clearInterval(timer);
		game.incorrect++;
		$(".all-answers").empty();
		$(".gif").toggle();
		$(".gif").html(questions[game.currentQuestion].gif);
		$(".question").html("<p>Incorrect!</p>");
		$(".question").append("<p>The correct answer was: " + questions[game.currentQuestion].correctAnswer + "</p>");
		if (game.currentQuestion == questions.length-1) {
			setTimeout(game.results, 3000);
		} else {
			setTimeout(game.nextQuestion, 3000);
		}
	},
	reset: function(){
		game.currentQuestion = 0;
		game.timeRemaining = 15;
		game.correct = 0;
		game.incorrect = 0;
		game.unanswered = 0;
	}
}

// CSS when mousing over answers
$(document).on({
	mouseenter: function() {
		$(this).css("background-color", "#A80B0B");
	},
	mouseleave: function() {
		$(this).css("background-color", "#E31B2E");
	}
}, ".answers");
