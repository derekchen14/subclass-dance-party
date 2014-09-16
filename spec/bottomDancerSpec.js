describe("bottomDancer", function() {

  var bottomDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bottomDancer = new BottomDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(bottomDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(bottomDancer.$node, 'toggle');
    bottomDancer.step();
    expect(bottomDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bottomDancer, "step");
      expect(bottomDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bottomDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bottomDancer.step.callCount).to.be.equal(2);
    });
  });
});
