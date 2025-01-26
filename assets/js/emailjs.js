// // document.getElementById("contactForm").addEventListener("submit", function (e) {
// //     e.preventDefault();

// //     // Collect form data
// //     const formData = new FormData(this);
// //     const formObject = {};
// //     formData.forEach((value, key) => {
// //         formObject[key] = value;
// //     });

// //     // Send email using EmailJS
// //     emailjs.send("service_mpupquc", "template_zwq47q7", formObject)
// //         .then(() => {
// //             document.getElementById("formResponse").innerText = "Message sent successfully!";
// //             this.reset();
// //         })
// //         .catch(() => {
// //             document.getElementById("formResponse").innerText = "Failed to send the message. Please try again.";
// //         });
// // });
// // Reference your form
// const form = document.querySelector('form');

// // Add an event listener for form submission
// form.addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Get form data
//     const name = form.querySelector('input[placeholder="Enter your name"]').value;
//     const email = form.querySelector('input[placeholder="Enter your email"]').value;
//     const subject = form.querySelector('input[placeholder="Enter subject"]').value;
//     const message = form.querySelector('textarea[placeholder="Enter your message"]').value;

//     // Use EmailJS to send the email
//     emailjs.send('service_mpupquc', 'template_zwq47q7', {
//         from_name: name,              // User's name (sender)
//         email: email,                 // User's email address (sender)
//         message: message,             // The actual message from the user
//         to_email: 'zephany001@gmail.com' // Your email address (recipient)
//     }).then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Email sent successfully!');
//     }).catch((error) => {
//         console.log('FAILED...', error);
//         alert('Email failed to send.');
//     });
// });




document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Add recipient's email address
    formObject.to_email = 'zephany001@gmail.com'; // Replace with the recipient's email address

    // Send email using EmailJS
    emailjs.send("service_mpupquc", "template_zwq47q7", formObject)
        .then(() => {
            document.getElementById("formResponse").innerText = "Message sent successfully!";
            this.reset();
        })
        .catch(() => {
            document.getElementById("formResponse").innerText = "Failed to send the message. Please try again.";
        });
});
