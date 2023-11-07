const tela = document.querySelector('.meio');
const todosImage = document.querySelector('.todos');

tela.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX / tela.offsetWidth) * 40; 
    const yOffset = (e.clientY / tela.offsetHeight) * 40; 

    todosImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

