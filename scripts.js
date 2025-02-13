// Select all sections
const sections = document.querySelectorAll('.section');

// Intersection Observer to detect when the sections are in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add 'section-visible' class when the section comes into view
      entry.target.classList.add('section-visible');
      observer.unobserve(entry.target); // Stop observing once the section is in view
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// Carousel Logic
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carousel = document.querySelector(".carousel");
let index = 0;

prevButton.addEventListener("click", () => {
  index = (index > 0) ? index - 1 : carousel.children.length - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  index = (index < carousel.children.length - 1) ? index + 1 : 0;
  updateCarousel();
});

function updateCarousel() {
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Love Meter Logic
let loveLevel = 0;
document.body.addEventListener("click", () => {
  if (loveLevel < 100) {
    loveLevel += 10;
    document.getElementById("loveMeter").style.width = loveLevel + "%";
    document.getElementById("loveMeter").textContent = loveLevel + "%";
  }
});
