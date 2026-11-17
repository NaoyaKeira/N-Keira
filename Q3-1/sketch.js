// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count=0; // 何フレーム目か
let size = 50;
function setup(){
  createCanvas(200, 200);
  count =0;
}

function draw(){
  background(160, 192, 255);
  
  let speed = 1; // アニメーションの速さ
  // BLANK[2]
  // count = (count + speed) % cycle;

  
  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  // 円描きます。
  ellipse(width / 2, height / 2, size);
  // drawのたびに１フレームごと進める。
  // 1周期＝100フレ。最初はcount=0なので1/100、2/100とdrawが更新される。
   count= (count+1)%cycle;
  //  キーを押しているときは↑のやつが2倍速になるよ。2/100,4/100...となっていく。
   if (keyIsPressed) {
    count = (count+2) % cycle;
  }

// ⚪︎周期前半は大きくしていく、後半は小さくしていく。
// もし半周期より小さいなら（周期前半なら）
   if (count < cycle / 2) {
// sizeが50から1ずつ大きくなっていく
    size += 1;
  } else {
// それ以外（周期後半）は1ずつ小さくなっていく
    size -= 1;
  }
}
