import { listaProdutos } from "./chamaAPI.js";

const lista = document.querySelector(".produtos");

function constroiCard(title, price, quantity, thumbnail) {
    const produto = document.createElement("li");
    produto.className = "produto-item";
    produto.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${thumbnail}" class="img-fluid rounded-start" alt="...">
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">R$ ${price.toFixed(2)}</p>
                    <p class="card-text"><small class="text-body-secondary">Quantidade: ${quantity}</small></p>
                </div>
            </div>
            </div>
        </div>
    `;
    return produto;
}

async function exibeProdutos() {
    const listaAPI = await listaProdutos();
    listaAPI.carts.forEach(carrinho => {
        carrinho.products.forEach(produto => {
            lista.appendChild(
                constroiCard(produto.title, produto.price, produto.quantity, produto.thumbnail)
            );
        });
    });
}

exibeProdutos();