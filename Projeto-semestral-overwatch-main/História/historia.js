document.querySelectorAll('#minhaLista > li').forEach(function (li) {
    li.addEventListener('click', function (e) {
        // Remova a classe 'selecionado' de todos os elementos span
        document.querySelectorAll('#minhaLista > li > span').forEach(function (span) {
            span.classList.remove('selecionado');
        });

        var subLista = li.querySelector('ul');
        if (subLista && subLista.classList.contains('oculto')) {
            // Adicione a classe 'selecionado' ao elemento span dentro do item clicado
            var span = li.querySelector('span');
            if (span) {
                span.classList.add('selecionado');
            }

            document.querySelectorAll('#minhaLista > li > ul').forEach(function (ul) {
                ul.classList.add('oculto');
            });
            subLista.classList.remove('oculto');
            var imagemSrc = subLista.querySelector('li').dataset.imagem;
            document.querySelector('#containerImagem').innerHTML = '<img src="' + imagemSrc + '">';

            // Faz a imagem com a classe .imagemFixa ficar invisível
            var imagemFixa = document.querySelector('.imagemFixa');
            if (imagemFixa) {
                imagemFixa.style.display = 'none';
            }
        } else if (subLista) {
            subLista.classList.add('oculto');
            document.querySelector('#containerImagem').innerHTML = '';

            // Faz a imagem com a classe .imagemFixa ficar visível novamente
            var imagemFixa = document.querySelector('.imagemFixa');
            if (imagemFixa) {
                imagemFixa.style.display = 'block';
            }
        }
    });
});
