// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

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

// Contact Form Submission Handling
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(event.target);

  fetch('/contact', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        return response.text(); // Assuming the response is plain text
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(responseText => {
      alert(responseText); // Show the success message
      event.target.reset(); // Reset the form
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      alert('There was a problem submitting your message. Please try again later.');
    });
}

  // Here you can add code to handle form submission, e.g., send data to a server
  // For demonstration, we'll just show a success message
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset the form
  event.target.reset();
}