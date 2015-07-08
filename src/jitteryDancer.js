var makeJitteryDancer = function(top, left, timeBetweenSteps){

  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  var style = {
    'border': '20px solid blue'
  };

  this.$node.css(style);
};

makeJitteryDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeJitteryDancer.prototype.constructor = makeJitteryDancer;
makeJitteryDancer.prototype.step = function(){

  makeBlinkyDancer.prototype.step.call(this);
  if(!window.leftClicked){
    var styleSettings = {
      left: this.left + (Math.random() * 50)
    };
    this.$node.css(styleSettings);
  }
};