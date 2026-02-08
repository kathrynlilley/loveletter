// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

let noX, noY;
let initialized = false;

noBtn.addEventListener("mouseover", (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    // initialize position ON FIRST HOVER
    if (!initialized) {
        noX = btnRect.left;
        noY = btnRect.top;
        noBtn.style.position = "fixed";
        initialized = true;
    }

    const moveDistance = 120;

    const dirX = btnRect.left + btnRect.width / 2 < e.clientX ? -1 : 1;
    const dirY = btnRect.top + btnRect.height / 2 < e.clientY ? -1 : 1;

    noX += dirX * moveDistance;
    noY += dirY * moveDistance;

    const padding = 20;
    const maxX = window.innerWidth - btnRect.width - padding;
    const maxY = window.innerHeight - btnRect.height - padding;

    noX = Math.max(padding, Math.min(noX, maxX));
    noY = Math.max(padding, Math.min(noY, maxY));

    noBtn.style.left = `${noX}px`;
    noBtn.style.top = `${noY}px`;
});


// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
