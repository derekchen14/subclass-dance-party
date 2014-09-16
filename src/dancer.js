var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this._wall = 10;
  this.isDancing = true
  this.$node = $('<span class="dancer"></span>');
  this.step();  // sets the beat of the dancer
  this.setPosition(top, left);  // randomly positions the dancer

  window.dancers.push(this);
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.remove = function(){
  this.$node.remove();
}





