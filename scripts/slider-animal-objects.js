const sliderContainer = document.querySelector('.slider-for-animal-object');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const currentPageElement = document.querySelector('.current-page');
let sliderItems = document.querySelectorAll('.animal-object-info');

const itemsPerPage = 9; // Кількість елементів на одній сторінці
let currentPage = 1;

function showCurrentItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    sliderItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function updateButtonsState() {
    prevButton.disabled = currentPage === 1;
    prevButton.classList.toggle('disabled', currentPage === 1);
    nextButton.disabled = currentPage === Math.ceil(sliderItems.length / itemsPerPage);
    nextButton.classList.toggle('disabled', currentPage === Math.ceil(sliderItems.length / itemsPerPage));
}

function updateSliderAnimal() {
    sliderItems = document.querySelectorAll('.animal-object-info'); // Оновити колекцію елементів
    showCurrentItems();
    updateButtonsState();
    currentPageElement.textContent = currentPage;

    prevButton.focus();
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateSliderAnimal();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(sliderItems.length / itemsPerPage)) {
        currentPage++;
        updateSliderAnimal();
    }
});

window.addEventListener('resize', updateSliderAnimal);

showCurrentItems();
updateButtonsState();
