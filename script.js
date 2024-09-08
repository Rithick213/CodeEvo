document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Hide the form but keep its structure in place
    const form = document.getElementById('contact-form');
    form.style.visibility = 'hidden'; // Make it invisible but keep space

    // Create and display thank you message
    let thankYouMessage = document.querySelector('.thank-you');
    if (!thankYouMessage) {
        thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        thankYouMessage.style.fontSize = '20px';
        thankYouMessage.style.color = '#28a745'; // Success message color
        thankYouMessage.style.marginTop = '20px'; // Create space above the message
        thankYouMessage.classList.add('thank-you'); // Add class for easier styling
        const contactSection = document.getElementById('contact');
        contactSection.appendChild(thankYouMessage);
    }

    thankYouMessage.style.display = 'block'; // Show the message

    // Hide the thank you message and re-show form after a delay
    setTimeout(() => {
        thankYouMessage.style.display = 'none'; // Hide the message
        form.style.visibility = 'visible'; // Re-show the form without displacing layout
    }, 5000); // Adjust delay as needed (5 seconds here)
});
