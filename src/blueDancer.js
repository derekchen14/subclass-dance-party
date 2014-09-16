var BlueDancer = function(top, left, timeBetweenSteps){
  ColorDancer.call(this, top, left, timeBetweenSteps);
  //insert differentiating properties here
  this.$node.css("background-color", "blue");
};

BlueDancer.prototype = Object.create(ColorDancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;
BlueDancer.prototype.step = function(){
  ColorDancer.prototype.step.call(this);
  // insert differentiating step behavior here
};
