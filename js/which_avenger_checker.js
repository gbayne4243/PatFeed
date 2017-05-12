function checkIt() {

  // Initialize scores
  var  captain_america = 0;
  var  iron_man = 0;
  var  thor = 0;
  var  hulk = 0;
  var  hawkeye = 0;
  var  black_widow = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value.includes('captain_america')) {
        captain_america++;
      }
      if (e.value.includes('iron_man')) {
        iron_man++;
      }
      if (e.value.includes('thor')) {
        thor++;
      }
      if (e.value.includes('hulk')) {
        hulk++;
      }
      if (e.value.includes('hawkeye')) {
        hawkeye++;
      }
      if (e.value.includes('black_widow')) {
        black_widow++;
      }
    }
  }

  // Determine result
  var counts = "Captain America: " + captain_america + ", " +
               "Iron Man: " + iron_man  + ", " +
               "Thor: " + thor + ", " +
               "Hulk: " + hulk + ", " +
               "Hawkeye: " + hawkeye + ", " +
               "Black Widow: " + black_widow;

  // What is the highest value?
  var max = Math.max(captain_america, iron_man, thor, hulk, hawkeye, black_widow);

  // Form a message
  var message;

  if (max == captain_america) {
    title = "We Can Guess Which Avenger You Are By Answering These Questions.";
    message = "You got: Captain America.";
    text = "You may be 97 but you still got some cool moves.";
    resultimage = "<img src='img/other/captain_america.jpg'>"
  }
  else if (max == iron_man) {
    title = "We Can Guess Which Avenger You Are By Answering These Questions.";
    message = "You got: Iron Man.";
    text = "Just because you don't have super powers does't mean your not super rich.";
    resultimage = "<img src='img/other/iron_man.jpg'>"
  }
  else if (max == thor) {
    title = "We Can Guess Which Avenger You Are By Answering These Questions.";
    message = "You got: Thor.";
    text = "Nice hammer but why are you wearing your mother's drapes?";
    resultimage = "<img src='img/other/thor.jpg'>"
  }
  else if (max == hulk) {
    title = "We Can Guess Which Avenger You Are By Answering These Questions.";
    message = "You got: The Hulk.";
    text = "Congrats you big, angry vegatable with pants.";
    resultimage = "<img src='img/other/hulk.jpg'>"
  }
  else if (max == hawkeye) {
    title = "We Can Guess Which Avenger You Are By Answering These Questions.";
    message = "You got: Hawkeye.";
    text = "So do you have like hawk powers or something or is it just shooting the pointy sticks.";
    resultimage = "<img src='img/other/hawkeye.jpg'>"
  }
  else if (max == black_widow) {
    title = "We Can Guess Which Avenger You Are By Answering These Questions.";
    message = "You got: Black Widow.";
    text = "Cool you got the only girl on the team so I guess you must be good.";
    resultimage = "<img src='img/other/black_widow.jpg'>"
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = message;
  document.getElementById('result-text').innerHTML = text;
  document.getElementById('result-image').innerHTML = resultimage;
}
