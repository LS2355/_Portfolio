// const leftProject = document.querySelector("#left-square");
// const middleProject = document.querySelector("#mid-square");
// const rightProject = document.querySelector("#right-square");
// const teckStack= document.getElementById("top-square");

// const leftProjectContent = leftProject.children[0];
// const middleProjectContent = middleProject.children[0];
// const rightProjectContent = rightProject.children[0];

// const addOpacity ={opacity: "1"};
// const removeOpacity = {opacity: "0"};


// const opacityDuration= {
//     duration: 200,
//     fill: "forwards"
// }


// function stretch (id){
//     if (id == "left-square"){
//         buildStack()

//         //turn on current div

//         //turn off other divs;
//         //turn down opacity to 0;


//         // projectControl(true,false,false);
//     }
//     else if (id == "mid-square"){

//     }
//     else if (id == "right-square"){

//     }//make sure to keep the same as the transition time or else it won't look good

// }

// //these parameters will be used to see what elements will turn on and off




// function projectControl (left,middle,right) {
// setTimeout(()=>{
//     leftProject.children[0].style.display= left ? 'flex': 'none';
//     middleProject.children[0].style.display= middle ? 'flex': 'none';
//     rightProject.children[0].style.display= right ? 'flex': 'none';
// },0)

// }




    const sb = document.querySelector("#mid-square")
// leftProject.addEventListener("mouseover",(e)=>{stretch(e.target.id)});
// middleProject.addEventListener("mouseover",(e)=>{stretch(e.target.id)});
// rightProject.addEventListener("mouseover",(e)=>{stretch(e.target.id)})
function kys () {
for (let i = 0; i < leftProjectStack.length; i++) {
    console.log("ran " + i)

     
    const bs = document.createElement("div");
    bs.textContent = leftProjectStack[i]
    sb.append(bs)    
    console.log(leftProjectStack[i])
    
}
}





//create teck-stack

//LMR stand for Left Middle Right
function buildStack (LMR) {
  let StackBeingUsed;
  if (LMR== "left"){
    StackBeingUsed = ["placeholder1", "placeholder2","placeholder3","placeholder4","placeholder5","placeholder6"];
  }
  else if (LMR == "middle"){
    StackBeingUsed = ["placeholder1", "placeholder2","placeholder3","placeholder4","placeholder5","placeholder6"];
  }
  else if (LMR == "right"){
    StackBeingUsed = ["placeholder1", "placeholder2","placeholder3","placeholder4","placeholder5","placeholder6"];
  }

  for (let i = 0; i < StackBeingUsed.length; i++ ) {
  const stack = document.createElement("div");
  const stackContent = document.createElement("h3");
  const stackHashtag = document.createElement("span");

  stack.className = "stack";
  stackContent.className = "stack-content";
  stackHashtag.className = "hashtag";
  stackHashtag.textContent = "#";
  stackContent.textContent = StackBeingUsed[i]

  stack.append(stackContent);
  stackContent.append(stackHashtag);
  document.querySelector(".teck-stack").append(stack);
  }



  //i want the hashtag before the text{
    






  
}

