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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
console.log(`Ligando para ${telefoneComercial}`);
console.log(`Ligando para ${telefoneResidencial}`);
};

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
    //edereco: cliente.enderecos[0],
};

console.log(encomenda);
