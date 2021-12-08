//***PERSONALITY QUIZ**
//ANSWERS
//aries: spicy salami, mint, red hots, red
//taurus: prosciutto & arugula, green tea, godiva chocolate, green
//gemini: hawaiian, strawberry, twix, yellow
//cancer: four cheese, chocolate chip, chocolate truffles, white
//leo: supreme, orange, jolly ranchers, gold
//virgo: margherita, mango, toblerone, brown
//libra: mushroom & truffle, vanilla, reese's, pink
//scorpio: meat lovers, dark chocolate, cherry cordials, black
//sagittarius: bbq chicken, peanut butter, twizzlers, purple
//capricorn: pepperoni, cookie dough, dark chocolate, gray
//aquarius: veggie, lemon, nerds, blue
//pisces: burrata & basil, neapolitan, gummy bears, orange

//VARIABLES
//keeps track of how many of the quiz questions have been answered
var questionCount = 0;
//dictionary to hold each score
var scoreDict = {
  aries: 0,
  taurus: 0,
  gemini: 0,
  cancer: 0,
  leo: 0,
  virgo: 0,
  libra: 0,
  scorpio: 0,
  sagittarius: 0,
  capricorn: 0,
  aquarius: 0,
  pisces: 0
};

//result variable
var finalResult = document.getElementById("result");

//What is your favorite pizza topping?
var bbq = document.getElementById("bbq");
var bnb = document.getElementById("bnb");
var fourcheese = document.getElementById("fourcheese");
var hawaiian = document.getElementById("hawaiian");
var margherita = document.getElementById("margherita");
var meatlovers = document.getElementById("meatlovers");
var mushroom = document.getElementById("mushroom");
var pepperoni = document.getElementById("pepperoni");
var prosciutto = document.getElementById("prosciutto");
var spicysalami = document.getElementById("spicysalami");
var supreme = document.getElementById("supreme");
var veggie = document.getElementById("veggie");

//What is your favorite ice cream flavor?
var cd = document.getElementById("cd");
var chocolatechip = document.getElementById("chocolatechip");
var darkchocolate = document.getElementById("darkchocolate");
var greenTea = document.getElementById("greenTea");
var lemon = document.getElementById("lemon");
var mango = document.getElementById("mango");
var mint = document.getElementById("mint");
var neapolitan = document.getElementById("neapolitan");
var orange = document.getElementById("orange");
var pb = document.getElementById("pb");
var strawberry = document.getElementById("strawberry");
var vanilla = document.getElementById("vanilla");

//What is your favorite candy?
var cherry = document.getElementById("cherry");
var truffles = document.getElementById("truffles");
var darkchocolate2 = document.getElementById("darkchocolate2");
var godiva = document.getElementById("godiva");
var gummybears = document.getElementById("gummybears");
var jollyranchers = document.getElementById("jollyranchers");
var nerds = document.getElementById("nerds");
var reeses = document.getElementById("reeses");
var redhots = document.getElementById("redhots");
var toblerone = document.getElementById("toblerone");
var twix = document.getElementById("twix");
var twizzlers = document.getElementById("twizzlers");

//What is your favorite color?
var black = document.getElementById("black");
var blue = document.getElementById("blue");
var brown = document.getElementById("brown");
var gold = document.getElementById("gold");
var gray = document.getElementById("gray");
var green = document.getElementById("green");
var orange2 = document.getElementById("orange2");
var pink = document.getElementById("pink");
var purple = document.getElementById("purple");
var red = document.getElementById("red");
var white = document.getElementById("white");
var yellow = document.getElementById("yellow");

//ADD CLICK FUNCTIONALITY
//each button answer is associated with a specific zodiac sign, so the score for the zodiac in the dictionary will be incremented
//question 1 button functions
bbq.addEventListener("click", updateSagittarius);
bnb.addEventListener("click", updatePisces);
fourcheese.addEventListener("click", updateCancer);
hawaiian.addEventListener("click", updateGemini);
margherita.addEventListener("click", updateVirgo);
meatlovers.addEventListener("click", updateScorpio);
mushroom.addEventListener("click", updateLibra);
pepperoni.addEventListener("click", updateCapricorn);
prosciutto.addEventListener("click", updateTaurus);
spicysalami.addEventListener("click", updateAries);
supreme.addEventListener("click", updateLeo);
veggie.addEventListener("click", updateAquarius);

