const tela = document.querySelector('.tela');
const windowImage = document.querySelector('.window');

tela.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX / tela.offsetWidth) * 40; 
    const yOffset = 0; 

    windowImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

tela.addEventListener('mouseleave', () => {
    windowImage.style.transform = 'translate(0, 0)';
});
