class WelcomeScene extends Phaser.Scene {
    constructor() {
        super('WelcomeScene');
    }

    init(data) {
        this.playerName = data.playerName;
    }

    create() {
        this.add.text(100, 100, Bem-vindo(a), ${this.playerName}!, { fill: '#fff' });
    }
}