
const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});