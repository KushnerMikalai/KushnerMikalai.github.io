(function(a){a.fn.animated=function(c,b){a(this).css("opacity","0").addClass("animated").waypoint(function(d){if(d==="down"){a(this).removeClass(b).addClass(c).css("opacity","1")}},{offset:"110%"})}})(jQuery);
