// キューバ国旗（ほかの国旗に挑戦してもOK）
function setup() {
  createCanvas(360, 180);
  noStroke();
  background(255);

  const d = height / 5; // 縞1本の太さ
  const blue = color('#002a8f');

  // 縞を描く
  
    for(let i = 0; i < 5; i++){
    // BLANK[1] ヒント：縞の色を交互に変えるには2で割った余りを使おう
    if( i % 2 ==0){
    fill(blue);
    rect(0, i * d, width, d);
    

    }
}
fill('#cf142b');
triangle(0,0,0,180,155,90);
fill(255);
 beginShape();
 vertex(60, 65);
vertex(66, 82);
vertex(84, 82);
vertex(69, 94);
vertex(75, 110);
vertex(60, 100);
vertex(45, 110);
vertex(51, 94);
vertex(36, 82);
vertex(54, 82);
  endShape(CLOSE);

}

  // 十字を描く
  //const size = d * 5;
  // fill(blue);
  // rect(0, 0, size, size);
  // fill(255);
  // rect(d * 2, 0, d, size);
  // BLANK[2] 十字を完成させよう
