
$(document).ready(function () {
    MyYe();
    decorateYeForFans();
    var select = document.getElementById("duqian");
    var add = document.createElement("p");
    add.setAttribute("id", "yeDocarateDiv");
    select.before(add);
    add.innerHTML =
        '<a href="javascript:;" Onclick="$(&apos;#yeColor&apos;).toggle()">鐐规垜瑁呮壆鍙舵ゼ锛堝姛鑳芥祴璇曚腑锛�</a><br> <form id="yeColor" style="display: none;">  娉ㄩ噴锛氬彉鑹插姛鑳戒腑锛屽埛鏂板悗涓€鍒囦細鎭㈠鍘熸牱锛岄櫎闈炵偣淇濆瓨鐒跺悗鍙戦€併€備繚瀛樺姛鑳芥祴璇曚腑銆�<a href="https://kuler.adobe.com" target="_blank">鑹插僵鎼厤鍙傝€冪偣鎴�</a><br>閫夋嫨棰滆壊锛� <input type="color" id="ye_color"><p>   <select id="ye_decorate_select"><option >閫夋嫨闇€瑕佹洿鏀圭殑鏍峰紡</option>     <option value="ye_whole">鐣岄潰鏁翠綋鍙樿壊</option>          <option value="ye_banner_shadow">banner闃村奖棰滆壊</option>     <option value="ye_reply_font">鍥炲鏂囧瓧棰滆壊</option><br>     <option value="ye_name_time">鏄电О琛岄鑹�</option>     <option value="ye_block">鍒嗛殧绾块鑹�</option><br>     </select>  <button id="ye_decorate" type="button">棰勮</button><button id="ye_save_decorate" type="button">淇濆瓨</button></p> </form><a href="javascript:;" Onclick="$(&apos;#yeTalk&apos;).toggle()">灏忓彾蹇嵎瀵硅瘽</a><br><p id="yeTalk" style="display: none;">閫夋嫨灏嗗唴瀹瑰彂閫佸埌甯栧瓙涓椂浼氬嚭鐜颁竴瀹氬欢杩熴€�'+yeTalkSelect+'</p><div id="show_zcxiaoye" onclick="judgezcXiaoye();">鏄剧ず鎴栭殣钘忔瀹犲皬鍙�</div><div id="show_xiaoye" onclick="judgeXiaoye();">閫夋嫨鏄剧ず鎶曟幏灏忓彾鎴栨憞鎽囧彾</div>';
    $("#ye_decorate").click(decorateYeUnSave);
    $("#ye_save_decorate").click(decorateYe);


});
