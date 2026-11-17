// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  
if(keyIsDown(LEFT_ARROW) ){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
   if(keyIsDown(SHIFT)&&keyIsDown(LEFT_ARROW)){ x -= 10; }
if(keyIsDown(SHIFT)&&keyIsDown(RIGHT_ARROW)){ x += 10; }
  

  // BLANK[2] 重力とジャンプ
  
  // 「キーが上方向入力かつ円が地面に接しているとき」vy=-15（速度を上向にしてジャンプさせる）
  if ((keyIsDown(UP_ARROW)&& y >= groundY - size / 2)){
    vy = -20; 
  }
  // そのあと、速度はgずつ加算されていく。
  // g=1なので各フレームずつ加算されていく。ジャンプ後自然落下。
  vy += g;
    
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

   if (y > groundY - size / 2) 
    // もしキャラクターの中心が地面より下にいる場合
    { y = groundY - size / 2;
    // キャラクターが接地するようにする。
    vy=0
    // 上下への加速はなし。
  }

  // キャラクターを描く
  fill('#002a8f');
  ellipse(x, y, size, size);
}