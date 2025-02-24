// auth.js (Login & Authentication)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Sample credentials
    const validUsername = 'admin';
    const validPassword = 'password123';
    
    if (username === validUsername && password === validPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to dashboard
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

// Check login status
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html'; // Redirect to login if not logged in
    }
};
