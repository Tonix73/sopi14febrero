const noButton = document.getElementById("no");
const music = document.getElementById("music");

noButton.addEventListener("mouseover", function () {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;
    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});

// Función para agregar corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Función cuando dice "Sí"
document.getElementById("yes").addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="container">
            <h1 class="message">¡Sabía que dirías que sí! 💕😍</h1>
            <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWh2Ym4xeHB3N2kyYWZlZWc0eDBoMGxsNjE0Nmw1ZGo0bHJwMGNlNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4N1wOi78ZGzSB6H7vK/giphy.gif' class='gif'>
        </div>

    `;

    // Iniciar música
    music.play();
});
