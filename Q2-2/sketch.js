// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      noStroke();
      //奇数指定
      if((i+j) % 2 ){

        // fill('#808080');rect(size*i,size*j,size,size);
        fill('#808080');rect(size*i,size*j,size,size);
        // noFill();rect(size*i,size*j,size,size);
      } else {
        // noFill();rect(size*i,size*j,size,size);
        fill('white');rect(size*i,size*j,size,size);
        
// JavaScriptでは数値の 1 は真として扱われるので(i+j) % 2で1（奇数）の場合という指定になる
      }if(j<3 && (i+j) % 2){
      fill('red');circle(size * i + size / 2, size * j + size / 2, 23);
    }
       if(j>4 && (i+j) % 2){
        fill('black');circle(size * i + size / 2, size * j + size / 2, 23);
       }
      }
    }
  }
