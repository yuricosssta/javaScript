const nomes = ["Ana", "Clara", "Maria", "Maria", "João"];

//novosNomes = new Set(nomes);
//const nomesAtualizados = [...novosNomes];
const nomesAtualizados = [...new Set(nomes)]; //versão mais direta

console.log(nomesAtualizados);