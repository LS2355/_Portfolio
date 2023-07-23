const popContainer = document.querySelector('.popup-container')
const everything = document.querySelector('main')
const pop = document.querySelector('.popup');
function popup (LittleCard) {
    
    popContainer.style.display= "block";
    pop.classList.add("open-popup")
    everything.style.filter= "blur(8px)";
    setTimeout(()=>{
        pop.addEventListener("mouseout", ()=>{
        closePopup();
    }) 
    },1500)

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

function buildPopup (whichLittleCard) {
if (whichLittleCard == "L"){
const resumePopupEl = document.createElement("img");
resumePopupEl.src = "https://d25zcttzf44i59.cloudfront.net/entry-level-data-analyst-resume-example.png";
resumePopupEl.className = "resume-popup"
resumePopupEl.alt = "My Resume"
pop.append(resumePopupEl)
}
else if (whichLittleCard == "M"){
const skillsPopupEl = document.createElement("div")
skillsPopupEl.className = "skills-popup"

}
else if (whichLittleCard == "R"){
const aboutPopupEl = document.createElement("div")
aboutPopupEl.className = "about-popup"
}
}

function clearPopupContent () {
    pop.innerHTML= " ";
}