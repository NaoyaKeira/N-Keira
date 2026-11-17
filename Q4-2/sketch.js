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
  let px, py; 

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
