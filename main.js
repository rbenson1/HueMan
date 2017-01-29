// Create our 'main' state that will contain the game
var mainState = {
    //set up a return to map screen button
    preload: function() {
    
        game.load.image('genTile', 'assets/greyTile.png');
        game.load.image('redTile', 'assets/redTile.png');
        game.load.image('tile3', 'assets/bird.png');
        game.load.spritesheet("redRun", "assets/running-spritesheet-red.png",36.8,50);


        var matrix;
        var p1;
        var p2;
        var p1Speed;
        var p2Speed;
        var p1Color;
        var p2Color;
        var color;
        var tiles;
        var tile; 
        var redMan;
        var blueMan;
        var greenMan;
        var purpMan;
    },
    
    
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        matrix = new Array;
                
        
        
        tiles = game.add.group();
        tiles.enableBody = true;
        
        for (var y = 0; y<600; y+=50){
            for(var x = 0; x<650; x+=50){
                tile = tiles.create(x,y,"genTile");
                matrix.push([x,y,tile,"none"])
            }
        }
        
        console.log(matrix);
        
        redMan = game.add.sprite(50,50,"redRun");
        game.physics.arcade.enable(redMan);
        
        redMan.animations.add("left",[6,7,8,9,10],15,true);
        redMan.animations.add("right",[0,1,2,3,4],15,true);
        
        redMan.body.collideWorldBounds = true;
        

   },
    
    changeRed: function(i,r){
        if(matrix[r,3] != "red"){
            matrix [r,3] = tiles.create(i,r,"redTile");
            matrix[r,4] = "red"
        }
},
    
    
    update: function(){
        cursors = game.input.keyboard.createCursorKeys();
        
        redMan.body.velocity.x = 0;
    
    if(cursors.left.isDown){ //makes dude go left
        redMan.body.velocity.x=-300;
        redMan.body.velocity.y=0;
        redMan.animations.play("left");
    }else if (cursors.right.isDown){//makes dude go right
        redMan.body.velocity.x = 300;
        redMan.body.velocity.y=0;
        redMan.animations.play("right");
    }else if (cursors.up.isDown){//makes dude go right
        redMan.body.velocity.x = 0;
        redMan.body.velocity.y=-300;
    }else if (cursors.down.isDown){//makes dude go right
        redMan.body.velocity.x = 0;
        redMan.body.velocity.y=300;
    }else{
        redMan.body.velocity.x = 0;
        redMan.body.velocity.y=0;
        redMan.animations.stop();//makes dude stop
        redMan.frame = 5;
    }
        
        //game.physics.arcade.overlap(redMan, tiles, changeRed, null, this.changeRed);
        
        var i = redMan.x % 50;
    i = redMan.x - r
    
    var r = redMan.y % 50
    r = redMan.y - r
    
    changeRed(i,r/50);
    
    
    },
    
    
    
}




// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(650, 600);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState); 

// Start the state to actually start the game
game.state.start('main');