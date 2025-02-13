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

// Slideshow Logic
let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  
  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");
  
  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to first slide
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Change slide every 10 seconds
  setTimeout(showSlides, 10000);
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);