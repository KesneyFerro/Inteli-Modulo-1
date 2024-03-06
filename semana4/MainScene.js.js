// MainScene.js
class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    create() {
        // Exibe o overlay de entrada
        document.getElementById('inputOverlay').style.display = 'block';

        // Configura o evento de clique no botão
        document.getElementById('startButton').addEventListener('click', () => {
            const playerName = document.getElementById('nameInput').value;
            this.scene.start('WelcomeScene', { playerName: playerName });
            // Oculta o overlay após iniciar
            document.getElementById('inputOverlay').style.display = 'none';
        });
    }
}