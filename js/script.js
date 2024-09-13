// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close the mobile menu after clicking a link
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    }
  });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form Submission Handling
function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.querySelector('input[type="text"]').value.trim();
  const email = event.target.querySelector('input[type="email"]').value.trim();
  const message = event.target.querySelector('textarea').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Here you can add code to handle form submission, e.g., send data to a server
  // For demonstration, we'll just show a success message
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset the form
  event.target.reset();
}

// Optional: Additional Interactivity for SVGs (e.g., Tooltip on Hover)
// Uncomment and customize the following code if you wish to add tooltips to inline SVGs
/*
document.querySelectorAll('.svg-section svg rect').forEach(rect => {
  rect.addEventListener('mouseenter', (e) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = rect.getAttribute('data-tooltip'); // Ensure your SVG rects have a data-tooltip attribute
    document.body.appendChild(tooltip);
    
    // Position the tooltip
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
  });
  
  rect.addEventListener('mouseleave', () => {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) tooltip.remove();
  });
});
*/

/* 
  CSS for Tooltip (Add to style.css if using the tooltip feature)
  
  .tooltip {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 0.9rem;
    pointer-events: none;
    z-index: 1000;
  }
*/