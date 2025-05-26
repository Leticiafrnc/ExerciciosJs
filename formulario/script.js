const form = document.querySelector("form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const errorMessages = document.querySelectorAll(".error-message")

// ao cliar no input não envio os dados

form.addEventListener("submit", (event) => {
    event.preventDefault();
    resetErros()
    validateInputs();
});

// função para o erro

function setError(input, errorMessage){
    const errorMessageElement = input.nextElementSibling
    errorMessageElement.textContent = errorMessage
    //deixar a caixa vermelha 
    input.parentElement.classList.add("error")
}
// quando o formulario for enviado será limpado os erros
function resetErros(){
    errorMessages.forEach((msg) => {
        msg.textContent=""
    })
    nome.parentElement.classList.remove("error")
    email.parentElement.classList.remove("error")
    assunto.parentElement.classList.remove("error")
    mensagem.parentElement.classList.remove("error")

// remover a cor vermelha da borda 

    nome.parentElement.classList.remove("error")
    email.parentElement.classList.remove("error")
    assunto.parentElement.classList.remove("error")
    mensagem.parentElement.classList.remove("error")
}

// validação dos campos 
function validateInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()


    if(nomeValue === ""){
        setError(nome, "Preencha o nome")
    }
    if(emailValue === ""){
        setError(email, "Preencha o email")
    }
    if(assuntoValue === ""){
        setError(assunto, "Preencha o assunto")
    }
    if(mensagemValue === ""){
        setError(mensagem, "Preencha a mensagem")
    }
}
