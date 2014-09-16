var BeeDancer = function(top, left, timeBetweenSteps){
  AnimalDancer.call(this, top, left, timeBetweenSteps);
  //insert differentiating properties here
  //this.$node.css("color", "yellow");
  this.$node.addClass('beeGif');
};

BeeDancer.prototype = Object.create(AnimalDancer.prototype);
BeeDancer.prototype.constructor = BeeDancer;
BeeDancer.prototype.step = function(){
  AnimalDancer.prototype.step.call(this);
  // insert differentiating step behavior here
};
