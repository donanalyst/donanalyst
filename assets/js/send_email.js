function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_ok609dw", "template_q5vmmrr", parms)
        .then(function(response) {
            alert("Email Sent Successfully!");
            document.getElementById("contact-form").reset(); // Clear the form after sending
        }, function(error) {
            alert("Failed to send email: " + error.text);
        });

    return false; // Prevent form from refreshing
}
