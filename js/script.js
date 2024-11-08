function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const body = `${name}|${email}|${message}`; // Plain text format

  fetch('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: body
  })
  .then(response => {
    if (response.ok) {
      return response.text(); // Assuming the response is plain text
    } else {
      throw new Error('Network response was not ok: ' + response.statusText);
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