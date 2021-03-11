'use strict';
var str = '抜きました<br>';
for(let i = 0; i < 5; i++){
  str += '<br>';
}
str += '<img class = "ALL" src = "jpg/TE_KYO.jpeg">';

var wait = function(sec) {
    return function() {
      return new Promise(function(resolve/*, reject*/) {
        setTimeout(resolve, sec*1000)
      });
    }
  };
  
  
  document.querySelector('#start').addEventListener(
    "click",
    function(){
        var sec = window.prompt('ボタンを押したな！さあ秒数を書け！');
          Promise.resolve()
            .then(() => {
                document.getElementById('t1').innerHTML = '抜きます<br>'
                return Promise.resolve();
            })
            .then(wait(sec)) // ここで処理を待たせる
            .then(function() {
               
                document.getElementById('t2').innerHTML = str;
            })
            .catch(function (err) {
              console.error(err);
              self.result_message = error;
            });
    }
  );
  