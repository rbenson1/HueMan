// Create our 'main' state that will contain the game
var mainState = {
    //set up a return to map screen button
    preload: function() {
    
        game.load.image('tile', 'assets/red_Tile_50X50.jpg');
        game.load.image('tile2', 'assets/Sand_50X50_Tile copy.jpg');
        game.load.image('tile3', 'assets/bird.png');


        var matrix = [[0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0,0,0,0,0,0]];
        var p1;
        var p2;
        var p1Speed;
        var p2Speed;
        var p1Color;
        var p2Color;
        var color;
    },
    
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
                
        var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            leftKey.onDown.add(this.left, this);

        var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            rightKey.onDown.add(this.right, this);

        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            upKey.onDown.add(this.up, this);

        var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            downKey.onDown.add(this.down, this);
        
        // game.physics.arcade.overlap(this.p2, this.background, this.changeColor, null, this);
        
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 0, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 50, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 100, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 150, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 200, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 250, 'tile');  
        }   

        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 300, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 350, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 400, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 450, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 500, 'tile');  
        }   
        for (x = 0; x < 640; x+=50) {
                this.background = game.add.sprite(x, 550, 'tile');  
        }   
        
        this.p2 = game.add.sprite(600, 550, 'tile2');
        console.log(this.p2)
        
        game.physics.arcade.enable(this.p2);
        game.physics.arcade.enable(this.bacground);

   },
    
    changeColor: function(){
        console.log("Please")
        this.color = game.add.sprite(0,0, 'tile3');
    },
    
     left: function() {
        // move ship left
         if (this.p2.x >= 50){
             if (this.p2.x <= 600){
                this.p2.x -= 50;
                 console.log("left")
             }
         }
    },
    right: function() {
        // move ship left
        if (this.p2.x >= 0){
            if (this.p2.x < 600){
                this.p2.x += 50;
                console.log("right")
            }
        }
    },
    up: function() {
        // move ship left
        if (this.p2.y > 0){
            if (this.p2.y <650){
                this.p2.y -= 50;
                console.log("Up")
            } 
        }
    },
    down: function() {
        // move ship left
        if (this.p2.y >= 0){
            if (this.p2.y < 550){
                this.p2.y += 50;
                console.log("Down")
            }
        }  
    },
    
}


// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(650, 600);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState); 

// Start the state to actually start the game
game.state.start('main');