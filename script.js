document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.createElement("p");
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = "صباح الخير!";
    } else if (hours < 18) {
        greeting.textContent = "مساء الخير!";
    } else {
        greeting.textContent = "مساء الخير!";
    }
    document.querySelector("header .container").appendChild(greeting);
});

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.5)";
        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 1000); 
    });
});

document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 }); // يبدأ عند ظهور 10% من العنصر

sections.forEach(section => observer.observe(section));



const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10); // تحديث الرقم كل 10 مللي ثانية
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

function startDrawing(event) {
    isDrawing = true;
    event.preventDefault();
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(event) {
    if (!isDrawing) return;

    // For mobile devices, handle the touch coordinates.
    const x = event.offsetX || event.touches[0].clientX - canvas.offsetLeft;
    const y = event.offsetY || event.touches[0].clientY - canvas.offsetTop;

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#1e90ff";

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// For mouse events (desktop)
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

// For touch events (mobile)
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", stopDrawing);
canvas.addEventListener("touchmove", draw);

// Clear canvas button
document.getElementById("clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


let count = 0;
let isPlaying = false;

document.getElementById("clickMe").addEventListener("click", () => {
    if (!isPlaying) {
        isPlaying = true;
        count = 0;
        document.getElementById("clickCount").textContent = count;

        setTimeout(() => {
            isPlaying = false;
            alert(`لقد قمت بالنقر ${count} مرة!`);
        }, 10000); // المدة الزمنية 10 ثوانٍ
    } else {
        count++;
        document.getElementById("clickCount").textContent = count;
    }
});

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded!');
});

const ball = document.getElementById("ball");
ball.addEventListener("click", () => {
    alert("You caught the ball!");
});
