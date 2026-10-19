
/* =====================================
   OFFBEAT CONTACT FORM
   Frontend Demonstration Only
===================================== */

// Get form elements
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");
const contactFeedback = document.getElementById("contact-feedback");

// Handle form submission
contactForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Check HTML form validation
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    // Remove unnecessary spaces
    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const subject = contactSubject.value.trim();
    const message = contactMessage.value.trim();

    // Check that name is valid
    if (name.length < 2) {
        showContactFeedback("Please enter a valid name.", false);
        return;
    }

    // Check that subject is not empty
    if (subject.length < 3) {
        showContactFeedback(
            "Please enter a subject with at least 3 characters.",
            false
        );
        return;
    }

    // Check that message is long enough
    if (message.length < 10) {
        showContactFeedback(
            "Please enter a message with at least 10 characters.",
            false
        );
        return;
    }

    // Display success message
    showContactFeedback(
        "Thank you, " + name + "! Your message has been " +
        "validated successfully. This is a demo, so no " +
        "actual message was sent.",
        true
    );

    // Clear form after successful validation
    contactForm.reset();
});

// Display form feedback
function showContactFeedback(message, success) {

    contactFeedback.textContent = message;
    contactFeedback.hidden = false;

    // Change border colour based on result
    contactFeedback.style.borderLeftColor =
        success ? "#171717" : "#C04F34";
}
