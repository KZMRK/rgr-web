const navItems = document.querySelectorAll('.footer__item');

navItems.forEach((navItem) => {
    navItem.addEventListener('click', (event) => {
        event.preventDefault();

        navItems.forEach((item) => {
            item.classList.remove('active');
        });

        event.target.classList.add('active');
    });
});