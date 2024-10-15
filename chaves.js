const cliente = {
    nome: "João",
    idade: 24,
    email: "email@lega.com",
    telefone: ["31993533040", "31993532050"],
};

cliente.enderecos = [
    {
        rua: "Rua das Bromélias",
        numero: 127,
        apartamento: true,
        complemento: "apto 201",
    },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto); //monstra as chaves do objeto

if (!chavesDoObjeto.includes("enderecos")){
console.error("Erro. é necesário ter um endereço cadastrado.")
};