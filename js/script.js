// Contact Form Submission Handling
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(event.target);

  fetch(window.location.pathname, { // Use the current page as the endpoint
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