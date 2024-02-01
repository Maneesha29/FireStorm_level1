var bg_img, splash_img;
var player_img, player;
var playButton, infoButton;
var gameState = "wait";


function preload(){
    splash_img = loadImage("./assets/Game_On.gif");
    bg_img = loadImage("./assets/bg.png")
    player_img = loadImage("./assets/player.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    playButton = createImg("assets/play.png");
    playButton.position(width/3+100,windowHeight/2 + 150);
    playButton.size(80,80);
    playButton.hide();

    infoButton = createImg("assets/info.png");
    infoButton.position(width/3+300,windowHeight/2 +150);
    infoButton.size(80,80);
    infoButton.hide();

    player = createSprite(width/2,windowHeight/2);
    player.addImage(player_img);
    player.scale = 0.6;
    player.visible = false;
}

function draw(){
    if(gameState == "wait"){
        background(splash_img);
        playButton.show();
        infoButton.show();
    }

    playButton.mousePressed( () => {
        playButton.hide();
        infoButton.hide();
        gameState = "level1"
    })

    infoButton.mousePressed(() =>{
        infoButton.hide();
        playButton.hide();
        gameState = "about"

    })

    if(gameState == "level1"){
        background(bg_img);
        player.visible = true;
    }

    if(gameState == "about"){
        aboutFunct();
    }
}

function aboutFunct(){
  

}