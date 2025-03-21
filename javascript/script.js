const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

const validEmail = "sankey901@solutions.com";
const validPassword = "mindset";

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";

    setTimeout(() => {
        errorMessage.style.display = "none";
    }, 3000);

    form.reset();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    if (email !== validEmail) {
        showError("Invalid username/email");
    } else if (password !== validPassword) {
        showError("Invalid password");
    } else {
        window.location.href = "/pages/welcome.html";
    }

});