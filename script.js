$(function() {
  $(window).scroll(function() {
    $(".nav_box1").each(function() { /*セレクタに対して、繰り返し{}内の処理を実行*/
      var scroll = $(window).scrollTop(); /*スクロールした時の位置を取得できるメソッド */
      var blockPosition = $(this).offset().top; /*ページトップから指定要素の縦の位置のみを取得 */
      var windowHeihgt = $(window).height(); /*ブラウザの表示領域の高さを取得するメソッド */   
      if (scroll > 1100) { /*スクロール位置 > 対象となる要素の縦位置 – ブラウザの表示領域の高さ */
        $(this).addClass("fadeIn");

       } else {

        $(this).removeClass("fadeIn");
            
       }
   
    });
  });
});




$(function() {
  $(window).scroll(function() {
    $(".onlenestore").each(function() { /*セレクタに対して、繰り返し{}内の処理を実行*/
      var scroll = $(window).scrollTop(); /*スクロールした時の位置を取得できるメソッド */
      var blockPosition = $(this).offset().top; /*指定要素の縦の位置のみを取得 */
      var windowHeihgt = $(window).height(); /*ブラウザの表示領域の高さを取得するメソッド */
      if (scroll > 1100) { /*スクロール位置 > 対象となる要素の縦位置 – ブラウザの表示領域の高さ */

        $(this).addClass("fadeIn");
          }
          else {
            $(this).removeClass("fadeIn");
          }
    });
  });
});

$(function() {
  $(window).scroll(function() {
    $(".an_contants").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 200) {
        $(this).addClass("animation");
      }
      else {
        $(this).removeClass("animation");
      }
});
});
});

$(function() {
  $(window).scroll(function() {
    $(".an_contants1").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 300) {
        $(this).addClass("animation");
      }
      else {
        $(this).removeClass("animation");
      }
});
});
});

$(function() {
  $(window).scroll(function() {
    $(".an_contants2").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 200) {
        $(this).addClass("animation");
      }
      else {
        $(this).removeClass("animation");
      }
});
});
});


$(function() {
  $(window).scroll(function() {
    $(".an_contants3").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 200) {
        $(this).addClass("animation");
      }
      else {
        $(this).removeClass("animation");
      }
});
});
});

$(function() {
  $(window).scroll(function() {
    $(".an_contants4").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll >= windowHeihgt - blockPosition - 200) {
        $(this).addClass("animation");
      }
      else {
        $(this).removeClass("animation");
      }
});
});
});

$(function() {
  $(window).scroll(function() {
    $(".an_contants480").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 200) {
        $(this).addClass("animation");
      }
      else {
        $(this).removeClass("animation");
      }
});
});
});



$(function() {
  $(window).scroll(function() {
    $(".an_contants").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt - 200) {
        $(this).addClass("none_animation");
      }
      else {
        $(this).removeClass("none_animation");
      }
});
});
});

$(function() {
  $(window).scroll(function() {
    $(".an_contants1").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt - 300) {
        $(this).addClass("none_animation");
      }
      else {
        $(this).removeClass("none_animation");
      }
});
});
});


$(function() {
  $(window).scroll(function() {
    $(".an_contants2").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt - 200) {
        $(this).addClass("none_animation");
      }
      else {
        $(this).removeClass("none_animation");
      }
});
});
});

$(function() {
  $(window).scroll(function() {
    $(".an_contants3").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt - 60) {
        $(this).addClass("none_animation");
      }
      else {
        $(this).removeClass("none_animation");
      }
});
});
});



$(function() {
  $(window).scroll(function() {
    $(".an_contants480").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt - 200) {
        $(this).addClass("none_animation");
      }
      else {
        $(this).removeClass("none_animation");
      }
});
});
});


