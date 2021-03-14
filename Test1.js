'use strict'
if(new Date().getDay() === 3)document.getElementById('suika').innerHTML = '今日は誰何すいすい水曜日';
const startbutton = document.getElementById("start");
function removeAllChildren(element) {
    while (element.firstChild) {
      // 子どもの要素があるかぎり除去
      element.removeChild(element.firstChild);
    }
  }
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
    feno.innerHTML = '<img src="jpg/Feno.jpg">';
    umau.innerHTML = '<img src="jpg/Umau.jpg">';
    s1 = 'このボタンを押してね';
    var main = document.getElementById('main');
    main.style.width = 'auto';
    main.style.fontSize = '50%';
}else{
    feno.innerHTML = '<img src="jpg/Feno_1.jpg">';
    umau.innerHTML = '<img src="jpg/Umau_1.jpg">';
    s1 = 'このボタンをクリックしてね';
}
startbutton.innerHTML = s1
const tweetDivided = document.getElementById('twitter');
startbutton.onclick = () =>{
    function test(s){
        if(s === 'まちカドまぞく'){
            return {
                result:'<a href = "gazou.html">スペシャルサンクス</a>',
                ans: false
            }
        }else if(s === 'パインアメマン'){
            return{
                result: '<img class = "ALL" src = "https://pbs.twimg.com/media/Es0UZcjU0AIUCtH?format=jpg&name=900x900">',
                ans: false
            }
        }else if(s === 'めるす'){
            return{
                result: '<a href = "test2.jpg">押せ</a>',
                ans: false
            }
        }
        let test = s;
        let str = "ま゛";
        for(let i = 2; i <= (test - 10); i++){
            str += "ぅ゛";
        }
        for(let i = 1; i <= (test - 15 )/ 2; i++){
            str += "♡゛";
        }

        return {
            result: str,
            ans: true
        };
    }
    var str = test(window.prompt('ボタンを押したな！さあ長さを数字で書け！'));
    removeAllChildren(tweetDivided);
    document.getElementById('ans').innerHTML = str.result;
    var s = '<h6>おまけのきららシャミ桃</h6><img class = "ALL" src="monmo26980.jpg"><img class = "ALL" src="Syamiko.jpg">';
    s += '<br>made by <a href = "https://twitter.com/mikan26980" id = "umau">大彗星みかん</a>';
    document.getElementById('26980').innerHTML = s;
    if(str.ans){
        const anchor = document.createElement('a');
        const hrefValue =
          'https://twitter.com/intent/tweet?button_hashtag=' +
          encodeURIComponent('ま゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛') +
          '&ref_src=twsrc%5Etfw';
        anchor.setAttribute('href', hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text', str.result);
        anchor.innerText = 'Tweet #ま゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛';
        tweetDivided.appendChild(anchor);
        const script = document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        tweetDivided.appendChild(script);
    }
}


/**
 * <div>
        <a href="https://twitter.com/intent/tweet?button_hashtag=ま゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="マウマウの反乱" data-show-count="false">Tweet #ま゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ゛ぅ</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
 */