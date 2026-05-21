const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slides');
function showSlide(index) {
  if (!slides.length) return;
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}
function plusSlides(step) { showSlide(slideIndex + step); }
window.plusSlides = plusSlides;
showSlide(0);
