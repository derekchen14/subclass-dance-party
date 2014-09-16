var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this._wall = 10;
  this.isDancing = true
  this.$node = $('<span class="dancer"></span>');
  this.explosion = {url:'url(images/explosion.gif?id=' + Math.floor(Math.random() * 1000)+ ')',
                    width: '71px',
                    height: '100px',
                    duration: 710};
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

Dancer.prototype.explode = function(silent){
  this.isDancing = false;
  this.$node.stop(true);
  this.$node.css('width', this.explosion.width);
  this.$node.css('height', this.explosion.height);
  this.$node.css('background-color', 'transparent');
  this.$node.css('background-image', this.explosion.url);

  setTimeout(function(){
    //this.$node.css('background-image', 'none');
    this.$node.remove();
  }.bind(this), this.explosion.duration);
}



