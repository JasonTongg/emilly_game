import Phaser from 'phaser'
export default class GameOverScene extends Phaser.Scene {
    constructor(){
        super ('over-scene')
    }
    Init(Data){
        this.replayButton=undefined
        this.score= this.data.score
    }
    preload(){
    this.load.image('bg', 'images/bg_layer1.png')
    this.load.image('game-over','images/gameover.png')
    this.load.image('replay-bttn', 'images/replay.png')
    }
    create(){
        this.add.image(240, 320, 'bg')
        this.add.image(240, 350, 'game-over')
        this.add.text(100, 300, 'Score: '+this.score, {
        fontSize: '32px'})
        this.replayButton=this.add.image(200, 400, 'replay-button').setInteractive().setScale(0.5)
        this.replayButton.once('pointerup', () => {
            this.scene.start('math-fighter-scene')
        },)
    }
}