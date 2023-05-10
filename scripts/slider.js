let index = 0;
let direction = 'right';
const slides = document.querySelectorAll('.slider .slide');
const indicators = document.querySelector('.controls .indicators');

function updateSlider() {
    slides.forEach((slide, i) => {
        slide.classList.remove('left', 'right', 'active');
        if (i === index) {
            slide.classList.add('active');
        } else if (i < index) {
            slide.classList.add('left');
        } else {
            slide.classList.add('right');
        }
        if (i === index) {
            indicators.children[i].classList.add('active');
        } else {
            indicators.children[i].classList.remove('active');
        }
    });
}


// Initialize slider
slides.forEach((slide, i) => {
    const indicator = document.createElement('div');
    indicator.addEventListener('click', () => {
        direction = (i > index) ? 'right' : 'left';
        index = i;
        updateSlider();
    });
    indicators.appendChild(indicator);
});
updateSlider();

// Add event listeners to prev/next buttons
document.querySelector('.controls .prev').addEventListener('click', () => {
    direction = 'left';
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});

document.querySelector('.controls .next').addEventListener('click', () => {
    direction = 'right';
    index = (index + 1) % slides.length;
    updateSlider();
});
