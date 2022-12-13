const circle = document.querySelector("#circ")
let dy = 0
let dx = 0


function start() {
    dx = 1
     let svg = document.querySelector("svg")
    
    for (i=0; i < 10; i = i + 2) {
        for( j = 0; j < 10; j = j + 2) {
        
        let chess = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        
        chess.setAttribute("x", i * 10)
        chess.setAttribute("y", j * 10)
        chess.setAttribute("fill", "black")
        chess.setAttribute("width", 10)
        chess.setAttribute("height", 10)

svg.appendChild(chess)
        }
}
    
    
    window.requestAnimationFrame(update)

}

function update() {
    
    if (dy < 5) {   
    dy = dy + 0.05}
    
    let cy = parseFloat(circle.getAttribute("cy"))
    
    if (cy > 90 ) {
        dy = dy * (-1)
    } else if ( cy < 10) {
        dy = dy * (-1)
    }
    
    cy = cy + dy

    circle.setAttribute("cy", cy)
    

        

let cx = parseFloat(circle.getAttribute("cx"))
       
if (cx > 90 ) {
      dx = dx * (-1)
    }
    else if (cx < 10 ) {
        dx = dx * (-1)
    }
    cx = cx + dx 
        
    
    
        circle.setAttribute("cx", cx)
    window.requestAnimationFrame(update)
} 