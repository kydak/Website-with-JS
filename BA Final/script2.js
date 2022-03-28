function myFunction() {
  alert('Hello')
  var name = prompt('What is your name?')
  while (name == null || name == '')
    name = prompt('Please enter you name')
  // forces the user to insert a name
  
  alert('Good luck ' + name)
  var questions = [" The art elements and design tools that are working together\n1. Unity \n2. Evaluation\n3. Heuristics", "Choose an example of emphasis\n1. Use of many shapes \n2. Very dark colors \n3. Use of bright colors", "What is the difference between any art elements high contrast(silk) low contrasts (paper vs table top)\n1.Contrasts \n2. Balance \n3.Emphasis","The principle of design dealing with the creation of action\n1. Pattern \n2. Movement \n3. Unity", "Total visual effect in a composition achieved by the careful blending of the elements of art and the principles of design\n1. Unity \n2. Pattern \n3. Balence ", "The path of a moving point\n1. Line \n2. Shape \n3. Texture", "3-dimensional. They occupy space, but can also give the illusion that they occupy the space in the case of 2-dimensional art\n1. Tone \n2. Form \n3. Texture"];

  var answers = ["1", "3", "3", "2", "1", "1", "2"];
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    var guess = prompt(questions[i]);
    while(guess  <1 || guess  >3){
       guess = prompt('Please enter a valid number! ' + questions[i]);
    }
    if (guess == answers[i]) { //if the answer is correct, this will be displayed and score will go up by 1
    alert('Correct');
    score++;
  } else { //if the answer is incorrect, this will be displayed
    alert('Wrong');
  }
  }
    // restates users name and the score they got
   alert('Well done ' + name + ', ' + 'You scored ' + score + ' out of 7 ')
}
