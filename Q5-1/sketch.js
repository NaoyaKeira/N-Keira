// EUの旗を描いてみよう
// まずは、キャンバスを作成し、12個の星を並べる位置を決める。
function setup(){
  
  createCanvas(200, 200);
  background('#003399');
  
  noStroke();
  
  for(let i = 0; i < 12; i++){
    // iが1増えるごとにthetaが0,30,60...と増える
    const theta = TWO_PI * i / 12;
    // この後星のx座標y座標になります。
    // 円の中心が(100,100),半径が50。
    const x = 100 + cos(theta) * 50;
    const y = 100 + sin(theta) * 50;
    fill('#FFCC00')
    star(x, y, 10);
    // この後定義している関数を呼び出す。
    // 例えば、1回目の繰り返しだとstar(150, 100, 10);になる
    // x＝星の中心のx座標 y=星の中心のy座標 10=星の中心から頂点までの距離
  }
}
// 指定された位置に星を描く
// star()という独自の関数を定義している。
// cx,cy,r は、関数を呼び出したときに受け取る値。
function star(cx, cy, r){
  
beginShape();    // 5つの点つなぎを始める
for(let i = 0; i < 5; i++){
//5つの頂点は72°間隔。五角形の隣同士ではなく、1つ飛ばしの頂点同士を結ぶ。
// - HALF_PIで最初の頂点を右方向から上方向へ移動
// 星の頂点を144°ずつ進めながら求め、星の先端が上を向くようにする式
  const theta = TWO_PI * i * 2 / 5 - HALF_PI;
// cx：星の中心のx座標 r：星の中心から頂点までの距離
// cos(theta)：その距離のうち、横方向にどれだけ進むかを表す割合
  const x = cx + cos(theta) * r;
  const y = cy + sin(theta) * r;
// 円周上の5つの点を144°ずつ飛ばして選び、順番に結んでいる。
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
// BLANK[1] ヒント：star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう