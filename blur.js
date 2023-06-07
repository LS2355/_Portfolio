const nav = document.querySelector("nav");
const lilCards = document.querySelector(".little-cards")


// const footer = document.querySelector("")

function blurIt () {
    nav.style.filter = "blur(3px)"
    lilCards.style.filter = "blur(3px)"
}

function noBlur () {
    nav.style.filter = "blur(0px)"
    lilCards.style.filter = "blur(0px)"
}