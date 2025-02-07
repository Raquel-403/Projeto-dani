function verificarHorario(){
    let agora = new Date();
    let diaSemana = agora.getDay();
    let horas = agora.getHours();

    let dentroDoHorario = (diaSemana >= 1 && diaSemana <= 6) && (horas >= 11 && horas <= 15);

    let p2= document.getElementById("p2");
    if (dentroDoHorario){

        p2.style.backgroundColor="green";
    } else{
        p2.style.backgroundColor="red"
    }
}
verificarHorario();
setInterval(verificarHorario,60000);


let carrinho=[];
let total = [];

function adicionarAoCarrinho(nome, preco){
    carrinho.push({nome,preco});
    total+= preco;
    atualizarCarrinho();
}
function atualizarCarrinho(){
    let lista= document.getElementById("cart-items");
    let totalSpan= document.getElementById("cart-tota");

    lista.innerHTML=""; //limpa a lista antes de atualizar

    carrinho.forEach((item, index)=>{
        let li = document.createElement("li");
        li.textContent=${item.nome}-R$ ${item.preco.toFixed(2)};

        // Botao remover itens 

        let bntRemover= document.createElement("button");
        bntRemover.textContent="Remover";
        bntRemover.onclick=()=> removerItem(index);
        li.appendChild(bntRemover);

        lista.appendChild(li);

       
    });

    totalSpan.textContent=total.toFixed(2);

}
