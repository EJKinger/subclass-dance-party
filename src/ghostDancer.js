var makeGhostDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  var style = {
    'height': '54px',
    'width': '60px',
    'border': 'none',
    'background-image': 'url("src/ghost.png")'
  };

  this.$node.css(style);
};

makeGhostDancer.prototype = Object.create(makeDancer.prototype);
makeGhostDancer.prototype.constructor = makeGhostDancer;
makeGhostDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  var styleSettings = {};
  var left = this.left;
  var node = this.$node;
  var death = new Audio('src/death.wav');
  // var ghostLogic = {
  //   0: function(){
  //     if (left > 40){
  //       styleSettings = {
  //       left: left--
  //       };
  //       node.css(styleSettings);
  //     }
  //   },
  //   1: function(){
  //     if(left < $(window).width()){
  //       styleSettings = {
  //       left: left++
  //       };
  //       node.css(styleSettings);
  //     }
  //   }
  // };
  //var pick = Math.floor(Math.random() * 2);
  //setInterval(ghostLogic[pick](), 300);
  if (!leftClicked){

    if (this.left > 1){
           styleSettings = {
           left: this.left--
        };
      this.$node.css(styleSettings);
    }

    for(var dancerIndex = 0; dancerIndex < window.dancers.length ; dancerIndex++){
       var x = this.left - window.dancers[dancerIndex].left;
        var y = this.top - window.dancers[dancerIndex].top;
        if(Math.hypot(x,y) < 60){
          //death.play();
          (window.dancers[dancerIndex].$node).css({'display': 'none', 'border':'none',
            'border-radius':'20px'});
          
        }
    }
  }
// $(dancers[0].$node).css({'display': 'none'});
};



  

  // else if (this.left ===  0){
  //   if (this.left < $(window).width()){
  //   var styleSettings = {
  //       left: this.left++
  //     };
  //   }
  // }
   
