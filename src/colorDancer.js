var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //insert differentiating properties here
  this.destination = 'bottom'
  this.$node.addClass("colorDancer");
  this.$node.hover(function(){
    $(this).css("background-color", "#F2E055");
    $(this).css("border-radius", "0px")
  }, function() {
    $(this).css("background-color", "blue");
    $(this).css("border-radius", "25px")
  })

  // window.destinationCounters[2]++
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass("expand");
  var position = this.$node.position();
  if (this.$node.hasClass("expand")) {
    this.setPosition(position.top-12.5, position.left-12.5)
  } else {
    this.setPosition(position.top+12.5, position.left+12.5)
  }
};