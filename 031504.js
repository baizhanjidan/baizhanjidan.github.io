var ce_shi = "";
$("body").prepend("<style>.ceshi1 {background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #5a4d30), color-stop(0.15, #918157), color-stop(0.3, #cfa520), color-stop(0.45, #5a4d30), color-stop(0.6, #cfa520), color-stop(0.75, #b4a120), color-stop(0.9, #bfa66e), color-stop(1, #cfa520)) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}.ceshi1 a {background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #5a4d30), color-stop(0.15, #918157), color-stop(0.3, #cfa520), color-stop(0.45, #5a4d30), color-stop(0.6, #cfa520), color-stop(0.75, #b4a120), color-stop(0.9, #bfa66e), color-stop(1, #cfa520)) !important;color: transparent !important;-webkit-background-clip: text !important;-moz-background-clip: text !important;-ms-background-clip: text !important;}")
$(document).ready(function () {
	$("div.text-success").before("<div align='center' id='ceshi'></div>");
    $("#ceshi").html(ce_shi);
    $("#acn").before('<div class="am-tab-panel am-fade" id="ceshi2"></div>');
    $(".am-tabs-nav.am-nav.am-nav-tabs").prepend("<li id='ceshi5' class><a href='#ceshi2'>表情包</li>");
    
    $("#ceshi5").on("click", function() {
      var imglist = [
        "http://i1.fuimg.com/712728/65bab655787573cf.png",
        "http://i1.fuimg.com/712728/fe491bac039dc489.png",
	"http://i1.fuimg.com/712728/063495cb8f04041a.png",
	"http://i1.fuimg.com/712728/263e93258920e480.png",
	"http://i1.fuimg.com/712728/ca47402e66770c6e.png",
	"http://i1.fuimg.com/712728/d026c0d5ea67a935.png",
	"http://i1.fuimg.com/712728/13419aacc651c63b.png",
	"http://i1.fuimg.com/712728/5415255332a70011.png",
	"http://i1.fuimg.com/712728/8430c58f7c02bb7e.png".
	"http://i1.fuimg.com/712728/403eb02ecf19a45f.png"
      ];
      $("#ceshi2").empty();
      for (var b = 0; b < imglist.length; b++) {
        var ceshiemo =
          "<img src='" +
          imglist[b] +
          "' class='emot-class' Onclick='addemot(\"" +
          imglist[b] +
          "\")'>";
        $("#ceshi2").append(ceshiemo);
      }
      $("#ceshi2").append(
        '<br>'
      );
      $(".am-tabs-bd").show();
    });
});
