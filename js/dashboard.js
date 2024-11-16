// Verificar autenticación
if (!localStorage.getItem('isAuthenticated')) {
    window.location.href = 'index.html';
}

// Manejar la navegación del sidebar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});