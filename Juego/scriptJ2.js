/*Script que te quita y da vida*/
var y = 1;
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
contador();
/*Script de contar el tiempo y comprobar tiempo restante*/
var tiempo = 30;
function contador() {
    tiempo--;
    var x = "CORRE TE QUEDAS SIN TIEMPO: " + tiempo;
    document.getElementById("demo2").innerHTML = x;
    setTimeout(function () { contador(); }, 1000);
}
setTimeout(function () { window.location.href = "muerte.html"; }, 60000);