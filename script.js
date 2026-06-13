const quizData = [
    {
        question: "Hangi tür hikayeler seni daha çok çeker?",
        answers: [
            { text: "Psikolojik Gerilim", type: "psikoloji" },
            { text: "Strateji", type: "strateji" }
        ]
    }
];

let currentQ = 0;
let scores = { psikoloji: 0, strateji: 0 };

function loadQuiz() {
    const q = quizData[currentQ];
    document.getElementById("question").innerText = q.question;
    const buttons = document.getElementById("answer-buttons");
    buttons.innerHTML = q.answers.map(ans => 
        `<button onclick="selectAnswer('${ans.type}')">${ans.text}</button>`
    ).join('');
}

function selectAnswer(type) {
    scores[type]++;
    currentQ++;
    if (currentQ < quizData.length) loadQuiz();
    else document.getElementById("quiz").innerHTML = "<h2>Bitti!</h2>";
}

loadQuiz();
