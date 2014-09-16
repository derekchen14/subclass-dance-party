var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this._wall = 10;

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

Dancer.prototype.goToDestination = function(offset){
  var t;
  var l;
  console.log('destination: ', this.destination);
  if (this.destination === 'bottom'){
    t = $('body').height() - this._wall - 50;
    l = this._wall + offset;
  } else if (this.destination === 'left'){
    t = this._wall + offset;
    l = this._wall;
  } else if (this.destination === 'right'){
    t = this._wall + offset;
    l = $('body').width() - this._wall - 50;
  } else if (this.destination === 'top'){
    t = this._wall;
    l = this._wall + offset;
  }
  this.$node.animate({top: t, left: l}, 1000);
};




