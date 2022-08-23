
let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');


toggle.onclick = function () {
    navigation.classList.toggle('active')
}
function logout(){
    window.location.href = "index.html";
}


function abrirUsuario() {

    if (document.querySelector(".navigationTopics").style.display === "none") {
        document.querySelector(".navigationTopics").style.display = "block"

        document.querySelector(".treinamentoTopic").style.display = "none"
        document.querySelector(".CursoTopic").style.display = "none"
        document.querySelector(".VideosTopic").style.display = "none"
        document.querySelector(".ComentariosTopic").style.display = "none"
    } else {
        document.querySelector(".navigationTopics").style.display = "none"
    }

}

function abrirTreinamento() {

    if (document.querySelector(".treinamentoTopic").style.display === "none") {
        document.querySelector(".treinamentoTopic").style.display = "block"

        document.querySelector(".CursoTopic").style.display = "none"
        document.querySelector(".VideosTopic").style.display = "none"
        document.querySelector(".ComentariosTopic").style.display = "none"
        document.querySelector(".navigationTopics").style.display = "none"
    } else {
        document.querySelector(".treinamentoTopic").style.display = "none"
    }

}

function abrirCurso() {

    if (document.querySelector(".CursoTopic").style.display === "none") {
        document.querySelector(".CursoTopic").style.display = "block"

        document.querySelector(".treinamentoTopic").style.display = "none"
        document.querySelector(".VideosTopic").style.display = "none"
        document.querySelector(".ComentariosTopic").style.display = "none"
        document.querySelector(".navigationTopics").style.display = "none"
    } else {
        document.querySelector(".CursoTopic").style.display = "none"
    }

}

function abrirVideos() {

    if (document.querySelector(".VideosTopic").style.display === "none") {
        document.querySelector(".VideosTopic").style.display = "block"

        document.querySelector(".treinamentoTopic").style.display = "none"
        document.querySelector(".CursoTopic").style.display = "none"
        document.querySelector(".ComentariosTopic").style.display = "none"
        document.querySelector(".navigationTopics").style.display = "none"
    } else {
        document.querySelector(".VideosTopic").style.display = "none"
    }

}

function abrirComentarios() {

    if (document.querySelector(".ComentariosTopic").style.display === "none") {
        document.querySelector(".ComentariosTopic").style.display = "block"

        document.querySelector(".treinamentoTopic").style.display = "none"
        document.querySelector(".CursoTopic").style.display = "none"
        document.querySelector(".VideosTopic").style.display = "none"
        document.querySelector(".navigationTopics").style.display = "none"
    } else {
        document.querySelector(".ComentariosTopic").style.display = "none"
    }
}







function ShowHide() {
    var ClasseUtilizada = 'navigationTopics';//substituir pela ação do onclick pegando a classe
    //var ClasseUtilizada = navigation.addEventListener('click', Event )
    const Nomes = ['ComentariosTopic', 'treinamentoTopic', 'CursoTopic', 'VideosTopic', 'navigationTopics'];

    if (document.querySelector("." + ClasseUtilizada).style.display === "none") {
        document.querySelector("." + ClasseUtilizada).style.display = "block"
        for (let i = 0; i < Nomes.length; i++) {
            if (ClasseUtilizada != Nomes[i])
                document.querySelector("." + Nomes[i]).style.display = "none"
        }
    } else {
        document.querySelector("." + ClasseUtilizada).style.display = "none"
    }
}

navigation.addEventListener('click', event => {
    console.log(event)
    
})