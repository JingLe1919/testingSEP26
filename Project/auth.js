
/* =====================================
   OFFBEAT LOGIN / REGISTER
   Frontend Demonstration Only
===================================== */

// Login and Register tabs
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");

// Form elements
const authForm = document.getElementById("auth-form");
const formHeading = document.getElementById("form-heading");
const formSubtitle = document.getElementById("form-subtitle");
const nameGroup = document.getElementById("name-group");
const confirmGroup = document.getElementById("confirm-group");

const fullName = document.getElementById("full-name");
const emailInput = document.getElementById("auth-email");
const passwordInput = document.getElementById("auth-password");
const confirmPassword = document.getElementById("confirm-password");

const showPassword = document.getElementById("show-password");
const submitButton = document.getElementById("auth-submit");
const feedback = document.getElementById("auth-feedback");

// Current form mode
let isRegisterMode = false;

// Switch between Login and Register
function switchAuthMode(registerMode) {

    isRegisterMode = registerMode;

    // Update active tab
    loginTab.classList.toggle("active", !registerMode);
    registerTab.classList.toggle("active", registerMode);

    // Show additional registration fields
    nameGroup.hidden = !registerMode;
    confirmGroup.hidden = !registerMode;

    // Update required fields
    fullName.required = registerMode;
    confirmPassword.required = registerMode;

    // Update form text
    formHeading.textContent = registerMode
        ? "JOIN THE CLUB."
        : "WELCOME BACK.";

    formSubtitle.textContent = registerMode
        ? "Create your OFFBEAT demo profile."
        : "Log in to your account.";

    submitButton.textContent = registerMode
        ? "REGISTER →"
        : "LOGIN →";

    // Update password autocomplete
    passwordInput.autocomplete = registerMode
        ? "new-password"
        : "current-password";

    // Clear old input and messages
    authForm.reset();
    feedback.hidden = true;

    passwordInput.type = "password";
    confirmPassword.type = "password";
}

// Login tab
loginTab.addEventListener("click", function() {
    switchAuthMode(false);
});

// Register tab
registerTab.addEventListener("click", function() {
    switchAuthMode(true);
});

// Show or hide passwords
showPassword.addEventListener("change", function() {

    const inputType = showPassword.checked ? "text" : "password";

    passwordInput.type = inputType;
    confirmPassword.type = inputType;
});

// Handle form submission
authForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Check built-in HTML validation
    if (!authForm.checkValidity()) {
        authForm.reportValidity();
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Check registration details
    if (isRegisterMode) {

        const name = fullName.value.trim();

        if (name.length < 2) {
            feedback.textContent = "Please enter your full name.";
            feedback.hidden = false;
            return;
        }

        if (password !== confirmPassword.value) {
            feedback.textContent = "Passwords do not match.";
            feedback.hidden = false;
            return;
        }

        feedback.textContent =
            "Registration form validated successfully! " +
            "This is a demo, so no account was created.";

    } else {

        feedback.textContent =
            "Login form validated for " + email +
            ". This is a demo, so no real login occurred.";
    }

    feedback.hidden = false;

    // Don't retain entered passwords
    passwordInput.value = "";
    confirmPassword.value = "";
});
