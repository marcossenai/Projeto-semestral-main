
const telaTracerDiv = document.querySelector('.tela-tracer');
const tracerperfilImage = document.querySelector('.tracerperfil');

telaTracerDiv.addEventListener('mousemove', (e) => {
  const xOffset = (e.clientX / telaTracerDiv.offsetWidth - 0.5) * 30; 

  tracerperfilImage.style.transform = `translateX(${xOffset}px)`;
});

telaTracerDiv.addEventListener('mouseout', () => {
  tracerperfilImage.style.transform = 'translateX(0)';
});
