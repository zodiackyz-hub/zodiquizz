const quizData = [
    {
        question: "Hangi tür hikayeler seni daha çok çeker?",
        answers: [
            { text: "Psikolojik Gerilim", type: "psikoloji" },
            { text: "Strateji ve Macera", type: "strateji" },
            { text: "Karanlık ve Gizemli", type: "gizem" }
        ]
    },
    {
        question: "Bir oyun geliştirirken önceliğin nedir?",
        answers: [
            { text: "Hikaye derinliği", type: "psikoloji" },
            { text: "Oynanış mekanikleri", type: "strateji" },
            { text: "Atmosfer ve müzik", type: "gizem" }
        ]
    }
];

// SONUÇ TANIMLARI
const results = {
    psikoloji: { title: "Zihnin Arka Kapısı", desc: "Sen derin bir düşünürsün! Analitik bir zihne ve olayların perde arkasını görme yeteneğine sahipsin.", img: "sonuc1.jpg" },
    strateji: { title: "Zodiack Stratejisti", desc: "Sen bir oyun kurucusun. Planlı, hırslı ve her hamleni hesaplayan bir karaktere sahipsin.", img: "sonuc2.jpg" },
    gizem: { title: "Gölge Bahçesi Yolcusu", desc: "Sen gizemli ve estetik bir ruha sahipsin. Karanlığın içindeki güzelliği keşfetmek senin işin.", img: "sonuc3.jpg" }
};

let currentQ = 0;
let scores = { psikoloji: 0, strateji: 0, gizem: 0 };

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
    else showResult();
}

function showResult() {
    // En çok seçilen tipi bul
    const topType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const res = results[topType];

    document.getElementById("quiz").innerHTML = `
        <h2>${res.title}</h2>
        <img src="${res.img}" style="width:100%; border-radius:10px; margin:15px 0;">
        <p>${res.desc}</p>
        <button onclick="location.reload()">Tekrar Dene</button>
    `;
}

loadQuiz();
