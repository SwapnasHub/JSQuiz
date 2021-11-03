var questions = [
    {
        question: 'What does HTML Stands for?',
        choices: ['HyperText Mail Language', 'HyperText Markup Language', 'HyperLink and Markup Language', 'Home Tool Markup Language'],
        correctAnswer: 1
    },
    {
        question: 'What is <br> tag?',
        choices: ['bring', 'briefcase', 'break', 'brittle'],
        correctAnswer: 2
    },
    {
        question: 'Do all HTML tags have closing tag?',
        choices: ['Yes', 'No'],
        correctAnswer: 1
    },
    {
        question: 'CSS stands for',
        choices: ['Common Simple Service', 'Corporate Style Suite', 'Corporate Shortest Serevice', 'Cascading Style Sheets'],
        correctAnswer: 3
    },
    {
        question: 'A page designed in HTML is called',
        choices: ['Web Page', 'Markup Page', 'Cover Page', 'Front Page'],
        correctAnswer: 0
    },
    {
        question: 'Which of these paramters is not valid in Javascript?',
        choices: ['variable', 'text', 'operator', 'number'],
        correctAnswer: 2
    },
    {
        question: 'Which is not a comparison operator?',
        choices: ['==', '!=', '=', '>'],
        correctAnswer: 2
    },
    {
        question: 'Which event is specific to the keyboard?',
        choices: ['onmouseover', 'onmouseclick', 'onmouseenter', 'onkeypress'],
        correctAnswer: 3
    },
    {
        question: 'A stricter type of HTML document is known as?',
        choices: ['XML', 'SHTML', 'XHTML', 'NONE'],
        correctAnswer: 2
    },
    {
        question: 'How can you request user inputs in Javascript?',
        choices: ['alert()', 'getinput()', 'enter()', 'prompt()'],
        correctAnswer: 3
    },
    {
        question: 'How can we resize the image?',
        choices: [' Using resize attribute', 'Using size attribute', 'Using rs attribute', 'Using height and width ' ],
        correctAnswer: 3
    },
    {
        question: 'C-style block-level scoping is not supported in Java script.',
        choices: ['True', 'False'],
        correctAnswer: 0
    },
    {
        question: 'The href attribute in the link tag specifies the:',
        choices: ['Reference', 'Destination of the link', 'Link', 'Hypertext'],
        correctAnswer: 1
    },
    {
        question: ' The default font-size of HTML document is?',
        choices: ['5', '15', '16', '4'],
        correctAnswer: 3
    },
    {
        question: ' Which of the following are attributes of Font Tag ?',
        choices: ['Face', 'Size', 'Color', 'All the above'],
        correctAnswer: 3
    },
    {
        question: 'Which of these are valid CSS3 transformation statements.',
        choices: ['matrix()', 'skip()', 'simulate()', 'modify()'],
        correctAnswer: 0
    },
    {
        question: 'What does the a stand for in RGBa?',
        choices: ['apple', 'aqua', 'alpha', 'above'],
        correctAnswer: 2
    },
    {
        question: 'Which attribute needs to be changed to make elements invisible?',
        choices: ['visibility', 'invisibility', 'visible', 'invisible'],
        correctAnswer: 0
    },
    {
        question: 'Has CSS3 been fully supported by all browsers?',
        choices: ['Yes', 'No'],
        correctAnswer: 1
    },
    {
        question: ' How can you created rounded corners using CSS3?',
        choices: ['border[round]: 30px;', 'corner-effect: round;', 'border-radius: 30px;', 'alpha-effect: round-corner'],
        correctAnswer: 2
    },
    {
        question: 'Which JavaScript is also called client-side JavaScript.',
        choices: ['Vanilla', 'Navigator', 'LiveWire', 'Native'],
        correctAnswer: 1
    },
    {
        question: 'Java Script entities start with ? and end with  ? ',
        choices: ['Semicolon, colon', 'Semicolon, Ampersand', 'Ampersand, semicolon', 'Ampersand, colon'],
        correctAnswer: 2
    },
    {
        question: 'Which of the following is correct to write “Hello World” on the web page?',
        choices: ['document.write(“Hello World”)', 'System.out.println(“Hello World”)', ' print(“Hello World”)', 'None of the above'],
        correctAnswer: 0
    },
    {
        question: 'HTML Code written in MAC can be browsed in a PC with Window 7 installed , User will be able to see same design that was designed on the MAC Pc.',
        choices: ['True', 'False'],
        correctAnswer: 0
    },
    {
        question: ' How to force a word wrap using CSS3?',
        choices: ['text-wrap: break-word;', 'text-wrap: force;', 'word-wrap: break-word;', 'text-width: set;'],
        correctAnswer: 2
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');

        quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(){
        
        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null){
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.querySelector('.nextButton').innerText = 'Wanna Play Again?';
                    quizOver = true;
                 }
                }   
        } else {
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
        }
    });
});


function displayCurrentQuestion(){
    console.log('In display current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        var li = document.createElement('li');
            li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);

    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    quizOver = false;
    document.querySelector('.nextButton').innerText = 'Next Question';
    hideScore();
    

        display = document.querySelector('#time');
    startTimer(eightMinutes, display);
    displayCurrentQuestion();
}

//
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

         if (--timer < 0) {
            display.textContent = "00:00" ;
            quizOver = true;
            displayScore();


            document.querySelector('').addEventListener('click', function(){
                resetQuiz();
            });
    
            
        }
    }, 1000);
}

window.onload = function () {
    var eightMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(eightMinutes, display);
    setTimeout( function ( ) { alert( "You are running out of time!!" ); }, 200000 ); //displays alert message at 1 min
};

function displayScore(){
    document.querySelector('.quizContainer > .result').innerText = 'Congratulations! You scored: ' + correctAnswers + ' out of ' + questions.length;
    document.querySelector('.quizContainer > .result').style.display = 'block';
}

function hideScore(){
    document.querySelector('.result').style.display = 'none';
     
}
