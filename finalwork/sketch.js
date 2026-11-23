// 最終課題を制作しよう
let lights=[];
let bowMove=0;
let moveDistance = 0;
let feverTime = false;
let feverStart = 0;
const feverColors=['#FF76D6','#FFD85A','#7CF7FF','#9E8BFF','#FF8D8D'];

function setup(){
 createCanvas(windowWidth, windowHeight);
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  if(feverTime){
    background('#8DA9BF');
    fill('#6F8DA5');}
    else{
  background('#5b7e91');
  fill('#426579');
    }
  rect(0, height * 1/4, width, height * 3/4);

  drawLights();
  
  if(mouseIsPressed&&frameCount%3==0){
    const light ={
      x:mouseX+25,
      y:mouseY-75,
      size:random(6,12),
      color:'#F6D7E7',
      vx: random(-1,1),
      vy: random(-1,1),
      vanish: frameCount
    };
    if(feverTime){light.color=random(feverColors);}

     lights.push(light);
       if(lights.length>50){lights.shift();}

  }
  if(lights.length > 0 && 
    frameCount - lights[0].vanish >= 90){
  lights.shift();
}
     
  
      
      if(mouseIsPressed){
        bowMove += (mouseY-pmouseY)*0.5;
        bowMove = constrain(bowMove, -14, 14);
      }else{bowMove *= 0.9;}

    //  フィーバータイム導入

    // 指揮棒の移動距離を蓄積していく
if(mouseIsPressed && !feverTime){
  moveDistance +=dist(mouseX,mouseY,pmouseX,pmouseY);
}
// 一定距離でフィーバータイムに移行。
if(moveDistance >= width*13){
  feverTime=true;
  feverStart =frameCount;
  moveDistance=0;
  for(let i=0;i<25;i++){
  const light ={
      x:mouseX+25,
      y:mouseY-75,
      size:random(8,15),
      color:'#FFE29A',
      vx: random(-5,5),
      vy: random(-5,5),
      vanish: frameCount
  };
  lights.push(light);
}
}

// 一定時間で終了
if(feverTime && frameCount-feverStart>=600)
{feverTime=false;

}
if(feverTime){
// 大太鼓
drawBD(width*3/10,height*2/5);
drawBD(width*6.75/10,height*2/5);
// シンバル
drawCym(width*2/5,height*2/5);
drawCym(width*3/5,height*2/5);
// ティンパニ
drawPercussion(width/2,height*2/5);
// 金管
for(let i=95;i<width;i+=105){ 
drawbrass(i,height*3/5);} 

}
// 木管
for(let i=70;i<width;i+=85){
drawWoodwind(i,height*3.5/5); 
   } 
  
  //  ヴァイオリン
for(let i=35;i<width;i+=65){
drawViolinist(i,height*4/5);
}

push();

if(!feverTime){
noStroke();
fill('#FFFFFF');
textSize(25);
text('指揮棒を振ろう！',20,75);
textSize(20);
text('マウスを押しながら動かしてね！',20,100)
}
if(feverTime&&frameCount-feverStart<90){
  textAlign(CENTER,CENTER);
  textSize(width/10);
  fill('#FFD85A');
  stroke('#293849');
  strokeWeight(3);
  text('ふぃ〜ば〜！！！！！',width/2,height/3);

}

pop();

fill('#FFFFFF');
textSize(16);
text('⇩これはフィーバーゲージ',20,height-45)

for(let i=0;i<lights.length;i++){
        let l=lights[i];
          l.x += l.vx;
          l.y += l.vy;
        noStroke();
        fill(230, 169, 202, 50);
        ellipse(l.x, l.y, l.size * 3);
        fill(l.color);
        ellipse(l.x,l.y,l.size);
      
      }

  // 指揮棒
  drawBaton();

  // フィーバーゲージ作成
  noStroke();
  fill('#293849');
  rect(20,height-35,360,12);
  // フィーバーゲージの中身
  if(feverTime){
    fill('#FFD85A');
    rect(20,height-35,360*(600-(frameCount-feverStart))/600,12);
  }else{
    fill('#F6D7E7')
    rect(20,height-35,360*moveDistance/(width*13),12);
  }

  
  
}












