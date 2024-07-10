export async function listaProdutos() {
    const conexao = await fetch("https://dummyjson.com/carts");
    const conversao = await conexao.json();
    return conversao;
}
