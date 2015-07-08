$(document).ready(function(){
  window.dancers = [];
  window.ghosts = [];
  window.leftClicked = false;
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position
    if(dancerMakerFunctionName === 'makeBlinkyDancer'){
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
    }else if( dancerMakerFunctionName === 'makeJitteryDancer' ){
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        100
      ); 
      window.dancers.push(dancer);
    }else if(dancerMakerFunctionName === 'makeBallerinaDancer'){
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        0 //<-- 0 for constant spinning
      ); 
      window.dancers.push(dancer);
    }else{
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        25 
      ); 
      window.ghosts.push(dancer); //holds onto ghosts
    }
    

    $('body').append(dancer.$node);

    

  });

  var currentDancer = $("body").find(".dancer");
  $("body").on("mouseover",".dancer", function(event){
    var position = $(this).position();
    var styleSettings = {
      top:  position.top + 100
    };
    $(this).css(styleSettings);
  });
 

  $(".toTheLeft").on('click', function(){
    var allDancers = dancers.concat(ghosts);
    window.leftClicked = true;
    for(var index = 0; index < allDancers.length; index++){
      allDancers[index].$node.animate({'left':'0'});
    }
  });
});