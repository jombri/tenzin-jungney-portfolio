const burgerIcon = document.querySelector('.burger-icon');
const closeButton = document.querySelector('.close-button');
const slideOutNav = document.querySelector('.slide-out-nav');

burgerIcon.addEventListener('click', function() {
    slideOutNav.classList.toggle('show-slide-nav');
})

closeButton.addEventListener('click', function() {
    slideOutNav.classList.toggle('show-slide-nav');
})