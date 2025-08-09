const languageContent = {
    en: {
        main_title: "MATRIX — Building and Repairing Gaming Computers",
        company_description: "We are a team of dedicated professionals specializing in high-performance gaming PCs. Our sole focus is on gaming computers, and we do not service phones or tablets.",
        services_title: "Our Services",
        service_1: "Custom PC Builds",
        service_2: "Repair and Diagnostics",
        service_3: "Software/Game Installation",
        reviews_title: "Reviews",
        add_review_btn: "Add a Review",
        contact_title: "Contact Us"
    },
    ru: {
        main_title: "MATRIX — Сборка и ремонт игровых компьютеров",
        company_description: "Мы — команда преданных своему делу профессионалов, специализирующихся на высокопроизводительных игровых ПК. Наша единственная специализация — игровые компьютеры, и мы не обслуживаем телефоны или планшеты.",
        services_title: "Наши услуги",
        service_1: "Сборка ПК на заказ",
        service_2: "Ремонт и диагностика",
        service_3: "Установка программного обеспечения/игр",
        reviews_title: "Отзывы",
        add_review_btn: "Добавить отзыв",
        contact_title: "Свяжитесь с нами"
    },
    uz: {
        main_title: "MATRIX — O'yin kompyuterlarini qurish va ta'mirlash",
        company_description: "Biz yuqori unumdorlikdagi o'yin kompyuterlariga ixtisoslashgan professional mutaxassislar jamoasimiz. Bizning yagona yo'nalishimiz - bu o'yin kompyuterlari va biz telefonlar yoki planshetlarga xizmat ko'rsatmaymiz.",
        services_title: "Bizning xizmatlarimiz",
        service_1: "Maxsus kompyuter yig'ish",
        service_2: "Ta'mirlash va diagnostika",
        service_3: "Dasturiy ta'minot/o'yinlarni o'rnatish",
        reviews_title: "Sharhlar",
        add_review_btn: "Sharh qo'shish",
        contact_title: "Biz bilan bog'laning"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (languageContent[lang][key]) {
            el.textContent = languageContent[lang][key];
        }
    });

    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelector(`.language-switcher button[onclick="switchLanguage('${lang}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Set default language
    switchLanguage('en');

    // Add review button functionality
    const addReviewBtn = document.getElementById('add-review-btn');
    addReviewBtn.addEventListener('click', () => {
        alert('The review submission form is currently under development. Please check back later!');
    });

    // Matrix background effect
    const matrixBackground = document.getElementById('matrix-background');
    const canvas = document.createElement('canvas');
    matrixBackground.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = '01'; // Simplified to 0s and 1s for a more digital rain effect
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) { // Slower reset
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 50); // Slower interval
});
