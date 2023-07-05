//Notes
//we need to make it so that the background image of the projects expands to cover the full screen
//add text and shit to project div



const scrollParent = document.querySelector(".scroll-parent");
//check how to import a variable from another file
//check if its possiable to share event listeners between fi
const eventlistenerProjectsContainer = document.querySelector(".projects-container")
const eventlistenerLeftStack = document.querySelector("#left-square");
const eventlistenerMidStack = document.querySelector("#mid-square");
const eventlistenerRightStack = document.querySelector("#right-square");
//this is where we are appending all the generated project content
const projectContentDiv = document.querySelector(".project-content")



//variables
const leftStackArray = ["abc","abc","abc","abc","abc","abc","abc","abc"];
const middleStackArray = ["bac","bac","bac","bac","bac","bac","bac","bac"];
const rightStackArray = ["dca","dca","dca","dca","dca","dca","dca","dca"];

 //project content objects
 const projectContentObjects = [{
    Title: "S Plastering Inc.",
    ProjectType: "Freelance Project",
    Description: "dont forget to actually put a description stupid",
    DeployLink: "make soon ",
    GithubLink:"make soon"
  },
  {
    Title: "N/A",
    ProjectType: "",
    Description: "",
    DeployLink: "",
    GithubLink:""
  },
  {
    Title: "N/A",
    ProjectType: "",
    Description: "",
    DeployLink: "",
    GithubLink:""
  }]



//This is going to be what the general timeout will be for animations and for functions to run 
const GeneralTimeout=  200;


//Event listener for the elements         //LMR stands for Left,Middle,Right (Projects)
eventlistenerProjectsContainer.addEventListener("mouseenter", ()=>{projectSize("Grow")})
eventlistenerLeftStack.addEventListener("mouseenter", ()=>{operationOrder(leftStackArray, "left")})
eventlistenerMidStack.addEventListener("mouseenter", ()=>{operationOrder(middleStackArray, "middle")})
eventlistenerRightStack.addEventListener("mouseenter", ()=>{operationOrder(rightStackArray, "right")})
eventlistenerProjectsContainer.addEventListener("mouseleave", ()=>{projectSize("Shrink")})
eventlistenerLeftStack.addEventListener("mouseleave", ()=>{displayDefault()})
eventlistenerMidStack.addEventListener("mouseleave", ()=>{displayDefault()})
eventlistenerRightStack.addEventListener("mouseleave", ()=>{displayDefault()})


function operationOrder (StackArray, LMR){ 
  scrollParentFade("out")
  //need to add animation for project squares to expand in height
  generateProjectContent(LMR)
  setTimeout(()=>{
    clearstack()
    buildStack(StackArray)
    scrollParentFade("in")
  },GeneralTimeout)
 
}



function displayDefault () {
  scrollParentFade("out")
  setTimeout(()=>{
    clearstack();
    const defaultStack = document.createElement("div");
    defaultStack.className= "Stack-Default scroll-element";
    defaultStack.textContent= "TECKSTACK";
    scrollParent.append(defaultStack);
    scrollParentFade("in")
  }, GeneralTimeout)

}



//animation that is going to play 
const scrollParentAnimationFadeIn = {
  opacity: 1
}

const scrollParentAnimationFadeOut = {
  opacity: 0
}

//duration
const scrollParentAnimationDuration = {
  duration: GeneralTimeout,
  fill: "forwards"
}

//if you want the animiation to fade "in" or "out". just gonna do it on the parent element because it is easier
function scrollParentFade(direction){
  if (direction == "in"){
    scrollParent.animate(scrollParentAnimationFadeIn, scrollParentAnimationDuration)
  }
  else if(direction == "out"){
    scrollParent.animate(scrollParentAnimationFadeOut, scrollParentAnimationDuration)
  }
}



function clearstack () {
  scrollParent.innerHTML= "";
  console.log("cleared top-stack")
}



