// current issues: 
// also fix the image



const dot = document.getElementById("mouse-color");
const mouse = document.getElementById("mouse-trailer");
const icon = document.getElementById("mouse-icon");

const cursor = (e, interacting) =>{
    const x = e.clientX - mouse.offsetWidth / 2,
          y = e.clientY - mouse.offsetHeight / 2;

    const scale = {
        transform : `scale(${interacting ? 6 : 1})`

    }
    mouse.style.transform = `translate(${x}px, ${y}px)`

    dot.animate(scale, {
        duration: 800,
        fill: "forwards"
    })

}

const getTrailerClass = type =>{
    switch(type){
        case "little-card":
            return "fa-solid fa-expand fa-xs full-screeno";
        default:
            return "fa-solid fa-caret-up fa-2xs caret-up"
    }
}




window.onmousemove = e =>{
    const interactable = e.target.closest(".interactable"),
          interacting = interactable !== null;

    cursor(e, interacting)
    if (interacting) {
        icon.className = getTrailerClass(interactable.dataset.type)
        icon.style.display = "block"
        mouse.style.opacity = "0.6"
        dot.style.backgroundColor = "mediumslateblue"

        
    }
    else{
        icon.style.display= "none"
        mouse.style.opacity = "1"
        dot.style.backgroundColor = "white"

    }

    // interactable? blure.style.filter= "blur(3px)": blure.style.filter= "blur(0px)";


}
