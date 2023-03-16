// Replace <FORM_KEY> with your Google Form key
const FORM_KEY = '1FAIpQLSfmh-5sJnFJdCu-lmM8PddQpAaFNPQd9JeavcTPbK-3M2ZTBw';

// Get a reference to the form and its submit button
const form = document.querySelector('.php-email-form');
const submitButton = document.querySelector('#submit-button');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
// Prevent the default form submission behavior
event.preventDefault();

// Get the form data and construct the API request URL
const formData = new FormData(form);
const url = `https://docs.google.com/forms/d/e/${FORM_KEY}/formResponse?${serialize(formData)}`;

// Send the API request
const request = new XMLHttpRequest();
request.open('GET', url);
request.send();

// Display a confirmation message to the user
alert('Your form has been submitted!');
});

// Helper function to serialize form data as URL-encoded string
function serialize(formData) {
const params = [];
for (const [name, value] of formData) {
    params.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
}
return params.join('&');
}
