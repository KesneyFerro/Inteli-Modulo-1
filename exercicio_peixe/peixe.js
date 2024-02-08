// Definindo as dimensões da tela do jogo
let w = 800;
let h = 600;

// Configurações do jogo
var config = {
    type: Phaser.AUTO, // Tipo de renderização automática
    width: w, // Largura da tela
    height: h, // Altura da tela

    // Definição das funções de cena
    scene: {
        preload: preload, // Pré-carregamento de recursos
        create: create, // Inicialização dos elementos do jogo
        update: update, // Atualização contínua do jogo
    },
};

// Criação de uma instância do jogo em Phaser com as configurações definidas
var game = new Phaser.Game(config);

// Declaração de variável para armazenar a imagem do peixinhoLaranja e Baiacu
var peixinhoLaranja;
var baiacu;


// Função de pré-carregamento de recursos
function preload() {
    // Carregando as imagens necessárias para o jogo
    this.load.image("mar", "assets/bg_azul-escuro.png");
    this.load.image("logo", "assets/logo-inteli_branco.png");
    this.load.image("peixinhoLaranja", "assets/peixes/peixinho_laranja.png");
    this.load.image("baiacu", "assets/peixes/baiacu.png")
}

// Função de criação dos elementos do jogo
function create() {
    // Adicionando a imagem do fundo do mar na posição central da tela
    this.add.image(w/2, h/2, "mar");
    // Adicionando a imagem do logo na posição (w/2, 525) e definindo escala 0.5
    this.add.image(w/2, 525, "logo").setScale(0.5);
    // Guardando as imagens dos peixinho em uma variável e posicionando no centro da tela com um offset modular de 100 px
    peixinhoLaranja = this.add.image(((w/2)-100), h/2, "peixinhoLaranja");
    baiacu = this.add.image(((w/2)+100), h/2, "baiacu");
    // Invertendo horizontalmente a imagem do peixinhoLaranja e baiacu
    peixinhoLaranja.setFlip(true, false);
    baiacu.setFlip(false, false);
    
}

// Função de atualização contínua do jogo
function update() {
    // Atualizando a posição do peixinhoLaranja de acordo com a posição do cursor com um offset modular de 100px
    peixinhoLaranja.x = this.input.x - 100;
    peixinhoLaranja.y = this.input.y;
    baiacu.x = this.input.x + 100;
    baiacu.y = this.input.y;
}

