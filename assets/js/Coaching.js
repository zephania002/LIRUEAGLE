// Example of form submission handling (booking or contact)
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Your session is successfully booked!");
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Your message has been sent!");
});
