document.querySelectorAll('#minhaLista > li').forEach(function (li) {
    li.addEventListener('click', function (e) {
        var subLista = e.target.querySelector('ul');
        if (subLista && subLista.classList.contains('oculto')) {
            document.querySelectorAll('#minhaLista > li > ul').forEach(function (ul) {
                ul.classList.add('oculto');
            });
            subLista.classList.remove('oculto');
            var imagemSrc = subLista.querySelector('li').dataset.imagem;
            document.querySelector('#contenedorImagem').innerHTML = '<img src="' + imagemSrc + '">';
        } else if (subLista) {
            subLista.classList.add('oculto');
            document.querySelector('#contenedorImagem').innerHTML = '';
        }
    });
});