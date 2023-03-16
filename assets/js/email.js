(function() {
    // Initialize EmailJS with your user ID
    emailjs.init("user_123abc");

    // Set up the form submission handler
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get the form data
      const formData = {
        name: this.elements['name'].value,
        email: this.elements['email'].value,
        subject: this.elements['subject'].value,
        message: this.elements['message'].value,
      };

      // Send the form data as an email using EmailJS
      emailjs.send("my_service", "my_template", formData)
        .then(function(response) {
          console.log("SUCCESS!", response.status, response.text);
          // Show a success message to the user
          document.getElementById('success-message').classList.remove('d-none');
        }, function(error) {
          console.log("FAILED...", error);
          // Show an error message to the user
          document.getElementById('error-message').classList.remove('d-none');
        });
    });
  })();