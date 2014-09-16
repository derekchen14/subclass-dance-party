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
    //dancer.$node.css('background-image', dancer.explosion );
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').click(function(){
    var counters = [0,0,0,0];  //top left bottom right
    for (var i = 0; i < window.dancers.length; i++){
      var dancer = window.dancers[i];
      var t;
      var l;
      dancer.isDancing = false;
      dancer.$node.stop(true);
      dancer.oldPosition = dancer.$node.position();
      if (dancer.destination === 'bottom'){
        t = $('body').height() - dancer._wall - 50;
        l = dancer._wall + 50 * counters[2];
        counters[2]++;
      } else if (dancer.destination === 'left'){
        t = dancer._wall + 50 + 50 * counters[1];
        l = dancer._wall;
        counters[1]++;
      } else if (dancer.destination === 'right'){
        t = dancer._wall + 50 + 50 * counters[3];
        l = $('body').width() - dancer._wall - 50;
        counters[3]++;
      } else if (dancer.destination === 'top'){
        t = dancer._wall + 50;
        l = dancer._wall+140 + 50 * counters[0];
        counters[0]++;
      }
     dancer.$node.animate({top:t, left:l}, 1000);
    }
  });

  $('.startDancing').click(function(){
    for (var i = 0; i < window.dancers.length; i++){
      var dancer = window.dancers[i];
      dancer.$node.animate(dancer.oldPosition, 1000);
      dancer.isDancing = true;
    };
  });

  setInterval(function(){
    var toRemove = []
    for (var i = 0; i < window.dancers.length; i++){
      for (var j = 0; j < window.dancers.length; j++){
        if (i !== j){
          var dancerA = window.dancers[i];
          var dancerB = window.dancers[j];


          var aPos = transformPosition(dancerA.$node.position());
          var bPos = transformPosition(dancerB.$node.position());
          var topDistance = Math.abs(aPos.top - bPos.top);
          var leftDistance = Math.abs(aPos.left - bPos.left);
          var dist = Math.sqrt(Math.pow(topDistance,2) + Math.pow(leftDistance, 2));

          if (dist <= 40){
            console.log('collision!');
            toRemove.push(i);
          }
        }
      }
    }
    toRemove.sort().reverse();
    for (i = 0; i < toRemove.length; i++){
      var item = window.dancers[toRemove[i]];
      if (item !== undefined){
        item.explode();
        window.dancers.splice(toRemove[i],1);
      }
    }
  }, 100);

  var transformPosition = function(position){
    pos = {};
    pos.top = parseInt(position.top)
    pos.left = parseInt(position.left)
    return pos;
  }

});

