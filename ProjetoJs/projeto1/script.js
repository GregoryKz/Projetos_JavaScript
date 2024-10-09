const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("error-msg");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validação simples
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
    } else {
        errorMsg.textContent = "Invalid username or password!";
        errorMsg.style.display = "block";
    }
});

