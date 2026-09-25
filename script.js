function enviarFormulario(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    event.target.reset();
}