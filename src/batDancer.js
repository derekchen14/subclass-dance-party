var BatDancer = function(top, left, timeBetweenSteps){
  AnimalDancer.call(this, top, left, timeBetweenSteps);
  // insert differentiating properties here
  //this.$node.css("background-color", "#633721");
  this.$node.addClass('batGif');
};

BatDancer.prototype = Object.create(AnimalDancer.prototype);
BatDancer.prototype.constructor = BatDancer;
BatDancer.prototype.step = function(){
  AnimalDancer.prototype.step.call(this);
  // insert differentiating step behavior here
};