//Global variables & objects

var q1 = {
	question: "Who is Ash Ketchum's rival?",
	answer1 : "Gary",
	answer2 : "Brock",
	answer3 : "Misty",
	answer4 : "Professor Oak",
	gif : "<video width='320' autoplay loop><source src='assets/images/gary.mp4' type='video/mp4'></video>",
	state: true,
	nextQuestion: function() {
		q1.state = false;
		q2.state = true;
		$(".all-answers").toggle();
		$(".gif").toggle();
		ref.timeRemaining = 15;
		$(".question").text(q2.question);
		$(".answer1").text(q2.answer1);
		$(".answer2").text(q2.answer2);
		$(".answer3").text(q2.answer3);
		$(".answer4").text(q2.answer4);
		ref.start();
	}
};

var q2 = {
	question: "Where do pokemon trainers store their pokemon?",
	answer1 : "Pokedex",
	answer2 : "Poke Balls",
	answer3 : "Pokemon Center",
	answer4 : "Tote Bag",
	gif : "<video width='320' autoplay loop><source src='assets/images/pokeball.mp4' type='video/mp4'></video>",
	state: false,
	nextQuestion: function() {
		q2.state = false;
		q3.state = true;
		$(".all-answers").toggle();
		$(".gif").toggle();
		ref.timeRemaining = 15;
		$(".question").text(q3.question);
		$(".answer1").text(q3.answer1);
		$(".answer2").text(q3.answer2);
		$(".answer3").text(q3.answer3);
		$(".answer4").text(q3.answer4);
		ref.start();
	}
};

var q3 = {
	question: "What type of pokemon is Pikachu?",
	answer1 : "Fire",
	answer2 : "Grass",
	answer3 : "Rock",
	answer4 : "Electric",
	gif : "<video width='320' autoplay loop><source src='assets/images/pikachu.mp4' type='video/mp4'></video>",
	state: false,
	nextQuestion: function() {
		q3.state = false;
		q4.state = true;
		$(".all-answers").toggle();
		$(".gif").toggle();
		ref.timeRemaining = 15;
		$(".question").text(q4.question);
		$(".answer1").text(q4.answer1);
		$(".answer2").text(q4.answer2);
		$(".answer3").text(q4.answer3);
		$(".answer4").text(q4.answer4);
		ref.start();
	}
};

var q4 = {
	question: "What pokemon does Charmander evolve into?",
	answer1 : "Charizard",
	answer2 : "Charodile",
	answer3 : "Charmeleon",
	answer4 : "None of the above",
	gif : "<video width='320' autoplay loop><source src='assets/images/charmander-evolve.mp4' type='video/mp4'></video>",
	state: false,
	nextQuestion: function() {
		q4.state = false;
		q5.state = true;
		$(".all-answers").toggle();
		$(".gif").toggle();
		ref.timeRemaining = 15;
		$(".question").text(q5.question);
		$(".answer1").text(q5.answer1);
		$(".answer2").text(q5.answer2);
		$(".answer3").text(q5.answer3);
		$(".answer4").text(q5.answer4);
		ref.start();
	}
};

var q5 = {
	question: "Which pokemon does Professor Oak offer new pokemon trainers to choose from when they start their journey?",
	answer1 : "Bulbasaur",
	answer2 : "Squirtle",
	answer3 : "Charmander",
	answer4 : "All of the above",
	gif : "<video width='320' autoplay loop><source src='assets/images/bulbasaur.mp4' type='video/mp4'></video>" +
		  "<video width='320' autoplay loop><source src='assets/images/squirtle.mp4' type='video/mp4'></video>" +
		  "<video width='320' autoplay loop><source src='assets/images/charmander.mp4' type='video/mp4'></video>",
	state: false,
	results: function() {
		q5.state = false;
		$(".gif").toggle();
		$(".time").text("Quiz Results");
		$(".question").html("<p>Correct: " + ref.correct + "</p><p>Incorrect: " + ref.incorrect + "</p>");
		$(".restart").css("display", "block");
	}
};

// Timekeeping and Scorekeeping
var timerInterval;
var ref = {
	correct: 0,
	incorrect: 0,
	timeRemaining: 15,
	start: function () {
		$(".time").text("Time Remaining: " + ref.timeRemaining);
		timerInterval = setInterval(ref.countDown, 1000);
	},
	countDown: function () {
		ref.timeRemaining--;
		$(".time").text("Time Remaining: " + ref.timeRemaining);
		//When the timer runs out, advance to next question
		if (q1.state && ref.timeRemaining === 0) {
			ref.stop();
			$(".all-answers").toggle();
			$(".gif").toggle().html(q1.gif);
			ref.incorrect += 1;
			$(".question").html("You ran out of time! The correct answer is Gary.");
			// $(".gif").html(q1.gif);
			setTimeout(q1.nextQuestion, 4000);
		}
		if (q2.state && ref.timeRemaining === 0) {
			ref.stop();
			$(".all-answers").toggle();
			$(".gif").toggle().html(q2.gif);
			ref.incorrect += 1;
			$(".question").html("You ran out of time! The correct answer is Poke Ball.");
			// $(".gif").html(q2.gif);
			setTimeout(q2.nextQuestion, 4000);
		}
		if (q3.state && ref.timeRemaining === 0) {
			ref.stop();
			$(".all-answers").toggle();
			$(".gif").toggle().html(q3.gif);;
			ref.incorrect += 1;
			$(".question").html("You ran out of time! The correct answer is Electric.");
			setTimeout(q3.nextQuestion, 4000);
		}
		if (q4.state && ref.timeRemaining === 0) {
			ref.stop();
			$(".all-answers").toggle();
			$(".gif").toggle().html(q4.gif);
			ref.incorrect += 1;
			$(".question").html("You ran out of time! The correct answer is Charmeleon.");
			setTimeout(q4.nextQuestion, 4000);
		}
		if (q5.state && ref.timeRemaining === 0) {
			ref.stop();
			$(".all-answers").toggle();
			$(".gif").toggle().html(q5.gif);
			ref.incorrect += 1;
			$(".question").html("You ran out of time! The correct answer is all of the above.");
			setTimeout(q5.results, 4000);
		}
	},
	stop: function () {
		clearInterval(timerInterval);
	}
};

