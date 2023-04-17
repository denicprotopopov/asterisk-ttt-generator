var leftBuffer;
var rightBuffer;



function setup() {
 let canvas = createCanvas(600, 400, SVG);
 canvas.parent('canvasForHTML');
 bufferOne = createGraphics(200, 200);
 bufferTwo = createGraphics(200, 200);
 bufferThree = createGraphics(200, 200);
 bufferFour = createGraphics(200, 200);
 bufferFive = createGraphics(200, 200);
 bufferSix = createGraphics(200, 200);
 noLoop();
 
  
}

function draw() {
  noFill();
  drawStarOne(200);
  drawStarTwo(200);
  drawStarThree(200);
  drawStarFour(200);
  drawStarFive(200);
  drawStarSix(200);

  image(bufferOne, 0, 0);
  image(bufferTwo, 200, 0);
  image(bufferThree, 400, 0);
  image(bufferFour, 0, 200);
  image(bufferFive, 200, 200);
  image(bufferSix, 400, 200);
 
  
  
  // save("mySVG.svg"); // give file name
 //print("saved svg");

}

function drawStarOne(STAR_SIZE){
  bufferOne.strokeWeight(8);
 x1 = (STAR_SIZE / 2);
 y1 = (STAR_SIZE / 2);
 
  
  // vertical line
  x2Vertical = random(STAR_SIZE / 2.6, STAR_SIZE / 1.5);
  y2Vertical = random(STAR_SIZE / 13, STAR_SIZE / 8);
  
  // horisontal line
  x2Horisontal = y2Vertical;
  y2Horisontal = x2Vertical;
  
  // diagonal left to right
  x2DiagonalLeft2Right = random(STAR_SIZE / 8, STAR_SIZE / 4);
  y2DiagonalLeft2Right = random(STAR_SIZE / 9, STAR_SIZE / 3);
  
  coin = random(0,1)
  x2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.2, STAR_SIZE / 1.08);
  y2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.6, STAR_SIZE / 1.3)
  
  
  // diagonal right to left
  x2DiagonalRight2Left = random(STAR_SIZE / 1.3, STAR_SIZE / 1.14);
  y2DiagonalRight2Left = x2DiagonalLeft2Right
  
  x2DiagonalRight2LeftRandom = random(STAR_SIZE / 5.3, STAR_SIZE / 3);
  y2DiagonalRight2LeftRandom = x2DiagonalRight2Left;

  // vertical line
  bufferOne.line(x1, y1, x2Vertical, y2Vertical);
  bufferOne.line(x1, y1, STAR_SIZE-x2Vertical, STAR_SIZE-y2Vertical);
  
  // horisontal line
  bufferOne.line(x1, y1, x2Horisontal, y2Horisontal);
  bufferOne.line(x1, y1, STAR_SIZE-x2Horisontal, STAR_SIZE-y2Horisontal);
  
  // diagonal left to right
  bufferOne.line(x1, y1, x2DiagonalLeft2Right, y2DiagonalLeft2Right);
  
  if (coin > 0.5) {
    bufferOne.line(x1, y1, STAR_SIZE-x2DiagonalLeft2Right, STAR_SIZE-y2DiagonalLeft2Right);
  } else {
    bufferOne.line(x1, y1, x2DiagonalLeft2RightRandom, y2DiagonalLeft2RightRandom)
  }

  // diagonal right to left
  bufferOne.line(x1, y1, x2DiagonalRight2Left, y2DiagonalRight2Left);
  
  if (coin > 0.5) {
    bufferOne.line(x1, y1, STAR_SIZE-x2DiagonalRight2Left, STAR_SIZE-y2DiagonalRight2Left);
  } else {
    bufferOne.line(x1, y1, x2DiagonalRight2LeftRandom, y2DiagonalRight2LeftRandom);
  }
}

