$("body").prepend("<div style='z-index:100000;top:0px;left:0px;position: fixed;width:100%;height:100%;-webkit-pointer-events: none;-moz-pointer-events: none;-ms-pointer-events: none;-o-pointer-events: none;pointer-events: none;'><div id='slbell' draggable='true' style='pointer-events:auto;position: absolute;cursor:move ;top:100px;left:20px;width:128px;height:128px;background-image:url(http://i2.tiimg.com/712728/440d3430b2aa16e1.gif);background-size:100%;z-index:99999999'></div></div><style>div.col-md-2.col-lg-2.col-xs-2.col-sm-2{z-index:-1 !important;}</style>");
// <
// <style>#shimeji{z-index:99999999 !important;position:relative !important}</style>

var dh = null;
var dhtimer = null;
var timer = null;
var movetimer = null;

function changeslbell(a,rnum="0") {
  if (a == "1") {

    if (rnum == 1) {
      $('#slbell').css({
        "background-image": "url(http://i2.tiimg.com/712728/d84d483c67d0e53e.gif)"//move
      });
      dhtimer = setTimeout(function() {
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/d84d483c67d0e53e.gif)"//move
        });
      }, 300);
    } else {
      $('#slbell').css({
        "background-image": "url(http://i2.tiimg.com/712728/d84d483c67d0e53e.gif)"//move
      });
      dhtimer = setTimeout(function() {
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/d84d483c67d0e53e.gif)"//move
        });
      }, 300);
    }
  } else if (a == "2") {
    $('#slbell').css({
      "background-image": "url(http://i2.tiimg.com/712728/372e9d935dc35b9d.png)"//leftm
    });
    dhtimer = setTimeout(function() {
      $('#slbell').css({
        "background-image": "url(http://i2.tiimg.com/712728/b3fac5beb3906590.png)"//leftr
      });
      dhtimer = setTimeout(function() {
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/ed60e29c4471516c.png)"//leftl
        });
      }, 300);
    }, 300);
  } else if (a == "3") {
    $('#slbell').css({
      "background-image": "url(http://i2.tiimg.com/712728/ed60e29c4471516c.png)"//leftl
    });
    dhtimer = setTimeout(function() {
      $('#slbell').css({
        "background-image": "url(http://i2.tiimg.com/712728/b3fac5beb3906590.png)"//leftr
      });
      dhtimer = setTimeout(function() {
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/372e9d935dc35b9d.png)"//leftm
        });
      }, 300);
    }, 300);
  } else if (a == "4") {
    $('#slbell').css({
      "background-image": "url(http://i2.tiimg.com/712728/0e058b76b7059a58.png)"//skill12
    });
    dhtimer = setTimeout(function() {
      $('#slbell').css({
        "background-image": "url(http://i2.tiimg.com/712728/2916e61748176f09.png)"//skill11
      });
      dhtimer = setTimeout(function() {
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/81f971441bcea320.png)"//skill13
        });
      }, 300);
    }, 300);
  } else if (a == "5") {

    dhtimer = setTimeout(function() {
      $('#slbell').css({
        "background-image": "url(http://i2.tiimg.com/712728/09daa14e1674ec4b.gif)"//idle
      });
      dhtimer = setTimeout(function() {
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/09daa14e1674ec4b.gif)"//idle
        });
        dhtimer = setTimeout(function() {
          $('#slbell').css({
            "background-image": "url(http://i2.tiimg.com/712728/09daa14e1674ec4b.gif)"//idle
          });
        }, 300);
      }, 600);
    }, 900);
  } else if (a == "6") {
    dhtimer = setTimeout(function() {
      $('#slbell').css({
        "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
      });
      dhtimer = setTimeout(function() {
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
        });
      }, 900);
    }, 600);
  }
}