//question 2 button functions
cd.addEventListener("click", updateCapricorn);
chocolatechip.addEventListener("click", updateCancer);
darkchocolate.addEventListener("click", updateScorpio);
greenTea.addEventListener("click", updateTaurus);
lemon.addEventListener("click", updateAquarius);
mango.addEventListener("click", updateVirgo);
mint.addEventListener("click", updateAries);
neapolitan.addEventListener("click", updatePisces);
orange.addEventListener("click", updateLeo);
pb.addEventListener("click", updateSagittarius);
strawberry.addEventListener("click", updateGemini);
vanilla.addEventListener("click", updateLibra);

//question 3 button functions
cherry.addEventListener("click", updateScorpio);
truffles.addEventListener("click", updateCancer);
darkchocolate2.addEventListener("click", updateCapricorn);
godiva.addEventListener("click", updateTaurus);
gummybears.addEventListener("click", updatePisces);
jollyranchers.addEventListener("click", updateLeo);
nerds.addEventListener("click", updateAquarius);
reeses.addEventListener("click", updateLibra);
redhots.addEventListener("click", updateAries);
toblerone.addEventListener("click", updateVirgo);
twix.addEventListener("click", updateGemini);
twizzlers.addEventListener("click", updateSagittarius);

//question 4 button functions
black.addEventListener("click", updateScorpio);
blue.addEventListener("click", updateAquarius);
brown.addEventListener("click", updateVirgo);
gold.addEventListener("click", updateLeo);
gray.addEventListener("click", updateCapricorn);
green.addEventListener("click", updateTaurus);
orange2.addEventListener("click", updatePisces);
pink.addEventListener("click", updateLibra);
purple.addEventListener("click", updateSagittarius);
red.addEventListener("click", updateAries);
white.addEventListener("click", updateCancer);
yellow.addEventListener("click", updateGemini);

