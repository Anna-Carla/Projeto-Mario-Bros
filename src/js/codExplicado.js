/*  Objetivo 1 - quando o usuário clucar no botão veja o trailer, devemos abrir a modal com o video do trailer
    Passo 1 - pegar o elemento que representa o botão na tela usando o js
    Passo 2 - identificar quando o usuário clicou no botão
    Passo 3 - pegar o elemento da modal no js
    Passo 4 - abrir o modal na tela

    Objetivo 2 - quando o usuário clicar no X devemos fechar a modal 
    Passo 1 - Pegar o elemento de fechar modal usando o js
    Passo 2 - identificar quando o usuário clicar no X
    Passo 3 - fechar a modal 
*/

//OBJETIVO 1

//Passo 1 - pegar o elemento que representa o botão na tela usando o js

const botaoTrailer = document.querySelector(".botao-trailer");

//Passo 2 - identificar quando o usuário clicou no botão

botaoTrailer.addEventListener("click", () => {
    //Passo 4 - abrir o modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo)
})

//Passo 3 - pegar o elemento da modal no js

const modal = document.querySelector(".modal");

//OBJETIVO 2

//Passo 1 - Pegar o elemento de fechar modal usando o js

const botaoFecharModal = document.querySelector(".fechar-modal");

//Passo 2 - identificar quando o usuário clicar no X

botaoFecharModal.addEventListener("click", () => {
    // Passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
})

const video = document.getElementById("video")
const linkDoVideo = video.src

//CRIANDO UMA FUNÇÃO PARA NÃO DEIXAR O CÓDIGO REPETITIVO
/*function alternarModal (){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
}) */