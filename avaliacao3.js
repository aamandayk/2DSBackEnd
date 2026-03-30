// 1) Crie o nome de 10 produtos e armazene em uma lista;

const produtos = ["Arroz Branco (pacote 5kg)", "Feijão Carioca (pacote 1kg)", "Peito de Frango (congelado - 1kg)", "Leite Integral (caixa com 12 litros)", "Café Torrado e Moído (500g)", "Óleo de Soja (900ml)", "Pão de Forma Integral (400g)", "Queijo Mussarela (fatiado - 500g)", "Sabão em Pó (pacote 1,6kg)", "Refrigerante Cola (garrafa 2L)"]

// 2) Crie outra lista para armazenar o preço de cada produto.

const preco = ["R$22", 'R$7', 'R$15', 'R$44', 'R$12', 'R$7', 'R$8', 'R$20', 'R$16',' R$9']

// Mostra estoque

const estoque = ["5 unidades", "2 unidades", "1 unidade", "4 unidades", "3 unidades", "12 unidades", "24 unidades", "0 unidades", "6 unidades", "10 unidades"]
 
// 3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.

function mostrarESTOQUE() {
    let contador = 0
  while(contador <produtos.length){
      console.log(produtos[contador] + " - " + preco[contador] + " - " + estoque[contador])
contador++
  }
}

// 4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)

function adicionarPRODUTO() {
    produtos.push("Pinhosol 2l")
    preco.push("R$ 24,00")
    estoque.push("23 unidades")
}
 
//5) Crie uma função que remove um produto da lista recebendo seu índice.

function remorerPRODUTO(){
    produtos.splice(10, 1)
    preco.splice(10, 1)
    estoque.splice(10, 1)
}


mostrarESTOQUE()

adicionarPRODUTO()

console.log("-----------------------------------")

mostrarESTOQUE()

remorerPRODUTO()

console.log("-----------------------------------")

mostrarESTOQUE()