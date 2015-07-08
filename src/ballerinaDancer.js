var makeBallerinaDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.rotation = 0;
  var style = {
    'border': 'none',
    'border-radius': '0%',
    'width': '40px',
    'height' : '40px',
    'background' : 'pink'
  };
  this.$node.css(style);
};

makeBallerinaDancer.prototype = Object.create(makeDancer.prototype);
makeBallerinaDancer.prototype.constructor = makeBallerinaDancer;
makeBallerinaDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  var styleSettings = {
    '-webkit-transform': 'rotate(' + this.rotation + 'deg)'
  };
  this.$node.css(styleSettings); 
  this.rotation++;
};