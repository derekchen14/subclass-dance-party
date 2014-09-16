var BottomDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.css("background-color", "green");
  this.$node.animate({top: $('body').height() - (this._wall+20)}, 1000, 'bounce');
  this.destination = 'top';
};

BottomDancer.prototype = Object.create(Dancer.prototype);
BottomDancer.prototype.constructor = BottomDancer;
BottomDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
