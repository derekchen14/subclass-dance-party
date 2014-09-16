var AnimalDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.beat = 0
  this.destination = 'right';
};

AnimalDancer.prototype = Object.create(Dancer.prototype);
AnimalDancer.prototype.constructor = AnimalDancer;
AnimalDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
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