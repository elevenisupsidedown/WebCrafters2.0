let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  const offset = -currentIndex * 100;  // Moves the slider by 100% for each image
  slider.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 3 seconds
setInterval(showNextSlide, 3000);