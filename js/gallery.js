let currentSlideIndex = 0;
const slidesContainer = document.getElementById("imageSlides");
const slides = document.querySelectorAll("#gallery figure");
const totalSlides = slides.length;

const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImg");
const closeModalBtn = document.getElementById("closeBtn");

// ==================== Slide Arrows Functionality ====================
document.querySelector("#nextSlideBtn").addEventListener("click", () => {
  changeSlide(currentSlideIndex + 1);
});

document.querySelector("#previousSlideBtn").addEventListener("click", () => {
  changeSlide(currentSlideIndex - 1);
});

function changeSlide(index) {
  slides[currentSlideIndex].classList.remove("active");
  currentSlideIndex = (index + totalSlides) % totalSlides;
  slides[currentSlideIndex].classList.add("active");
  slidesContainer.scrollTo(0, 0);
}


// ======================= Modal Functionality ========================
// Enable clicking on an image to open modal
slides.forEach(slide => {
  slide.addEventListener("click", () => {
    const slideImg = slide.querySelector("img");
    modal.style.display = "flex"/*"block"*/;
    modalImg.src = slideImg.src;
  });
});

// Closing modal with X button
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Closing modal by clicking outside of the modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});