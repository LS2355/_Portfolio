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
const mouseColor = document.querySelector("#mouse-color")

//lockhover & noHover
const DaLock = document.querySelector(".locks");
const HoverText = document.querySelector("#hover-text");

//audio
let closeIntroAudio = new Audio('./resources/unlock_click.wav');

//animation variables
const mainOpacity = {
  opacity: 1
}
const mainOpacityOptions = {
  duration: 600,
  fill: "forwards"
}

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
      inputLock.checked = false; //makes lock animation play
      setTimeout(()=>{
        calimReward.style.animation = "open 1.5s cubic-bezier(0.93, 0.32, 0.08, 1.11) 350ms" //starts color spread animation
        introText.style.animation= "fadeout 349ms linear" //starts fade out of introtext
        DaLock.style.animation="fadeout 349ms linear"  //starts fade out of lcok
        setTimeout(()=>{
          introText.style.display="none";//makes lock and intro text disapear
          DaLock.style.display="none"
        }, 350)
        setTimeout(()=>{
          introContainer.style.display="none"//makes intro container disapear
          main.style.display="block"
          mouseTrail.style.display = "inline"
          main.animate(mainOpacity, mainOpacityOptions);
          mouseColor.animate(mainOpacity,mainOpacityOptions)
 
        },1850)
      
      }
        , 550)
      
  }, 1850)
}


