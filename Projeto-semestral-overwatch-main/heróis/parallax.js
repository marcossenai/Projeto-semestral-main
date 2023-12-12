document.querySelector('.hero').addEventListener('mousemove', function (e) {
    const imagemDva = document.querySelector('.imagemDva');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 200;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 200;
    imagemDva.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
});

document.querySelector('.hero').addEventListener('mousemove', function (e) {
    const genji = document.querySelector('.genji');
    const eixoX = (window.innerWidth / 2 - e.pageX) / 200;
    const eixoY = (window.innerHeight / 2 - e.pageY) / 200;
    genji.style.transform = `translateX(${eixoX}px) translateY(${eixoY}px)`;
});