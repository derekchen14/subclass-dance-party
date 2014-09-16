var BeeDancer = function(top, left, timeBetweenSteps){
  AnimalDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('beeGif');
};

BeeDancer.prototype = Object.create(AnimalDancer.prototype);
BeeDancer.prototype.constructor = BeeDancer;
BeeDancer.prototype.step = function(){
  AnimalDancer.prototype.step.call(this);
};
