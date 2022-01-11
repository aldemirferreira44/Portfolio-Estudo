var px = 0
var py = 0

function mov(obj) {
    var tecla = Event.keycode
    if (tecla == 37) {//Esquerda
        px = -10;
        obj.style.left = px + "px"
    } else if (tecla == 39) {//Direita 
        px = 10;
        obj.style.left = px + "px"
    }
    if (tecla == 40) {//Baixo
        py = -10
        obj.style.top = py + "px"
    } else if (tecla == 38) {//Cima
        py = 10
        obj.style.top = py + "px"
    }



    obj.document.style.transform = "translate(" + px + py + ")"


}