var estaExpandido3 = false;

document.getElementById('expandir-preto3').addEventListener('click', function () {
    var preto3Div = document.querySelector('.preto3');
    var textoExpandido3 = document.querySelector('.texto-expandido3');
    
    if (!estaExpandido3) {
        // Aumenta o tamanho
        preto3Div.style.height = '39%';
        
        // Exibe o texto expandido
        textoExpandido3.style.display = 'block';
        estaExpandido3 = true;
    } else {
        // Volta ao tamanho normal
        preto3Div.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido3.style.display = 'none';
        estaExpandido3 = false;
    }
});

document.addEventListener('click', function (evento) {
    var preto3Div = document.querySelector('.preto3');
    var textoExpandido3 = document.querySelector('.texto-expandido3');
    var retangulo = preto3Div.getBoundingClientRect();
    var estaNoElemento = retangulo.top <= evento.clientY && evento.clientY <= retangulo.bottom && retangulo.left <= evento.clientX && evento.clientX <= retangulo.right;

    if (!estaNoElemento) {
        // Volta ao tamanho normal
        preto3Div.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido3.style.display = 'none';
        
        estaExpandido3 = false;
    }
});
