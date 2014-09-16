var BatDancer = function(top, left, timeBetweenSteps){
  AnimalDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('batGif');
};

BatDancer.prototype = Object.create(AnimalDancer.prototype);
BatDancer.prototype.constructor = BatDancer;
BatDancer.prototype.step = function(){
  AnimalDancer.prototype.step.call(this);
};