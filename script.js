function startExperience() {
    document.getElementById("callScreen").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");

    let audio = document.getElementById("ringtone");
    audio.pause();
}

window.onload = () => {
    // Auto play ringtone on load
    let audio = document.getElementById("ringtone");
    audio.volume = 1.0;
    audio.play().catch(() => {
        console.log("Autoplay blocked, will start on interaction");
    });
};

function releaseChaos() {
    const container = document.getElementById("chaosContainer");

    for (let i = 0; i < 20; i++) {
        let el = document.createElement("div");
        el.className = "chaosItem";
        el.innerHTML = ["💐","🌸","🤣","😭","🤍"][Math.floor(Math.random()*5)];
        el.style.left = Math.random() * 100 + "%";
        el.style.fontSize = (30 + Math.random()*30) + "px";

        container.appendChild(el);

        setTimeout(() => el.remove(), 4000);
    }
}
