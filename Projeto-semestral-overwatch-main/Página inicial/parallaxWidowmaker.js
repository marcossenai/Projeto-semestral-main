const tela = document.querySelector('.tela');
const windowImage = document.querySelector('.window');

tela.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX / tela.offsetWidth) * 40; 
    const yOffset = (e.clientY / tela.offsetHeight) * 40; 

    windowImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

