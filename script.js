const circle = document.querySelector("#circ")
let dy = 0

function start() {
    window.requestAnimationFrame(update)
}

function update() {
if ( dy < 2.5)
{dy = dy + 0.05}

    let cy = parseFloat(circle.getAttribute("cy"))

if (cy > 100) { 
    dy = dy * (-1)
}


    cy = cy + dy
circle.setAttribute("cy", cy)
    window.requestAnimationFrame(update)
}