$(window).load(function(){
    var win = $(window);
    var topbar = $('.header');
    var botbar = $('.nav');
    var toplimit = topbar.offset().top;
    var botlimit = botbar.offset().top - topbar.outerHeight();
    var sticky = function(){ 
      win.scrollTop() > toplimit
      ? topbar.addClass('sticky')
      : topbar.removeClass('sticky');
      win.scrollTop() > botlimit 
      ? botbar.addClass('sticky')
      : botbar.removeClass('sticky');
    };
    win.scroll(sticky);

    var links = $('.navlink');
    var anchors = links.map(function(){
      var anchorname = $(this).attr("href").substr(1); 
      var a = $("a[name='" + anchorname + "']");
      return a.offset().top;
    });
    var active;
    win.scroll(function(){
      var newactive;
      for (var i=anchors.length-1; i>=0; i--) {
        if (win.scrollTop() > anchors[i] - 150) {
          newactive = i;
          break;
        }
      }
      if (newactive != active) {
        links.removeClass("active");
        if (newactive != undefined)
          $(links[newactive]).addClass("active");
      }
      active = newactive;
    });
});
