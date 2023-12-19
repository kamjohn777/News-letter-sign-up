document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Always prevent form from submitting for testing
    var emailForm = document.getElementById('email-form');
    var emailInput = document.getElementById('email');
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');
    var mainNewsContainer = document.querySelector('.main-news-container');
    const successPTag = document.getElementById('success-p-tag');

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
        successPTag.textContent = 'A confirmation email has been sent to ' + emailInput.value + '. Please open it and click the button inside to confirm your subscription.';
        mainNewsContainer.classList.add('hide'); // Hide the main news container
        setTimeout(function() {
            successMessage.classList.remove('hide'); // Show the success message
            successMessage.classList.add('show');
        }, 500); // Show after 0.5 seconds
    }
});

document.getElementById('dismiss-btn').addEventListener('click', function() {
    var mainNewsContainer = document.querySelector('.main-news-container');
    var successMessage = document.getElementById('success-message');
    successMessage.classList.add('hide'); // Hide the success message
    successMessage.classList.remove('show');
    setTimeout(function() {
        mainNewsContainer.classList.remove('hide'); // Show the main news container
    }, 500); // Show after 0.5 seconds
});