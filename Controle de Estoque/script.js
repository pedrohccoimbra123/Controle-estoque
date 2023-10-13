
let estoque = {};

function exibirEstoque() {
    const estoqueDiv = document.getElementById("estoque");
    estoqueDiv.innerHTML = "";
    for (const produto in estoque) {
        const quantidade = estoque[produto];
        estoqueDiv.innerHTML += `<p>${produto}: ${quantidade}</p>`;
    }
}


function adicionarProduto() {
    const produtoInput = document.getElementById("produto");
    const quantidadeInput = document.getElementById("quantidade");
    const produto = produtoInput.value;
    const quantidade = parseInt(quantidadeInput.value);
    
    if (!estoque[produto]) {
        estoque[produto] = 0;
    }

    estoque[produto] += quantidade;
    exibirEstoque();
}

function atualizarEstoque() {
    const produtoInput = document.getElementById("produto");
    const quantidadeInput = document.getElementById("quantidade");
    const produto = produtoInput.value;
    const quantidade = parseInt(quantidadeInput.value);

    if (estoque[produto]) {
        estoque[produto] = quantidade;
        exibirEstoque();
    } else {
        alert("Produto não encontrado no estoque.");
    }
}



function deletarProduto() {
    const produtoInput = document.getElementById("produto");
    const produto = produtoInput.value;

    if (estoque[produto]) {
        delete estoque[produto];
        exibirEstoque();
    } else {
        alert("Produto não encontrado no estoque.");
    }
}

exibirEstoque();

