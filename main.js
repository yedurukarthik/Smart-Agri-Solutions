document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
});