// 以下、必要なものを置いておく。
function drawLights(){
  let lightPower =1;
  if(feverTime){
    lightPower=3;
  }

  for(let i=45;i<width;i +=90){
    
    noStroke();
    // 外側ライト
    fill(255, 240, 180, 8*lightPower);
    triangle(i,35,i-65,height*3.75/5,i+65,height*3.75/5);
    // 内側ライト
    fill(255, 240, 180, 12*lightPower);
    triangle(i,35,i-45,height*3.75/5,i+45,height*3.75/5);
    // 地面ライト
    fill(255, 240, 180, 18*lightPower);
    ellipse(i,height*3.75/5,95,20);
    // 電球
    fill('#ffcc33');
    ellipse(i,35,16,16);
    // 本体
    fill('#426579');
    rect(i - 15, 10, 30, 25);
    
  }
}
  function drawBaton(){
    push();
    // 棒
    stroke('#ffffff');
    strokeWeight(3);
    line(mouseX,mouseY,mouseX+25,mouseY-75);
    // グリップ
    noStroke();
    fill('#A9744E');
    ellipse(mouseX,mouseY,12,16);

    pop();
  }
  function drawViolinist(x,y){

    push();
    noStroke();
    // 顔
    fill('#D4AD97');
    ellipse(x,y-65,22,25);
    fill('#171615');
    ellipse(x-4,y-67,3);
    fill('#171615');
    ellipse(x+4,y-67,3);

    

    if(feverTime){fill('#f70808');ellipse(x,y-60,3,5);}else{
    stroke('#f70808');
    strokeWeight();
    line(x-4,y-60,x+4,y-60);}

    

    
    // 身体
    noStroke();
    fill('#293849');
    rect(x-12,y-53,24,36,5);
    // 足
    stroke('#293849');
    strokeWeight(5);
    line(x-6,y-16,x-6,y+10);
    line(x+6,y-16,x+6,y+10);
    // ヴァイオリン
    noStroke();
    fill('#B7804F');
    ellipse(x+18,y-37,25,14);
    // ヴァイオリンのネック
    stroke('#8D6141');
    strokeWeight(4);
    line(x+25,y-37,x+40,y-37);
    // 弓
    stroke('#FFFFFF');
    strokeWeight(2);
    line(x+15+bowMove*0.2,y-57+bowMove,x+23+bowMove*0.2,y-17+bowMove);
    pop();


  }

  function drawWoodwind(x,y){
    push();
    // 足元を中心にして体を揺らしたい
    // 回転の中心を奏者の足元へ移動
    translate(x,y+10);
    // 身体全体を少し傾ける。
    rotate(bowMove*0.006);
    // 基準を元に戻す。
    translate(-x,-y-10);

    noStroke();


    // 顔
    fill('#D4AD97');
    ellipse(x,y-65,22,25);
    fill('#D4AD97');
    ellipse(x,y-65,22,25);
    fill('#171615');
    ellipse(x-4,y-67,3);
    fill('#171615');
    ellipse(x+4,y-67,3);

    

    if(feverTime){fill('#f70808');ellipse(x,y-60,3,5);}else{
    stroke('#f70808');
    strokeWeight();
    line(x-4,y-60,x+4,y-60);}
     // 身体
     noStroke();
    fill('#293849');
    rect(x-12,y-53,24,36,5);
    // 足
    stroke('#293849');
    strokeWeight(5);
    line(x-6,y-16,x-6,y+10);
    line(x+6,y-16,x+6,y+10);
    // 手
    stroke('#D4AD97')
    strokeWeight(4);
    line(x-12,y-47,x+16,y-30);
    line(x+12,y-47,x+25,y-24)
    // 楽器
    stroke('#000000');
    strokeWeight(5);
    line(x+8,y-58,x+28,y-18);
    pop();
  }






  function drawbrass(x,y){
    push();
    noStroke();
    // 顔
    fill('#D4AD97');
    ellipse(x,y-65,22,25);
    fill('#D4AD97');
    ellipse(x,y-65,22,25);
    fill('#171615');
    ellipse(x-4,y-67,3);
    fill('#171615');
    ellipse(x+4,y-67,3);

    
    if(feverTime){fill('#f70808');ellipse(x,y-60,3,5);}else{
    stroke('#f70808');
    strokeWeight();
    line(x-4,y-60,x+4,y-60);}
     // 身体
     noStroke();
    fill('#293849');
    rect(x-12,y-53,24,36,5);
    // 足
    stroke('#293849');
    strokeWeight(5);
    line(x-6,y-16,x-6,y+10);
    line(x+6,y-16,x+6,y+10);
    // 手
    stroke('#D4AD97');
    strokeWeight(4);
    line(x-12,y-45,x+19,y-55);
    line(x+12,y-45,x+27,y-55);
    push()
     
    // 動き
    translate(x+9,y-58);
    rotate(bowMove*0.02);
    stroke('#E8BE60');
    // 管
    strokeWeight(5);
    line(0,0,30,0);
    // ベル
    noStroke()
    fill('#FFD875');
    triangle(28,0,45,-10,45,10);
    // ピストン
    stroke('#FFF0B5');
    strokeWeight(2);
    line(13,-2,13,-10);
    line(19,-2,19,-10);
    line(25,-2,25,-10);
    pop();
    pop();
  }

  function drawPercussion(x,y){
    push();
    noStroke();
    // 顔
  fill('#D4AD97');
  ellipse(x,y-65,22,25);
  fill('#D4AD97');
    ellipse(x,y-65,22,25);
    fill('#171615');
    ellipse(x-4,y-67,3);
    fill('#171615');
    ellipse(x+4,y-67,3);

    

    if(feverTime){fill('#f70808');ellipse(x,y-60,3,5);}else{
    stroke('#f70808');
    strokeWeight();
    line(x-4,y-60,x+4,y-60);}
  // 身体
  noStroke();
   fill('#293849');
    rect(x-12,y-53,24,36,5);
    // 足
    stroke('#293849');
    strokeWeight(5);
    line(x-6,y-16,x-6,y+10);
    line(x+6,y-16,x+6,y+10);

    // ティンパニ2台
    for(let i=-28;i<=28;i+=56){
    noStroke();
    fill('#AE7555');
    ellipse(x+i,y+1,43,34);
    fill('#DFD0B5');
    ellipse(x+i,y-14,47,12);}
    // 腕
     stroke('#D4AD97');
     strokeWeight(4);
     line(x-10,y-44,x-13,y-31);
     line(x+10,y-44,x+13,y-31);
    //マレット
    push();
    translate(x-13,y-31);
    rotate(bowMove*0.025);
    stroke('#E8D8BD');
    strokeWeight(3);
    line(0,0,-16,10);

    noStroke();
    fill('#FFFFFF');
    ellipse(-16,10,8,8);
    pop();

    push();
    translate(x+13,y-31);
    rotate(bowMove*0.025);
    stroke('#E8D8BD');
    strokeWeight(3);
    line(0,0,16,10);

    noStroke();
    fill('#FFFFFF');
    ellipse(16,10,8,8);
    pop();

    pop();


  }
  function drawCym(x,y){
    push();
    noStroke();
    // 顔
    fill('#D4AD97');
    ellipse(x,y-65,22,25);
    fill('#D4AD97');
    ellipse(x,y-65,22,25);
    fill('#171615');
    ellipse(x-4,y-67,3);
    fill('#171615');
    ellipse(x+4,y-67,3);

    
    if(feverTime){fill('#f70808');ellipse(x,y-60,3,5);}else{
    stroke('#f70808');
    strokeWeight();
    line(x-4,y-60,x+4,y-60);}
     // 身体
     noStroke();
    fill('#293849');
    rect(x-12,y-53,24,36,5);
    // 足
    stroke('#293849');
    strokeWeight(5);
    line(x-6,y-16,x-6,y+10);
    line(x+6,y-16,x+6,y+10);
    // 腕
    stroke('#D4AD97');
     strokeWeight(4);
     line(x-12,y-44,x-18+bowMove,y-35);
     line(x+12,y-44,x+18-bowMove,y-35);

    //シンバル
    noStroke();
    fill('#E8BE60');
    ellipse(x-18+bowMove,y-35,10,25);
    ellipse(x+18-bowMove,y-35,10,25);

    pop();
  }
  function drawBD(x,y){
    push();
  noStroke();

  // 顔
  fill('#D4AD97');
  ellipse(x,y-65,22,25);
  ellipse(x,y-65,22,25);
    fill('#171615');
    ellipse(x-4,y-67,3);
    fill('#171615');
    ellipse(x+4,y-67,3);

    

    if(feverTime){fill('#f70808');ellipse(x,y-60,3,5);}else{
    stroke('#f70808');
    strokeWeight();
    line(x-4,y-60,x+4,y-60);}

  // 身体
  fill('#293849');
  rect(x-12,y-53,24,36,5);

  // 足
  stroke('#293849');
  strokeWeight(5);
  line(x-6,y-16,x-6,y+10);
  line(x+6,y-16,x+6,y+10);

  // 腕
  stroke('#D4AD97');
  strokeWeight(4);
  line(x+10,y-44,x+18,y-32);

  // 大太鼓
  stroke('#6B4A3A');
  strokeWeight(3);
  fill('#A9744E');
  ellipse(x+42,y-20,42,42);

  fill('#DFD0B5');
  ellipse(x+42,y-20,30,30);

  // 脚
  stroke('#6B4A3A');
  strokeWeight(3);
  line(x+30,y-2,x+24,y+12);
  line(x+54,y-2,x+60,y+12);

  // マレット
  push();
  translate(x+18,y-32);
  rotate(-bowMove*0.03);
  stroke('#E8D8BD');
  strokeWeight(3);
  line(0,0,18,10);

  noStroke();
  fill('#FFFFFF');
  ellipse(18,10,8,8);
  pop();
  pop();
  }



 
