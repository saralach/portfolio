let currentIndex = 0;

//const slides = document.querySelectorAll('.slide');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

console.log(slides);

// ----------- Event Listeners -----------
document.querySelector('#next').addEventListener('click', () => {
  changeSlide(currentIndex + 1);
});

document.querySelector('#previous').addEventListener('click', () => {
  changeSlide(currentIndex - 1);
});

function changeSlide(index) {
  slides[currentIndex].classList.remove('active');
  currentIndex = (index + totalSlides) % totalSlides;
  slides[currentIndex].classList.add('active');
}