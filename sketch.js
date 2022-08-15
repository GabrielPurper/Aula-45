var Street, StreetImg;
var player, postman;


function preload(){
  
 postman = loadImage("assets/postman.png")

  StreetImg= loadImage("assets/Street.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  Street = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
Street  .addImage(StreetImg)
Street.scale = 1.1
  

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(postman)
   player.scale = 1.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}

if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
}

if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
}

//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
if(keyWentDown("space")){
 
  player.addImage(postman)
 
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(postman)
}

drawSprites();

}
