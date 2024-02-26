function header_nav_mobile_funktion() {
    var mobileNav = document.querySelector('.header_nav_mobile_container');
    mobileNav.classList.toggle('active');
}

let mobile_batton = document.querySelector('.header_nav_mobile');
mobile_batton.addEventListener('click', ()=>{header_nav_mobile_funktion()})

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeftMobile = document.querySelector('.arrow-left_mobile');
const arrowRightMobile = document.querySelector('.arrow-right_mobile');
const slides = document.querySelectorAll('.slider-image');
const photos_bar_container = document.querySelector('.photos_bar_container')

const paginationCircles = [];
let currentSlideIndex = 0;

const createPaginationCircles = () => {
    const div = document.createElement('div');
    div.className = "photos_bar";
    photos_bar_container.appendChild(div);
    paginationCircles.push(div);
    console.log(paginationCircles);
}

const addPaginationCircles = () => {
    slides.forEach(() => createPaginationCircles());
    paginationCircles[0].classList.add('active');
    slides[0].classList.add('block')
    
}

const addActivePaginationCircles = () => {
    paginationCircles[currentSlideIndex].classList.add('active');
}

const removeActivePaginationCircles = () => {
    paginationCircles[currentSlideIndex].classList.remove('active');
}

const showSlide = () => {
    slides[currentSlideIndex].classList.add('block');
};

const hideSlide = () => {
    slides[currentSlideIndex].classList.remove('block');
};

const nextSlide =  async () => {
    await hideSlide();
    await removeActivePaginationCircles();
    currentSlideIndex++;
    if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
    }
    await addActivePaginationCircles();
    await showSlide();
};

setTimeout(() => {setInterval(() => {
    hideSlide();
    removeActivePaginationCircles();
    currentSlideIndex++;
    if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
    }
    addActivePaginationCircles();
    showSlide();
}, 3000)}, 3000);

const prevSlide = async () => {
    await hideSlide();
    await removeActivePaginationCircles();
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
        console.log(currentSlideIndex);
    }
    await addActivePaginationCircles();
    await showSlide();
}

arrowRight.addEventListener('click', nextSlide);
arrowRightMobile.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);
arrowLeftMobile.addEventListener('click', prevSlide);

addPaginationCircles();