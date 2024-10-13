const cliente = {
    nome: "João",
    idade: 24,
    email: "email@lega.com",
    telefone: ["31993533040", "31993532050"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado! O saldo atual é R$ ${this.saldo},00.`);
        }
    },
};

cliente.efetuaPagamento(25);