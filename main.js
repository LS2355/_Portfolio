const leftProject = document.querySelector("#left-square");
const middleProject = document.querySelector("#mid-square");
const rightProject = document.querySelector("#right-square");
const teckStack= document.getElementById("top-square");




function stretch (id){
    console.log(id)
    if (id == "left-square"){
        console.log("ran")
        //change box size
        leftProject.style.flexGrow= 15;
        middleProject.style.flexGrow= .5;
        rightProject.style.flexGrow= .5;
        
        //close project content div 
        // projectControll(true,false,false)


        // teckStack.innerHTML=id;

    }
    else if (id == "mid-square"){
        leftProject.style.flexGrow= .5;
        middleProject.style.flexGrow= 15;
        rightProject.style.flexGrow= .5;

        //close project content div 
        // projectControll(false,true,false)

        // teckStack.innerHTML=id;
    }
    else if (id == "right-square"){
        leftProject.style.flexGrow= .5;
        middleProject.style.flexGrow= .5;
        rightProject.style.flexGrow= 15;

        //close project content div 
        // projectControll(false,false,true)

        // teckStack.innerHTML=id;
    }
}

//these parameters will be used to see what elements will turn on and off
// function projectControll (left,middle,right) {
// setTimeout(()=>{
//     leftProject.children[0].style.display= left ? 'flex': 'none';
//     middleProject.children[0].style.display= middle ? 'flex': 'none';
//     rightProject.children[0].style.display= right ? 'flex': 'none';
// },550)

// }





leftProject.addEventListener("mouseover",(e)=>{stretch(e.target.id)});
middleProject.addEventListener("mouseover",(e)=>{stretch(e.target.id)});
rightProject.addEventListener("mouseover",(e)=>{stretch(e.target.id)})
