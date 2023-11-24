var estaExpandido1 = false;

document.getElementById('expandir-preto1').addEventListener('click', function () {
    var preto1Div = document.querySelector('.preto1');
    var textoExpandido1 = document.querySelector('.texto-expandido1');
    
    if (!estaExpandido1) {
        // Aumenta o tamanho
        preto1Div.style.height = '39%';
        
        // Exibe o texto expandido
        textoExpandido1.style.display = 'block';
        estaExpandido1 = true;
    } else {
        // Volta ao tamanho normal
        preto1Div.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido1.style.display = 'none';
        estaExpandido1 = false;
    }
});

document.addEventListener('click', function (evento) {
    var preto1Div = document.querySelector('.preto1');
    var textoExpandido1 = document.querySelector('.texto-expandido1');
    var retangulo = preto1Div.getBoundingClientRect();
    var estaNoElemento = retangulo.top <= evento.clientY && evento.clientY <= retangulo.bottom && retangulo.left <= evento.clientX && evento.clientX <= retangulo.right;

    if (!estaNoElemento) {
        // Volta ao tamanho normal
        preto1Div.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido1.style.display = 'none';
        
        estaExpandido1 = false;
    }
});
