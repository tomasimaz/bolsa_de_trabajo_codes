// Funcionalidad para mostrar/ocultar contraseña
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para campos de contraseña del login
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
    
    // Funcionalidad para campos de contraseña del registro
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordToggle = document.getElementById('confirm-password-toggle');
    const confirmPasswordEyeIcon = document.getElementById('confirm-password-eye-icon');
    
    if (confirmPasswordToggle && confirmPasswordInput) {
        confirmPasswordToggle.addEventListener('click', function() {
            // Cambiar el tipo de input
            if (confirmPasswordInput.type === 'password') {
                confirmPasswordInput.type = 'text';
                confirmPasswordEyeIcon.className = 'bi bi-eye-slash';
                confirmPasswordToggle.classList.add('active');
            } else {
                confirmPasswordInput.type = 'password';
                confirmPasswordEyeIcon.className = 'bi bi-eye';
                confirmPasswordToggle.classList.remove('active');
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
    
    // Funcionalidad del formulario de registro
    const registroForm = document.getElementById('registro-formulario');
    if (registroForm) {
        // Indicador de fortaleza de contraseña
        const passwordInputRegistro = document.getElementById('password');
        const strengthIndicator = document.getElementById('password-strength');
        const strengthFill = document.getElementById('strength-fill');
        const strengthText = document.getElementById('strength-text');
        
        if (passwordInputRegistro) {
            passwordInputRegistro.addEventListener('input', function() {
                const password = this.value;
                const strength = checkPasswordStrength(password);
                updateStrengthIndicator(strength, strengthFill, strengthText, strengthIndicator);
            });
        }
        
        // Validación de confirmación de contraseña
        const confirmPasswordInputRegistro = document.getElementById('confirm-password');
        if (confirmPasswordInputRegistro) {
            confirmPasswordInputRegistro.addEventListener('input', function() {
                const password = document.getElementById('password').value;
                const confirmPassword = this.value;
                
                if (confirmPassword && password !== confirmPassword) {
                    this.setCustomValidity('Las contraseñas no coinciden');
                } else {
                    this.setCustomValidity('');
                }
            });
        }
        
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('mail').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const termsAccepted = document.getElementById('terms-check').checked;
            
            // Validación básica
            if (!nombre || !apellido || !email || !password || !confirmPassword) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            if (!termsAccepted) {
                alert('Debes aceptar los términos y condiciones');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            const strength = checkPasswordStrength(password);
            if (strength === 'weak') {
                if (!confirm('Tu contraseña es débil. ¿Deseas continuar de todas formas?')) {
                    return;
                }
            }
            
            // Aquí puedes agregar la lógica de registro
            console.log('Registrando usuario:', { 
                nombre, 
                apellido, 
                email, 
                password, 
                strength 
            });
            
            // Simular envío del formulario
            alert('Registro exitoso. Revisa tu email para confirmar tu cuenta.');
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

// Función para verificar la fortaleza de la contraseña
function checkPasswordStrength(password) {
    let score = 0;
    
    // Longitud mínima
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    
    // Caracteres especiales
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    if (score <= 2) return 'weak';
    if (score <= 4) return 'medium';
    return 'strong';
}

// Función para actualizar el indicador de fortaleza
function updateStrengthIndicator(strength, strengthFill, strengthText, strengthIndicator) {
    strengthIndicator.style.display = 'block';
    
    // Remover clases anteriores
    strengthFill.className = 'strength-fill';
    strengthText.className = 'strength-text';
    
    // Agregar nueva clase
    strengthFill.classList.add(strength);
    strengthText.classList.add(strength);
    
    // Actualizar texto
    switch(strength) {
        case 'weak':
            strengthText.textContent = 'Contraseña débil';
            break;
        case 'medium':
            strengthText.textContent = 'Contraseña media';
            break;
        case 'strong':
            strengthText.textContent = 'Contraseña fuerte';
            break;
    }
}
