const correctWords = [
    "uyandım",
    "gidecektik.",
    "hazırladık.",
    "yaptı,",
    "aldım.",
    "çıktım",
    "buluştuk.",
    "parlıyordu,", 
    "esiyordu.",
    "kurduk,",
    "çıkardık",
    "yaptık.",
    "başladık.",
    "katıldı.",
    "oynadık,",
    "eğlendik,",
    "ötüyordu.",
    "döndükten",
    "yorulduk.",
    "yaktık",
    "hazırladık.",
    "getirmişti,",
    "vardı.",
    "başladık.",
    "yerleştirdik.",
    "çıktık",
    "aldım.",
    "izledim",
    "yattım.",
    "geçirdim.",
];
    let selectedWords = [];
    // Sayfa yüklendiğinde metni kelimelere bölüp her kelimeyi span'e sar
    window.onload = () => {
        const textElement = document.getElementById('text');
        const words = textElement.innerText.split(' ');
        // Her kelimeyi span ile sar
        textElement.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
        // Her span'a tıklama olayını ekle
        document.querySelectorAll('#text span').forEach(span => {
            span.addEventListener('click', function() {
                if (this.classList.contains('highlight')) {
                    this.classList.remove('highlight');
                    selectedWords = selectedWords.filter(w => w !== this.textContent);
                } else {
                    this.classList.add('highlight');
                    selectedWords.push(this.textContent);
                }
            });
        });
    };
    function checkWords() {
        let correctCount = 0;
        let totalSelected = selectedWords.length;
        // Seçilen kelimeleri kontrol et
        document.querySelectorAll('#text span').forEach(span => {
            if (selectedWords.includes(span.textContent)) {
                if (correctWords.includes(span.textContent)) {
                    span.classList.remove('highlight');
                    span.classList.add('correct');
                    correctCount++;
                } else {
                    span.classList.remove('highlight');
                    span.classList.add('wrong');
                }
            } else {
                span.classList.remove('highlight', 'correct', 'wrong');
            }
        });
        // Sonucu göster
        const result = `Doğru bilinen fiil sayısı: ${correctCount}/${correctWords.length}`;
        document.getElementById('result').textContent = result;
    }
