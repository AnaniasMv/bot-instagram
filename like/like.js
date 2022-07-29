const next = document.querySelector('div > div._aank > div._aaqg > button');
var counter = 0;

function doLike() {
  const like_btn = document.querySelector('section > span._aamw > button');
  if(like_btn){
      console.log('click\n');
      like_btn.click();
      counter++;
  }
  next.click();
  console.log(`Você já curtiu ${counter} post(s)!`);
}

(function loop() {
    setTimeout(() => {
      doLike();
      loop();  
    }, 10000); // 10 segundos
}());