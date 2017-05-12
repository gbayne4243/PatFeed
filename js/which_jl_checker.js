function checkIt() {
  // Initialize scores
  var  superman = 0;
  var  batman = 0;
  var  flash = 0;
  var  wonder_woman = 0;
  var  aquaman = 0;
  var  cyborg = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value.includes('superman')) {
        superman++;
      }
      if (e.value.includes('batman')) {
        batman++;
      }
      if (e.value.includes('flash')) {
        flash++;
      }
      if (e.value.includes('wonder_woman')) {
        wonder_woman++;
      }
      if (e.value.includes('aquaman')) {
        aquaman++;
      }
      if (e.value.includes('cyborg')) {
        cyborg++;
      }
    }
  }

  // Determine result
  var counts = "Superman: " + superman + ", " +
               "Batman: " + batman  + ", " +
               "Flash: " + flash + ", " +
               "Wonder Woman: " + wonder_woman + ", " +
               "Aquaman: " + aquaman + ", " +
               "Cyborg: " + cyborg;

  // What is the highest value?
  var max = Math.max(superman, batman, flash, wonder_woman, aquaman, cyborg);

  // Form a message
  var message;

  if (max == superman) {
    title = "We Can Guess Which Justice League Member You Are By Answering These Questions.";
    message = "You got: Superman.";
    text = "Can you bring me a Moon rock?";
    resultimage = "<img src='img2/superman.png'>"
  }
  else if (max == batman) {
    title = "We Can Guess Which Justice League Member You Are By Answering These Questions.";
    message = "You got: Batman.";
    text = "Do you have some sort of bat powers or are you just a rich guy in a suit?";
    resultimage = "<img src='img2/batman.jpg'>"
  }
  else if (max == flash) {
    title = "We Can Guess Which Justice League Member You Are By Answering These Questions.";
    message = "You got: The Flash.";
    text = "Can you go get me some chinese food from China?";
    resultimage = "<img src='img2/flash.jpg'>"
  }
  else if (max == wonder_woman) {
    title = "We Can Guess Which Justice League Member You Are By Answering These Questions.";
    message = "You got: Wonder Woman.";
    text = "So hows babysitting all of those boys?";
    resultimage = "<img src='img2/wonder_woman.jpg'>"
  }
  else if (max == aquaman) {
    title = "We Can Guess Which Justice League Member You Are By Answering These Questions.";
    message = "You got: Aquaman.";
    text = "Is riding with the dolphins fun?";
    resultimage = "<img src='img2/aquaman.jpg'>"
  }
  else if (max == cyborg) {
    title = "We Can Guess Which Justice League Member You Are By Answering These Questions.";
    message = "You got: Cyborg.";
    text = "So do you have like a personal hotspot or something?";
    resultimage = "<img src='img2/cyborg.jpg'>"
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = message;
  document.getElementById('result-text').innerHTML = text;
  document.getElementById('result-image').innerHTML = resultimage;
}
