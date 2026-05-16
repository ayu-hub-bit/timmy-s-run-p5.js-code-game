//Credit - South Park character: Timmy (Trey Parker and Matt Stone)

//Players must play as Timmy to run through the roads & avoid obstacles coming at your way, bu hoping over one lane to the next. Do your best to get the highest record & if you reach 5:00 minute, you'ell can get a golden star!!! You will only have 3 lives, instructions will be provided on top of the screen. Lastly, HAVE FUN!!!!!

//Credit: Ralph Volka (Additional Help)

let road1Y = 170;
let road2Y = 250;
let road3Y = 330;
let road4Y = 410;

let totalSeconds = 0;
let moveLines = 0;

//Player
let timmyImg;
let timmySounds = [];
let playerX = 100;
let playerY = 195;
let targetY = 250;
let health = 3;

//Obstacles
let obstacles = [];
let roadPositions = [170, 250, 330, 410];

function preload() {
  timmyImg = loadImage("timmy.png");
  timmySounds.push(loadSound("Timmy1.mp3"));
  timmySounds.push(loadSound("Timmy2.mp3"));
  timmySounds.push(loadSound("Timmy3.mp3"));
}

function setup() {
  createCanvas(600, 475);
}

function draw() {
  //The Sky
  background(135, 206, 235);

  // The Grass & Dirt
  fill(100, 150, 100);
  noStroke();
  rect(0, 80, width, 400);

  // --- MOVEMENT ---
  moveLines -= 5;

  // --- ROAD 1 ---
  fill(50);
  noStroke();
  rect(0, road1Y, width, 50);
  stroke(255, 204, 0);
  strokeWeight(3);

  line(-100 + (moveLines % 100),road1Y + 25,-60 + (moveLines % 100),road1Y + 25);
  line(0 + (moveLines % 100), road1Y + 25, 40 + (moveLines % 100), road1Y + 25);
  line(
    100 + (moveLines % 100),
    road1Y + 25,
    140 + (moveLines % 100),
    road1Y + 25
  );
  line(
    200 + (moveLines % 100),
    road1Y + 25,
    240 + (moveLines % 100),
    road1Y + 25
  );
  line(
    300 + (moveLines % 100),
    road1Y + 25,
    340 + (moveLines % 100),
    road1Y + 25
  );
  line(
    400 + (moveLines % 100),
    road1Y + 25,
    440 + (moveLines % 100),
    road1Y + 25
  );
  line(
    500 + (moveLines % 100),
    road1Y + 25,
    540 + (moveLines % 100),
    road1Y + 25
  );
  line(
    600 + (moveLines % 100),
    road1Y + 25,
    640 + (moveLines % 100),
    road1Y + 25
  );

  // --- ROAD 2 ---
  noStroke();
  fill(50);
  rect(0, road2Y, width, 50);
  stroke(255, 204, 0);
  line(
    -100 + (moveLines % 100),
    road2Y + 25,
    -60 + (moveLines % 100),
    road2Y + 25
  );
  line(0 + (moveLines % 100), road2Y + 25, 40 + (moveLines % 100), road2Y + 25);
  line(
    100 + (moveLines % 100),
    road2Y + 25,
    140 + (moveLines % 100),
    road2Y + 25
  );
  line(
    200 + (moveLines % 100),
    road2Y + 25,
    240 + (moveLines % 100),
    road2Y + 25
  );
  line(
    300 + (moveLines % 100),
    road2Y + 25,
    340 + (moveLines % 100),
    road2Y + 25
  );
  line(
    400 + (moveLines % 100),
    road2Y + 25,
    440 + (moveLines % 100),
    road2Y + 25
  );
  line(
    500 + (moveLines % 100),
    road2Y + 25,
    540 + (moveLines % 100),
    road2Y + 25
  );
  line(
    600 + (moveLines % 100),
    road2Y + 25,
    640 + (moveLines % 100),
    road2Y + 25
  );

  // --- ROAD 3 ---
  noStroke();
  fill(50);
  rect(0, road3Y, width, 50);
  stroke(255, 204, 0);
  line(
    -100 + (moveLines % 100),
    road3Y + 25,
    -60 + (moveLines % 100),
    road3Y + 25
  );
  line(0 + (moveLines % 100), road3Y + 25, 40 + (moveLines % 100), road3Y + 25);
  line(
    100 + (moveLines % 100),
    road3Y + 25,
    140 + (moveLines % 100),
    road3Y + 25
  );
  line(
    200 + (moveLines % 100),
    road3Y + 25,
    240 + (moveLines % 100),
    road3Y + 25
  );
  line(
    300 + (moveLines % 100),
    road3Y + 25,
    340 + (moveLines % 100),
    road3Y + 25
  );
  line(
    400 + (moveLines % 100),
    road3Y + 25,
    440 + (moveLines % 100),
    road3Y + 25
  );
  line(
    500 + (moveLines % 100),
    road3Y + 25,
    540 + (moveLines % 100),
    road3Y + 25
  );
  line(
    600 + (moveLines % 100),
    road3Y + 25,
    640 + (moveLines % 100),
    road3Y + 25
  );

  // --- ROAD 4 ---
  noStroke();
  fill(50);
  rect(0, road4Y, width, 50);
  stroke(255, 204, 0);
  line(
    -100 + (moveLines % 100),
    road4Y + 25,
    -60 + (moveLines % 100),
    road4Y + 25
  );
  line(0 + (moveLines % 100), road4Y + 25, 40 + (moveLines % 100), road4Y + 25);
  line(
    100 + (moveLines % 100),
    road4Y + 25,
    140 + (moveLines % 100),
    road4Y + 25
  );
  line(
    200 + (moveLines % 100),
    road4Y + 25,
    240 + (moveLines % 100),
    road4Y + 25
  );
  line(
    300 + (moveLines % 100),
    road4Y + 25,
    340 + (moveLines % 100),
    road4Y + 25
  );
  line(
    400 + (moveLines % 100),
    road4Y + 25,
    440 + (moveLines % 100),
    road4Y + 25
  );
  line(
    500 + (moveLines % 100),
    road4Y + 25,
    540 + (moveLines % 100),
    road4Y + 25
  );
  line(
    600 + (moveLines % 100),
    road4Y + 25,
    640 + (moveLines % 100),
    road4Y + 25
  );

  //Hoping
  if (playerY < targetY) playerY += 15;
  if (playerY > targetY) playerY -= 15;
  if (abs(playerY - targetY) < 15) player = targetY;

  handleObstacles();

  //Timmy In WheelChair
  if (timmyImg) {
    image(timmyImg, playerX, playerY + 30, 100, 100);
  }

  drawHealthHearts();
  drawFormattedTimer();
  handleMovement();

  if (health <= 0) {
    health = 0;
    gameOver();
    noLoop();
  }
}
function keyPressed() {
  if (health <= 0) return;
  if (keyCode === UP_ARROW) {
    if (targetY === 340) targetY = 330;
    else if (targetY === 330) targetY = 250;
    else if (targetY === 250) targetY = 170;
    else if (targetY === 170) targetY = 80;
  }
  if (keyCode === DOWN_ARROW) {
    if (targetY === 80) targetY = 170;
    else if (targetY === 170) targetY = 250;
    else if (targetY === 250) targetY = 330;
    else if (targetY === 330) targetY = 340;
  }
}

