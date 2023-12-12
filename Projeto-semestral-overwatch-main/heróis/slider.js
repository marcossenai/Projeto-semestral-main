var sliders = Array.from(document.querySelectorAll('.slider'));
var indicators = Array.from(document.querySelectorAll('.indicator'));

indicators.forEach(function(indicator, index) {
    indicator.addEventListener('click', function() {
        sliders.forEach(function(slider) {
            slider.classList.remove('active');
        });
        indicators.forEach(function(indicator) {
            indicator.classList.remove('active');
        });
        sliders[index].classList.add('active');
        indicator.classList.add('active');
    });
});
