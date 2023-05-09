// current issues: 
// also fix the image






const dot = document.getElementById("mouse-color");
const mouse = document.getElementById("mouse-trailer");
const icon = document.getElementById("mouse-icon");

const cursor = (e, interacting) =>{
    const x = e.clientX - mouse.offsetWidth / 2,
          y = e.clientY - mouse.offsetHeight / 2;

    const scale = {
        transform : `scale(${interacting ? 8 : 1})`

    }
    mouse.style.transform = `translate(${x}px, ${y}px)`

    dot.animate(scale, {
        duration: 800,
        fill: "forwards"
    })

}




window.onmousemove = e =>{
    const interactable = e.target.closest(".interactable"),
          interacting = interactable !== null;

    cursor(e, interacting)

    if (interacting) {
        icon.style.display = "block"
    }
    else{
        icon.style.display= "none"
    }
}


