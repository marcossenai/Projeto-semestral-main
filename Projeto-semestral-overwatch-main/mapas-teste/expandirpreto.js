var estaExpandido = false;

document.getElementById('expandir-preto').addEventListener('click', function () {
    var pretoDiv = document.querySelector('.preto');
    var textoExpandido = document.querySelector('.texto-expandido');
    
    if (!estaExpandido) {
        // Aumenta o tamanho
        pretoDiv.style.height = '39%';
        
        // Exibe o texto expandido
        textoExpandido.style.display = 'block';
        estaExpandido = true;
    } else {
        // Volta ao tamanho normal
        pretoDiv.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido.style.display = 'none';
        estaExpandido = false;
    }
});

document.addEventListener('click', function (evento) {
    var pretoDiv = document.querySelector('.preto');
    var textoExpandido = document.querySelector('.texto-expandido');
    var retangulo = pretoDiv.getBoundingClientRect();
    var estaNoElemento = retangulo.top <= evento.clientY && evento.clientY <= retangulo.bottom && retangulo.left <= evento.clientX && evento.clientX <= retangulo.right;

    if (!estaNoElemento) {
        // Volta ao tamanho normal
        pretoDiv.style.height = '74px';
        
        // Oculta o texto expandido
        textoExpandido.style.display = 'none';
        
        estaExpandido = false;
    }
});
