//***MONEY QUIZ**
//ANSWERS
//royal villa, lambo, little palm, avril, sublimotion, hiedsiek, turkish bath

//VARIABLES
//keeps track of how many of the quiz questions have been answered
var questionCount = 0;
//variable to keep track of if correct answer selected
let score = 0;

//result variable
var finalResult = document.getElementById("result");

//hotel suites
var royalVilla = document.getElementById("royalVilla");
var cannes = document.getElementById("cannes");
var plaza = document.getElementById("plaza");
var hilltop = document.getElementById("hilltop");

//cars
var lambo = document.getElementById("lambo");
var rr = document.getElementById("rr");
var maybach = document.getElementById("maybach");
var ferrari = document.getElementById("ferrari");

//venue
var nyc = document.getElementById("nyc");
var france = document.getElementById("france");
var littlePalm = document.getElementById("littlePalm");
var italy = document.getElementById("italy");

//artist
var jason = document.getElementById("jason");
var selena = document.getElementById("selena");
var kendrick = document.getElementById("kendrick");
var avril = document.getElementById("avril");

//dinner
var sublimotion = document.getElementById("sublimotion");
var aragawa = document.getElementById("aragawa");
var masa = document.getElementById("masa");
var plazaAthenee = document.getElementById("plazaAthenee");

//wine
var cl = document.getElementById("1865");
var heid = document.getElementById("1907");
var cb = document.getElementById("1947");
var cm = document.getElementById("1900");

//relax
var diamond = document.getElementById("diamond");
var turkish = document.getElementById("turkish");
var gold = document.getElementById("gold");
var evian = document.getElementById("evian");

//ADD CLICK FUNCTIONALITY
//only correct answers will update the score
royalVilla.addEventListener("click", updateScore);
lambo.addEventListener("click", updateScore);
littlePalm.addEventListener("click", updateScore);
avril.addEventListener("click", updateScore);
sublimotion.addEventListener("click", updateScore);
heid.addEventListener("click", updateScore);
turkish.addEventListener("click", updateScore);

//incorrect answers will just increment question count
cannes.addEventListener("click", noPoints);
plaza.addEventListener("click", noPoints);
hilltop.addEventListener("click", noPoints);
rr.addEventListener("click", noPoints);
maybach.addEventListener("click", noPoints);
ferrari.addEventListener("click", noPoints);
nyc.addEventListener("click", noPoints);
france.addEventListener("click", noPoints);
italy.addEventListener("click", noPoints);
jason.addEventListener("click", noPoints);
selena.addEventListener("click", noPoints);
kendrick.addEventListener("click", noPoints);
aragawa.addEventListener("click", noPoints);
masa.addEventListener("click", noPoints);
plazaAthenee.addEventListener("click", noPoints);
cl.addEventListener("click", noPoints);
cb.addEventListener("click", noPoints);
cm.addEventListener("click", noPoints);
diamond.addEventListener("click", noPoints);
gold.addEventListener("click", noPoints);
evian.addEventListener("click", noPoints);

//update score
function updateScore() {
  //only select buttons are the 'correct' answer, these ones will update the score
  score += 1;
  //increment question count so we know how many have been answered
  questionCount += 1;
  //once all 7 questions are answered, update the result of the quiz
  if (questionCount >= 7) {
    updateResult();
  }
}

//incorrect answer 
function noPoints() {
  //even if no points are scored, still need to increment the question count 
  // and check if all questions are answered
  questionCount += 1;
  //once all 7 questions are answered, update the result of the quiz
  if (questionCount >= 7) {
    updateResult();
  }
}

//calculates the result of the user's quiz
function updateResult() {
  if (score === 7) {
    finalResult.innerHTML = "you win! you spent over $1M!";
  } else {
    finalResult.innerHTML = "you failed to spend a million dollars"
  }
}

//RETAKE BUTTON
//retake quiz function
var retake = document.getElementById("retake");
retake.addEventListener("click", retakeFunction);
function retakeFunction() {
  window.location.assign(
    "https://final-project-pb.glitch.me/money-quiz.html"
  );
}

//BUTTON DISABLE FUNCTIONALITY
//once one option is clicked in a button group, immediately disable it
royalVilla.addEventListener("click", disableQ1);
cannes.addEventListener("click", disableQ1);
plaza.addEventListener("click", disableQ1);
hilltop.addEventListener("click", disableQ1);
function disableQ1() {
  royalVilla.disabled = true;
  cannes.disabled = true;
  plaza.disabled = true;
  hilltop.disabled = true;
}

lambo.addEventListener("click", disableQ2);
rr.addEventListener("click", disableQ2);
maybach.addEventListener("click", disableQ2);
ferrari.addEventListener("click", disableQ2);
function disableQ2() {
  lambo.disabled = true;
  rr.disabled = true;
  maybach.disabled = true;
  ferrari.disabled = true;
}

nyc.addEventListener("click", disableQ3);
france.addEventListener("click", disableQ3);
littlePalm.addEventListener("click", disableQ3);
italy.addEventListener("click", disableQ3);
function disableQ3() {
  nyc.disabled = true;
  france.disabled = true;
  littlePalm.disabled = true;
  italy.disabled = true;
}

jason.addEventListener("click", disableQ4);
selena.addEventListener("click", disableQ4);
kendrick.addEventListener("click", disableQ4);
avril.addEventListener("click", disableQ4);
function disableQ4() {
  jason.disabled = true;
  selena.disabled = true;
  kendrick.disabled = true;
  avril.disabled = true;
}

sublimotion.addEventListener("click", disableQ5);
aragawa.addEventListener("click", disableQ5);
masa.addEventListener("click", disableQ5);
plazaAthenee.addEventListener("click", disableQ5);
function disableQ5() {
  sublimotion.disabled = true;
  aragawa.disabled = true;
  masa.disabled = true;
  plazaAthenee.disabled = true;
}

cl.addEventListener("click", disableQ6);
heid.addEventListener("click", disableQ6);
cb.addEventListener("click", disableQ6);
cm.addEventListener("click", disableQ6);
function disableQ6() {
  cl.disabled = true;
  heid.disabled = true;
  cb.disabled = true;
  cm.disabled = true;
}

diamond.addEventListener("click", disableQ7);
turkish.addEventListener("click", disableQ7);
gold.addEventListener("click", disableQ7);
evian.addEventListener("click", disableQ7);
function disableQ7() {
  diamond.disabled = true;
  turkish.disabled = true;
  gold.disabled = true;
  evian.disabled = true;
}