// Crie variáveis para armazenar seu nome completo, altura, série e turma. Após isso, mostre no terminal uma mensagem personalizada se apresentando.

let nome1 = "Amanda Freitas"
let altura1 = 1.51
let serie1 = "2 ano do ensino médio"
let turma1 = "B"

let nome2 = "Larissa Alcantara"
let altura2 = 1.70
let serie2 = "2 ano do ensino médio"
let turma2 = "B"

console.log("Olá, meu nome é " + nome1 + "! Possuo " + altura1 + " de altura" + ", estou cursando o " + serie1 + " da turma " + turma1 + "!") 
console.log("Olá, meu nome é " + nome2 + "! Possuo " + altura2 + " de altura" + ", estou cursando o " + serie2 + " da turma " + turma2 + "!") 

//Crie uma lista com 3 esportes que você gosta e mostre-os no terminal, usando o laço de repetição que preferir

const esportes = ["volei", "futebol", "xadrez"]

let contador = 0 // variável de início
while(contador <= 2){ // condição de parada
    console.log(esportes[contador])
    contador = contador + 1 // incremento do laço
}

// Crie uma condição que verifica se você é maior que o professor Patrick, que possui 1.73 de altura

