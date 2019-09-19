$(document).ready(function () {
    $('#start').on('click', function () {
        $('#start').remove();
        game.loadQuestion();
    });

    $(document).on('click', '.answer-button', function (e) {
        game.clicked(e);
    });

    var questions = [{
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    //repeat above format for each arrey of questions
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    {
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "",
        image: ".............."
    },
    ];

    // console.log(questions)
    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: 30,
        courrect: 0,
        incourrect: 0,
        unanswered: 0,

        countdown: function () {
            game.counter--;
            $('#counter').html(game.counter);
            if (game.counter <= 0) {
                console.log("Time Up!!!");
                game.timeUp();
            }

        },
        loadQuestion: function () {
            timer = setInterval(game.countdown, 1000);
            $('#subwrapper').html('<h2>' + questions[game.currentQuestion].question + '</h2>');
            for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                $('#subwrapper').append('<button class= "answer-button" id="button- ' + i + '" data-name= "' +
                    questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');

            }
        },
        nextQuestion: function () {
            game.counter - 30;
            $("#counter").html(game.counter);
            game.currentQuestion++;
            game.loadQuestion();
        },
        timeUp: function () {
            clearInterval(timer);
            game.unanswered++;
            $('#subwrapper').html('<h2>OUT OF TIME!</h2>')
            $('subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.result, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        result: function () {
            clearInterval(timer);
            $('#subwrapper').html("<h2>ALL DONE</h2>");
            $('#subwrapper').append("<h3>Correct: " + game.correct + "</h3>");
            $('#subwrapper').append("<h3>Incorrect: " + game.incorrect + "</h3>");
            $('#subwrapper').append("<h3>Unansered: " + game.unanswered + "</h3>");


        },
        clicked: function (e) {
            clearInterval(timer);
            if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                game.answeredCorrectly();
            }
            else {
                game.answeredIncorrectly();
            }

        },
        answeredCorrectly: function () {
            console.log("you are correct")
            clearInterval(timer);
            game.correct++;
            $('#subwrapper').html('<h2>YOU GOT IT RIGHT!</H2>');
            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.result, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        answeredIncorrectly: function () {
            console.log("Wrong Answer")
            clearInterval(timer);
            game.incorrect++;
            $('#subwrapper').html('<h2>YOU GOT IT WRONG!</H2>');
            $('subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
            if (game.currentQuestion == questions.length - 1) {
                setTimeout(game.result, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        reset: function () {

        }
    };
});
