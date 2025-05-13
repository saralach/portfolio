let currentIndex = 0;
const slides = document.querySelectorAll("#gallery figure");
const totalSlides = slides.length;

const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImg");
const closeModalBtn = document.getElementById("closeBtn");

// =============== Slide Arrows Functionality ===============
document.querySelector("#next").addEventListener("click", () => {
  changeSlide(currentIndex + 1);
});

document.querySelector("#previous").addEventListener("click", () => {
  changeSlide(currentIndex - 1);
});

function changeSlide(index) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (index + totalSlides) % totalSlides;
  slides[currentIndex].classList.add("active");
}


// ================== Modal Functionality ===================
// Enable clicking on an image to open modal
slides.forEach(slide => {
  slide.addEventListener("click", () => {
    const slideImg = slide.querySelector("img");
    modal.style.display = "block";
    modalImg.src = slideImg.src;
  });
});

// Closing modal with X button
slides.forEach(slide => {
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

// Closing modal by clicking outside of the modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});