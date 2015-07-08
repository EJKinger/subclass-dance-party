
var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.left =left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
};
makeDancer.prototype.constructor = makeDancer;

makeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
makeDancer.prototype.setPosition = function(){
  var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
};

