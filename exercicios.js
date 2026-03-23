// 1) Crie o nome de 10 produtos e armazene em uma lista;

const produtos = ["Arroz Branco (pacote 5kg)", "Feijão Carioca (pacote 1kg)", "Peito de Frango (congelado - 1kg)", "Leite Integral (caixa com 12 litros)", "Café Torrado e Moído (500g)", "Óleo de Soja (900ml)", "Pão de Forma Integral (400g)", "Queijo Mussarela (fatiado - 500g)", "Sabão em Pó (pacote 1,6kg)", "Refrigerante Cola (garrafa 2L)"]
const precos = R$22




// LISTAS (arrays)
const aluno1 = "Amanda"
const aluno2 = "Ariel"
const aluno3 = "Carlos"

// índice:         0        1        2           3
const alunos = ["Amanda","Ariel", "Carlos", "Cristhyan"]
const altura = [1.51    ,  1.80 ,   1.74  ,     1.53   ]

let contador = 0 // variável de início
while(contador <= 3){ // condição de parada
    console.log(alunos[contador] + " - " + altura[contador])
    contador = contador + 1 // incremento do laço
}

// criar um laço de repetição para contar de 0 até 1000000
let c = 0
while (c<=1000000){
    console.log(c)
    c++
}