function buildStack (UsedStackArray) {
  // const sectionArray = //what ever the fuck we are hovering over;

  const scrollElementPrimary = document.createElement("div");
    scrollElementPrimary.className="scroll-element primary"; 
  //first paramater is what scrool-element we are building, the second parameter will be what stack we are going to build  
  //going to leave fixed as left stack array for now change back to section array
  stackloop("primary", UsedStackArray);
  const scrollElementSecondary= document.createElement("div");
    scrollElementSecondary.className = "scroll-element secondary";
  stackloop("secondary", UsedStackArray);
  // append to the scrool parent 


 //need to clear previous tech stack 
 // should probably make the tech stack fade in and fade out 
  
  
  
  //builds the indivisual stack blocks
  function stackloop(stackSection, SectionArray) {
    console.log(SectionArray + " "+ SectionArray.length)

  for (let i = 0; i < SectionArray.length ; i++){
    const stack = document.createElement("div");
    stack.textContent= SectionArray[i];
    stack.className= "stack";
    
    if (stackSection == "primary"){
      console.log("appended to primary")
      scrollElementPrimary.append(stack)
    }
    else if (stackSection == "secondary"){
      console.log("appended to secondary");
      scrollElementSecondary.append(stack)
  }    
  //chose which scroolelement to append to using a turenery ; 
  }
  if (stackSection == "primary"){
    scrollParent.append(scrollElementPrimary)
  }
  else if (stackSection == "secondary"){
    scrollParent.append(scrollElementSecondary)
}    
  }
}




//when you hover over a project this function is responsible for expanding the height;
const growAnimation = {
  height: "500px",
  direction: "ease-out"
}
const shrinkAnimation = {
  height: "37px",
  direction: "ease-out"
}
const sizingAnimationDuration = {
  duration: 350,
  fill: "forwards",
  
}
function projectSize (growOrShrink) {
  if (growOrShrink == "Grow"){
    eventlistenerLeftStack.animate(growAnimation, sizingAnimationDuration);
    eventlistenerMidStack.animate(growAnimation, sizingAnimationDuration);
    eventlistenerRightStack.animate(growAnimation, sizingAnimationDuration);
  }
  else if (growOrShrink == "Shrink"){
    eventlistenerLeftStack.animate(shrinkAnimation, sizingAnimationDuration);
    eventlistenerMidStack.animate(shrinkAnimation, sizingAnimationDuration);
    eventlistenerRightStack.animate(shrinkAnimation, sizingAnimationDuration);
  
  };
};

//generating Project Content using the JS objects at the top of the page
function generateProjectContent(whichProject){
  let projectObjectNumber
  if (whichProject == "left"){
    projectObjectNumber = 0
  }
  else if (whichProject == "middle"){
    projectObjectNumber = 1
  }
  else if (whichProject == "right"){
    projectObjectNumber = 2
  }
  //create the elements
  const projectTitleEl = document.createElement("h1");
  const projectTypeEl = document.createElement("h2");
  const projectDescriptionEl = document.createElement("p");
  const projectGithubEl = document.createElement("button");
  const projectDeployLink = document.createElement("button");
  
  //add general attributes
  projectTitleEl.className = "project-title";
  projectTypeEl.className = "project-type";
  projectDescriptionEl.className = "project-description"
  projectGithubEl.className = "project-btn projectGithubLink"
  projectDeployLink.className = "project-btn projectDeployLink"
  //add private attributes
  
    projectTitleEl.textContent = projectContentObjects[projectObjectNumber].Title;
    projectTypeEl.textContent = projectContentObjects[projectObjectNumber].ProjectType;
    projectDescriptionEl.textContent = projectContentObjects[projectObjectNumber].Description;
    projectGithubEl.href = projectContentObjects[projectObjectNumber].GithubLink;
    projectDeployLink.href = projectContentObjects[projectObjectNumber].DeployLink;

  
  //append to project-content


}






















//run on page load
displayDefault();