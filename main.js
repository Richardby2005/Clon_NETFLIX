document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form')

    const emailInput = document.getElementById("email-nro")
    const passwordInput = document.getElementById("Contraseña")

    const emailERROR = document.getElementById("email-error")
    const passwordERROR = document.getElementById("password-error")

    loginForm.addEventListener("submit", function(evento){
        evento.preventDefault()

        let validar = true

        emailERROR.textContent = ''
        passwordERROR.textContent = ''

        if ( emailInput.value.trim() === '') {
            emailERROR.textContent = "Ingresa un email valido"
            validar = false
        }

        if(passwordInput.value.trim() === ''){
            passwordERROR.textContent = "Ingresar una contraseña valida"
            validar = false
        }
        if(validar){
            alert("Inicio de sesion valido")
        }
    })

})
