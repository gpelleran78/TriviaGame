// $(document).ready(function) {

$('#start').on(click, function(){
    $('#start').remove();
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
    question:questions,
    currentQuestion:0,
    counter:30,
    courrect:0,
    incourrect:0,

    countdown: function(){

    },
    loadQuestion: function(){

    },
    nextQuestion: function(){

    },
    timeUp: function(){

    },
    result: function(){

    },
    clicked: function(){

    },
    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    reset: function(){

    }
}
