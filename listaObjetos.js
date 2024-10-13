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

cliente.enderecos.push({
    rua: "Rua Carmelita",
    numero: 312,
    apartamento: false,
    
});

//console.log(cliente);

//console.log(cliente["enderecos"]);

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);