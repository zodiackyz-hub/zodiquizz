// ... (quizData aynı kalıyor)

const results = {
    psikoloji: { title: "Zihnin Arka Kapısı", desc: "Derin bir düşünürsün, olayların perde arkasını görme yeteneğin var.", emoji: "🧠" },
    strateji: { title: "Zodiack Stratejisti", desc: "Planlı, hırslı ve her hamleni hesaplayan bir oyun kurucusun.", emoji: "♟️" },
    gizem: { title: "Gölge Bahçesi Yolcusu", desc: "Gizemli ve estetik bir ruha sahipsin, karanlığın güzelliğini keşfediyorsun.", emoji: "🌙" }
};

// ... (loadQuiz ve selectAnswer aynı kalıyor)

function showResult() {
    const topType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const res = results[topType];

    document.getElementById("quiz").innerHTML = `
        <h2 style="color:#ff4757;">${res.title}</h2>
        <!-- GÖRSEL YERİNE EMOJİ -->
        <div style="font-size: 80px; margin: 20px 0;">${res.emoji}</div>
        <p style="font-size:18px;">${res.desc}</p>
        <button onclick="location.reload()" style="background:#ff4757;">Tekrar Dene</button>
    `;
}

loadQuiz();
