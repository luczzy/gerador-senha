# **Projeto Gerador de Senhas Seguras com alternância de tema**
Este projeto é um simples gerador de senhas em HTML, CSS e JavaScript. Ele permite ao usuário gerar senhas aleatórias e também possui a funcionalidade de alternar entre o tema claro e escuro.

## **Índice**

- [Gerador de Senha](#gerador-de-senha)
- [Alternância de Tema](#alternância-de-tema)
- [Conclusão](#conclusão)
- [Tecnologias aplicadas](#tecnologias-aplicadas)
- [Fontes utilizadas](#fontes-utilizadas)
- [Autores](#autores)

## **Pré-Visualização**

![Projeto](/img/Gerador%20de%20senha.gif)

## **Funcionalidades**

Essas funcionalidades tornam o gerador de senhas não apenas funcional, mas também confortável e eficiente para o usuário. A adição de temas e a interface simples também melhoram a experiência, tornando-a mais personalizada e agradável.

## **Gerador de Senha** 
O gerador de senha é a funcionalidade principal do projeto, a senha gerada é exibida em um campo de entrada, e o usuário pode copiá-la facilmente. Ele permite criar senhas seguras e aleatórias, o que é fundamental para garantir a segurança em diversas plataformas e sistemas.

### **Como funciona**

- **Tamanho da Senha:** O gerador cria senhas de tamanho fixo, configurado para 12 caracteres, mas você pode facilmente modificar o código para aceitar tamanhos personalizados. 

- **Conjunto de Caracteres:** A senha gerada contém todas as caracteres, sendo elas, Letras maiúsculas de ``A-Z``; Letras minúsculas de ``a-z``; Números de ``0-9``; Símbolos especiais ``!@#$%^&*()_+-=[]{}|;:,.<>?``

- **Lógica de Geração:** O JavaScript seleciona aleatoriamente caracteres de um conjunto predefinido de caracteres. Cada vez que o usuário clica no botão "Gerar Senha", o algoritmo escolhe caracteres aleatórios e forma uma senha.

### **Exemplo**

```js
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
```
## **Alternância de Tema**

A aplicação oferece a possibilidade de alternar entre os temas claro e escuro para que o usuário possa escolher a aparência mais confortável para a visualização.

### **Como funciona**

- **Controle de alternância:** (representado por um ícone de sol/lua) permite ao usuário escolher entre dois temas.

- **Tema Claro:** Com fundo branco e texto escuro, ideal para ambientes bem iluminados.

- **Tema Escuro:** Com fundo escuro e texto claro, recomendado para ambientes com pouca luz, ajudando a reduzir o cansaço visual.

### **Lógica de alternância**

- O tema é controlado através de um input do tipo checkbox, que é lido pelo JavaScript.

- O JavaScript, ao detectar a mudança de estado do checkbox, adiciona ou remove uma classe CSS (``dark-theme`` ou ``light-theme``) ao elemento ``<body>``, alterando assim a aparência da página sem a necessidade de recarregar o navegador.

### **Exemplo:**

```js
const themeSwitch = document.getElementById('input');  // Referência ao input do switch
    const body = document.body;  // Referência ao elemento body

    // Função para alternar o tema
    function toggleTheme() {
        if (themeSwitch.checked) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
    }

    // Monitorar as mudanças no switch
    themeSwitch.addEventListener('change', toggleTheme);

    // Chamar a função para definir o estado inicial com base no checkbox (se estiver marcado, dark-theme será ativado)
    toggleTheme();
```

### **Conclusão** 
Este projeto oferece uma solução prática e acessível para gerar senhas fortes e seguras, com recursos adicionais que aprimoram a experiência do usuário. Seu design responsivo e funcionalidade de alternância de tema garantem uma experiência agradável e adaptável a diferentes contextos de uso. A implementação de uma ferramenta simples, porém poderosa, para melhorar a segurança online é o foco principal, tornando este projeto uma ferramenta útil e necessária para qualquer pessoa preocupada com a proteção de suas contas em serviços digitais.

### **Tecnologias aplicadas:**

- **HTML5:** Para estruturar a página e os formulários.<br>

- **CSS3:** Para estilizar os elementos.<br>

- **JavaScript:** Para adicionar interatividade, como a geração de senha aleatória e a alternância de tema.<br>

### **Fontes utilizadas:**

https://uiverse.io/bociKond/dull-mole-77 <-- Utilizada para a estilização do formulário

https://uiverse.io/RiccardoRapelli/jolly-chicken-91 <-- Utilizada para a estilização do botão de alternância

### **Autor:** 

*Deivid Marques.*