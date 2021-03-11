'use strict';
function add(str, src, URL, name){
    str += '<h1><img class = "icon1" src="'+src+'"><a href="'+URL+'">'+name+'</a></h1><br>';
    return str;
}

var s = '';
s = add(s, 'https://pbs.twimg.com/profile_images/1368804980740616198/CuxC2q5e_400x400.png', 'https://twitter.com/buzamasu0803','ブザマスさん');
s = add(s, 'https://pbs.twimg.com/profile_images/1369820488453685253/dZJHO3Uy_400x400.jpg', 'https://twitter.com/phenomenonAtoZ', 'フェノさん');
s = add(s, 'https://pbs.twimg.com/profile_images/1369538478870958080/sQs2cJuW_400x400.jpg', 'https://twitter.com/carbon_lapis','たそにゃん');
s = add(s, 'https://pbs.twimg.com/profile_images/1369223412032311303/TEGAgWvo_400x400.jpg', 'https://twitter.com/conatsu_Iake', 'コナツさん');
s = add(s, 'https://pbs.twimg.com/profile_images/1369101012661768194/Ihe-k-I4_400x400.jpg', 'https://twitter.com/hekisaki_umau', 'うまうさん');
s = add(s, 'https://pbs.twimg.com/profile_images/1245026521422516225/xOhjv-dU_400x400.jpg', 'https://twitter.com/alien_nata_n', 'ナターン星人');
s = add(s, 'https://pbs.twimg.com/profile_images/1366776341886955526/y_JZdpL3_400x400.jpg', 'https://twitter.com/Latte_art01', 'ラテさん(本垢）');
s = add(s, 'https://pbs.twimg.com/profile_images/1369572328623927299/haR5kxdm_400x400.jpg', 'https://twitter.com/Latte_art02', 'ラテさん（まぞく垢）');
s = add(s, 'https://pbs.twimg.com/profile_images/1185891681674989568/7VyXWdy0_400x400.jpg', 'https://twitter.com/merusu1551', 'めるすさん');
s = add(s, 'https://pbs.twimg.com/profile_images/1362172222874349570/cTc3KZ4l_400x400.jpg', 'https://twitter.com/merusu1552', 'めるすさん（サブ）');
s = add(s, 'https://pbs.twimg.com/profile_images/1347427000546328577/EtUVBK6c_400x400.jpg', 'https://twitter.com/MaikazeShion', '舞風詩音さん');
document.getElementById('mikan').innerHTML = s;