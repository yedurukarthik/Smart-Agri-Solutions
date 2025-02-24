// scripts/auth.js (Login & Authentication Handling)

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    
    // If the user is not logged in, force them to login
    if (!localStorage.getItem("isAuthenticated")) {
        if (window.location.pathname !== "/login.html") {
            window.location.href = "login.html"; 
        }
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

    // Logout Button Logic
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isAuthenticated");
            window.location.href = "login.html"; // Redirect to login after logout
        });
    }
});
