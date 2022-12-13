const circle = document.querySelector("#circ")
let dy = 0

function start() {
    window.requestAnimationFrame(update)
}

function update() {
    dy = dy + 0.05


   let cy = parseFloat(circle.getAttribute("cy"))
   cy = cy + dy
   circle.setAttribute("cy", cy)

   window.requestAnimationFrame(update)
}