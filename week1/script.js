document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const quizQuestions = [
        {
            question: "What year was Call of Duty first released?",
            answers: {
                a: "2000",
                b: "2003",
                c: "2005",
                d: "2010"
            },
            correctAnswer: "b"
        },
        {
            question: "Which game mode is famous in Call of Duty?",
            answers: {
                a: "Battle Royale",
                b: "Deathmatch",
                c: "Capture the Flag",
                d: "All of the above"
            },
            correctAnswer: "d"
        },
        {
            question: "Who is the main protagonist in Call of Duty: Modern Warfare?",
            answers: {
                a: "Captain Price",
                b: "Soap MacTavish",
                c: "John 'Soap' MacTavish",
                d: "Ghost"
            },
            correctAnswer: "c"
        },
        {
            question: "Which developer is responsible for most of the Call of Duty series?",
            answers: {
                a: "Infinity Ward",
                b: "Activision",
                c: "EA Sports",
                d: "Treyarch"
            },
            correctAnswer: "a"
        },
        {
            question: "Which Call of Duty game introduced the Zombies mode?",
            answers: {
                a: "Call of Duty: Black Ops",
                b: "Call of Duty: Modern Warfare 2",
                c: "Call of Duty: Advanced Warfare",
                d: "Call of Duty: WWII"
            },
            correctAnswer: "a"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}: ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        alert(`You got ${numCorrect} out of ${quizQuestions.length} correct!`);
    }

    buildQuiz();

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    submitButton.addEventListener('click', showResults);
    quizContainer.appendChild(submitButton);
});
