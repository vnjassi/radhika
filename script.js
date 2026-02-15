// Typing animation
const text = "You are amazing, kind and special 🌸";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();

// Surprise message
function showMessage() {
    document.getElementById("message").classList.remove("hidden");
}

// Floating hearts animation
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 60; i++) {
    hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 1 + 0.5
    });
}

function drawHeart(x, y, size) {
    ctx.fillStyle = "rgba(255,0,80,0.7)";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size, x - size, y - size, x - size, y);
    ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
    ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
    ctx.bezierCurveTo(x + size, y - size, x, y - size, x, y);
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
        drawHeart(h.x, h.y, h.size);
        h.y -= h.speed;

        if (h.y < -20) {
            h.y = canvas.height + 20;
            h.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animate);
}
animate();
