
const burgerIcon = document.querySelector('.burger-icon');
const closeButton = document.querySelector('.close-button');
const slideOutNav = document.querySelector('.slide-out-nav');
const menuLinks = document.querySelectorAll('.slide-content li a');

burgerIcon.addEventListener('click', function() {
    slideOutNav.classList.toggle('show-slide-nav');
})

closeButton.addEventListener('click', function() {
    slideOutNav.classList.toggle('show-slide-nav');
})
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', function() {
        slideOutNav.classList.remove('show-slide-nav');
    })
});

/* scroll to top */
const rollUpBtn = document.getElementById('roll-up-btn');
window.addEventListener("scroll", scrollUpFn);

function scrollUpFn() {
    if (window.pageYOffset > 300) {
        rollUpBtn.style.display = "grid";
    } else {
        rollUpBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo(0, 0); 
};

const fromBottom = document.querySelectorAll('.from-bottom');
const fromLeft = document.querySelectorAll('.from-left');
const fromRight = document.querySelectorAll('.from-right');

const appearOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: "-75px"
};


const appearUp = new IntersectionObserver((entries, appearUp) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry.target);
            entry.target.classList.add("up");
            appearUp.unobserve(entry.target);
        }
    });
}, appearOptions);

const appearRight = new IntersectionObserver((entries, appearRight) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry.target);
            entry.target.classList.add("right");
            appearUp.unobserve(entry.target);
        }
    })
}, appearOptions);

const appearLeft = new IntersectionObserver((entries, appearLeft) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry.target);
            entry.target.classList.add("left");
            appearUp.unobserve(entry.target);
        }
    })
}, appearOptions);

fromBottom.forEach(bottom => {
    appearUp.observe(bottom);
});

fromLeft.forEach(left => {
    appearRight.observe(left);
});

fromRight.forEach(right => {
    appearLeft.observe(right);
});
