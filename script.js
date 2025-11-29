function onDOMLoaded() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Entry at least 3 char!");
    }
    const regex = /@.*?\./;

    if (!regex.test(email)) {
      isValid = false;
      messages.push("Entry valid email!");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Entry strong password with 8 char!");
    }

    if (isValid) {
      feedbackDiv.style.display = "block";
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else if (isValid == false) {
      let joinedMessages = messages.join("<br>");
      feedbackDiv.style.display = "block";
      feedbackDiv.innerHTML = joinedMessages;
      feedbackDiv.style.color = "#dc3545";
    }
  });
}


document.addEventListener("DOMContentLoaded", onDOMLoaded);
