var snow_lp = "";
$("body").prepend("<style>#sidebar01{display:none;}#slide{display:none;}.yuki {background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #5a4d30), color-stop(0.15, #918157), color-stop(0.3, #cfa520), color-stop(0.45, #5a4d30), color-stop(0.6, #cfa520), color-stop(0.75, #b4a120), color-stop(0.9, #bfa66e), color-stop(1, #cfa520)) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}.yuki a {background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #5a4d30), color-stop(0.15, #918157), color-stop(0.3, #cfa520), color-stop(0.45, #5a4d30), color-stop(0.6, #cfa520), color-stop(0.75, #b4a120), color-stop(0.9, #bfa66e), color-stop(1, #cfa520)) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}")
$(document).ready(function () {
	$("div.text-success").before("<div align='center' id='snow'></div>");
    $("#snow").html(snow_lp);
    $("#acn").before('<div class="am-tab-panel am-fade" id="snow01"></div>');
    $(".am-tabs-nav.am-nav.am-nav-tabs").prepend("<li id='snow02' class><a href='#snow01'>吉祥三豹</li>");
    $("#shanchu").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<s></s>');
    });
    $("#zhedie").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<details><summary>Click to open</summary>内容</details>');
    });
    $("#lianjie").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<textarea class="form-control">文字</textarea>');
    });
    $("#wenzi").on("click", function () {
        $("#wenbenkuang").val($("#wenbenkuang").val() + '<a href="地址" target="_blank">点就看</a>');
    });
    $("#snow02").on("click", function() {
      var imglist = [
"https://i.loli.net/2020/04/22/WnDXI5CKgzoc8wj.png",
"https://i.loli.net/2020/04/22/GvSOjRUAizJNVux.png",
"https://i.loli.net/2020/04/22/FwYM8Z2v7crpS5H.png",
"https://i.loli.net/2020/04/22/BG3lVhkv7XYI8ET.png",
"https://i.loli.net/2020/04/22/jv7WeHyNKm2pbw5.png",
"https://i.loli.net/2020/04/22/8oreYMLPt6S2Wcu.png",
"https://i.loli.net/2020/04/22/y8JZRKuE2bxXdwD.png",
"https://i.loli.net/2020/04/22/q3T2ipsuKeZnM9y.png",
"https://i.loli.net/2020/04/22/rDGgQsduLT7JNnt.png",
"https://i.loli.net/2020/04/22/Y9Tih1yMewztKbZ.png",

      ];
      $("#snow01").empty();
      for (var b = 0; b < imglist.length; b++) {
        var snowemo =
          "<img src='" +
          imglist[b] +
          "' class='emot-class' Onclick='addemot(\"" +
          imglist[b] +
          "\")'>";
        $("#snow01").append(snowemo);
      }
      $("#snow01").append(
        '<br>常用代码:<br><font id="shanchu" color="#4682B4">删除线</font>&nbsp;&nbsp;<font id="zhedie" color="#4682B4">折叠</font>&nbsp;&nbsp;<font id="lianjie" color="#4682B4">点就看</font>&nbsp;&nbsp;<font id="wenzi" color="#4682B4">文字框</font>'
      );
      $("#shanchu").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<s></s>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#zhedie").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<details><summary>Click to open</summary>内容</details>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#lianjie").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<a href="地址" target="_blank">点就看</a>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#wenzi").on("click", function() {
        $("#wenbenkuang").val(
          $("#wenbenkuang").val() +
            '<textarea class="form-control">文字</textarea>'
        );
        $(".am-tabs-bd").hide();
      });
      $(".am-tabs-bd").show();
    });
});
