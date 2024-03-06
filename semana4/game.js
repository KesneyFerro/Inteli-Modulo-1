window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        scene: [MainScene, WelcomeScene]
    };

    const game = new Phaser.Game(config);
}