function drawStarTwo(STAR_SIZE){
  bufferTwo.strokeWeight(8);
 x1 = (STAR_SIZE / 2);
 y1 = (STAR_SIZE / 2);
 
  
  // vertical line
  x2Vertical = random(STAR_SIZE / 2.6, STAR_SIZE / 1.5);
  y2Vertical = random(STAR_SIZE / 13, STAR_SIZE / 8);
  
  // horisontal line
  x2Horisontal = y2Vertical;
  y2Horisontal = x2Vertical;
  
  // diagonal left to right
  x2DiagonalLeft2Right = random(STAR_SIZE / 8, STAR_SIZE / 4);
  y2DiagonalLeft2Right = random(STAR_SIZE / 9, STAR_SIZE / 3);
  
  coin = random(0,1)
  x2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.2, STAR_SIZE / 1.08);
  y2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.6, STAR_SIZE / 1.3)
  
  
  // diagonal right to left
  x2DiagonalRight2Left = random(STAR_SIZE / 1.3, STAR_SIZE / 1.14);
  y2DiagonalRight2Left = x2DiagonalLeft2Right
  
  x2DiagonalRight2LeftRandom = random(STAR_SIZE / 5.3, STAR_SIZE / 3);
  y2DiagonalRight2LeftRandom = x2DiagonalRight2Left;

  // vertical line
  bufferTwo.line(x1, y1, x2Vertical, y2Vertical);
  bufferTwo.line(x1, y1, STAR_SIZE-x2Vertical, STAR_SIZE-y2Vertical);
  
  // horisontal line
  bufferTwo.line(x1, y1, x2Horisontal, y2Horisontal);
  bufferTwo.line(x1, y1, STAR_SIZE-x2Horisontal, STAR_SIZE-y2Horisontal);
  
  // diagonal left to right
  bufferTwo.line(x1, y1, x2DiagonalLeft2Right, y2DiagonalLeft2Right);
  
  if (coin > 0.5) {
    bufferTwo.line(x1, y1, STAR_SIZE-x2DiagonalLeft2Right, STAR_SIZE-y2DiagonalLeft2Right);
  } else {
    bufferTwo.line(x1, y1, x2DiagonalLeft2RightRandom, y2DiagonalLeft2RightRandom)
  }

  // diagonal right to left
  bufferTwo.line(x1, y1, x2DiagonalRight2Left, y2DiagonalRight2Left);
  
  if (coin > 0.5) {
    bufferTwo.line(x1, y1, STAR_SIZE-x2DiagonalRight2Left, STAR_SIZE-y2DiagonalRight2Left);
  } else {
    bufferTwo.line(x1, y1, x2DiagonalRight2LeftRandom, y2DiagonalRight2LeftRandom);
  }
}

function drawStarThree(STAR_SIZE){
  bufferThree.strokeWeight(8);
 x1 = (STAR_SIZE / 2);
 y1 = (STAR_SIZE / 2);
 
  
  // vertical line
  x2Vertical = random(STAR_SIZE / 2.6, STAR_SIZE / 1.5);
  y2Vertical = random(STAR_SIZE / 13, STAR_SIZE / 8);
  
  // horisontal line
  x2Horisontal = y2Vertical;
  y2Horisontal = x2Vertical;
  
  // diagonal left to right
  x2DiagonalLeft2Right = random(STAR_SIZE / 8, STAR_SIZE / 4);
  y2DiagonalLeft2Right = random(STAR_SIZE / 9, STAR_SIZE / 3);
  
  coin = random(0,1)
  x2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.2, STAR_SIZE / 1.08);
  y2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.6, STAR_SIZE / 1.3)
  
  
  // diagonal right to left
  x2DiagonalRight2Left = random(STAR_SIZE / 1.3, STAR_SIZE / 1.14);
  y2DiagonalRight2Left = x2DiagonalLeft2Right
  
  x2DiagonalRight2LeftRandom = random(STAR_SIZE / 5.3, STAR_SIZE / 3);
  y2DiagonalRight2LeftRandom = x2DiagonalRight2Left;

  // vertical line
  bufferThree.line(x1, y1, x2Vertical, y2Vertical);
  bufferThree.line(x1, y1, STAR_SIZE-x2Vertical, STAR_SIZE-y2Vertical);
  
  // horisontal line
  bufferThree.line(x1, y1, x2Horisontal, y2Horisontal);
  bufferThree.line(x1, y1, STAR_SIZE-x2Horisontal, STAR_SIZE-y2Horisontal);
  
  // diagonal left to right
  bufferThree.line(x1, y1, x2DiagonalLeft2Right, y2DiagonalLeft2Right);
  
  if (coin > 0.5) {
    bufferThree.line(x1, y1, STAR_SIZE-x2DiagonalLeft2Right, STAR_SIZE-y2DiagonalLeft2Right);
  } else {
    bufferThree.line(x1, y1, x2DiagonalLeft2RightRandom, y2DiagonalLeft2RightRandom)
  }

  // diagonal right to left
  bufferThree.line(x1, y1, x2DiagonalRight2Left, y2DiagonalRight2Left);
  
  if (coin > 0.5) {
    bufferThree.line(x1, y1, STAR_SIZE-x2DiagonalRight2Left, STAR_SIZE-y2DiagonalRight2Left);
  } else {
    bufferThree.line(x1, y1, x2DiagonalRight2LeftRandom, y2DiagonalRight2LeftRandom);
  }
}

