const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemWidth = carouselItems[0].offsetWidth;
    const itemsPerLevel = 2;
    let currentLevel = 1;

    function prev() {
      if (currentLevel > 1) {
        currentLevel--;
        updateCarousel();
      }
    }

    function next() {
      if (currentLevel < (carouselItems.length / itemsPerLevel)) {
        currentLevel++;
        updateCarousel();
      }
    }

    function updateCarousel() {
      const translateX = (currentLevel - 1) * itemWidth * itemsPerLevel * -1;
      carousel.style.transform = `translateX(${translateX}px)`;
    }

    updateCarousel();