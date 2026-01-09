const form = document.getElementById("signupForm");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

// Show / Hide Password
togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁️";
    }
});

// Form Submit
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password) {
        showMessage("All fields are required", "red");
        return;
    }

    if (!emailPattern.test(email)) {
        showMessage("Enter a valid email address", "red");
        return;
    }

    if (password.length < 6) {
        showMessage("Password must be at least 6 characters", "red");
        return;
    }

    // Save user (localStorage)
    const user = { name, email };
    localStorage.setItem("user", JSON.stringify(user));

    showMessage("Account created successfully 🎉 Redirecting...", "green");

// Open shopping site in new tab after 1.5 seconds
// Replace your previous window.open code
setTimeout(() => {
    window.open("data.html", "_blank");
}, 1500);


form.reset();

});

// Message function
function showMessage(text, color) {
    message.style.color = color;
    message.textContent = text;
}