function drawStarFour(STAR_SIZE){
  bufferFour.strokeWeight(8);
 x1 = (STAR_SIZE / 2);
 y1 = (STAR_SIZE / 2);
 
  
  // vertical line
  x2Vertical = random(STAR_SIZE / 2.6, STAR_SIZE / 1.5);
  y2Vertical = random(STAR_SIZE / 13, STAR_SIZE / 8);
  
  // horisontal line
  x2Horisontal = y2Vertical;
  y2Horisontal = x2Vertical;
  
  // diagonal left to right
  x2DiagonalLeft2Right = random(STAR_SIZE / 8, STAR_SIZE / 4);
  y2DiagonalLeft2Right = random(STAR_SIZE / 9, STAR_SIZE / 3);
  
  coin = random(0,1)
  x2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.2, STAR_SIZE / 1.08);
  y2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.6, STAR_SIZE / 1.3)
  
  
  // diagonal right to left
  x2DiagonalRight2Left = random(STAR_SIZE / 1.3, STAR_SIZE / 1.14);
  y2DiagonalRight2Left = x2DiagonalLeft2Right
  
  x2DiagonalRight2LeftRandom = random(STAR_SIZE / 5.3, STAR_SIZE / 3);
  y2DiagonalRight2LeftRandom = x2DiagonalRight2Left;

  // vertical line
  bufferFour.line(x1, y1, x2Vertical, y2Vertical);
  bufferFour.line(x1, y1, STAR_SIZE-x2Vertical, STAR_SIZE-y2Vertical);
  
  // horisontal line
  bufferFour.line(x1, y1, x2Horisontal, y2Horisontal);
  bufferFour.line(x1, y1, STAR_SIZE-x2Horisontal, STAR_SIZE-y2Horisontal);
  
  // diagonal left to right
  bufferFour.line(x1, y1, x2DiagonalLeft2Right, y2DiagonalLeft2Right);
  
  if (coin > 0.5) {
    bufferFour.line(x1, y1, STAR_SIZE-x2DiagonalLeft2Right, STAR_SIZE-y2DiagonalLeft2Right);
  } else {
    bufferFour.line(x1, y1, x2DiagonalLeft2RightRandom, y2DiagonalLeft2RightRandom)
  }

  // diagonal right to left
  bufferFour.line(x1, y1, x2DiagonalRight2Left, y2DiagonalRight2Left);
  
  if (coin > 0.5) {
    bufferFour.line(x1, y1, STAR_SIZE-x2DiagonalRight2Left, STAR_SIZE-y2DiagonalRight2Left);
  } else {
    bufferFour.line(x1, y1, x2DiagonalRight2LeftRandom, y2DiagonalRight2LeftRandom);
  }
}

