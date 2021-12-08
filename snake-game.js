//***FLAPPY BIRD GAME**
//Adapted from: https://www.educative.io/blog/javascript-snake-game-tutorial

//INITIALIZING GAME OBJECTS
var board_border = "black";
var board_background = "#ff8800";
var snake_col = "#ffc300";
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 }
];

//keeps track of how much food is consumed
let score = 0;
//boolean flag to check if the snake should change direction
let changingDirection = false;
//food position
let foodX;
let foodY;
//horizontal & vertical velocity
let dx = 10;
let dy = 0;

//create variables to access gameboard
const gameBoard = document.getElementById("gameBoard");
const gameBoard_ctx = gameBoard.getContext("2d");
//add functionality to play button
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", main);
playButton.addEventListener("click", genFood);

//listens for arrow key press
document.addEventListener("keydown", changeDirection);

//parent main function that calls the individual game functions to control gameplay
function main() {
  if (hasGameEnded()) {
    return;
  }
  changingDirection = false;
  setTimeout(function onTick() {
    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();
    // Call main again
    main();
  }, 100);
}

function clearCanvas() {
  //fill the game board
  gameBoard_ctx.fillStyle = board_background;
  //create a border on the game board
  gameBoard_ctx.strokeStyle = board_border;
  //draw a filled rectangle to color the canvas
  gameBoard_ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
  //draw a border around the rectangle
  gameBoard_ctx.strokeRect(0, 0, gameBoard.width, gameBoard.height);
}

//draws each square of the snake individually
function drawSnake() {
  snake.forEach(drawSnakePart);
}

//draws food - a green rectangle with black outline
function drawFood() {
  gameBoard_ctx.fillStyle = "green";
  gameBoard_ctx.strokestyle = "#FFEA00";
  gameBoard_ctx.fillRect(foodX, foodY, 10, 10);
  gameBoard_ctx.strokeRect(foodX, foodY, 10, 10);
}

//helper function for drawSnake() 
function drawSnakePart(snakePart) {
  //sets the colors of the snake part
  gameBoard_ctx.fillStyle = snake_col;
  gameBoard_ctx.strokeStyle = "black";
  //draw a filled rectangle where the snake part should be located
  gameBoard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  //draw a border
  gameBoard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

//checks if the game has ended (the snake ran into the wall or crashed into itself)
function hasGameEnded() {
  //first, check if any of the snake parts has ran into the head of the snake
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }
  //second, check if the snake has hit either of the four walls
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > gameBoard.width - 10;
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > gameBoard.height - 10;

  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

//randomly generates a position for the food to spawn somewhere within the confines of the canvas
function randomFood(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function genFood() {
  //generate a random x coordinate
  foodX = randomFood(0, gameBoard.width - 10);
  //generate a random y coordinate
  foodY = randomFood(0, gameBoard.height - 10);
  //if the food position overlaps with where the snake currently is, we don't want to spawn food there
  snake.forEach(function has_snake_eaten_food(part) {
    const hasEaten = part.x == foodX && part.y == foodY;
    if (hasEaten) genFood();
  });
}

//key press listener to change the x & y velocity to make the snake change direction
function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  if (changingDirection) return;
  changingDirection = true;
  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -10;
    dy = 0;
  }

  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -10;
  }

  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = 10;
    dy = 0;
  }

  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

function moveSnake() {
  //create snake head
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  //add new head to beginning of snake
  snake.unshift(head);
  const hasEaten = snake[0].x === foodX && snake[0].y === foodY;
  if (hasEaten) {
    //increase score
    score += 10;
    //display score on screen
    document.getElementById("score").innerHTML = score;
    //gnerate new food location
    genFood();
  } else {
    //remove the last part of snake body
    snake.pop();
  }
}
