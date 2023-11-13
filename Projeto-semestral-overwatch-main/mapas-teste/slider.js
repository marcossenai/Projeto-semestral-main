let slideIndex = 0;

function moverSlide(n) {
    slideIndex += n;
    mostrarSlides();
}

function mostrarSlides() {
    const slides = document.querySelector('.slides');
    if (slideIndex === -1) {
        slideIndex = slides.children.length - 1;
    } else if (slideIndex === slides.children.length) {
        slideIndex = 0;
    }
    const translateValue = -slideIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}