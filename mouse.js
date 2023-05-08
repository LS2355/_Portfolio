const mouse = document.getElementById("mouse-trailer")

window.onmousemove = e =>{
    const x = e.clientX - mouse.offsetWidth / 2,
          y = e.clientY - mouse.offsetHeight / 2;

    const keyFrames = {
        transform: `translate(${x}px, ${y}px)`
    }
    mouse.animate(keyFrames, {
        duration: 800,
        fill: "forwards"
    }) 
}