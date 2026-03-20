// Select elements
const numbersContainer = document.querySelector('.numbers-container');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    themeToggle.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
}

// Lotto Logic
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

const ANIMAL_COMMENTS = {
    "Dog": "You have a friendly and energetic 'Dog' face! People feel comfortable and happy around you.",
    "Cat": "You have a chic and mysterious 'Cat' face! You possess a unique charm that draws people in.",
    "강아지": "상냥하고 에너지가 넘치는 '강아지상'이시네요! 주변 사람들을 즐겁게 만드는 매력이 있습니다.",
    "고양이": "세련되고 신비로운 '고양이상'이시네요! 사람을 끌어당기는 독특한 분위기를 가지고 계십니다.",
    "Default": "정말 멋지고 개성 넘치는 얼굴을 가지셨네요!"
};

// Initialize the image model
async function initModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");
}

// Image Upload and Preview
const uploadArea = document.getElementById('upload-area');
const imageInput = document.getElementById('image-input');
const faceImage = document.getElementById('face-image');
const uploadLabel = document.querySelector('.upload-label');
const resultContainer = document.getElementById('result-container');
const loadingSpinner = document.getElementById('loading-spinner');
const resultMessage = document.getElementById('result-message');

// 이미지를 클릭해도 다시 업로드할 수 있도록 설정
[uploadArea, faceImage].forEach(el => {
    if (el) {
        el.addEventListener('click', () => {
            imageInput.value = ""; // 동일 파일 재업로드 가능하게 초기화
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
    
    // Sort and Display results
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    
    const topResult = prediction[0].className;
    // 매핑 (Dog/dog/강아지 등 대소문자 및 한글 대응)
    const commentKey = Object.keys(ANIMAL_COMMENTS).find(key => 
        key.toLowerCase() === topResult.toLowerCase() || key === topResult
    );
    const comment = ANIMAL_COMMENTS[commentKey] || ANIMAL_COMMENTS["Default"];
    
    resultMessage.innerHTML = `
        <div class="top-result-text">You look like a <span>${topResult}</span>!</div>
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
        // 색상 지정 (한글/영문 대응)
        const isDog = className.toLowerCase().includes("dog") || className.includes("강아지");
        barFill.style.backgroundColor = isDog ? "#4CAF50" : "#2196F3";
        
        const barText = document.createElement('div');
        barText.classList.add('bar-text');
        barText.textContent = `${className}: ${probability}%`;
        
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

// Initial lotto generation
handleGenerateClick();
