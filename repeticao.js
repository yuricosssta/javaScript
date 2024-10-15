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

for (let chave in cliente){
    //console.log(chave); //mostra a chave
    //console.log(cliente[chave]); // mostra conteúdo da chave
    let tipo = typeof cliente[chave];
    if (tipo !=="object" && tipo !=="function"){

        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
    
};