describe("ballerinaDancer", function() {

  var ballerinaDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ballerinaDancer = new makeBallerinaDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(ballerinaDancer.$node).to.be.an.instanceof(jQuery);
  });
  it("check that ballerinaDancer is an instanceof dancer", function(){
    expect(ballerinaDancer).to.be.an.instanceof(makeDancer);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(ballerinaDancer, "step");
      expect(ballerinaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(ballerinaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ballerinaDancer.step.callCount).to.be.equal(2);
    });
  });
});
