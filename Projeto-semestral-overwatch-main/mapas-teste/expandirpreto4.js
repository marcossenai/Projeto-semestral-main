var estaExpandido4 = false;

document.getElementById('expandir-preto4').addEventListener('click', function () {
    var preto4Div = document.querySelector('.preto4');
    var textoExpandido4 = document.querySelector('.texto-expandido4');
    
    if (!estaExpandido4) {
        // Aumenta o tamanho
        preto4Div.style.height = '39%';
        
        // Exibe o texto expandido
        textoExpandido4.style.display = 'block';
        estaExpandido4 = true;
    } else {
        // Volta ao tamanho normal
        preto4Div.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido4.style.display = 'none';
        estaExpandido4 = false;
    }
});

document.addEventListener('click', function (evento) {
    var preto4Div = document.querySelector('.preto4');
    var textoExpandido4 = document.querySelector('.texto-expandido4');
    var retangulo = preto4Div.getBoundingClientRect();
    var estaNoElemento = retangulo.top <= evento.clientY && evento.clientY <= retangulo.bottom && retangulo.left <= evento.clientX && evento.clientX <= retangulo.right;

    if (!estaNoElemento) {
        // Volta ao tamanho normal
        preto4Div.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido4.style.display = 'none';
        
        estaExpandido4 = false;
    }
});
