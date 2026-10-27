// ==========================================================================
// DİNAMİK ARAMA VE FİLTRELEME YÖNETİMİ
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementlerinin Seçimi
    const searchInput = document.getElementById('event-search');
    const eventCards = document.querySelectorAll('.event-card');
    const resultCounter = document.getElementById('result-counter');
    const noResultsMessage = document.getElementById('no-results');

    // Arama Fonksiyonu
    function filterEvents() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        eventCards.forEach(card => {
            // Kart içindeki başlık ve açıklama metinlerini alma
            const titleText = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
            const descText = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';

            // Arama terimi başlıkta veya açıklamada geçiyor mu?
            const isMatch = titleText.includes(searchTerm) || descText.includes(searchTerm);

            if (isMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Sayaç Güncelleme
        if (resultCounter) {
            resultCounter.textContent = `${visibleCount} Etkinlik Bulundu`;
        }

        // Bulunamadı Uyarısı Kontrolü
        if (noResultsMessage) {
            if (visibleCount === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        }
    }

    // Dinamik Dinleyici (Kullanıcı her karakter girdiğinde çalışır)
    if (searchInput) {
        searchInput.addEventListener('input', filterEvents);
    }
});