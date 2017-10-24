$(document).ready(function(){

  new Vivus('drawing', {
    duration: 300,
    type: 'delayed',
    pathTimingFunction: Vivus.EASE_IN,
    animTimingFunction: Vivus.EASE_OUT
  });

  new Vivus('technicals', {
    duration: 100,
    type: 'delayed',
    pathTimingFunction: Vivus.EASE_IN,
    animTimingFunction: Vivus.EASE_OUT
  });

  setTimeout(function(){
     $('.bg').fadeIn();
  }, 2000);

});
