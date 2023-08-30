const popContainer = document.querySelector('.popup-container')
const everything = document.querySelector('main')
const pop = document.querySelector('.popup');

//skills tab array
const skillsArray = [
    {
        Title: "HTML",
        Years: "3",
        Type: "Language",
        Img: "./resources/HTML.png"
    },{
        Title: "CSS",
        Years: "3",
        Type: "Language",
        Img: "./resources/CSS.svg"
    },{
        Title: "SASS",
        Years: "1",
        Type: "Language",
        Img: "./resources/Sass.png"
    },{
        Title: "Bootstrap ",
        Years: "1",
        Type: "Language",
        Img: "./resources/Bootstrap.png"
    },{
        Title: "javascript",
        Years: "3",
        Type: "Language",
        Img: "./resources/JS.png"
    },{
        Title: "Node JS",
        Years: "2",
        Type: "Language",
        Img: "./resources/NodeJS.png"
    },{
        Title: "React JS",
        Years: "3",
        Type: "Language",
        Img: "./resources/ReactJS.png"
    },{
        Title: "Express",
        Years: "3",
        Type: "Language",
        Img: "./resources/Express.png"
    },{
        Title: "JQuery",
        Years: "3",
        Type: "Language",
        Img: "./resources/JQuery.png"
    },{
        Title: "Moment",
        Years: "3",
        Type: "Language",
        Img: "./resources/Moment.png"
    },{
        Title: "Inquirer",
        Years: "3",
        Type: "Language",
        Img: "./resources/inquirer.svg"
    },{
        Title: "Handlebars",
        Years: "3",
        Type: "Language",
        Img: "./resources/Handlebars.svg"
    },{
        Title: "JEST",
        Years: "3",
        Type: "Language",
        Img: "./resources/JEST.png"
    },{
        Title: "API",
        Years: "3",
        Type: "Language",
        Img: "./resources/API.png"
    },{
        Title: "JSON",
        Years: "3",
        Type: "Language",
        Img: "./resources/JSON.png"
    },{
        Title: "MYSQL",
        Years: "1",
        Type: "Language",
        Img: "./resources/MYSQL.png"
    },{
        Title: "Git",
        Years: "3",
        Type: "Language",
        Img: "./resources/Git.png"
    },{
        Title: "GitHub",
        Years: "3",
        Type: "Language",
        Img: "./resources/Github.png"
    },{
        Title: "Heroku",
        Years: "3",
        Type: "Language",
        Img: "./resources/heroku.png"
    }
];

const hardSkillsArray = [
    {
        Title: "Critical Thinking",
        Img: ""
    },
    {
        Title: "Adaptability",
        Img: ""
    },
    {
        Title: "Time Management",
        Img: ""
    },
    {
        Title: "Dependability",
        Img: ""
    },
    {
        Title: "Work Ethic",
        Img: ""
    }
]
const contactSquaresContent = [
    {
        Title: "Top",
        //remeber you have to assign the image in a class for background the element you are assigning to is the contact-page-card-picture
        Paragraph: "this is just filler text so i can see if this will generate properly"
    },
    {
        Title: "middle-R",
        //remeber you have to assign the image in a class for background the element you are assigning to is the contact-page-card-picture
        Paragraph: "this is just filler text so i can see if this will generate properly"
    },
    {
        Title: "middle-L",
        //remeber you have to assign the image in a class for background the element you are assigning to is the contact-page-card-picture
        Paragraph: "this is just filler text so i can see if this will generate properly"
    },
    {
        Title: "Bottom",
        //remeber you have to assign the image in a class for background the element you are assigning to is the contact-page-card-picture
        Paragraph: "this is just filler text so i can see if this will generate properly"
    }
]



function popup (LittleCard) {
    
    popContainer.style.display= "block";
    pop.classList.add("open-popup")
    everything.style.filter= "blur(8px)";
    setTimeout(()=>{
        pop.addEventListener("mouseleave", ()=>closePopup()) 
    },1500)

}

const closingPopupAnimation = {transform: "scale(0.001)", opacity: "0"}
const removeFilter = {filter: "blur(0px)"}

const animationTime = {
    duration: 600,
    fill: "forwards"
}


