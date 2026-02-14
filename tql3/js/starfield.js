// Starfield background effect - V4 Celestial Light
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';

let width, height, stars;

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    stars = [];
    const starCount = Math.floor((width * height) / 10000); // Very sparse for light theme

    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.04 + 0.01,
            opacity: Math.random() * 0.2 + 0.1
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);

    // Subtle dark stellar dust / light gray particles
    ctx.fillStyle = '#cbd5e0';

    stars.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.speed;
        if (star.y < -10) {
            star.y = height + 10;
            star.x = Math.random() * width;
        }
    });

    requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();
