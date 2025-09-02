// Funcionalidad para mostrar/ocultar contraseña
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('password-toggle');
    const passwordEyeIcon = document.getElementById('password-eye-icon');
    
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            // Cambiar el tipo de input
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordEyeIcon.className = 'bi bi-eye-slash';
                passwordToggle.classList.add('active');
            } else {
                passwordInput.type = 'password';
                passwordEyeIcon.className = 'bi bi-eye';
                passwordToggle.classList.remove('active');
            }
        });
    }
    
    // Funcionalidad del formulario de login
    const loginForm = document.getElementById('login-formulario');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('mail').value;
            const password = document.getElementById('password').value;
            
            // Validación básica
            if (!email || !password) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            // Aquí puedes agregar la lógica de autenticación
            console.log('Iniciando sesión con:', { email, password });
            
            // Simular envío del formulario
            alert('Formulario enviado correctamente');
        });
    }
    
    // Funcionalidad del botón de Google
    const googleButton = document.querySelector('.btn-google');
    if (googleButton) {
        googleButton.addEventListener('click', function() {
            // Aquí puedes agregar la lógica de autenticación con Google
            console.log('Iniciando sesión con Google');
            alert('Redirigiendo a Google...');
        });
    }
});
