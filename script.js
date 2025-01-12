// Percentage values for each language
const percentages = {
  javascript: 90,
  css: 80,
  html: 85,
  jquery: 70,
  bootstrap: 75,
  c_language: 60,
};

// Function to animate the circle
function animateCircle(circle, percentage) {
  console.log("Animating circle for percentage: " + percentage); // Debugging line
  const radius = circle.querySelector('.circle-progress').r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  console.log("Calculated offset: " + offset); // Debugging line

  // Animate the circle
  circle.querySelector('.circle-progress').style.strokeDashoffset = offset;
  circle.querySelector('.circle-text').textContent = `${percentage}%`;
}

// IntersectionObserver to observe when circles come into the viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circle = entry.target;
      const language = circle.querySelector('h5').textContent.toLowerCase().replace(/\s+/g, '_');
      const percentage = percentages[language];  // Fetch the percentage for the language

      if (percentage !== undefined) {
        animateCircle(circle, percentage);  // Call animateCircle with the correct percentage
      }
      
      observer.unobserve(circle);  // Stop observing the circle after it becomes visible
    }
  });
}, {
  threshold: 0.5,  // Trigger when 50% of the circle is visible
});

// Select all circle elements and observe them
document.querySelectorAll('.circle-chart').forEach(circle => {
  observer.observe(circle);
});

// Optional: Code for handling the button click event (modal functionality)
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetModal = this.getAttribute('data-bs-target'); 
    const modal = new bootstrap.Modal(document.querySelector(targetModal)); 
    modal.show(); 
  });
});
