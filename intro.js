//variables
const randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = 0; 

//query Selectors
const introText = document.querySelector("#intro-text");
const inputLock =document.querySelector("#inpLock")
const calimReward = document.querySelector("#claim-reward");
const introContainer = document.querySelector("#intro-container");
const main = document.querySelector("main");
const mouseTrail = document.querySelector("#mouse-trailer");

//lockhover & noHover
const DaLock = document.querySelector(".locks");
const HoverText = document.querySelector("#hover-text");

//audio
let closeIntroAudio = new Audio('./resources/unlock_click.wav');

//functions
function runIntro() {
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    introText.innerText = introText.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return introText.dataset.value[index];
        }
      
        return randomCharacters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= introText.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 4;
  }, 25);

  setTimeout(()=>{
      inputLock.checked = false;
      calimReward.addEventListener("click", ()=>closeIntro())
  }, 1850)
}

      
    


function lockHover () {
  DaLock.style.display= "none";
  HoverText.style.display= "inline";
}
function lockNoHover () {
  DaLock.style.display= "grid";
  HoverText.style.display= "none";
}

function closeIntro () {
  closeIntroAudio.play();
  introContainer.style.display= "none";
  main.style.display="block";
  mouseTrail.style.display = "inline";
}



