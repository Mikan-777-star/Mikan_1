'use strict'
const startbutton = document.getElementById("start");
function test1(){
    var ua = navigator.userAgent;
    console.log(ua);
    if(ua.indexOf('iPhone') > -1){
        return true;
    }
    if(ua.indexOf('Android') > -1){
        return true;
    }
    if(ua.indexOf('iPad') > -1){
        return true;
    }
    return false;
}
var s1 = null;
var feno = document.getElementById('Feno');
var umau = document.getElementById('Umau');
if(test1()){
    feno.innerHTML = '<img src="Feno.jpg">';
    umau.innerHTML = '<img src="Umau.jpg">';
    s1 = 'このボタンを押してね';
    var main = document.getElementById('main');
    main.style.width = 'auto';
    main.style.fontSize = '50%';
}else{
    feno.innerHTML = '<img src="Feno_1.jpg">';
    umau.innerHTML = '<img src="Umau_1.jpg">';
    s1 = 'このボタンをクリックしてね';
}
startbutton.innerHTML = s1
startbutton.onclick = () =>{
    function test(s){
        if(s == 56562||s == 26980 ){
            return '<a href ="https://twitter.com/hekisaki_umau/status/1366977824075042826">隠しコマンドを入力したね！</a>';
        }
        let test = s;
        let str = "<h3>ま゛";
        for(let i = 2; i <= test - 3; i++){
            str += "ぅ゛";
        }
        for(let i = 1; i <= (test - 5 )/ 2; i++){
            str += "♡゛";
        }
        return str + "</h3>";
    }
    document.getElementById('ans').innerHTML = test(window.prompt('ボタンを押したな！さあ長さを数字で書け！'));
    var s = '<h6>おまけのきららシャミ桃</h6><img src="monmo26980.jpg"><img src="Syamiko.jpg">';
    s += '<br>made by <a href = "https://twitter.com/mikan26980" id = "umau">大彗星みかん</a>';
    document.getElementById('26980').innerHTML = s;
}
