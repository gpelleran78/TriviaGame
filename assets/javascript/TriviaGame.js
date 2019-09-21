$(document).ready(function () {
    $('#start').on('click', function () {
        $('#start').remove();
        game.loadQuestion();
    });

    //lets user know if they are correct or incorrect
    $(document).on('click', '.answer-button', function (e) {
        game.clicked(e);
    });

    $(document).on('click','#reset', function(){
        game.reset();
    });

    var questions = [{
        question: "World War 2 ended with the unconditional surrender of the Axis powers on which day?",
        answers: ["8 May 1945", "8 March 1946", "8 December 1945", "8 May 1946"],
        correctAnswer: "8 May 1945",
        imageUrl: ".................."
    },
    //repeat above format for each arrey of questions
    {
        question: "What was the name of the key battle in 1066 during the Norman invasion of England?",
        answers: ["Battle of Somme", "Battle of Trafalgar", "Battle of Antietam", "Battle of Hastings"],
        correctAnswer: "Battle of Hastings",
        image: ".............."
    },
    {
        question: "The city of Pompeii and many villages in the surrounding area were destroyed in the eruption of which volcano?",
        answers: ["Mount Krakatoa", "Mount St. Helens", "Mount Etna", "Mount Vesuvius"],
        correctAnswer: "Mount Vesuvius",
        image: ".............."
    },
    {
        question: "What was the first dynasty in China",
        answers: ["Xia dynasty", "Han dynasty", "Zhou dynasty", "Qin dynasty"],
        correctAnswer: "Xia dynasty",
        image: ".............."
    },
    {
        question: "The death of what person triggered World War 1?",
        answers: ["Archduke Franz Ferdinand", "Kaiser Wilhelm", "Rudolf, Crown Prince of Austria", "Tsar Nicholas II"],
        correctAnswer: "Archduke Franz Ferdinand",
        image: ".............."
    },
    {
        question: "The Russians sent a dog Laika into space, the Americans sent a chimp into space in 1961 (it survived). What was the name of the chimp?",
        answers: ["Ham", "Mon", "Der", "Loka"],
        correctAnswer: "Ham",
        image: ".............."
    },
    {
        question: "What was the name of the South Amereican surgeon who carried out the first heart transplant in 1967?",
        answers: ["Harvey Cushing", "Michael DeBakey", "Denton Cooley", "Christiaan Barnard"],
        correctAnswer: "Christiaan Barnard",
        image: ".............."
    },
    {
        question: "What was the codename for the development of the atom bomb?",
        answers: ["Fatboy Project", "Harlem Project", "Manhattan Project", "Littleman Project"],
        correctAnswer: "Manhattan Project",
        image: ".............."
    },
    {
        question: "What was Ceaser's first name?",
        answers: ["Antoninus", "Claudius", "Julius", "Justinian"],
        correctAnswer: "Julius",
        image: ".............."
    },
    {
        question: "What was the first war to be sanctioned by the United States in 1950?",
        answers: ["Korean War", "Vietnam War", "Crimean War", "World War II"],
        correctAnswer: "Korean War",
        image: ".............."
    },
    ];

    // console.log(questions)
    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: 30,
        correct: 0,
        incorrect: 0,
        unanswered: 0,

        countdown: function () {
            game.counter--;
            //game counter count down and post times up
            $('#counter').html(game.counter);
            if (game.counter <= 0) {
                game.timeUp();
                console.log("Time Up!!!");
            }

        },

        loadQuestion: function () {
            timer = setInterval(game.countdown, 1000);
            $('#subwrapper').html("<h2> TIME REMAINING <span id= 'counter'>30</span> Seconds</h2>");
            $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
            for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                $('#subwrapper').append('<button class= "answer-button" id="button- ' + i + '" data-name= "' +
                    questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
            }//[i] stores the arrey number to store the correct answer in "data-name="
        },

        nextQuestion: function() {
            game.counter = 30;
            $("#counter").html(game.counter);
            game.currentQuestion++;
            game.loadQuestion();
        },

        timeUp: function() {
            clearInterval(timer);
            game.unanswered++;
            $('#subwrapper').html('<h2>OUT OF TIME!</h2>')
            $('#subwrapper').append('<h3>The Correct Answer Was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
            if (game.currentQuestion==questions.length-1) {
                setTimeout(game.result, 3*1000);
            }
            else {
                setTimeout(game.nextQuestion, 3*1000); //need to fix this loop
            }
        },

        result: function() {
            clearInterval(timer);
            $('#subwrapper').html("<h2>ALL DONE</h2>");
            $('#subwrapper').append("<h3>Correct: " + game.correct + "</h3>");
            $('#subwrapper').append("<h3>Incorrect: " + game.incorrect + "</h3>");
            $('#subwrapper').append("<h3>Unanswered: " + game.unanswered + "</h3>");
            $('#subwrapper').append("<button id='reset'>RESET</button>");


        },
        clicked: function(e) {
            clearInterval(timer);
            if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                game.answeredCorrectly();
            }
            else {
                game.answeredIncorrectly();
            }
        },

        answeredCorrectly: function() {
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

        answeredIncorrectly: function() {
            console.log("Wrong Answer")
            clearInterval(timer);
            game.incorrect++;
            $('#subwrapper').html('<h2>YOU GOT IT WRONG!</H2>');
            $('#subwrapper').append('<h3>The Correct Answer Was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
            if (game.currentQuestion==questions.length-1) {
                setTimeout(game.result, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        
        reset: function() {
            game.currentQuestion = 0;
            game.counter = 30;
            game.correct = 0;
            game.incorrect = 0;
            game.unanswered = 0;
            game.loadQuestion();
        }
    };
});
