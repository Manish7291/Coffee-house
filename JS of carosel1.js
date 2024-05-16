const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const carouselDots = document.querySelectorAll('.carousel-dot');

let currentSlide = 0;
let intervalId;

function updateSlide() {
  carouselItems.forEach((item, index) => {
    if (index === currentSlide) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  carouselDots.forEach((dot, index) => {