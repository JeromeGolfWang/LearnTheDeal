// Send the data to the main page
fetch(window.location.href, {  // Use the current page URL
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: `${name}|${email}|${message}` // Send the form data as plain text
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.text();
  })
  .then(responseText => {
    alert(responseText); // Show the success message
    event.target.reset(); // Reset the form
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    alert('There was a problem submitting your message. Please try again later.');
  });