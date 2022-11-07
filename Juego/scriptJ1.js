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
/*Script que empieza los movimientos*/
empezarMove();
function empezarMove() {
    myMove();
    myMove1();
    myMove2();
    myMove3();
    myMove4();
    setTimeout(function () { window.location.href = "victoria.html"; }, 30000);
    contador();
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 1790;
    let posI = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    posI = getRandomInt(3);
    switch (posI) {
        case 0:
            posI = 50;
            break;
        case 1:
            posI = 150;
            break;
        case 2:
            posI = 300;
            break;
    }
    elem.style.top = posI + "px";
    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            myMove();
        } else {
            pos = pos - 5;
            elem.style.left = pos + "px";
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
    posI = getRandomInt(3);
    switch (posI) {
        case 0:
            posI = 350;
            break;
        case 1:
            posI = 550;
            break;
        case 2:
            posI = 500;
            break;
    }
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
    let pos = 1790;
    let posI = 0;
    clearInterval(id);
    id = setInterval(frame, 2);
    posI = getRandomInt(3);
    switch (posI) {
        case 0:
            posI = 100;
            break;
        case 1:
            posI = 250;
            break;
        case 2:
            posI = 400;
            break;
    }
    elem.style.top = posI + "px";
    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            myMove2();
        } else {
            pos = pos - 2;
            elem.style.left = pos + "px";
        }
    }
}
function myMove3() {
    let id = null;
    const elem = document.getElementById("animate4");
    let pos = 1790;
    let posI = 0;
    clearInterval(id);
    id = setInterval(frame, 0.5);
    posI = getRandomInt(3);
    switch (posI) {
        case 0:
            posI = 750;
            break;
        case 1:
            posI = 600;
            break;
        case 2:
            posI = 500;
            break;
    }
    elem.style.top = posI + "px";
    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            myMove3();
        } else {
            pos = pos - 4;
            elem.style.left = pos + "px";
        }
    }
}
function myMove4() {
    let id = null;
    const elem = document.getElementById("animate5");
    let pos = 100;
    let posI = 0;
    clearInterval(id);
    id = setInterval(frame, 0.5);
    posI = getRandomInt(3);
    switch (posI) {
        case 0:
            posI = 0;
            break;
        case 1:
            posI = 10;
            break;
        case 2:
            posI = 20;
            break;
    }
    elem.style.top = posI + "px";
    function frame() {
        if (pos >= 1790) {
            clearInterval(id);
            myMove4();
        } else {
            pos = pos + 4;
            elem.style.left = pos + "px";
        }
    }
}
var tiempo = 30;
function contador() {
    tiempo--;
    var x = "SOBREVIVE!!! " + tiempo;
    document.getElementById("demo2").innerHTML = x;
    setTimeout(function () { contador(); }, 1000);
}