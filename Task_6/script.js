const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default submission

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  successMessage.textContent = "";

  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name cannot be empty");
    valid = false;
  }

  // Validate Email
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    valid = false;
  }

  // Validate Message
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, "Message must be at least 10 characters");
    valid = false;
  }

  // Success
  if (valid) {
    successMessage.textContent = "Message sent successfully!";
    form.reset();
  }
});

function showError(input, message) {
  const errorEl = input.parentElement.querySelector(".error");
  errorEl.textContent = message;
}

function validateEmail(email) {
  const regex = /^[\w.-]+@[\w.-]+\.\w+$/;
  return regex.test(email);
}
