/*Script que permite mover tu personaje*/
function sigueCursor() {
    corX = window.event.clientX;
    corY = window.event.clientY;
    img.style.left = corX + "px";
    img.style.top = corY + "px";
}
/*Script que te quita y da vida*/
var y = 3;
$(document).ready(function () {
    $("div.dañoSup").mousemove(function () {
        y -= 1;
        var vidas = "Vidas actuales: (" + y + ")";
        document.getElementById("demo").innerHTML = vidas;
        if (y == 0) {
            location.href = "muerte.html";
        }
    });
    $("div.daño").mouseenter(function () {
        y -= 1;
        var vidas = "Vidas actuales: (" + y + ")";
        document.getElementById("demo").innerHTML = vidas;
        if (y == 0) {
            location.href = "muerte.html";
        }
    });
    $("div.container").mouseenter(function () {
        y -= 1;
        var vidas = "Vidas actuales: (" + y + ")";
        document.getElementById("demo").innerHTML = vidas;
        if (y == 0) {
            location.href = "muerte.html";
        }
    });
    $("div.vidaEx").mouseenter(function () {
        if (y < 5) {
            y += 1;
        }
        if (y == 5) {
            var vidas = "Vidas actuales: (" + y + ") MAX";
            document.getElementById("demo").innerHTML = vidas;
            y = 5;
        } else {
            var vidas = "Vidas actuales: (" + y + ")";
            document.getElementById("demo").innerHTML = vidas;
        }
    });
});
var width = 100;
function move() {
    if (width > 0) {
        var elem = document.getElementById("myBar");
        width--;
        elem.style.width = width + "%";
    } else {
        window.location.href = "victoria.html";
    }
    if(width==50){
        myMove3();
    }
}
/*Script que empieza los movimientos*/
empezarMove();
function empezarMove() {
    myMove();
    myMove1();
    myMove2();
}

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 760;
    let posI = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    elem.style.left = pos + "px";
    function frame() {
        if (posI >= 850) {
            clearInterval(id);
            myMove();
        } else {
            posI = posI + 5;
            elem.style.top = posI + "px";
            
        }
    }
}

function myMove1() {
    let id = null;
    const elem = document.getElementById("animate2");
    let pos = 1790;
    let posI = 0;
    clearInterval(id);
    id = setInterval(frame, 0);
    posI = 470;
    elem.style.top = posI + "px";
    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            myMove1();
        } else {
            pos = pos - 3;
            elem.style.left = pos + "px";
        }
    }
}
function myMove2() {
    let id = null;
    const elem = document.getElementById("animate3");
    let pos = 0;
    let posI = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame() {
        if (pos >= 1250) {
            clearInterval(id);
            myMove2();
        } else {
            pos = pos + 2;
            posI = posI + 1.3; 
            elem.style.left = pos + "px";
            elem.style.top = posI + "px";
        }
    }
}
function myMove3() {
    let id = null;
    const elem = document.getElementById("animate4");
    let pos = 0;
    let posI = 850;
    clearInterval(id);
    id = setInterval(frame, 0.5);
    
    function frame() {
        if (posI <= 0) {
            clearInterval(id);
            myMove3();
        } else {
            posI = posI - 2;
            pos = pos + 4;
            elem.style.top = posI + "px";
            elem.style.left = pos + "px";
        }
    }
}