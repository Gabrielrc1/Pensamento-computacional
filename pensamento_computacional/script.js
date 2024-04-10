document.getElementById('login-form').addEventListener('submit', function(event){
event.preventDefault()
            var username = document.getElementById('username').value
            var password = document.getElementById('password').value

            //SIMULAÇÃO DE VALIDAÇÃO DE LOGIN
            if (username === 'admin' && password === '1234'){
                document.getElementById('mensagem').innerText = 'Login bem sucedido'
            } else {
                document.getElementById('mensagem').innerText = 'Login inválido'
            }
})