function handleMovement() {
  if (health <= 0) return;
  if (keyIsDown(LEFT_ARROW)) playerX -= 5;
  if (keyIsDown(RIGHT_ARROW)) playerX += 5;
  playerX = constrain(playerX, 0, width - 100);
}

function handleObstacles() {
  if (frameCount % 60 === 0) {
    obstacles.push({
      x: width + 50,
      y: random(roadPositions) + 14.5,
      w: 45,
      h: 25,
      speed: random(6, 9),
    });
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    let o = obstacles[i];
    o.x -= o.speed;

    let hitX = playerX + 20;
    let hitY = playerY + 75;
    let hitW = 60;
    let hitH = 35;

    // Collision Check
     if (o.x < hitX + hitW) {
       if (o.x + o.w > hitX){ 
         if (o.y < hitY + hitH) {
           if (o.y + o.h > hitY) {
         
      health = health - 1;
      playerX = playerX - 40;
      obstacles.splice(i, 1);
            }
         }
       }
     }

    // Draw Obstacle
    fill(110);
    rectMode(CENTER);
    rect(o.x, o.y, o.w, o.h, 5);
    rectMode(CORNER);

  }
}
//Timer
function drawFormattedTimer() {
  if (frameCount % 60 == 0 && health > 0) {
    totalSeconds++;
  }
  let mins = floor(totalSeconds / 60);
  let secs = totalSeconds % 60;
  let displaySecs = secs < 10 ? "0" + secs : secs;

  fill(0);
  textSize(24);
  textAlign(RIGHT);
  text("Time: " + mins + "min, " + displaySecs + "sec", width - 20, 45);
  //Record Goal
  textSize(16);
  fill(50);
  text("Top Record: 3:00", width - 20, 70);
  //Achivement
  if (mins >= 5) {
    textSize(30);
    text("⭐", width - 180, 45);

    textSize(14);
    fill(218, 165, 32);
    text("Record Broken!", width - 20, 90);
  }
}

function drawHealthHearts() {
  for (let i = 0; i < health; i++) {
    textSize(35);
    textAlign(LEFT);
    text("❤️", 20 + i * 45, 55);

    push();
    rectMode(CENTER);
    fill(0, 180);
    stroke(255, 204, 0);
    strokeWeight(2);
    rect(width / 2, 45, 240, 75, 10);

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);

    textStyle(BOLD);
    textSize(14);
    text("INSTRUCTIONS", width / 2, 25);

    textStyle(NORMAL);
    textSize(11);
    fill(200);
    text("ARROWS: Move & Hop Lanes", width / 2, 45);

    fill(255, 204, 0);
    textStyle(BOLD);
    text("SURVIVE 3:00 FOR THE ⭐", width / 2, 65);
    pop();
  }
}

function drawRoad(y) {
  noStroke();
  fill(50);
  rect(0, y, width, 80);
  stroke(255, 204, 0);
  strokeWeight(7);
  for (let x = -100; x < 800; x += 100) {
    let xPos = x + (moveLines % 100);
    line(xPos, y + 40, xPos + 40, y + 40);
  }
}
function mousePressed() {
  let voice = random(timmySounds);
  if (voice && voice.isLoaded()) {
    voice.play();
  }
}

function gameOver() {
  fill(0, 150);
  rect(0, 0, width, height);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text("Game Over", width / 2, height / 2);

  let finalMins = floor(totalSeconds / 60);
  let finalSecs = totalSeconds % 60;
  let displayTime = finalMins + ":";
  
  if (finalSecs < 10) {
    displayTime = displayTime + "0" + finalSecs;
  } else {
    display = displayTime + finalSecs;
  }
  fill(255, 204, 0);
  textSize(32);
  text("Timed: " + displayTime,  width / 2, height / 2 + 40);
}
