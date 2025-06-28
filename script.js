// js for mobile view or responsive navbar
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("active");
  });
});



// Function to animate circular progress and numbers
function animateCircularSkills() {
  const circles = document.querySelectorAll('.circle');
  
  circles.forEach(circle => {
    const percent = parseInt(circle.getAttribute('data-percent'));
    let current = 0;
    const span = circle.querySelector('span');

    const interval = setInterval(() => {
      if (current <= percent) {
        circle.style.setProperty('--value', current);
        span.textContent = `${current}%`;
        current++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Speed of counting
  });
}

// Intersection Observer to trigger on scroll into view
const skillSection = document.querySelector('#Skills');
let hasAnimated = false;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      animateCircularSkills();
      hasAnimated = true;
      observer.unobserve(skillSection);
    }
  });
}, { threshold: 0.4 });

observer.observe(skillSection);