function drawStarFive(STAR_SIZE){
  bufferFive.strokeWeight(8);
 x1 = (STAR_SIZE / 2);
 y1 = (STAR_SIZE / 2);
 
  
  // vertical line
  x2Vertical = random(STAR_SIZE / 2.6, STAR_SIZE / 1.5);
  y2Vertical = random(STAR_SIZE / 13, STAR_SIZE / 8);
  
  // horisontal line
  x2Horisontal = y2Vertical;
  y2Horisontal = x2Vertical;
  
  // diagonal left to right
  x2DiagonalLeft2Right = random(STAR_SIZE / 8, STAR_SIZE / 4);
  y2DiagonalLeft2Right = random(STAR_SIZE / 9, STAR_SIZE / 3);
  
  coin = random(0,1)
  x2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.2, STAR_SIZE / 1.08);
  y2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.6, STAR_SIZE / 1.3)
  
  
  // diagonal right to left
  x2DiagonalRight2Left = random(STAR_SIZE / 1.3, STAR_SIZE / 1.14);
  y2DiagonalRight2Left = x2DiagonalLeft2Right
  
  x2DiagonalRight2LeftRandom = random(STAR_SIZE / 5.3, STAR_SIZE / 3);
  y2DiagonalRight2LeftRandom = x2DiagonalRight2Left;

  // vertical line
  bufferFive.line(x1, y1, x2Vertical, y2Vertical);
  bufferFive.line(x1, y1, STAR_SIZE-x2Vertical, STAR_SIZE-y2Vertical);
  
  // horisontal line
  bufferFive.line(x1, y1, x2Horisontal, y2Horisontal);
  bufferFive.line(x1, y1, STAR_SIZE-x2Horisontal, STAR_SIZE-y2Horisontal);
  
  // diagonal left to right
  bufferFive.line(x1, y1, x2DiagonalLeft2Right, y2DiagonalLeft2Right);
  
  if (coin > 0.5) {
    bufferFive.line(x1, y1, STAR_SIZE-x2DiagonalLeft2Right, STAR_SIZE-y2DiagonalLeft2Right);
  } else {
    bufferFive.line(x1, y1, x2DiagonalLeft2RightRandom, y2DiagonalLeft2RightRandom)
  }

  // diagonal right to left
  bufferFive.line(x1, y1, x2DiagonalRight2Left, y2DiagonalRight2Left);
  
  if (coin > 0.5) {
    bufferFive.line(x1, y1, STAR_SIZE-x2DiagonalRight2Left, STAR_SIZE-y2DiagonalRight2Left);
  } else {
    bufferFive.line(x1, y1, x2DiagonalRight2LeftRandom, y2DiagonalRight2LeftRandom);
  }
}

function drawStarSix(STAR_SIZE){
  bufferSix.strokeWeight(8);
 x1 = (STAR_SIZE / 2);
 y1 = (STAR_SIZE / 2);
 
  
  // vertical line
  x2Vertical = random(STAR_SIZE / 2.6, STAR_SIZE / 1.5);
  y2Vertical = random(STAR_SIZE / 13, STAR_SIZE / 8);
  
  // horisontal line
  x2Horisontal = y2Vertical;
  y2Horisontal = x2Vertical;
  
  // diagonal left to right
  x2DiagonalLeft2Right = random(STAR_SIZE / 8, STAR_SIZE / 4);
  y2DiagonalLeft2Right = random(STAR_SIZE / 9, STAR_SIZE / 3);
  
  coin = random(0,1)
  x2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.2, STAR_SIZE / 1.08);
  y2DiagonalLeft2RightRandom = random (STAR_SIZE / 1.6, STAR_SIZE / 1.3)
  
  
  // diagonal right to left
  x2DiagonalRight2Left = random(STAR_SIZE / 1.3, STAR_SIZE / 1.14);
  y2DiagonalRight2Left = x2DiagonalLeft2Right
  
  x2DiagonalRight2LeftRandom = random(STAR_SIZE / 5.3, STAR_SIZE / 3);
  y2DiagonalRight2LeftRandom = x2DiagonalRight2Left;

  // vertical line
  bufferSix.line(x1, y1, x2Vertical, y2Vertical);
  bufferSix.line(x1, y1, STAR_SIZE-x2Vertical, STAR_SIZE-y2Vertical);
  
  // horisontal line
  bufferSix.line(x1, y1, x2Horisontal, y2Horisontal);
  bufferSix.line(x1, y1, STAR_SIZE-x2Horisontal, STAR_SIZE-y2Horisontal);
  
  // diagonal left to right
  bufferSix.line(x1, y1, x2DiagonalLeft2Right, y2DiagonalLeft2Right);
  
  if (coin > 0.5) {
    bufferSix.line(x1, y1, STAR_SIZE-x2DiagonalLeft2Right, STAR_SIZE-y2DiagonalLeft2Right);
  } else {
    bufferSix.line(x1, y1, x2DiagonalLeft2RightRandom, y2DiagonalLeft2RightRandom)
  }

  // diagonal right to left
  bufferSix.line(x1, y1, x2DiagonalRight2Left, y2DiagonalRight2Left);
  
  if (coin > 0.5) {
    bufferSix.line(x1, y1, STAR_SIZE-x2DiagonalRight2Left, STAR_SIZE-y2DiagonalRight2Left);
  } else {
    bufferSix.line(x1, y1, x2DiagonalRight2LeftRandom, y2DiagonalRight2LeftRandom);
  }
}