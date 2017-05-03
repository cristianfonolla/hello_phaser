console.log("griscola")
window.onload = function() {

    var states = {
        preload: preload,
        create: create
    }

    var game = new Phaser.Game(800,600,Phaser.AUTO,'',states)

    //ASSETS
    function preload() {
        //LoadManager gestor per carregar assets
        game.load.image('logo','assets/Phaser.png')
    }

    function create() {
        //World
        game.add.sprite(0,0,'logo')
        //game.add(game.world.centerX,game.world.centerY,'logo')
    }











}