//make event listeners for each zodiac to update their scores
function updateAries() {
  scoreDict["aries"] += 1;
  //increment the question count as well so we know when they finish taking the quiz and can display result
  questionCount += 1;
  //once all 5 questions are answered, update the result of the quiz
  if (questionCount >= 4) {
    updateResult();
  }
}
function updateTaurus() {
  scoreDict["taurus"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateGemini() {
  scoreDict["gemini"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateCancer() {
  scoreDict["cancer"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateLeo() {
  scoreDict["leo"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateVirgo() {
  scoreDict["virgo"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateLibra() {
  scoreDict["gemini"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateScorpio() {
  scoreDict["scorpio"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateSagittarius() {
  scoreDict["sagittarius"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateCapricorn() {
  scoreDict["capricorn"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updateAquarius() {
  scoreDict["aquarius"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}
function updatePisces() {
  scoreDict["pisces"] += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

//calculates the result of the user's quiz
function updateResult() {
  //create a list of the zodiac signs
  var signs = Object.keys(scoreDict);
  //create a parallel list of their scores
  var scores = Object.values(scoreDict);
  //calculate the max score so we know which sign(s) scored the highest
  var max = Math.max(...scores);
  //initialize the result
  var result = [];

  //for each of the signs...
  for (var i = 0; i < signs.length; i++) {
    var sign = signs[i];
    //if the score associated is equal to the max, add to the result list
    if (scoreDict[sign] === max) {
      result.push(sign);
    }
  }

  //display the results, if there's more than one, display it as a comma-separated list
  if (result.length > 1) {
    finalResult.innerHTML = result.join(", ");
  } else {
    finalResult.innerHTML = result[0];
  }
}

//RETAKE BUTTON
//retake quiz function
var retake = document.getElementById("retake");
retake.addEventListener("click", retakeFunction);
function retakeFunction() {
  window.location.assign(
    "https://final-project-pb.glitch.me/personality-quiz.html"
  );
}

//BUTTON DISABLE FUNCTIONALITY
//once one option is clicked in a button group, immediately disable it
bbq.addEventListener("click", disableQ1);
bnb.addEventListener("click", disableQ1);
fourcheese.addEventListener("click", disableQ1);
hawaiian.addEventListener("click", disableQ1);
margherita.addEventListener("click", disableQ1);
meatlovers.addEventListener("click", disableQ1);
mushroom.addEventListener("click", disableQ1);
pepperoni.addEventListener("click", disableQ1);
prosciutto.addEventListener("click", disableQ1);
spicysalami.addEventListener("click", disableQ1);
supreme.addEventListener("click", disableQ1);
veggie.addEventListener("click", disableQ1);
function disableQ1() {
  bbq.disabled = true;
  bnb.disabled = true;
  fourcheese.disabled = true;
  hawaiian.disabled = true;
  margherita.disabled = true;
  meatlovers.disabled = true;
  mushroom.disabled = true;
  pepperoni.disabled = true;
  prosciutto.disabled = true;
  spicysalami.disabled = true;
  supreme.disabled = true;
  veggie.disabled = true;
}

cd.addEventListener("click", disableQ2);
chocolatechip.addEventListener("click", disableQ2);
darkchocolate.addEventListener("click", disableQ2);
greenTea.addEventListener("click", disableQ2);
lemon.addEventListener("click", disableQ2);
mango.addEventListener("click", disableQ2);
mint.addEventListener("click", disableQ2);
neapolitan.addEventListener("click", disableQ2);
orange.addEventListener("click", disableQ2);
pb.addEventListener("click", disableQ2);
strawberry.addEventListener("click", disableQ2);
vanilla.addEventListener("click", disableQ2);
function disableQ2() {
  cd.disabled = true;
  chocolatechip.disabled = true;
  darkchocolate.disabled = true;
  greenTea.disabled = true;
  lemon.disabled = true;
  mango.disabled = true;
  mint.disabled = true;
  neapolitan.disabled = true;
  orange.disabled = true;
  pb.disabled = true;
  strawberry.disabled = true;
  vanilla.disabled = true;
}

cherry.addEventListener("click", disableQ3);
truffles.addEventListener("click", disableQ3);
darkchocolate2.addEventListener("click", disableQ3);
godiva.addEventListener("click", disableQ3);
gummybears.addEventListener("click", disableQ3);
jollyranchers.addEventListener("click", disableQ3);
nerds.addEventListener("click", disableQ3);
reeses.addEventListener("click", disableQ3);
redhots.addEventListener("click", disableQ3);
toblerone.addEventListener("click", disableQ3);
twix.addEventListener("click", disableQ3);
twizzlers.addEventListener("click", disableQ3);
function disableQ3() {
  cherry.disabled = true;
  truffles.disabled = true;
  darkchocolate2.disabled = true;
  godiva.disabled = true;
  gummybears.disabled = true;
  jollyranchers.disabled = true;
  nerds.disabled = true;
  reeses.disabled = true;
  redhots.disabled = true;
  toblerone.disabled = true;
  twix.disabled = true;
  twizzlers.disabled = true;
}

black.addEventListener("click", disableQ4);
blue.addEventListener("click", disableQ4);
brown.addEventListener("click", disableQ4);
gold.addEventListener("click", disableQ4);
gray.addEventListener("click", disableQ4);
green.addEventListener("click", disableQ4);
orange2.addEventListener("click", disableQ4);
pink.addEventListener("click", disableQ4);
purple.addEventListener("click", disableQ4);
red.addEventListener("click", disableQ4);
white.addEventListener("click", disableQ4);
yellow.addEventListener("click", disableQ4);
function disableQ4() {
  black.disabled = true;
  blue.disabled = true;
  brown.disabled = true;
  gold.disabled = true;
  gray.disabled = true;
  green.disabled = true;
  orange2.disabled = true;
  pink.disabled = true;
  purple.disabled = true;
  red.disabled = true;
  white.disabled = true;
  yellow.disabled = true;
}