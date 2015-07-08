describe("jitteryDancer", function() {

  var jitteryDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jitteryDancer = new makeJitteryDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(jitteryDancer.$node).to.be.an.instanceof(jQuery);
  });
  it("check that jitteryDancer is an instanceof dancer", function(){
    expect(jitteryDancer).to.be.an.instanceof(makeDancer);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(jitteryDancer.$node, 'toggle');
    jitteryDancer.step();
    expect(jitteryDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(jitteryDancer, "step");
      expect(jitteryDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(jitteryDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(jitteryDancer.step.callCount).to.be.equal(2);
    });
  });
});
