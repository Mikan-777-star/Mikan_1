'use strict';
var wait = function(sec) {
    return function() {
      return new Promise(function(resolve/*, reject*/) {
        setTimeout(resolve, sec*500)
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
                document.getElementById('t2').innerHTML = '抜きました'
            })
            .catch(function (err) {
              console.error(err);
              self.result_message = error;
            });
    }
  );
  