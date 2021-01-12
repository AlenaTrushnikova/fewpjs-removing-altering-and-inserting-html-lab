// no longer has DOM node 'main#main'
main.remove()

// has a 'newHeader' variable that points to node 'h1#victory'
// with "YOUR-NAME is the champion" inside

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
document.body.appendChild(newHeader)
newHeader.innerHTML = 'YOUR-NAME is the champion'
