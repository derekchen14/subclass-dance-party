$(document).ready(function(){
  window.dancers = [];

  $.extend(jQuery.easing, {
    bounce: function (x, t, b, c, d) {
      if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
      } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
      } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
      } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
      }
    }
  });

  $(".addDancerButton").on("click", function(event){
    var dancerFuncName = $(this).data("constructor-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerFuncName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').click(function(){
    for (var i = 0; i < window.dancers.length; i++){
     var dancer = window.dancers[i];
     dancer.goToDestination(i * 50);
    }
  });
});

