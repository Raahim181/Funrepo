const compliments = [
    "You know… you're kinda dangerous. That smile? Yeah, illegal 😌",
    "If good vibes were a person, it’d suspiciously look like you 👀",
    "You’re like soft chaos — adorable but unpredictable 💮",
    "You make the day 27% better just by showing up 🌸",
    "Your energy? Elite. Your presence? Approved 💗",
    "You’re cool in a way that should honestly be studied 😭💗"
];

const lilyBtn = document.getElementById("lilyBtn");
const complimentBox = document.getElementById("complimentBox");
const funnySound = document.getElementById("funnySound");

lilyBtn.addEventListener("click", () => {
    funnySound.currentTime = 0;
    funnySound.play().catch(() => {});

    const random = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = random;

    const rect = lilyBtn.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
        const s = document.createElement("div");
        s.classList.add("sparkle");
        s.style.left = (rect.left + rect.width/2 + (Math.random()*60 - 30)) + "px";
        s.style.top = (rect.top + rect.height/2) + "px";
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1200);
    }
});

const phoneBtn = document.getElementById("phoneBtn");
const phoneSound = document.getElementById("phoneSound");

phoneBtn.addEventListener("click", () => {
    phoneSound.pause();
    phoneSound.currentTime = 0;
    phoneSound.play().catch(err => {
        console.log("Audio playback failed:", err);
    });
});
