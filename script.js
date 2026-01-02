var sidenav = document.querySelector(".side-navbar")

function showNavbar() {
    sidenav.style.left = "0"
}

function closeNavbar() {
    sidenav.style.left = "-60%"
}


// Ensure this ID matches the one in your HTML exactly
const contactForm = document.getElementById('contact');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Stops the page from refreshing

        alert('Thank you for your message!');
        this.reset(); // Clears the form fields
    });
}




