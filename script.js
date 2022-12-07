const circle = document.querySelector("#circ")
let dy = 0
let dx = 0

function start() {

    dx = 1

    window.requestAnimationFrame(update)
}

function update() {
    if (dy < 2.5 )  {
        dy = dy + 0.05
    }
   
    let cy = parseFloat(circle.getAttribute("cy"))

    if (cy > 100) {
        dy = dy * (-1)
    } 


    cy = cy + dy
    circle.setAttribute("cy" , cy)


    // seitwärds bewegung
    let cx = parseFloat(circle.getAttribute("cx"))

    if (cx > 100) {
        dx = dx * (-1)
    } else if ( cx < 0) {
        dx = dx * (-1)
    }

    cx = cx + dx
    circle.setAttribute("cx", cx)

    window.requestAnimationFrame(update)
}