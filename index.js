
document.addEventListener("DOMContentLoaded", function () {
    let horarioFuncionamento = document.getElementById("p2");

    // Obtém a hora atual do usuário
    let agora = new Date();
    let horaAtual = agora.getHours();

    // Definição do horário de funcionamento
    let horaAbertura = 11;
    let horaFechamento = 15;

    // Verifica se está dentro do horário de funcionamento
    if (horaAtual >= horaAbertura && horaAtual < horaFechamento) {
        horarioFuncionamento.style.backgroundColor = "green"; // Verde quando aberto
        horarioFuncionamento.style.color = "white"; // Texto branco
        horarioFuncionamento.textContent = "Estamos abertos! Atendimento das 11h às 15h.";
    } else {
        horarioFuncionamento.style.backgroundColor = "red"; // Vermelho quando fechado
        horarioFuncionamento.style.color = "white"; // Texto branco
        horarioFuncionamento.textContent = "Estamos fechados! Atendimento das 11h às 15h.";
    }
});

