document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulación de autenticación
    if (email && password) {
        // En un caso real, aquí iría la llamada al servidor
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        window.location.href = 'dashboard.html';
    } else {
        alert('Por favor, complete todos los campos');
    }
});