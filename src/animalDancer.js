var AnimalDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // insert differentiating properties
  this.beat = 0
  this.destination = 'right';

  // window.destinationCounters[3]++;
};

AnimalDancer.prototype = Object.create(Dancer.prototype);
AnimalDancer.prototype.constructor = AnimalDancer;
AnimalDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // insert differentiating step behavior here
  if (this.isDancing){
    if (this.beat === 0) {
      this.$node.animate({top: '-=' + 80, left: '-=' + 80});
    } else if (this.beat === 1) {
      this.$node.animate({top: '-=' + 80, left: '+=' + 80});
    } else if (this.beat === 2) {
      this.$node.animate({top: '+=' + 80, left: '+=' + 80});
    } else if (this.beat === 3) {
      this.$node.animate({top: '+=' + 80, left: '-=' + 80});
    }

    this.beat++;
    this.beat = this.beat%4;
  }
};