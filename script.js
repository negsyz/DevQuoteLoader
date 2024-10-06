const quotes = [
    "Kod çalışmıyorsa, her şeyi sil ve sıfırdan başla.",
    "Programlama, sabır ve kahve gerektirir.",
    "Hata mesajları, bilgisayarın size yardım etme çabasıdır.",
    "Önce çalıştır, sonra optimize et.",
    "Yorum satırları, geleceğin sana teşekkürüdür.",
    "Basit kod iyidir. Karmaşık kod kötüdür.",
    "Programlama, problemleri çözmektir.",
    "Hata ayıklama, dedektif olmak gibidir.",
    "Kod tekrarı kötüdür, DRY prensibini unutma.",
    "İyi kod kendi kendini açıklar."
];

const quoteElement = document.getElementById('quote');
const progressBar = document.getElementById('progress');
const percentageElement = document.getElementById('percentage');
const content = document.getElementById('content');
const loader = document.getElementById('loader');

// Rastgele bir söz seç
quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];

let progress = 0;
const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
            loader.style.display = 'none';
            content.style.display = 'block';
        }, 500);
    }
    progressBar.style.width = `${progress}%`;
    percentageElement.textContent = `${Math.round(progress)}%`;
}, 200);
