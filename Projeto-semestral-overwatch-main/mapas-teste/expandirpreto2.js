var estaExpandido2 = false;

document.getElementById('expandir-preto2').addEventListener('click', function () {
    var preto2Div = document.querySelector('.preto2');
    var textoExpandido2 = document.querySelector('.texto-expandido2');
    
    if (!estaExpandido2) {
        // Aumenta o tamanho
        preto2Div.style.height = '39%';
        
        // Exibe o texto expandido
        textoExpandido2.style.display = 'block';
        estaExpandido2 = true;
    } else {
        // Volta ao tamanho normal
        preto2Div.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido2.style.display = 'none';
        estaExpandido2 = false;
    }
});

document.addEventListener('click', function (evento) {
    var preto2Div = document.querySelector('.preto2');
    var textoExpandido2 = document.querySelector('.texto-expandido2');
    var retangulo = preto2Div.getBoundingClientRect();
    var estaNoElemento = retangulo.top <= evento.clientY && evento.clientY <= retangulo.bottom && retangulo.left <= evento.clientX && evento.clientX <= retangulo.right;

    if (!estaNoElemento) {
        // Volta ao tamanho normal
        preto2Div.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido2.style.display = 'none';
        
        estaExpandido2 = false;
    }
});
