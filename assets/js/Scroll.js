// Smooth Scroll on Clicking the Scroll Down Button
document.getElementById('scroll-down').addEventListener('click', function () {
    const nextSection = document.querySelector('#products'); // Change to the ID of your next section
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
});
