function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Construct the body to send as plain text
    const body = `${name}|${email}|${message}`;

    // Submit to the correct endpoint using PUT to the root path
    fetch(window.location.origin, {  // Using window.location.origin (no need to hardcode)
        method: 'PUT',
        body: body,
        headers: {
            'Content-Type': 'text/plain'
        }
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
}