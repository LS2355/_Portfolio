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
const projectContentDOM = document.getElementsByClassName("project-content");


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
  //hover off the value being pass threw is what value we are using for the array
eventlistenerLeftStack.addEventListener("mouseleave", ()=>{displayDefault(0)})
eventlistenerMidStack.addEventListener("mouseleave", ()=>{displayDefault(1)})
eventlistenerRightStack.addEventListener("mouseleave", ()=>{displayDefault(2)})


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



function displayDefault (LMR) {
  scrollParentFade("out")
   setTimeout(()=>{
    clearProjectContent(LMR);    
   },100)
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



//style button wrapper



 
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
  // const projectTitleEl = document.createElement("h1");
  // const projectTypeEl = document.createElement("h2");
  const projectDescriptionEl = document.createElement("p");
  const projectButtonWrapper = document.createElement("div");
    //use createElementNS for SVG link: https://stackoverflow.com/questions/8215021/create-svg-tag-with-javascript

  const projectGithubEl = document.createElement("a");
  const projectDeployLink = document.createElement("a");
  
  //this is the test for adding 
    const projectTitleEl = document.createElement("div");
    const projectTypeEl = document.createElement("div");

    projectTitleEl.className = "project-title";
    projectTypeEl.className = "project-type";
    projectTitleEl.textContent = projectContentObjects[projectObjectNumber].Title;
    projectTypeEl.textContent = projectContentObjects[projectObjectNumber].ProjectType;
    





  //add general attributes
  // projectTitleEl.className = "project-title";
  // projectTypeEl.className = "project-type";
  projectDescriptionEl.className = "project-description"
  projectButtonWrapper.className = "project-btn-wrapper"
  projectGithubEl.className = "project-btn projectGithubLink"
  projectDeployLink.className = "project-btn projectDeployLink"

    //create github svg logo
    const githubLogoSVG = document.createElementNS("http://www.w3.org/2000/svg","svg");
    const githubLogoPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
    githubLogoSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    githubLogoSVG.setAttribute("viewBox", "0 0 16 16")
    githubLogoPath.setAttribute("d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z")
    githubLogoSVG.append(githubLogoPath);
    githubLogoSVG.classList = "githubLogoSize";
    //create deploy logo 
    const deployLinkLogoSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const deployLinkLogoPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    deployLinkLogoSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    deployLinkLogoSVG.setAttribute("viewBox", "0 0 16 16");
    deployLinkLogoPath.setAttribute("d", "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z")
    deployLinkLogoSVG.append(deployLinkLogoPath);
    deployLinkLogoSVG.classList = "githubLogoSize"

  //add private attributes

    // projectTitleEl.textContent = projectContentObjects[projectObjectNumber].Title;
    // projectTypeEl.textContent = projectContentObjects[projectObjectNumber].ProjectType;
    projectDescriptionEl.textContent = projectContentObjects[projectObjectNumber].Description;
    projectGithubEl.href = projectContentObjects[projectObjectNumber].GithubLink;
    // projectGithubEl.textContent = "Github"
    projectDeployLink.href = projectContentObjects[projectObjectNumber].DeployLink;
   


  
  //append to project-content
    projectGithubEl.append(githubLogoSVG)
    projectDeployLink.append(deployLinkLogoSVG)
    projectButtonWrapper.append(projectGithubEl,projectDeployLink)
      //appended ProjectTypeEl to projectTitleEl instead
      //tookout [, projectTypeEl]
    projectTitleEl.append(projectTypeEl)
    projectContentDOM[projectObjectNumber].append(projectTitleEl,projectDescriptionEl,projectButtonWrapper)
    




}


function clearProjectContent (projectContentArrayNumber) {
  projectContentDOM[projectContentArrayNumber].innerHTML = ""
}




















//run on page load
displayDefault();