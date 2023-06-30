const scrollParent = document.querySelector(".scroll-parent");
//check how to import a variable from another file
//check if its possiable to share event listeners between fi


const leftStackArray = ["abc","abc","abc","abc","abc","abc","abc","abc"];
const middleStackArray = ["bac","bac","bac","bac","bac","bac","bac","bac"];
const rightStackArray = ["dca","dca","dca","dca","dca","dca","dca","dca"];


//need to make it so that on default there is nothing in the scrool element;
//just do a simple text
//not sure if i should make it scroll or not
//need this to pop up on page load and when im not hovering over a project




function clearstack () {
  scrollParent.innerHTML= "";
  console.log("cleared top-stack")
}

//on hover have default fade out (200ms)
//on hover have stack fade in (about 200ms)
//when off hover have it fade out (also about 200ms)
//after fade off is done have everything cleared
//start fade in of defaule screen till its done 









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