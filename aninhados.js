const cliente = {
    nome: "João",
    idade: 24,
    email: "email@lega.com",
    telefone: ["31993533040", "31993532050"],
};

cliente.endereco = {
    rua: "Rua das Bromélias",
    numero: 127,
    apartamento: true,
    complemento: "apto 201",
};

console.log(cliente);

console.log(cliente["endereco"]);
