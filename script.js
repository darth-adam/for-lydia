const question = document.getElementById('question');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const response = document.getElementById('response');
const bear = document.getElementById('bear');

const responses = [
    "Oh really?",
    "Aw come onnnnn",
    "Oh pleaseeeee!!!!!!",
    "Pretty please?",
    "You're breaking my heart!",
    "Just say yes already!"
];

const bearImages = [
    "images/bear-neutral.png",
    "images/bear-sad1.png",
    "images/bear-sad2.png",
    "images/bear-sad3.png",
];

let responseIndex = 0;
let sadIndex = 0;

noBtn.addEventListener('click', () => {
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 10}px`;

    if (sadIndex < bearImages.length - 1) {
        sadIndex++;
        bear.src = bearImages[sadIndex];
    }

    if (responseIndex < responses.length) {
        question.textContent = responses[responseIndex];
        responseIndex++;
    } else {
        responseIndex = 0;
        question.textContent = responses[responseIndex];
    }
});

yesBtn.addEventListener('click', () => {
    question.textContent = "YAYYYYYY THANK YOUUUUU!";
    response.textContent = "You've made me the happiest person alive! 💖";
    bear.src = "images/bear-kiss.png";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});