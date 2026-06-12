const quizData = [
    {
        question: "Hangi tür hikayeler seni daha çok çeker?",
        a: "Psikolojik Gerilim",
        b: "Strateji ve Macera",
        c: "Karanlık ve Gizemli"
    },
    {
        question: "Bir oyun geliştirirken önceliğin nedir?",
        a: "Hikaye derinliği",
        b: "Oynanış mekanikleri",
        c: "Atmosfer ve müzik"
    }
];

let currentQ = 0;

function loadQuiz() {
    const q = quizData[currentQ];
    document.getElementById("question").innerText = q.question;
    const buttons = document.getElementById("answer-buttons");
    buttons.innerHTML = `
        <button onclick="nextQuestion()">${q.a}</button>
        <button onclick="nextQuestion()">${q.b}</button>
        <button onclick="nextQuestion()">${q.c}</button>
    `;
}

function nextQuestion() {
    currentQ++;
    if (currentQ < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById("quiz").innerHTML = "<h2>Tebrikler! Zodiquiz bitti.</h2><button onclick='location.reload()'>Başa Dön</button>";
    }
}

loadQuiz();