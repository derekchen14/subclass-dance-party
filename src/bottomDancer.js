var BottomDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.css("background-color", "green");
  this.$node.animate({top: $('body').height() - (this._wall+20)}, 1000, 'bounce');
  this.destination = 'top';
  this.explosion = {url: 'url(images/bottomExplosion.gif?id=' + Math.floor(Math.random() * 1000)+ ')',
                    width: '74px',
                    height: '82px',
                    duration: 2700};
};

BottomDancer.prototype = Object.create(Dancer.prototype);
BottomDancer.prototype.constructor = BottomDancer;
BottomDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};


BottomDancer.prototype.explode = function(){
  this.$node.css({top: $('body').height() - (this._wall+102)});
  Dancer.prototype.explode.call(this);

}
