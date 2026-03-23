// --- Localization Data ---
const translations = {
    en: {
        siteTitle: "AI Multi App - Fun AI Tools & Insights",
        animalTab: "Animal Face Test",
        lottoTab: "Lotto Generator",
        insightsTab: "Insights",
        aboutTab: "About Us",
        privacyTab: "Privacy Policy",
        contactTab: "Contact",
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
        aboutBody: "Welcome to AI Multi App! We provide fun and useful web tools powered by modern technology. Our goal is to create simple yet engaging experiences for everyone. From AI-driven image analysis to simple utility tools, we strive for quality and user satisfaction. Our platform is built using the latest web standards and prioritizes user privacy and security above all else.",
        termsTitle: "Terms of Service",
        termsBody: "By accessing or using AI Multi App, you agree to be bound by these Terms of Service. Our AI tools and utilities are provided for entertainment and informational purposes only. We do not guarantee the accuracy or reliability of any results. Users are responsible for their own use of the tools and must comply with all local and international laws. We reserve the right to modify or terminate our services at any time without prior notice. Our software is provided 'as is' without warranties of any kind, express or implied.",
        privacyInfoTitle: "Privacy and Data Collection",
        privacyInfoBody: "Your privacy is our top priority. Unlike many AI platforms, we do not upload your photos to any servers. All facial analysis is performed locally in your browser using TensorFlow.js. We do not collect, store, or share any personal identifiable information or biometric data. Any data generated during your session is transient and exists only within your browser's memory.",
        privacyAdTitle: "Cookie and Advertising Policy",
        privacyAdBody: "We use Google AdSense to serve advertisements on our site. Google uses cookies to serve ads based on your previous visits to our website and other websites on the internet. You may opt out of personalized advertising by visiting Google's Ad Settings. We also use basic analytics to improve our service, which may involve the use of non-identifying cookies.",
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
        backToBlog: "Back to All Articles",
        readMore: "Read More",
        genderMale: "Male",
        genderFemale: "Female",
        retryBtn: "Try Again",
        animalDog: "Dog",
        animalCat: "Cat",
        animalRabbit: "Rabbit",
        animalDinosaur: "Dinosaur",
        animalBear: "Bear",
        commentDogMale: "Friendly and energetic 'Dog' face! You have a warm heart and a bright personality.",
        commentCatMale: "Chic and mysterious 'Cat' face! You possess a unique charisma and sophisticated charm.",
        commentRabbitMale: "Cute and gentle 'Rabbit' face! You give off a kind and approachable vibe.",
        commentDinosaurMale: "Strong and manly 'Dinosaur' face! You have a powerful aura and a clear sense of self.",
        commentBearMale: "Sturdy and reliable 'Bear' face! You have a generous nature and people feel safe with you.",
        commentDogFemale: "Lovely and cheerful 'Dog' face! Your positive energy makes everyone around you happy.",
        commentCatFemale: "Elegant and seductive 'Cat' face! You have a mysterious charm that everyone is drawn to.",
        commentRabbitFemale: "Soft and pure 'Rabbit' face! Your bright smile and kind nature are your greatest strengths.",
        commentDinosaurFemale: "Chic and strong 'Dinosaur' face! You have a unique style and an independent spirit.",
        commentBearFemale: "Warm and cozy 'Bear' face! You provide comfort and stability to those around you.",
        commentDefault: "What a wonderful and unique face you have!"
    },
    ko: {
        siteTitle: "AI 멀티 앱 - 재미있는 AI 도구 & 통찰",
        animalTab: "동물상 테스트",
        lottoTab: "로또 번호 생성기",
        insightsTab: "통찰(블로그)",
        aboutTab: "소개",
        privacyTab: "개인정보 처리방침",
        contactTab: "문의",
        animalTitle: "AI 동물상 테스트",
        animalSubtitle: "나는 어떤 동물을 닮았을까?",
        uploadText: "사진을 클릭하거나 드래그해서 업로드하세요",
        analyzing: "분석 중...",
        resultPrefix: "당신은 ",
        resultSuffix: "상입니다!",
        animalDescTitle: "AI 동물상 테스트 정보",
        animalDescBody: "이 도구는 구글의 Teachable Machine 기술을 사용하여 사용자의 얼굴 특징을 분석하고 가장 닮은 동물상을 찾아냅니다. 사진은 브라우저에서 로컬로 처리되며 서버에 업로드되지 않습니다.",
        lottoTitle: "로또 번호 생성기",
        generateBtn: "번호 생성하기",
        lottoDescTitle: "로또 번호 생성기 정보",
        lottoDescBody: "다음 추첨을 위한 행운의 번호를 확인하세요! 무작위 생성기가 1에서 45 사이의 6개 번호를 제공합니다. 공정하고 투명한 알고리즘으로 행운을 시험해보세요.",
        aboutBody: "AI 멀티 앱에 오신 것을 환영합니다! 현대적인 기술을 활용하여 재미있고 유용한 웹 도구를 제공합니다. 우리의 목표는 누구나 쉽고 즐겁게 이용할 수 있는 경험을 만드는 것입니다. AI 분석부터 유틸리티 도구까지, 품질과 사용자 만족을 위해 최선을 다하고 있습니다. 우리 플랫폼은 최신 웹 표준을 사용하여 구축되었으며 무엇보다 사용자 개인 정보 보호 및 보안을 최우선으로 생각합니다.",
        termsTitle: "서비스 약관",
        termsBody: "AI 멀티 앱에 접속하거나 사용함으로써 귀하는 본 서비스 약관의 구속을 받는 데 동의하게 됩니다. 당사의 AI 도구 및 유틸리티는 오락 및 정보 제공 목적으로만 제공됩니다. 당사는 결과의 정확성이나 신뢰성을 보장하지 않습니다. 사용자는 도구 사용에 대한 책임을 지며 모든 현지 및 국제법을 준수해야 합니다. 당사는 사전 통지 없이 언제든지 서비스를 수정하거나 중단할 권리가 있습니다. 당사의 소프트웨어는 명시적 또는 묵시적인 어떠한 종류의 보증 없이 '있는 그대로' 제공됩니다.",
        privacyInfoTitle: "개인정보 보호 및 데이터 수집",
        privacyInfoBody: "귀하의 개인정보 보호는 당사의 최우선 과제입니다. 많은 AI 플랫폼과 달리 당사는 귀하의 사진을 서버에 업로드하지 않습니다. 모든 얼굴 분석은 TensorFlow.js를 사용하여 브라우저에서 로컬로 수행됩니다. 당사는 개인 식별 정보나 생체 인식 데이터를 수집, 저장 또는 공유하지 않습니다. 세션 중에 생성된 모든 데이터는 일시적이며 브라우저의 메모리 내에만 존재합니다.",
        privacyAdTitle: "쿠키 및 광고 정책",
        privacyAdBody: "당사는 사이트에 광고를 게재하기 위해 Google AdSense를 사용합니다. 구글은 귀하가 당사 웹사이트 및 인터넷의 다른 웹사이트를 이전에 방문한 기록을 바탕으로 광고를 게재하기 위해 쿠키를 사용합니다. 구글의 광고 설정 페이지를 방문하여 맞춤형 광고를 거부할 수 있습니다. 또한 서비스 개선을 위해 기본 분석을 사용하며, 이 과정에서 비식별 쿠키가 사용될 수 있습니다.",
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
        backToBlog: "전체 글 목록으로",
        readMore: "더 읽어보기",
        genderMale: "남성",
        genderFemale: "여성",
        retryBtn: "다시 시도하기",
        animalDog: "강아지",
        animalCat: "고양이",
        animalRabbit: "토끼",
        animalDinosaur: "공룡",
        animalBear: "곰",
        commentDogMale: "다정다감하고 에너지가 넘치는 '강아지상'이시네요! 주변 사람들을 즐겁게 만드는 매력이 있습니다.",
        commentCatMale: "시크하고 신비로운 '고양이상'이시네요! 도도하면서도 세련된 분위기를 풍기며 사람을 끌어당깁니다.",
        commentRabbitMale: "귀엽고 순수한 '토끼상'이시네요! 다가가기 쉽고 선한 인상으로 주변에 긍정적인 에너지를 줍니다.",
        commentDinosaurMale: "강인하고 남자다운 '공룡상'이시네요! 뚜렷한 이목구비와 강력한 카리스마로 신뢰를 주는 인상입니다.",
        commentBearMale: "듬직하고 믿음직스러운 '곰상'이시네요! 포근한 매력과 넓은 마음으로 주변 사람들을 편안하게 해줍니다.",
        commentDogFemale: "사랑스럽고 발랄한 '강아지상'이시네요! 당신의 긍정적인 에너지는 주변 사람들을 행복하게 만듭니다.",
        commentCatFemale: "우아하고 매혹적인 '고양이상'이시네요! 신비로운 매력을 지니고 있어 누구나 빠져들게 만듭니다.",
        commentRabbitFemale: "부드럽고 맑은 '토끼상'이시네요! 환한 미소와 착한 성품이 당신의 가장 큰 장점입니다.",
        commentDinosaurFemale: "시크하고 강렬한 '공룡상'이시네요! 당신만의 독특한 스타일과 독립적인 정신을 가지고 있습니다.",
        commentBearFemale: "따뜻하고 포근한 '곰상'이시네요! 주변 사람들에게 위로와 안정감을 주는 존재입니다.",
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
const blogListing = document.getElementById('blog-listing');
const articleViewer = document.getElementById('article-viewer');
const articleContent = document.getElementById('article-content');
const backToBlogBtn = document.getElementById('back-to-blog');
const retryBtn = document.getElementById('retry-btn');

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
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update theme toggle text
    updateTheme(currentTheme);
    
    // Render blog listing with new language
    renderBlogListing();

    // Re-run prediction if image exists to update comments language
    if (typeof faceImage !== 'undefined' && !faceImage.hidden) {
        predict();
    }
}

langToggle.addEventListener('click', () => {
    updateLanguage(currentLang === 'en' ? 'ko' : 'en');
});

// --- Blog Logic ---
function renderBlogListing() {
    if (!blogListing) return;
    blogListing.innerHTML = '';
    if (!articles || !articles[currentLang]) return;
    articles[currentLang].forEach(article => {
        const card = document.createElement('div');
        card.classList.add('blog-card');
        card.innerHTML = `
            <h3>${article.title}</h3>
            <div class="blog-date">${article.date}</div>
            <p>${article.excerpt}</p>
            <button class="read-more-btn" onclick="showArticle(${article.id})">${translations[currentLang].readMore}</button>
        `;
        blogListing.appendChild(card);
    });
}

function showArticle(id) {
    const article = articles[currentLang].find(a => a.id === id);
    if (article) {
        blogListing.hidden = true;
        articleViewer.hidden = false;
        articleContent.innerHTML = `
            <h1>${article.title}</h1>
            <div class="blog-date">${article.date}</div>
            <div class="full-content">${article.content}</div>
        `;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

if (backToBlogBtn) {
    backToBlogBtn.addEventListener('click', () => {
        articleViewer.hidden = true;
        blogListing.hidden = false;
    });
}

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

function getAnimalKey(className) {
    const lower = className.toLowerCase();
    if (lower.includes("dog") || lower.includes("강아지")) return "Dog";
    if (lower.includes("cat") || lower.includes("고양이")) return "Cat";
    if (lower.includes("rabbit") || lower.includes("토끼")) return "Rabbit";
    if (lower.includes("dinosaur") || lower.includes("공룡")) return "Dinosaur";
    if (lower.includes("bear") || lower.includes("곰")) return "Bear";
    return "Dog"; // Default
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
    
    const topResult = prediction[0].className;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    const animalKey = getAnimalKey(topResult);
    const localizedAnimal = translations[currentLang][`animal${animalKey}`];
    const genderKey = gender.charAt(0).toUpperCase() + gender.slice(1);
    const comment = translations[currentLang][`comment${animalKey}${genderKey}`] || translations[currentLang].commentDefault;
    
    resultMessage.innerHTML = `
        <div class="top-result-text">${translations[currentLang].resultPrefix}<span>${localizedAnimal}</span>${translations[currentLang].resultSuffix}</div>
        <p class="comment-text">${comment}</p>
    `;
    
    labelContainer.innerHTML = "";
    for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const probability = (prediction[i].probability * 100).toFixed(0);
        
        const barItem = document.createElement('div');
        barItem.classList.add('bar-item');
        
        const barAnimalKey = getAnimalKey(className);
        const barColor = {
            "Dog": "#FFD700", "Cat": "#FF69B4", "Rabbit": "#32CD32", "Dinosaur": "#FF4500", "Bear": "#8B4513"
        }[barAnimalKey] || "#4CAF50";

        barItem.innerHTML = `
            <div class="bar-label-group">
                <span>${translations[currentLang][`animal${barAnimalKey}`]}</span>
                <span>${probability}%</span>
            </div>
            <div class="bar-container">
                <div class="bar-fill" style="width: ${probability}%; background-color: ${barColor}"></div>
            </div>
        `;
        labelContainer.appendChild(barItem);
    }
}

if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        resultContainer.hidden = true;
        faceImage.hidden = true;
        uploadLabel.hidden = false;
        imageInput.value = "";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Tab Switching Logic ---
const tabButtons = document.querySelectorAll('.tab-btn');
const contentSections = document.querySelectorAll('.content-section');
const footerLinks = document.querySelectorAll('.footer-link');

function switchTab(targetId) {
    tabButtons.forEach(btn => {
        if (btn.getAttribute('data-target') === targetId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    contentSections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
    
    // Reset blog view if switching to insights
    if (targetId === 'insights-section') {
        articleViewer.hidden = true;
        blogListing.hidden = false;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchTab(button.getAttribute('data-target'));
    });
});

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab(link.getAttribute('data-target'));
    });
});

// --- Initial Setup ---
updateTheme(currentTheme);
updateLanguage(currentLang);
handleGenerateClick();
