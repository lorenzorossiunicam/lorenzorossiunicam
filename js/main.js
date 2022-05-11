$(document).ready(function($) {
  $("#main-container").load("/html/bio.html");

  $(".nav-link").click(function() {
    $('.nav-link').each(function () {
      $(this).removeClass("nav-link-selected");
      $(this).next().animate({width: '0px'},150);
    });
      $(this).addClass("nav-link-selected");
      $(this).next().animate({width: '100%'},150);
  })
});

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 150) {
        $(".return-top").show();
    }
    else {
        $(".return-top").hide();
    }
});

function returnTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function navTo(content) {
  $('#main-container').load(content);
}
