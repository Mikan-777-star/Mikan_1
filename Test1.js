'use strict'
function days(){
    var days = new Date().getDay();
    var suika = document.getElementById('suika');
    switch(days){
        case 1:suika.innerHTML = '陽夏木つきつき月曜日';
        break;
        case 2: suika.innerHTML = "千代田ちょだちょだTuesday";
        break;
        case 3: suika.innerHTML = '今日は誰何すいすい水曜日';
        break;
        case 4: suika.innerHTML = "もんも悶々木曜日";
        break;
        case 5: suika.innerHTML = 'ごせんぞ金ピカ金曜日！';
        break;
        case 6: suika.innerHTML = 'サタデーさたさた佐田杏里';
        break;
        case 7: suika.innerHTML = "リリスさんさんSunday";
    }
    
}
days();
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
        }else if(s === "舞風"){
            return{
                result: '<a href = "javascript:void(0)" onclick="PlaySound(\'Maikaze.mp3\', true);">舞風さんの寝息だわよ</a>',
                ans: false
            }
        }else if(s === "syamu"){
            return{
                result:'ウイイイイイイイッッッッス。どうも、シャムでーす。<br>まぁ今日はオフ会、当日ですけども。<br>えーとですね、まぁ集合場所の、えーイオンシネマに行ってきたんですけども、ただいまの時刻は1時を回りました。<br>はい、ちょっと遅れて来たんですけどもね。えー11時ちょっとすぎくらいに、えーイオンシネマに行ったんですけども。<br>ほんでーまぁイオンシネマの全体の動画を撮った後に行ったんですけども。スィー。<br>ほんでーかれこれまぁ2時間くらい、えー待ったんですけども参加者は誰一人来ませんでした。ガチャ。<br>誰一人来ることなかったですぅ。残念ながら。はい。<br>一人くらい来るやろうなーと思ってたんですけども、スゥー、結局2時間くらい待っても誰一人来ませんでしたね、えぇ。<br>でもね、でもオフ会のお知らせの動画にちらほらコメントあったんですけどもね。えー参加者の方の。<br>なんだろう。なんで来なかったんでしょうかねー。<br>まぁーもう一時間くらい待とうと思ったんですけども今日はね、えーまぁみんなとお昼ごはん食べるつもりだったし、<br>あっ夜ご飯もみんなと一緒に食べようかなと思ってたんで今日は朝、パン一枚でございます。<br>今日の朝食はパン一枚！<br>なのでもう1時間待とうと思ったけどさすがにちょっと腹ペコなんで、えー今回のオフ会は残念ながら、こういう悲しい結果で終わりですね。<br>たぶんねぇあのまま待っててももう誰も来んかなぁと思ってたし、スィー、かといっても誰も来る気配なかったんで、カチッ、もうこれアカンなぁと思って、えーいま車に戻って、えー動画を撮影しております。<br>なんだろうなぁー。情報が足りんかったんかなぁー。<br>でもちゃんと載せて、載せて、載せたつもりなんですけどもねぇー。カチッ。<br>イオンシネマのーURLも載せたし、でー駅探で新大阪から垂井までの駅探の情報も載せていたんですけど一体なにが足りんかったんでしょうかねぇー。<br>あのねー、まぁイオンシネマで一人でずーっと待ってたわけですよ。<br>最初はちょっとイオンシネマのフロアロビーをうろちょろしてたんだけど、ちょっと足がちょっとしんどくなってきて、ずーあれそれからずーっとイスに座ってた、カチッ、座ってたけど、シー、誰一人来ることなかったですね。はい。<br>スー一体なにがダメだったんでしょうかねぇー。参加者はいると思うんですけどなぜ来なかったんでしょうかね。不思議ですね。<br>なんかプレゼント持って行くよっていう人がおったんだけどそれらしい人もおらんかったし。<br>まぁ女子24人で男4人、28人やろ計、そのような団体さんもまったくいる気配はなかったし。<br>女子ぐー十人ぐらいでいきまーすってコメントもあったんやけどそれらしい人もおらんかったし、なんだろう。<br>今日、8月11日だよね？オフ会、当日だよね？<br>なんだろう。なんで来んかったんかなぁ。なんで来なかったんやろかなぁ、みんな。<br>あれ？もしかしてみな、みんなー場所わかってた？<br>俺がさー不安なのは一番不安だったのはコメント返信でね。場所分かりますか？っていうコメント返信したんだけどまったく返信なくて。<br>ホンマに場所分かってんかいなぁっていう不安がいっぱいで今日、当日迎えたから。<br>もしかしたら場所分かってなかったかもしんないねぇーみんな。<br>うーん、なんでだろうねぇ。なんで来なかったんだろうか。謎ですね。スゥー。<br>ちょっとーみん、さすがに参加者0人はねぇ。へこんでますねぇーえぇ。<br>そうですねぇー次のオフ会はまた、そやな夏休み明けやろうかな。<br>あのねー、いま夏休みやからイオンシネマ多かったわ、人が、人でいっぱいやったわ。うん。プスゥー。<br>そやねー自分としてはリベンジしたいんだけどね。泉南イオン、場所は泉南イオンで。スゥー。<br>なんだろうぉ、ちょっといま夏休みやし、夏休み明けやろうかな。9月ごろ。スゥ、やろうかな。<br>今度は土日で。やろうかなと思ってますよ。スィー。<br>いや、あのぉー今度ね、今度ぉーコラボジャパンさんの方でゲーム実況者イベントがあるんですよ、とYoutubeスペーストーキョーで。<br>で、もしかしたら俺が呼ばれるかもしれな、しめ、しれないのでぇー、でーゲーム実況者イベントの中にね、ファンとの交流会っていうのがあるんですよ。<br>それにみんな来てもらおうかなって思って、はい。<br>とりあえずぅー、今回のオフ会は残念ながら参加者0人という形で終わりました。チッ、はい、チッ、スゥ。<br>なんかねぇーそーとーショックですねぇー。なんで来なかったんだろうって思いがあります。スゥー、はい。<br>まぁ腹も減ってくるしは、腹も減ってくるし、誰も来んしっていう、なんだろう。<br>まぁとにかくむなしかったし、一人でずーっと待って2時間くらい待ってたけどそれがむなしかったし、スィー、なんで来なかったんだろうって思いとまぁ情報が足りなかったかもしれへんし、今回は。はい、それが、それもあるかもしれないね、はい。<br>まっ、ちょっとーなんでしょうかね。泉南イオンに来たよーって人はぜひえーコメントください。スィー。<br>もしかしたらすれ違いっていう可能性もあるかもしれへんし。<br>いやっ、あのまま待ってても誰も来んかったかなぁと思いますし。スィー。<br>まぁー自分はですね、オフ会やりたかったし、今回はこういう形で終わりましたけど。<br>まぁこれでまぁ自分自身もオフ会やりたかったし、今回はこれでええかなぁっと納得しております。スィー。<br>もし、参加者様で、もし泉南イオンのイオンシネマに来たよーっていう人はぜひコメントください。<br><br>さぁ今回は今回のオフ会残念ながら参加者0人という形で終わってしまいました。はい。<br>自分自身もえー反省してるところがあります。<br>ちょっと情報が足りなかったなぁというところとしっかりと参加者さんの参加者さんとのコミュニケーションというか連絡をとってなかったんで今回はそれらもあって、参加者0人という形で終わって、終わったんかなぁと思ってます。ハイ。<br>まぁ前にもさっきほどの動画でも言いましたけど自分自身もオフ会やりたかったんでまぁこういう形で終わってしまいましたけどこれはこれでよかったかなぁと思います。<br>まぁ参加者0人やったけどまぁ凹んでられないよね。ええ。まぁ今後のYouTubeの活動もあるし、みんなのことを思うとまぁ凹んでられませんよね。ハイ。<br>まぁ今回はこういう形で終わりまｽｩｩｩｩ。<br>次回のね、オフ会ちゃんと情報を提示して、参加者様とちゃんと連絡をとりあって、えー次回のオフ会はリベンジしたいと思います。<br>最低でも参加者1人、でも来て欲しいですね。次のオフ会は。<br>はい、というわけで第一回目のオフ会は参加者0人という形で終わってしまいました。<br>なんていうでしょうか。まぁここまで来ちゃうともうネタ動画ですよね。参加者0人なんて。<br>普通はこん、普通、まぁYouTuberでオフ会するぞー、ちゃんとオフ会の場所も載っけて最低でも参加者1人は来るよね。でも残念ながら参加者0人ですねぇ。<br>ちょっとこういうオフ会、参加者0人というオフ会はなかなかないんではないでしょうか。<br>自分自身も驚いてます。<br>まさかねぇ参加者0人と思わなかったから。俺もね今日張り切って早めに起きたんですよ。<br>えぇーいつもより早い時間に起きて気合を入れて、ほんで、でぇーまぁYouTubeの自分のオフ会の動画をチェックして今日はオフ会だぞってコメント投稿して、で、いざ、泉南イオンのイオンシネマに来てみたら参加者0人ということでｽｩｩｩｩ、まぁちょっとねー相当ショックですねー。<br>まぁ相当凹んどるし、相当むなしかったし、なんで誰もこうへんねんって思いながら、いやもうちょっと待ってみよう。<br>誰か来る誰か来ると思いながらかれこれ2時間近くまってみても一向に人が来る気配はありませんでした。ハイ。<br>まぁ今回は反省を活かして、第二回目のオフ会で今回のリベンジを果たしたいと思いますよー。ハイ。<br>場所も場所も泉南イオンで、泉南イオンにしますわ。<br>場所泉南イオンにしますわ。<br>どうしても泉南イオンでリベンジをしたい。俺としては。<br>というわけでえー今度のオフ会はですね。夏休み明け、にしたいと思います。今度はちゃんと今度はね、ちゃんと参加者を集めて、ちゃんと参加者と連絡をとって、ちゃんとね、オフ会の情報を提示して。<br>そうですね。参加者目指すは40人くらい目指したいと思いますね。<br>今回のオフ会動画、自分で分かってた範囲ではまぁ30人以上の参加者が来る予定だったんですけども誰も来なかったんで、まぁ目標次のオフ会目標は30人以上目指したいと思いますね。ハイ。<br>というわけでえー今回は残念ですけどもね、何度も言っちゃうけど参加者0人という形で終わっちゃいました。<br>えぇーオフ会に来られなかった方、こういう形でおわってしまって、非常に申し訳ない。<br>まぁオフ会に来なかった人もえぇー！ 参加者0人！ と思ってるだろうね。今、今、動画で見てる人は。<br>まぁ来れなかった人でこの動画見てる人、えぇー参加者0人！ って驚いてるだろうね。もちろん俺自身も驚いてるから。<br>まぁえぇー元々、オフ会動画撮る予定だったんでオフ会来れなかった方にたっぷりと今回第一回目の様子をお届けしました。<br>まぁねぇー参加者1人でもおったらちょっとは楽しいオフ会動画、内容になったかもしれんけどまぁ参加者0人だから仕方ないよね。<br>というわけで俺自身も今後のYouTube活動もあるし、みんなの期待に応え、応えないといけないからね。<br>メインチャンネルはもう少しチャンネル登録者3000人いくし、もっともっと頑張らなアカンよね。<br>ハイ、というわけで今回はこういった形で形ですけどもオフ会の内容をんへん、えぇー参加者来る予定だった参加者様、そして、来れなかったみなさんに今回の内容をお届けしました。<br>まぁ内容としてはオフ会の内容としては薄い内容かもしれへんけど俺としては精一杯、えぇーなんでしょう。<br>まぁオフ会に来るよ、来たよ、もし来たよっていう人と人、でオフ会に来る予定だった方、そしてオフ会に来れなかった方々で一生懸命、えぇーわたくし自身動画の内容をみなさんにお伝えしました。<br>というわけで次のオフ会ですね。次こそは今回のオフ会のリベンジを果たしたいと思いますんで、みなさん、是非是非お楽しみに下さい。<br>というわけで今回の第一回目のオフ会はここで終わります。<br>なんか、なんか悲しいけどしょうがないよね。まぁこういった形で終わっちゃったから、というわけで次の動画でお会いしましょう。<br>またのぉーい、やっ！'
                ,ans:false
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