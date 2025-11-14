const questions = [
    {
        question: "Qual é o maior animal aquático existente?",
        answers:[
            { id: 1, text: "Baleia-azul", correct: true},
            { id: 2, text: "Tubarão-branco", correct: false},
            { id: 3, text: "Tubarão-baleia", correct: false},
            { id: 4, text: "Crocodilo-de-água-salgada", correct: false},
        ]
    },

    {
        question: "Qual animal os brasileiros mais possuem como pet?",
        answers:[
            { id: 1, text: "Gato", correct: false},
            { id: 2, text: "Periquito", correct: false},
            { id: 3, text: "Cão", correct: true},
            { id: 4, text: "Peixe", correct: false},
        ]
    },

    {
        question: "Qual estilo de musica mais ouvido no mundo?",
        answers:[
            { id: 1, text: "Country", correct: false},
            { id: 2, text: "Rock", correct: false},
            { id: 3, text: "Pop", correct: true},
            { id: 4, text: "Hip Hop", correct: false},
        ]
    },

    {
        question: "Qual país mais populoso?",
        answers:[
            { id: 1, text: "China", correct: false},
            { id: 2, text: "Rússia", correct: false},
            { id: 3, text: "Estados Unidos", correct: false},
            { id: 4, text: "Índia", correct: true},
        ]
    },

]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0 
    score = 0 
    nextButton.innerHTML = "Próxima"
}