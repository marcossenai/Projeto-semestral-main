var botao = document.getElementById('botao')

function abrir() {
    var minhaDiv = document.getElementById("minhaDiv");
    if (minhaDiv.style.display === "none") {
        minhaDiv.style.display = "flex";
        botao.style.display = "none"

    } else {
        minhaDiv.style.display = "none";
        botao.style.display = "block";
    }
}

// ------------//

let items = document.querySelectorAll('.habilidades-caro .poder');
let next = document.getElementById('proximo');
let prev = document.getElementById('antes');

let active = 1;

function loadShow() {
    let stt = 0;

    items[active].style.transform = `none`;
    items[active].style.zIndex = 2;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
        stt--;
        items[i].style.transform = `translateX(${105 * stt}px) scale(${1 - 0.2 * Math.abs(stt)}) perspective(20px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.9;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt--;
        items[i].style.transform = `translateX(${-105 * stt}px) scale(${1 - 0.2 * Math.abs(stt)}) perspective(20px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 1 ? 0 : 0.9;

    }
}

loadShow();

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}
// ------ desenho agr

var canvas = document.getElementById("desenhar");
var ctx = canvas.getContext("2d");


var desenhando = false;
var posicaoAnterior = { x: 0, y: 0 };


canvas.addEventListener("mousedown", iniciarDesenho);
canvas.addEventListener("mouseup", pararDesenho);
canvas.addEventListener("mousemove", desenhar);


function iniciarDesenho(e) {
    desenhando = true;
    posicaoAnterior = obterPosicaoMouse(e);
}


function pararDesenho() {
    desenhando = false;
}


function desenhar(e) {
    if (!desenhando) return;

    var posicaoAtual = obterPosicaoMouse(e);


    ctx.lineWidth = document.getElementById("largura").value;
    ctx.lineCap = "round";
    ctx.strokeStyle = document.querySelector("#colors input[type=color]").value;


    ctx.beginPath();
    ctx.moveTo(posicaoAnterior.x, posicaoAnterior.y);
    ctx.lineTo(posicaoAtual.x, posicaoAtual.y);
    ctx.stroke();

   
    posicaoAnterior = posicaoAtual;
}


function obterPosicaoMouse(e) {
    var retangulo = canvas.getBoundingClientRect();
    return {
        x: e.clientX - retangulo.left,
        y: e.clientY - retangulo.top
    };
}

// ------
function voltarParaInicio() {
    window.scrollTo(0, 0);
}
