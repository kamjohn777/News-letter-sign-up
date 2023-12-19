document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Always prevent form from submitting for testing
    var emailForm = document.getElementById('email-form');
    var emailInput = document.getElementById('email');
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var errorMessage = document.getElementById('error-message');

    if (!pattern.test(emailInput.value)) {
        // Invalid email address
        emailInput.style.backgroundColor = '#ff3838a3';
        errorMessage.classList.add('active');
        errorMessage.textContent = 'Please enter a valid email address.';
        setTimeout(function() {
            emailForm.reset(); // Reset the form
            emailInput.style.backgroundColor = ''; // Reset the background color
            errorMessage.classList.remove('active');
        }, 2000); // Reset after 2 seconds
    } else {
        // Valid email address
        errorMessage.textContent = '';
        emailForm.reset(); // Reset the form
        emailInput.style.backgroundColor = ''; // Reset the background color
    }
});