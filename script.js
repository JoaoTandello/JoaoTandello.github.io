function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    event.target.reset();
}

let projetoAtual = 0;

function avancarProjetos() {
    const grid = document.getElementById("outrosProjetosGrid");
    const projetos = document.querySelectorAll(".outro-projeto");
    const largura = projetos[0].offsetWidth;
    const gap = 20;
    const projetosVisiveis = window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 900
            ? 2
            : 3;
    const maxProjetos = projetos.length - projetosVisiveis;

    if (projetoAtual < maxProjetos) {
        projetoAtual++;
    }

    grid.style.transform = `translateX(-${projetoAtual * (largura + gap)}px)`;
}

function voltarProjetos() {
    const grid = document.getElementById("outrosProjetosGrid");
    const projetos = document.querySelectorAll(".outro-projeto");
    const largura = projetos[0].offsetWidth;
    const gap = 20;

    if (projetoAtual > 0) {
        projetoAtual--;
    }

    grid.style.transform = `translateX(-${projetoAtual * (largura + gap)}px)`;
}


window.addEventListener("resize", function () {
    const grid = document.getElementById("outrosProjetosGrid");

    if (!grid) {
        return;
    }

    projetoAtual = 0;
    grid.style.transform = "translateX(0)";
});