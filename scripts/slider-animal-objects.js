const sliderContainer = document.querySelector('.slider-for-animal-object');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderItems = document.querySelectorAll('.animal-object-info');

const itemsPerPage = 9; // Кількість елементів на одній сторінці
const totalPages = Math.ceil(sliderItems.length / itemsPerPage);
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
    nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showCurrentItems();
        updateButtonsState();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showCurrentItems();
        updateButtonsState();
    }
});

showCurrentItems();
updateButtonsState();
