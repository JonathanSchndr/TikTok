let move
let position
let gameOver
let frameCounter

function setup() {
  createCanvas(800, 600);
  background(0, 255, 0);
  frameRate(30)

  move = true;
  position = 595
  gameOver = false
  frameCounter = 0
}

function draw() {
  let rand = Math.round(Math.random() * 100)
  if (rand % 2 && !frameCounter) {
    background(255, 0, 0);
    move = false
  }
  else if (!frameCounter) {
    background(0, 255, 0);
    move = true
  }

  frameCounter++
  if (frameCounter > 30) frameCounter = 0

  stroke(255, 255, 255)
  line(0, 50, 800, 50);
  line(0, 600 - 50, 800, 600 - 50);

  textSize(50);
  if (move) text('👶', 800 / 2 - 25, 43);
  else text('👹', 800 / 2 - 25, 43);

  textSize(50);
  if (!gameOver) text('🤠', 800 / 2 - 25, position);
  else text('😵', 800 / 2 - 25, position);
}

function keyPressed() {
  if (key == 'ArrowUp') {
    if (!move) {
      gameOver = true

      let newGame = confirm("GAME OVER :(");
      if (newGame) {
        move = true;
        position = 595
        gameOver = false
        frameCounter = 0
      }
    } else {
      position -= 10
    }

    if (position < 43) {
      let newGame = confirm("WIN :D");
      if (newGame) {
        move = true;
        position = 595
        gameOver = false
        frameCounter = 0
      }
    }
  }
}