function closePopup () {
pop.animate(closingPopupAnimation, animationTime);
everything.animate(removeFilter, animationTime); 
pop.removeEventListener("mouseleave", ()=>closePopup())
setTimeout(()=>{
    popContainer.style.display= "none";
    pop.classList.remove();
   
    
    
}, 595) 
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
    const skillsPopupEl = document.createElement("div");
    const softSkillsText = document.createElement("div");

    skillsPopupEl.className= "skills-popup";
    softSkillsText.className = "soft-skills-text"
    softSkillsText.textContent = "SOFT SKILLS"
    skillsPopupEl.append(softSkillsText); 


    //ok so the plan is to get everything to append in the order that we want we will declare an outside variable and when the i index in the
    //for loop is equal to the for loop it will generate that but first i have to finish making all the skill elements.

        for (let i=0; i > skillsArray.length; i++){


            
            //create elements in order
            const skillsTabEl = document.createElement("div");
            const skillsTabInfoEl = document.createElement("div");
            const skillsTabTitleEl = document.createElement("div");
            const skillsTabYearsEl = document.createElement("div");
            const skillsTabTypeEl = document.createElement("div");        
            const skillsTabIconDivEl = document.createElement("div");
            const skillsTabIcon = document.createElement("img");
            
            //Give elements their class name
            skillsTabEl.className = "skills-tab"
            skillsTabInfoEl.className = "skills-tab-info"
            skillsTabTitleEl.className = "skills-tab-title"
            skillsTabYearsEl.className = "skills-tab-Years"
            skillsTabTypeEl.className = "skills-tab-type"
            skillsTabIconDivEl.className = "skills-tab-icon-div"
            skillsTabIcon.className = "skills-tab-icon"

            //add proper text to icon

            skillsTabTitleEl.textContent = skillsArray[i].Title
            skillsTabYearsEl.textContent = skillsArray[i].Years 
            skillsTabTypeEl.textContent = skillsArray[i].Type
            skillsTabIcon.src = skillsArray[i].Img

            //append to parent
            skillsTabInfoEl.append(skillsTabTitleEl, skillsTabYearsEl, skillsTabTypeEl)
            skillsTabIconDivEl.append(skillsTabIcon)
            skillsTabEl.append(skillsTabInfoEl, skillsTabIconDivEl)
            skillsPopupEl.append(skillsTabEl)
        }

     //Creates SoftSkills text. (it says hard skills rn i just have to change it i was doing it the wrong way)
                const hardSkillsText = document.createElement("div")
                hardSkillsText.className = "soft-skills-text"
                hardSkillsText.textContent = "HARD SKILLS"
                skillsPopupEl.append(hardSkillsText)


//create new for loop to build the hard skil elements .
// they will go through the array just like the soft skill elements do 






//appends everything to popup element
     pop.append(skillsPopupEl)



}
else if (whichLittleCard == "R"){

    const contactTitle = document.createElement("div");

    pop.append(contactTitle)
    //assign classes
    for (let i=0; i < contactSquaresContent.length; i++){

    //create elements
    const contactCardWrapper = document.createElement("div");
    const contactCardSideText= document.createElement("div");
    const contactCard = document.createElement("div");
    const contactCardPic = document.createElement("div");
    const contactCardText = document.createElement("div");








    contactTitle.className= "contact-title";
    contactCardWrapper.className= (i == 0 || i == 3 )?"contact-page-card-wrapper-large": "contact-page-card-wrapper";//first and last div will be the bigger cards
    contactCardSideText.className= "contact-card-side-text";
    contactCard.className= "contact-page-card";
    contactCardPic.className= "contact-page-card-picture";
    contactCardText.className= "contact-page-card-text";

    //Switch operator for assigning ID's and other small things
    let position;
     switch(i){
        case 0:
            position= "top-left-position";
            break;
        case 1:
            position= "mid-right-position";
            contactCardSideText.id="contact-card-side-text-right"
            break;
        case 2: 
            position= "mid-left-position";
            break;
        case 3 :
            position = "bottom-left-position";
            break;
     }
     contactCardWrapper.id= position;
     contactCardPic.id = `contact-card-pic-${i}`;

    //assign text
    contactCardSideText.textContent= contactSquaresContent[i].Title;
    contactCardText.textContent= contactSquaresContent[i].Paragraph;
    
    //append elements
    contactCard.append(contactCardPic, contactCardText);
    contactCardWrapper.append(contactCardSideText, contactCard);
    pop.append(contactCardWrapper);
                     console.log(contactSquaresContent[i].Title)
    }
    
}
}

function clearPopupContent () {
    pop.innerHTML= " ";
}

