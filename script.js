document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = document.getElementById('contact-form');
    form.style.visibility = 'hidden';

    let thankYouMessage = document.querySelector('.thank-you');
    if (!thankYouMessage) {
        thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        thankYouMessage.style.fontSize = '20px';
        thankYouMessage.style.color = '#28a745';
        thankYouMessage.style.marginTop = '20px';
        thankYouMessage.classList.add('thank-you');
        const contactSection = document.getElementById('contact');
        contactSection.appendChild(thankYouMessage);
    }

    thankYouMessage.style.display = 'block';

    setTimeout(() => {
        thankYouMessage.style.display = 'none';
        form.style.visibility = 'visible';
    }, 5000);
});
