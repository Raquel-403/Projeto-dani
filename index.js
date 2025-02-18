function verificarHorarioDeFuncionamento() {
    const agora = new Date(); // Cria um objeto de data com o horário atual
    const diaDaSemana = agora.getDay(); // Retorna o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
    const horaAtual = agora.getHours(); // Retorna a hora atual (de 0 a 23)

    const elementoP2 = document.getElementById('p2'); // Obtém o elemento com o id 'P2'

    // Verifica se o dia está entre segunda (1) e sábado (6) e se a hora está entre 11:00 e 15:00
    if (diaDaSemana >= 1 && diaDaSemana <= 6) {
        if (horaAtual >= 11 && horaAtual < 15) {
            // Durante o horário de funcionamento - muda fundo para verde
            elementoP2.style.backgroundColor = 'green';
        } else {
            // Fora do horário de funcionamento - muda fundo para vermelho
            elementoP2.style.backgroundColor = 'red';
        }
    } else {
        // Domingo - muda fundo para vermelho
        elementoP2.style.backgroundColor = 'red';
    }
}

// Chama a função para definir o fundo ao carregar a página
verificarHorarioDeFuncionamento();



document.addEventListener("DOMContentLoaded", function () {
    function verificarDisponibilidade() {
        const agora = new Date();
        const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
        const hora = agora.getHours();
        const minutos = agora.getMinutes();
        
        const feijoada = document.getElementById("feijoada");
        const titulo = document.getElementById("feijoda");
        const botaoIndisponivel = document.getElementById("indisponivel");
        
        const dentroHorario = (hora > 11 || (hora === 11 && minutos >= 0)) && (hora < 15 || (hora === 15 && minutos === 0));
        const diaCorreto = diaSemana === 3 || diaSemana === 6; // 3 = Quarta, 6 = Sábado
        
        if (diaCorreto && dentroHorario) {
            if (titulo) titulo.style.backgroundColor = ""; // Mantém o padrão quando disponível
            if (botaoIndisponivel) botaoIndisponivel.style.display = "none"; // Esconde o botão
        } else {
            if (titulo) titulo.style.backgroundColor = "red"; // Muda o fundo para vermelho
            if (botaoIndisponivel) {
                botaoIndisponivel.style.display = "block";  
                botaoIndisponivel.innerText = "Item indisponivel. Feijoda apenas às Quartas e sábados";
            }
        }
    }
    
    verificarDisponibilidade();
    setInterval(verificarDisponibilidade, 60000);
});


