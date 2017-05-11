// Click the GO! button
$('#go').click(function() {

  //build a function that checks if a car has won the race
  function checkIfComplete() {

    if( isComplete == false ) {
      isComplete = true;
    } else {
      place = 'second';
    }

  }

  // get the width of the cars (#car1 because both cars are similar)
  var carWidth = $('#car1').width();

  // get the width of the race track (same as width of browser) minus the width of the car (so the car stops at the front of the car and not at the back)
  var raceTrackWidth = $(window).width() - carWidth;

  // generate a random number between 1 and 5000 miliseconds (how long a car can run for)
  var raceTime1 = Math.floor( (Math.random() * 10000) + 1 );
  var raceTime2 = Math.floor( (Math.random() * 10000) + 1 ); //copied so both cars generate random numbers

  // set a flag variable to FALSE by default. checks if a car has finished a race
  var isComplete = false; // nobody has won the race yet

  // set a flag variable to FIRST by default. checks if a car has come in first or second place. by default one car will come first
  var place = 'first';

  // animate car 1
  $('#car1').animate({

    //move the car the width of the racetrack
    left: raceTrackWidth

  }, raceTime1, function() {

    //animation is complete

    //run a function that checks if a car has won the race
    checkIfComplete();

    // give some text feedback in the race info box
    $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );

  });

  // animate car 2
  $('#car2').animate({

    //move the car the width of the racetrack
    left: raceTrackWidth

  }, raceTime2, function() {

    //animation is complete

    //run a function that checks if a car has won the race
    checkIfComplete();

    // give some text feedback in the race info box
    $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );

  });

  // reset the race
  $('#reset').click(function() {
    $('.car').css('left','0');
    $('.raceInfo span').text('');
  });







});
