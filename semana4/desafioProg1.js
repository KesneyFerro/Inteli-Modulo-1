// Definição da classe Carro
class Carro {
    constructor(marca, modelo, ano, cor, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }

    descricao() {
        return `Este é um ${this.marca} ${this.modelo} ano ${this.ano}, na cor ${this.cor} e custa R$ ${this.preco}`;
    }
}

// Definição da classe CarroNovo que herda de Carro
class CarroNovo extends Carro {
    constructor(marca, modelo, ano, cor, preco, garantia) {
        super(marca, modelo, ano, cor, preco);
        this.garantia = garantia;
    }

    ofertaEspecial() {
        const precoComDesconto = this.preco - 500;
        return `Aproveite nossa oferta especial para o novo ${this.marca} ${this.modelo}! Por apenas R$ ${precoComDesconto}, você leva o carro com ${this.garantia} de garantia!`;
    }
}

// Instâncias de carros
const carro1 = new Carro("Toyota", "Corolla", 2020, "Prata", 80000);
const carro2 = new CarroNovo("Honda", "Civic", 2022, "Preto", 90000, "3 anos");

// Imprimir descrição dos carros
console.log("\n",carro1.descricao());
console.log("\n",carro2.descricao());

// Imprimir oferta especial para o carro novo
console.log("\n",carro2.ofertaEspecial()),"\n";
