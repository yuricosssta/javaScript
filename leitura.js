const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome); //não é possível identificar essa chave em uma string

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
console.log(objetoCliente.nome);
