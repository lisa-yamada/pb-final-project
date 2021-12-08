# Welcome to the Arcade
## By: Isabella Pena Cespedes and Lisa Yamada

## What's in this project?

← `README.md`: This file, where we dive into what our website is all about.

← `index.html`: This serves as our homepage. It has links to the various quizzes and game in the arcade.

← `money-quiz.html`: This is our first quiz game. It displays the questions, images, buttons, etc. that make up the quiz.

← `money-quiz.js`: The game logic for the quiz is here. Here we keep track of how many questions are answered correctly and display if they win/lose.

← `personality-quiz.html`: This is our second quiz game. It also displays questions, images, buttons, etc. that make up the quiz.

← `personality-quiz.js`: The game logic for the personality quiz is here. Here we keep track of how often a user chooses answers associated with a zodiac and display which signs they most answer like.

← `snake-game.html`: This is our only game. It displays the game board and the play button that starts the game.

← `snake-game.js`: The controls that affect game play are here. Here we set up the game board, add key listeners to control snake movement, randomly spawn food, keep track of the score, and more.

← `style.css`: The CSS applies styles to the elements across our website.

Open each file and check out the comments (in gray) for more info.

## Diving deeper into our project
We created an interactive arcade interface that hosts 2 quizzes and 1 game. The homepage welcomes you to the arcade and provides links to the different arcade components.

The first quiz is a personality quiz where the computer guesses potential zodiac sign matches based on four questions. Each question has an associated set of 12 button answers, each of which is associated with a specific zodiac.
Behind the scenes, in the JavaScript code, there is a dictionary the holds a count for how many of these zodiac's answers are selected. The result is calculated by referencing this score dictionary and seeing which zodiacs scored the highest, or which answers that the user selected were most associated with which zodiacs.

The second quiz is a challenge for the user to spend $1M. There are 7 total questions, each where the user is prompted to select the most expensive option out of the group under a variety of topics ranging from restaurants to wines.
Only one option for an answer is correct for each question, so only that button will increment the score. Once all questions are answered, we check if the score = 7 (all answers correct), only then is the user told they win.

The final component is a snake game. In this game, the user moves a snake around the game board using the arrow keys to collect randomly spawning food. Each food piece eaten is 10 points to the user. The game ends when the user hits one of the four walls, or runs into itself.
