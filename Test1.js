'use strict'
const startbutton = document.getElementById("start");
startbutton.onclick = () =>{
    function test(s){
        let test = 0;
        switch (s) {
            case 'S':test = 50;
                break;
            case 'M':test = 100;
                break;
            default:test = 200;
                break;
        }
        let str = "<h3>ま゛";
        for(let i = 2; i <= test + 1; i++){
            str += "ぅ゛"
            if(i % 50 == 0)str += '<br>';
        }
        str += '<br>';
        for(let i = 1; i <= (test + 1 )/ 2; i++){
            str += "♡゛";
            if(i % 50 == 0)str += '<br>';
        }
        return str + "</h3>";
    }
    document.getElementById('ans').innerHTML = test(window.prompt('ボタンを押したな！さあ長さを選べ！[S/M/L]'));
    var s = '<h6>おまけのきららシャミ桃</h6><img src="monmo26980.jpg"><img src="Syamiko.jpg">';
    s += '<br>made by <a href = "https://twitter.com/mikan26980">大彗星みかん</a>';
    document.getElementById('26980').innerHTML = s;
}
