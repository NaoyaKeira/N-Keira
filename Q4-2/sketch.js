// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(50, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  // 線を引くために一つ前の点を覚えておく変数 

   for(let i = 0; i < scores.length; i++){
    const h = height * scores[i] / 100;
    strokeWeight(10);
    point(i * dx + 15, height-h );}

  for(let i = 0; i < scores.length-1; i++){
    // BLANK[1]
    
    const h = height * scores[i] / 100;
    const h2 = height * scores[(i+1)] / 100;
     
    strokeWeight(3);
     line(i*dx+15,height-h,(i+1)*dx+15,height-h2);
    

   
  }
  }
//  赤くしたいなぁ...
let largest = 0;
  // まずは0とする。
  for(let i = 0; i < scores.length; i++){
    // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
  //  スコアの数の回数だけ0より大きいか？を繰り返していく。
    if(largest < Math.abs(scores[(i+1)]-scores[i]))
    
  {largest = scores[i];}
  if(scores[i]==largest){fill('#cf142b')} }

