// 神戸市のマーク
// function setup(){
  // createCanvas(200, 200);
  // background(255);

  // noFill();
  // strokeWeight(25);
  // strokeCap(SQUARE);
  // arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1] 空欄を埋めて神戸市のロゴマークを完成させよう


let x, y, vx, vy;
const g = 1; // 重力
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 30);
  x += vx;
  y += vy;
  vy += 1; // 重力は「速度の変化量」
  vy = constrain(vy, -vyMax, vyMax); // 速度が大きくなりすぎないように調整
  // 跳ね返りの話
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }
  y = constrain(y, 0, height);
}
