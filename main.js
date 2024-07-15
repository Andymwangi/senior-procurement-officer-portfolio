function toggleMenu() {
    const menuLinks = document.getElementById('hamburger-nav');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (menuLinks.style.display === 'flex') {
        menuLinks.style.display = 'none';
    } else {
        menuLinks.style.display = 'flex';
    }
    hamburgerIcon.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    let index = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    const transitionTime = 500; 
    const displayTime = 5000;

    function showNextTestimonial() {
        index = (index + 1) % totalTestimonials;
        carouselInner.style.transition = `transform ${transitionTime}ms ease-in-out`;
        carouselInner.style.transform = `translateX(${-index * 100}%)`;

        setTimeout(() => {
            carouselInner.style.transition = 'none';
        }, transitionTime);
    }

    setInterval(showNextTestimonial, displayTime);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_email: 'mwangiedna9@gmail.com',
            message: message
        };

        emailjs.send('service_v9cai5r', 'template_do1mpp4', templateParams)
            .then(function(response) {
                alert('Thank you for contacting Edna Mwangi. We will get back to you soon.');
                document.getElementById('contactForm').reset();
            }, function(error) {
                alert('There was an error sending your message. Please try again.');
            });
    });
});

