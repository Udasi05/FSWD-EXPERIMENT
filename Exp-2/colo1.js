document.addEventListener("DOMContentLoaded", () => {

    const colors = ["red", "blue", "green", "yellow", "pink", "orange", "purple", "brown", "black", "white"];
    let currentIndex = 0;
    let timer = null;

    const changeBtn = document.getElementById("changeBtn");
    // Add click event listener to start the color changing process
    changeBtn.addEventListener("click", () => {
    if (!timer) {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        timer = setInterval(() => {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        }, 5000);
    }
    });
});

