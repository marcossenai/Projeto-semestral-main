const finalDiv = document.querySelector('.tela5');
const cubanaImage = document.querySelector('.cubana');

finalDiv.addEventListener('mousemove', (e) => {
  const xOffset = (e.clientX / finalDiv.offsetWidth - 0.5) * 30; // Ajuste o valor conforme necessário
  const yOffset = (e.clientY / finalDiv.offsetHeight - 0.5) * 30; // Ajuste o valor conforme necessário

  cubanaImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

finalDiv.addEventListener('mouseout', () => {
  cubanaImage.style.transform = 'translate(0, 0)';
});