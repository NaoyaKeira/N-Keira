// 吹き出し
function setup(){
  createCanvas(400, 400);
  textSize(16);
}
// 吹き出しを描画する処理を繰り返す
function draw(){
  background(220);
  balloon("関数は難しい？", 100, 100);
  balloon("関数は便利？", mouseX, mouseY);
}

function balloon(t, x, y){
  // 文字のサイズを決定していく。
  const w = textWidth(t);
   // textWidth() は、指定した文字列が表示されるときの横幅を求める関数
  const h = textAscent() + textDescent(); 
  // 文字の縦方向の大きさ
  const p = 4; 
  // 文字と吹き出しの端の間に4ピクセルの余白(padding)

  push();
  // 現在の描画設定を保存する

  // BLANK[1] 吹き出しの背景を先に描く
   fill(50, 120, 200);
  //青色指定
  noStroke();
  rect(x, y, w + p * 2, h + p * 2, 5);
  // rect(x, y, 幅, 高さ, 角の丸み)
  // w + p * 2：四角形の幅＝文字の幅＋左余白＋右余白

  // BLANK[2] 吹き出しの三角形を描く
 triangle(
    x + w / 2, y + h + p * 2,
    x + w / 2 + 20, y + h + p * 2,
    x + w / 2 + 10, y + h + p * 2 + 15
  );
  // triangle(x1, y1, x2, y2, x3, y3)
  // x：吹き出しの左端のx座標
  // w：吹き出しの中に表示する文字の幅
  // w / 2：文字の幅の半分
  // だからx + w / 2
  // y + h + p * 2
  // 左端のy座標+文字の縦方向+余白の合計＝吹き出しの下辺のy座標
  // あとの2点はここからずらす。


  // 吹き出しのテキストを次に描く
  textAlign(LEFT, CENTER);
  // 文字の配置の基準を指定　
  // LEFT：指定したx座標を文字の左端に
  // CENTER：指定したy座標を文字の縦方向の中央に
  fill(255);
  text(t, x + p, y + h / 2 + p);
  // text() は、文字列を指定した場所に表示する関数
  // text(表示する文字, x座標, y座標);
  // y(吹き出しの左端y座標)+h/2(文字の中心)+p（余白）
  pop();
  // 保存した描画設定に戻す
}