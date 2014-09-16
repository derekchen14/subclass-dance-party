var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // inherits the properties from the parent class
  Dancer.call(this, top, left, timeBetweenSteps);
  this.destination = 'left';
};

/* duplicates the parent class's prototype through pseudoclassical
This doesn't perform our instantiation, rather it simply supports
our pseudo-classical instantiaion process */
BlinkyDancer.prototype = Object.create(Dancer.prototype);
// allows instanceOf to work
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('hidden');
};