//Start & Restart button click event
$(".button").click(function() {
	$(this).toggle();
	$(".all-answers").css("display", "block");
	$(".question").text(q1.question);
	$(".answer1").text(q1.answer1);
	$(".answer2").text(q1.answer2);
	$(".answer3").text(q1.answer3);
	$(".answer4").text(q1.answer4);
	ref.start();
	q1.state = true;
	ref.timeRemaining = 15;
	ref.correct = 0;
	ref.incorrect = 0;
});

// CSS when mousing over answers
$(".answers").hover(function() {
	$(this).css("background-color", "#A80B0B");
	}, function() {
	$(this).css("background-color", "#E31B2E");
});

//When an answer is clicked, stop timer and do something depending on which question we are on...
$(".answer1").click(function() {
	ref.stop();
	$(".all-answers").toggle();
	$(".gif").toggle();
	if (q1.state) {
		ref.correct += 1;
		$(".question").text("Correct!");
		$(".gif").html(q1.gif);
		setTimeout(q1.nextQuestion, 4000);
		//add to correct count, display "Correct" and q1 answer gif, wait a few seconds, run function nextQuestion
	}
	if (q2.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Poke Ball.");
		$(".gif").html(q2.gif);
		setTimeout(q2.nextQuestion, 4000);
		//add to incorrect count, display "Incorrect" and q2 answer gif, wait a few seconds, run function nextQuestion
	}
	if (q3.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Electric.");
		$(".gif").html(q3.gif);
		setTimeout(q3.nextQuestion, 4000);
	}
	if (q4.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Charmeleon.");
		$(".gif").html(q4.gif);
		setTimeout(q4.nextQuestion, 4000);
	}
	if (q5.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is all of the above.");
		$(".gif").html(q5.gif);
		setTimeout(q5.results, 4000);
	}
});

$(".answer2").click(function() {
	ref.stop();
	$(".all-answers").toggle();
	$(".gif").toggle();
	if (q1.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Gary.");
		$(".gif").html(q1.gif);
		setTimeout(q1.nextQuestion, 4000);
	}
	if (q2.state) {
		ref.correct += 1;
		$(".question").text("Correct!");
		$(".gif").html(q2.gif);
		setTimeout(q2.nextQuestion, 4000);
	}
	if (q3.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Electric.");
		$(".gif").html(q3.gif);
		setTimeout(q3.nextQuestion, 4000);
	}
	if (q4.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Charmeleon.");
		$(".gif").html(q4.gif);
		setTimeout(q4.nextQuestion, 4000);
	}
	if (q5.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is all of the above.");
		$(".gif").html(q5.gif);
		setTimeout(q5.results, 4000);
	}
});

$(".answer3").click(function() {
	ref.stop();
	$(".all-answers").toggle();
	$(".gif").toggle();
	if (q1.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Gary.");
		$(".gif").html(q1.gif);
		setTimeout(q1.nextQuestion, 4000);
	}
	if (q2.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Poke Ball.");
		$(".gif").html(q2.gif);
		setTimeout(q2.nextQuestion, 4000);
	}
	if (q3.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Electric.");
		$(".gif").html(q3.gif);
		setTimeout(q3.nextQuestion, 4000);
	}
	if (q4.state) {
		ref.correct += 1;
		$(".question").html("Correct!");
		$(".gif").html(q4.gif);
		setTimeout(q4.nextQuestion, 4000);
	}
	if (q5.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is all of the above.");
		$(".gif").html(q5.gif);
		setTimeout(q5.results, 4000);
	}
});

$(".answer4").click(function() {
	ref.stop();
	$(".all-answers").toggle();
	$(".gif").toggle();
	if (q1.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Gary.");
		$(".gif").html(q1.gif);
		setTimeout(q1.nextQuestion, 4000);
	}
	if (q2.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Poke Ball.");
		$(".gif").html(q2.gif);
		setTimeout(q2.nextQuestion, 4000);
	}
	if (q3.state) {
		ref.correct += 1;
		$(".question").html("Correct!");
		$(".gif").html(q3.gif);
		setTimeout(q3.nextQuestion, 4000);
	}
	if (q4.state) {
		ref.incorrect += 1;
		$(".question").html("Incorrect! The correct answer is Charmeleon.");
		$(".gif").html(q4.gif);
		setTimeout(q4.nextQuestion, 4000);
	}
	if (q5.state) {
		ref.correct += 1;
		$(".question").html("Correct!");
		$(".gif").html(q5.gif);
		setTimeout(q5.results, 4000);
	}
});