function smjmove() {
  clearTimeout(movetimer);
  var rnum0 = Math.round(Math.random()); 
  if (rnum0 == 0) {
    var slmotion = Math.floor(Math.random() * (6 - 4 + 1) + 4);
    var timedh = 900;
    if (slmotion == 5) {
      timedh = 3000;
    } else if (slmotion == 6) {
      timedh = 900;
    }

    var timesRun = 0;
    dh = setInterval(function() {
      changeslbell(slmotion)
      timesRun += 1;
      if (timesRun === 6) {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
        });
        movetimer = setTimeout("smjmove()", 5000)
      }
    }, timedh);
  } else {

    var faHeigt = $('#slbell').parent().height() - 150;
    var faWidth = $('#slbell').parent().width() - 150;
    var slY = $('#slbell').position().top;
    var slX = $('#slbell').position().left;
    var rnum = Math.round(Math.random()); 
	
    if (faHeigt - slY <= 70 && slX >= 200) {

      changeslbell(1,rnum)
      dh = setInterval("changeslbell(1,"+rnum+")", 600, "linear");
      $('#slbell').animate({
        left: "-=" + 200
      }, 6000, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - slY <= 70 && slX <= 0) {
      changeslbell(2)
      dh = setInterval("changeslbell(2)", 900, "linear");
      var movey = 200 < slY ? 200 : slY;
      $('#slbell').animate({
        top: "-=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - slY <= 70) {
      changeslbell(1,rnum)
      var move_x = slX;
      dh = setInterval("changeslbell(1,"+rnum+")", 600, "linear");
      $('#slbell').animate({
        left: "-=" + slX
      }, slX * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/9a98fdbf2a563c18.gif)"//special
        });
        movetimer = setTimeout("smjmove()", 8000)
      });
    } else if (faHeigt - slY >= 70 && slX > 0 && slY > 0) {
      var move_x = slX;
      changeslbell(1,rnum)
      dh = setInterval("changeslbell(1,"+rnum+")", 600);
      $('#slbell').animate({
        left: "-=" + slX
      }, slX * 60, "linear", function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/9a98fdbf2a563c18.gif)"//special
        });
        movetimer = setTimeout("smjmove()", 8000)
      });
    } else if (faHeigt - slY >= 70 && slX == 0 && slY > 0 && rnum == 0) {
      
      changeslbell(2)
      var move_x = slX;
      dh = setInterval("changeslbell(2)", 900, "linear");
      var movey = 200 < slY ? 200 : slY;
      $('#slbell').animate({
        top: "-=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (faHeigt - slY >= 70 && slX == 0 && slY > 0 && rnum == 1) {
      changeslbell(2)
      var move_x = slX;
      dh = setInterval("changeslbell(2)", 900, "linear");
      var movey = 200 < faHeigt - slY ? 200 : faHeigt - slY;
      $('#slbell').animate({
        top: "+=" + movey
      }, movey * 60, function() {
        clearTimeout(dhtimer);
        clearInterval(dh);
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
        });
        movetimer = setTimeout("smjmove()", 5000)
      });
    } else if (slY == 0 && slX == 0) {

      if (rnum == 1) {
        changeslbell(3)
        dh = setInterval("changeslbell(3)", 900);
        var movey = 200 < faWidth - slX ? 200 : faWidth - slX;
        $('#slbell').animate({
          left: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#slbell').css({
            "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      } else {

        changeslbell(2)
        dh = setInterval("changeslbell(2)", 900, "linear");
        var movey = 200 < faHeigt - slY ? 200 : faHeigt - slY;
        $('#slbell').animate({
          top: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#slbell').css({
            "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      }
    } else if (slY == 0 && slX > 0) {


      changeslbell(3)
      dh = setInterval("changeslbell(3)", 900, "linear");

      if (faWidth - slX >= 5 && rnum == 1) {

        var movey = 200 < faWidth - slX ? 200 : faWidth - slX;
        $('#slbell').animate({
          left: "+=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#slbell').css({
            "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      } else {

        var movey = 200 < slX ? 200 : slX;
        $('#slbell').animate({
          left: "-=" + movey
        }, movey * 60, function() {
          clearTimeout(dhtimer);
          clearInterval(dh);
          $('#slbell').css({
            "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
          });
          movetimer = setTimeout("smjmove()", 5000)
        });
      }

    }
  }
}


function jiangluo() {
  $('#slbell').css({
    "background-image": "url(http://i2.tiimg.com/712728/248d3450601bb238.png)"//start01
  });
  var nowY = $('#slbell').position().top;
  var faWidth = $('#slbell').parent().height() - 150;
  var yyy = faWidth - nowY;
  $('#slbell').animate({
    top: "+=" + yyy
  }, yyy * 20, function() {
    $('#slbell').css({
      "background-image": "url(http://i2.tiimg.com/712728/f0251fadc8a69d06.gif)"//start0
    });
    timer = setTimeout(function() {
      $('#slbell').css({
        "background-image": "url(http://i2.tiimg.com/712728/b2702065c179c5ad.gif)"//interact
      });
      timer = setTimeout(function() {
        $('#slbell').css({
          "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
        });
        movetimer = setTimeout("smjmove()", 5000)
      }, 1000)
    }, 700)

  });
}

$.fn.extend({
  dragging: function(data) {
    var $this = $(this);
    var xPage;
    var yPage;
    var X; //
    var Y; //
    var xRand = 0; //
    var yRand = 0; //
    var father = $this.parent();
    var idles = {
      move: 'both',
      randomPosition: true,
      hander: 1
    }
    var opt = $.extend({}, idles, data);
    var movePosition = opt.move;
    var random = opt.randomPosition;

    var hander = opt.hander;

    if (hander == 1) {
      hander = $this;
    } else {
      hander = $this.find(opt.hander);
    }


    father.css({
      "position": "fixed",
      "overflow": "hidden"
    });
    hander.css({
      "cursor": "pointer"
    });

    var faWidth = father.width();
    var faHeight = father.height();
    var thisWidth = $this.width() + parseInt($this.css('padding-left')) + parseInt($this.css('padding-right'));
    var thisHeight = $this.height() + parseInt($this.css('padding-top')) + parseInt($this.css('padding-bottom'));

    var mDown = false; //
    var positionX;
    var positionY;
    var moveX;
    var moveY;

    if (random) {
      $thisRandom();
    }

    function $thisRandom() { 
      $this.each(function(index) {
        var randY = parseInt(Math.random() * (faHeight - thisHeight)); 
        var randX = parseInt(Math.random() * (faWidth - thisWidth)); 
        if (movePosition.toLowerCase() == 'x') {
          $(this).css({
            left: randX
          });
        } else if (movePosition.toLowerCase() == 'y') {
          $(this).css({
            top: randY
          });
        } else if (movePosition.toLowerCase() == 'both') {
          $(this).css({
            top: randY,
            left: randX
          });
        }

      });
    }
    $this.on("touchstart", function(e) {
      if ($this.is(":animated")) {
        $this.stop()
      };
      clearTimeout(timer);
      clearTimeout(dhtimer);
      clearInterval(dh);
      clearTimeout(movetimer);
      father.children().css({
        "zIndex": "0"
      });
      $this.css({
        "zIndex": "99"
      });
      mDown = true;
      X = e.originalEvent.changedTouches[0].pageX;
      Y = e.originalEvent.changedTouches[0].pageY;
      positionX = $this.position().left;
      positionY = $this.position().top;
      return false;
    });
    //!!!!!!!!
    $this.mousedown(function(e) {
      if ($this.is(":animated")) {
        $this.stop()
      };
      clearTimeout(timer);
      clearTimeout(dhtimer);
      clearInterval(dh);
      clearTimeout(movetimer);
      father.children().css({
        "zIndex": "0"
      });
      $this.css({
        "zIndex": "1"
      });
      mDown = true;
      X = e.pageX;
      Y = e.pageY;
      positionX = $this.position().left;
      positionY = $this.position().top;
      return false;
    });
    $this.on("touchend", function(e) {
      var rnum = Math.round(Math.random());
      if(rnum==0){
      $this.css({
        "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
      });
      mDown = false;
      jiangluo();}else{
        $this.css({
          "background-image": "url(http://i2.tiimg.com/712728/1a97c3f22b20c894.gif)"//start
        });
        mDown = false;
        movetimer = setTimeout("smjmove()", 5000)
      }
    });
    $this.mouseup(function(e) {
      var rnum = Math.round(Math.random());
      if(rnum==0){
      $this.css({
        "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
      });
      mDown = false;
      jiangluo();}else{
        $this.css({
          "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
        });
        mDown = false;
        movetimer = setTimeout("smjmove()", 5000)
      }
    });
    $this.on("touchmove", function(e) {
      xPage = e.originalEvent.changedTouches[0].pageX; //--
      moveX = positionX + xPage - X;
      selX = xPage - X;

      yPage = e.originalEvent.changedTouches[0].pageY; //--
      moveY = positionY + yPage - Y;

      function thisXMove() { 
        if (mDown == true) {
          $this.css({
            "left": moveX
          });
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }
        return moveX;
      }

      function thisYMove() { 
        if (mDown == true) {
          $this.css({
            "top": moveY
          });
        } else {
          return;
        }
        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
        return moveY;
      }

      function thisAllMove() { 
        if (mDown == true) {
          $this.css({
            "left": moveX,
            "top": moveY
          });
          if (selX > 0) {
            $this.css({
              "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
            });
          } else {
            $this.css({
              "background-image": "url(http://i2.tiimg.com/712728/79c350a4220be463.gif)"//relax
            });
          }
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }

        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
      }
      if (movePosition.toLowerCase() == "x") {
        thisXMove();
      } else if (movePosition.toLowerCase() == "y") {
        thisYMove();
      } else if (movePosition.toLowerCase() == 'both') {
        thisAllMove();
      }
    });
    $this.mousemove(function(e) {
      xPage = e.pageX; //--
      moveX = positionX + xPage - X;
      selX = xPage - X;
      $("#move1").html(positionX);
      $("#move2").html(xPage - X);
      $("#move3").html(X);

      yPage = e.pageY; //--
      moveY = positionY + yPage - Y;

      function thisXMove() { 
        if (mDown == true) {
          $this.css({
            "left": moveX
          });
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }
        return moveX;
      }

      function thisYMove() { 
        if (mDown == true) {
          $this.css({
            "top": moveY
          });
        } else {
          return;
        }
        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
        return moveY;
      }

      function thisAllMove() {
        if (mDown == true) {
          $this.css({
            "left": moveX,
            "top": moveY
          });
          if (selX > 0) {
            $this.css({
              "background-image": "url(http://i2.tiimg.com/712728/4fabc5ae7f9355d1.png)"//start02
            });
          } else {
            $this.css({
              "background-image": "url(http://i2.tiimg.com/712728/2b66f3743ff862ef.png)"//start04
            });
          }
        } else {
          return;
        }
        if (moveX < 0) {
          $this.css({
            "left": "0"
          });
        }
        if (moveX > (faWidth - thisWidth)) {
          $this.css({
            "left": faWidth - thisWidth
          });
        }

        if (moveY < 0) {
          $this.css({
            "top": "0"
          });
        }
        if (moveY > (faHeight - thisHeight)) {
          $this.css({
            "top": faHeight - thisHeight
          });
        }
      }
      if (movePosition.toLowerCase() == "x") {
        thisXMove();
      } else if (movePosition.toLowerCase() == "y") {
        thisYMove();
      } else if (movePosition.toLowerCase() == 'both') {
        thisAllMove();
      }
    });
  }
});
$(function() {
  $('#slbell').each(function() {
    $(this).dragging({
      move: 'both',
      randomPosition: false
    });
  });

});
