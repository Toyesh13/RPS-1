var backgroundImage, title, titleImg, backgroundMusic
var Player, PlayerImg, PlayerRock, PlayerPaper, PlayerScissor
var Computer, ComputerImg, ComputerRock, ComputerPaper, ComputerScissor
var ChoicP, ChoicC
var rockBtn, paperBtn, scissorBtn
var PlayerScore = 0, ComputerScore = 0
var gameState = 0

function preload(){
  backgroundImage = loadImage("assets/background.jpg")
  titleImg = loadImage("assets/Title.png")
  PlayerImg = loadAnimation("assets/Scissor1.png", "assets/Rock1.png", "assets/Paper1.png")
  PlayerScissor = loadAnimation("assets/Scissor1.png")
  PlayerPaper = loadAnimation("assets/Paper1.png")
  PlayerRock = loadAnimation("assets/Rock1.png")
  ComputerImg = loadAnimation("assets/Scissor.png", "assets/Rock.png", "assets/Paper.png")
  ComputerRock = loadAnimation("assets/Rock.png")
  ComputerPaper = loadAnimation("assets/Paper.png")
  ComputerScissor = loadAnimation("assets/Scissor.png")
  backgroundMusic = loadSound("assets/music.mp3")
}

function setup() {
  canvas = createCanvas(1000,500);

  title = createSprite(500,50,10,10)
  title.addImage(titleImg)
  title.scale = 0.4

  Player = createSprite(180, 250, 10, 10)
  Player.addAnimation("Player_Random",PlayerImg)
  Player.addAnimation("PRock", PlayerRock)
  Player.addAnimation("PPaper", PlayerPaper)
  Player.addAnimation("PScissor", PlayerScissor)
  Player.scale = 0.4

  Computer = createSprite(820, 250, 10, 10)
  Computer.addAnimation("Computer_Random",ComputerImg)
  Computer.addAnimation("CRock", ComputerRock)
  Computer.addAnimation("CPaper", ComputerPaper)
  Computer.addAnimation("CScissor", ComputerScissor)
  Computer.scale = 0.4

  rockBtn = createButton("ROCK")
  rockBtn.position(50,400)
  rockBtn.class("customButton")

  paperBtn = createButton("PAPER")
  paperBtn.position(400,400)
  paperBtn.class("customButton")

  scissorBtn = createButton("SCISSOR")
  scissorBtn.position(750,400)
  scissorBtn.class("customButton")

  ChoicP = "null"
  ChoicC = "null"


}

function draw() {
  background(rgb(66, 135, 245));
  image(backgroundImage, 0, 0, width, height)
  textSize(40)
  fill('white')
  text("Player: " + PlayerScore,100,130)
  text("Computer: " + ComputerScore,700,130)

  if(PlayerScore === 10){
    playerWon()
  }
  if(ComputerScore === 10){
    computerWon()
  }
if(gameState === 0 || gameState === 1 || gameState === 2 || gameState === 3){
  if(gameState === 1){
    chooseComputer()
    }
    if(gameState === 0){
    choosePlayer()
    }
    changePlayer()
    changeComputer()

  check()
}

if(!backgroundMusic.isPlaying()){
backgroundMusic.play()
}
 drawSprites();
}

function chooseComputer(){
  var rand = Math.round(random(1,3));
  switch(rand){
    case 1: ChoicC = "Rock"
    gameState = 2
    break;
    case 2: ChoicC = "Paper"
    gameState = 2
    break;
    case 3: ChoicC = "Scissor"
    gameState = 2
    break;
    default: break;
  }
}

function choosePlayer(){
  rockBtn.mousePressed(() => {
    ChoicP = "Rock"
    gameState = 1
  })
  paperBtn.mousePressed(() => {
    ChoicP = "Paper"
    gameState = 1
  })
  scissorBtn.mousePressed(() => {
    ChoicP = "Scissor"
    gameState = 1
  })
}

function changeComputer(){
if(ChoicC === "Rock"){
  Computer.changeAnimation("CRock")
}
if(ChoicC === "Paper"){
  Computer.changeAnimation("CPaper")
}
if(ChoicC === "Scissor"){
  Computer.changeAnimation("CScissor")
}
}

function changePlayer(){
if(ChoicP === "Rock"){
  Player.changeAnimation("PRock")
}
if(ChoicP === "Paper"){
  Player.changeAnimation("PPaper")
}
if(ChoicP === "Scissor"){
  Player.changeAnimation("PScissor")
}
}

function check(){
 if(ChoicC === "Rock"){
    if(ChoicP === "Rock"){
      text("Tie", 500,250)
    }
    if(ChoicP === "Paper"){
      text("Player got Point", 350,250)
      playerPoint()
    }
    if(ChoicP === "Scissor"){
      text("Computer got Point", 330,250)
      computerPoint()
    }
 }

 if(ChoicC === "Paper"){
  if(ChoicP === "Paper"){
    text("Tie", 500,250)
  }
  if(ChoicP === "Scissor"){
    text("Player got Point", 350,250)
    playerPoint()
  }
  if(ChoicP === "Rock"){
    text("Computer got Point", 330,250)
    computerPoint()
  }
}

if(ChoicC === "Scissor"){
  if(ChoicP === "Scissor"){
    text("Tie", 500,250)
  }
  if(ChoicP === "Rock"){
    text("Player got Point", 350,250)
    playerPoint()
  }
  if(ChoicP === "Paper"){
    text("Computer got Point", 330,250)
    computerPoint()
  }
}
}

function playerPoint(){
  if(gameState === 2){
  PlayerScore += 1
  }
  gameState = 3
}

function computerPoint(){
  if(gameState === 2){
  ComputerScore += 1
  }
  gameState = 3
}

function playerWon(){
  gameState = 4
  text("PLAYER WON!", 360, 250)
}

function computerWon(){
  gameState = 4
  text("COMPUTER WON!", 330,250)
}