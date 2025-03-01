// Função para gerar a senha
function gerarSenha(tamanho = 12) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let senha = '';

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }

    return senha;
}

// Adiciona a funcionalidade ao botão "Gerar Senha"
const form = document.querySelector('.form');
const inputSenha = document.querySelector('#generate');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const senhaGerada = gerarSenha(12);  // Define o comprimento da senha
    inputSenha.value = senhaGerada;  // Coloca a senha gerada no campo de entrada
});
