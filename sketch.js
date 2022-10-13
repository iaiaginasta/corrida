var fundo, menino, fundoImg, meninoImg;
var bombaImg;
var moedaImg;

function preload(){
    fundoImg = loadImage("path.png");
    meninoImg = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.PNG","Jake5.png");
    bombaImg = loadImage("bomb.png");
    moedaImg = loadImage("coin.png");
}

function setup(){
    createCanvas(400,400);
    fundo = createSprite(200,200);
    fundo.addImage(fundoImg);
    fundo.scale = 1.2;
    fundo.velocityY = 4;

    menino = createSprite(200, 360);
    menino.addAnimation("correndo", meninoImg);
    menino.scale = 0.6;
}

function draw(){
background(0);
drawSprites();

menino.x = mouseX;

if(fundo.y > 400){
  fundo.y = fundo.height / 4;
}

var num = Math.round(random(1,3));


if(frameCount % 100 === 0){
  if(num === 1){
  gerarBomba();
 }else if (num === 2){
   gerarMoeda();
  }
}
}

function gerarBomba(){
var bomba = createSprite(random(50,350),0);
bomba.addImage(bombaImg);
bomba.scale = 0.07;
bomba.velocityY = 4;
}

function gerarMoeda(){
  var moeda = createSprite(random(50,350),0);
  moeda.addImage(moedaImg);
  moeda.scale = 0.2;
  moeda.velocityY = 4;
 }