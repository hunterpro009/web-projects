const input = document.getElementById("numberInput");
const display = document.getElementById("display");
const message = document.getElementById("message");
const particles = document.getElementById("particles");

function shakeBody() {
    document.body.classList.remove("shake"); // reset
    void document.body.offsetWidth; // force reflow
    document.body.classList.add("shake");
}

// initial attention-grab when page loads
shakeBody();

function createParticles() {
    for (let i = 0; i < 15; i++) {
        const p = document.createElement("div");
        p.style.position = "fixed";
        p.style.width = "8px";
        p.style.height = "8px";
        p.style.background = "red";
        p.style.borderRadius = "50%";
        p.style.left = "50%";
        p.style.top = "50%";

        const x = (Math.random() - 0.5) * 300;
        const y = (Math.random() - 0.5) * 300;

        p.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
            duration: 800,
            easing: "ease-out"
        });

        document.body.appendChild(p);
        setTimeout(() => p.remove(), 800);
    }
}

input.addEventListener("input", () => {
    let value = input.value.replace(/\D/g, ""); // only numbers
    input.value = value;

    display.innerHTML = "";

    if (!value) return;

    // create digits
    value.split("").forEach(d => {
        const span = document.createElement("span");
        span.className = "digit";
        span.textContent = d;
        display.appendChild(span);
    });

    // MAGIC CONDITION ✅
    if (value === "67") {
        document.querySelectorAll(".digit").forEach(d => {
            d.classList.remove("wiggle"); // reset
            void d.offsetWidth; // force reflow (IMPORTANT)
            d.classList.add("wiggle");
        });

        message.classList.add("show");
        createParticles();
        shakeBody(); // whole page shake on correct guess too
    } else {
        message.classList.remove("show");
        if (value) {
            shakeBody();
        }
    }
});


// auto focus
input.focus();