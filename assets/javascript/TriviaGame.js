// $(document).ready(function){

    $('#start').on(click, function () {
        $('#start').remove();
        game.loadQuestion();
    })

    $(document).on('click', 'answer-button', function (e) {
        game.clicked(e);
    })

    var questions = [{
        question: "..........",
        answers: ["......", ".........", "............"],
        correctAnswer: ".........",
        image: ".............."
    },
    //repeat above format for each arrey of questions
    {}
    ];


    var game = {
        question: questions,
        currentQuestion: 0,
        counter: 30,
        courrect: 0,
        incourrect: 0,

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
            $('#subwrapper').html('<h2>' + question[game.currentQuestion].question + '</h2>');
            for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                $('#subwrapper').append('button class= "answer-button" id=" button-' + i + ' "data-name" ' +
                    question[game.currentQuestion].answer[i] + '">' + question[game.currentQuestion].answer[i] + ' </button> ');

            }
        },
        nextQuestion: function () {

        },
        timeUp: function () {

        },
        result: function () {

        },
        clicked: function () {

        },
        answeredCorrectly: function () {

        },
        answeredIncorrectly: function () {

        },
        reset: function () {

        }
    }
