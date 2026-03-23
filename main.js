// --- Localization Data ---
const translations = {
    en: {
        siteTitle: "AI Multi App - Fun AI Tools",
        animalTab: "Animal Face Test",
        lottoTab: "Lotto Generator",
        aboutTab: "About Us",
        privacyTab: "Privacy Policy",
        animalTitle: "AI Animal Face Test",
        animalSubtitle: "Am I a Dog or a Cat?",
        uploadText: "Click or Drag to Upload Face",
        analyzing: "Analyzing...",
        resultPrefix: "You look like a ",
        resultSuffix: "!",
        animalDescTitle: "About AI Animal Face Test",
        animalDescBody: "This tool uses Google's Teachable Machine technology to analyze your facial features and determine which animal face you resemble most. Your photos are processed locally in your browser and are never uploaded to our servers.",
        lottoTitle: "Lotto Number Generator",
        generateBtn: "Generate Numbers",
        lottoDescTitle: "About Lotto Generator",
        lottoDescBody: "Get your lucky numbers for the next draw! Our random generator provides six unique numbers between 1 and 45. Try your luck today with our fair and transparent algorithm.",
        aboutBody: "Welcome to AI Multi App! We provide fun and useful web tools powered by modern technology. Our goal is to create simple yet engaging experiences for everyone. From AI-driven image analysis to simple utility tools, we strive for quality and user satisfaction.",
        privacyInfoTitle: "Information Collection",
        privacyInfoBody: "We do not store or collect any personal photos or facial data. All analysis is performed within your browser using client-side JavaScript.",
        privacyAdTitle: "Advertising",
        privacyAdBody: "We use Google AdSense to serve ads. Google uses cookies to serve ads based on a user's prior visits to your website or other websites.",
        footerTagline: "Bringing fun to your browser with AI.",
        contactTitle: "Partnership Inquiry",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "email@domain.com",
        messagePlaceholder: "How can we help?",
        sendBtn: "Send Message",
        themeDark: "Dark Mode",
        themeLight: "Light Mode",
        langBtn: "한국어",
        animalDog: "Dog",
        animalCat: "Cat",
        commentDog: "You have a friendly and energetic 'Dog' face! People feel comfortable and happy around you.",
        commentCat: "You have a chic and mysterious 'Cat' face! You possess a unique charm that draws people in.",
        commentDefault: "What a wonderful and unique face you have!"
    },
    ko: {
        siteTitle: "AI 멀티 앱 - 재미있는 AI 도구",
        animalTab: "동물상 테스트",
        lottoTab: "로또 번호 생성기",
        aboutTab: "소개",
        privacyTab: "개인정보 처리방침",
        animalTitle: "AI 동물상 테스트",
        animalSubtitle: "나는 강아지상일까, 고양이상일까?",
        uploadText: "얼굴 사진을 클릭하거나 드래그해서 업로드하세요",
        analyzing: "분석 중...",
        resultPrefix: "당신은 ",
        resultSuffix: "상입니다!",
        animalDescTitle: "AI 동물상 테스트 정보",
        animalDescBody: "이 도구는 구글의 Teachable Machine 기술을 사용하여 사용자의 얼굴 특징을 분석하고 가장 닮은 동물상을 찾아냅니다. 사진은 브라우저에서 로컬로 처리되며 서버에 업로드되지 않습니다.",
        lottoTitle: "로또 번호 생성기",
        generateBtn: "번호 생성하기",
        lottoDescTitle: "로또 번호 생성기 정보",
        lottoDescBody: "다음 추첨을 위한 행운의 번호를 확인하세요! 무작위 생성기가 1에서 45 사이의 6개 번호를 제공합니다. 공정하고 투명한 알고리즘으로 행운을 시험해보세요.",
        aboutBody: "AI 멀티 앱에 오신 것을 환영합니다! 현대적인 기술을 활용하여 재미있고 유용한 웹 도구를 제공합니다. 우리의 목표는 누구나 쉽고 즐겁게 이용할 수 있는 경험을 만드는 것입니다. AI 분석부터 유틸리티 도구까지, 품질과 사용자 만족을 위해 최선을 다하고 있습니다.",
        privacyInfoTitle: "정보 수집",
        privacyInfoBody: "우리는 어떠한 개인 사진이나 얼굴 데이터도 저장하거나 수집하지 않습니다. 모든 분석은 클라이언트 측 JavaScript를 통해 브라우저 내에서 수행됩니다.",
        privacyAdTitle: "광고",
        privacyAdBody: "우리는 광고 게재를 위해 Google AdSense를 사용합니다. 구글은 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 광고를 게재합니다.",
        footerTagline: "AI와 함께 브라우저에서 즐거운 경험을 선사합니다.",
        contactTitle: "제휴 문의",
        nameLabel: "이름",
        emailLabel: "이메일",
        messageLabel: "문의 내용",
        namePlaceholder: "이름을 입력하세요",
        emailPlaceholder: "email@domain.com",
        messagePlaceholder: "어떤 도움이 필요하신가요?",
        sendBtn: "메시지 보내기",
        themeDark: "다크 모드",
        themeLight: "라이트 모드",
        langBtn: "English",
        animalDog: "강아지",
        animalCat: "고양이",
        commentDog: "상냥하고 에너지가 넘치는 '강아지상'이시네요! 주변 사람들을 즐겁게 만드는 매력이 있습니다.",
        commentCat: "세련되고 신비로운 '고양이상'이시네요! 사람을 끌어당기는 독특한 분위기를 가지고 계십니다.",
        commentDefault: "정말 멋지고 개성 넘치는 얼굴을 가지셨네요!"
    }
};

