// auth.js (Login & Authentication Handling)

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const logoutBtn = document.getElementById("logoutBtn");

    // Check if the user is already logged in
    if (!localStorage.getItem("isAuthenticated")) {
        window.location.href = "login.html"; // Redirect to login if not authenticated
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Dummy authentication (Replace with actual logic)
            if (username === "admin" && password === "password") {
                localStorage.setItem("isAuthenticated", "true");
                window.location.href = "dashboard.html"; // Redirect after login
            } else {
                alert("Invalid credentials! Please try again.");
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isAuthenticated");
            window.location.href = "login.html"; // Redirect to login after logout
        });
    }
});
