const popContainer = document.querySelector('.popup-container')
const everything = document.querySelector('main')
const pop = document.querySelector('.popup');
function popup () {
    
    popContainer.style.display= "block";
    pop.classList.add("open-popup")
    everything.style.filter= "blur(8px)";

    pop.addEventListener("mouseout", ()=>{
        closePopup();
    })
}

const closingPopupAnimation = {transform: "scale(0.001)"}
const removeFilter = {filter: "blur(0px)"}

const animationTime = {
    duration: 600,
    fill: "forwards"
}


function closePopup () {
pop.animate(closingPopupAnimation, animationTime);
everything.animate(removeFilter, animationTime);
setTimeout(()=>{
    popContainer.style.display= "none";
    
}, 600)
}




// pop.classList.add("close-popup");
// everything.style.filter= "blur(0px)"
// setTimeout(() => {
//     popContainer.style.display = "none"
//     pop.classList.remove("close-popup")
// }, 600);