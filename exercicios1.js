// 1) Crie o nome de 10 produtos e armazene em uma lista;

const produtos = ["Arroz Branco (pacote 5kg)", "Feijão Carioca (pacote 1kg)", "Peito de Frango (congelado - 1kg)", "Leite Integral (caixa com 12 litros)", "Café Torrado e Moído (500g)", "Óleo de Soja (900ml)", "Pão de Forma Integral (400g)", "Queijo Mussarela (fatiado - 500g)", "Sabão em Pó (pacote 1,6kg)", "Refrigerante Cola (garrafa 2L)"]

// 2) Crie outra lista para armazenar o preço de cada produto.

const precos = ["R$22", 'R$7', 'R$15', 'R$44', 'R$12', 'R$7', 'R$8', 'R$20', 'R$16',' R$9']
 
// 3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.

function mostrarProdutos(){ 
    produtos.forEach((produto) => {
        console.log(produto)
    })
}
        mostrarProdutos()