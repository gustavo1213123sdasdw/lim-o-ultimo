let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome: nome, preco: preco });
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';

    carrinho.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        
        let button = document.createElement('button');
        button.textContent = 'Remover';
        button.onclick = function() {
            removerDoCarrinho(index);
        };
        
        li.appendChild(button);
        listaCarrinho.appendChild(li);
    });
}

document.getElementById('formPedido').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode enviar os dados do formulário para a página de pedido concluído
    // Por exemplo, você pode redirecionar para a página de pedido concluído
    window.location.href = 'pedido_concluido.html';
});