// --- State Management ---
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

// --- Select Elements ---
const numbersContainer = document.querySelector('.numbers-container');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

// --- Theme Logic ---
function updateTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'light' ? translations[currentLang].themeDark : translations[currentLang].themeLight;
    localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    updateTheme(currentTheme);
});

// --- Language Logic ---
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    langToggle.textContent = translations[lang].langBtn;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[lang][key];
    });

    // Update theme toggle text
    updateTheme(currentTheme);
    
    // Re-run prediction if image exists to update comments language
    if (!faceImage.hidden) {
        predict();
    }
}

langToggle.addEventListener('click', () => {
    updateLanguage(currentLang === 'en' ? 'ko' : 'en');
});

// --- Lotto Logic ---
function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    }
}

function handleGenerateClick() {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
}

generateBtn.addEventListener('click', handleGenerateClick);

// --- Animal Face Test Logic ---
const URL = "https://teachablemachine.withgoogle.com/models/PHq3HhwNM/"; 
let model, labelContainer, maxPredictions;

async function initModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");
}

const uploadArea = document.getElementById('upload-area');
const imageInput = document.getElementById('image-input');
const faceImage = document.getElementById('face-image');
const uploadLabel = document.querySelector('.upload-label');
const resultContainer = document.getElementById('result-container');
const loadingSpinner = document.getElementById('loading-spinner');
const resultMessage = document.getElementById('result-message');

[uploadArea, faceImage].forEach(el => {
    if (el) {
        el.addEventListener('click', () => {
            imageInput.value = "";
            imageInput.click();
        });
    }
});

if (imageInput) {
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                faceImage.src = event.target.result;
                faceImage.hidden = false;
                uploadLabel.hidden = true;
                predict();
            };
            reader.readAsDataURL(file);
        }
    });
}

async function predict() {
    if (!model) {
        loadingSpinner.hidden = false;
        await initModel();
    }
    
    loadingSpinner.hidden = false;
    resultContainer.hidden = true;
    
    const prediction = await model.predict(faceImage);
    loadingSpinner.hidden = true;
    resultContainer.hidden = false;
    
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    
    const topResult = prediction[0].className; // Assuming model outputs "Dog" or "Cat"
    
    // Map model class to localized name and comment
    let animalKey = topResult.toLowerCase().includes("dog") || topResult.includes("강아지") ? "Dog" : "Cat";
    const localizedAnimal = translations[currentLang][`animal${animalKey}`];
    const comment = translations[currentLang][`comment${animalKey}`] || translations[currentLang].commentDefault;
    
    resultMessage.innerHTML = `
        <div class="top-result-text">${translations[currentLang].resultPrefix}<span>${localizedAnimal}</span>${translations[currentLang].resultSuffix}</div>
        <p class="comment-text">${comment}</p>
    `;
    
    labelContainer.innerHTML = "";
    for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const probability = (prediction[i].probability * 100).toFixed(0);
        
        const barContainer = document.createElement('div');
        barContainer.classList.add('bar-container');
        
        const barFill = document.createElement('div');
        barFill.classList.add('bar-fill');
        barFill.style.width = probability + "%";
        const isDog = className.toLowerCase().includes("dog") || className.includes("강아지");
        barFill.style.backgroundColor = isDog ? "#4CAF50" : "#2196F3";
        
        const barText = document.createElement('div');
        barText.classList.add('bar-text');
        // Localize bar labels
        const barAnimalKey = className.toLowerCase().includes("dog") || className.includes("강아지") ? "Dog" : "Cat";
        barText.textContent = `${translations[currentLang][`animal${barAnimalKey}`]}: ${probability}%`;
        
        barContainer.appendChild(barFill);
        barContainer.appendChild(barText);
        labelContainer.appendChild(barContainer);
    }
}

// --- Tab Switching Logic ---
const tabButtons = document.querySelectorAll('.tab-btn');
const contentSections = document.querySelectorAll('.content-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

// --- Initial Setup ---
updateTheme(currentTheme);
updateLanguage(currentLang);
handleGenerateClick();
