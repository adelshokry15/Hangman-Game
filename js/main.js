let lettersBox = document.querySelector(".theLetters");
let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArr = Array.from(letters);
lettersArr.forEach((element) => {
  let span = document.createElement("span");
  span.classList = "letter-box";
  let theLetter = document.createTextNode(element);
  span.appendChild(theLetter);
  lettersBox.appendChild(span);
});

const words = {
  programming: [
    "ruby",
    "kotlin",
    "php",
    "javascript",
    "python",
    "c",
    "go",
    "scala",
    "java",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
    "Lionel Messi",
    "Isaac Newton",
  ],
  countries: [
    "Algeria",
    "Morocco",
    "Syria",
    "Palestine",
    "Yemen",
    "Egypt",
    "Bahrain",
    "Qatar",
  ],
};

let randomCatNum = Math.floor(Math.random() * Object.keys(words).length);
let randomCatName = Object.keys(words)[randomCatNum];
let randomPropNum = Math.floor(Math.random() * words[randomCatName].length);
let randomPropName = words[randomCatName][randomPropNum];
let lettersAndSpace = Array.from(randomPropName);

let guessCat = document.querySelector(".category");
guessCat.appendChild(document.createTextNode(`${randomCatName}`));

let theGuess = document.querySelector(".theGuess");

Array.from(randomPropName).forEach((char) => {
  let span = document.createElement("span");
  if (char === " ") {
    span.classList = "with-space";
  }
  let theLetter = document.createTextNode(char);
  // span.appendChild(theLetter);
  theGuess.appendChild(span);
});

let letterBox = Array.from(document.querySelectorAll(".theLetters span"));

let guessSpans = Array.from(document.querySelectorAll(".theGuess span"));
let wrongAttempts = 0;
let attempts = 0;
let rightAttempts = 0;
document.querySelector(".attempts span").textContent = 8 - wrongAttempts;

document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    e.target.classList = "clicked";
    let clickedLetter = e.target.textContent;
    lettersAndSpace.forEach((letter, i) => {
      if (letter.toLowerCase() === clickedLetter.toLowerCase()) {
        rightAttempts++;
        guessSpans[i].textContent = letter;
        if (rightAttempts === randomPropName.split(/\s+/).join("").length) {
          $(".win").fadeIn(500);
          $(".win").addClass("d-flex");
        }
      }
    });
    if (randomPropName.toLowerCase().includes(e.target.textContent) == false) {
      wrongAttempts++;
      document.querySelector(".attempts span").textContent = 8 - wrongAttempts;
      document
        .querySelector(".theDraw")
        .classList.add(`wrong-${wrongAttempts}`);
      if (wrongAttempts === 8) {
        document.querySelectorAll(".theLetters span").forEach((e) => {
          e.classList.add("finished");
        });
        $(".word-guess").text(randomPropName);
        $(".over").fadeIn(500);
        $(".over").addClass("d-flex");
      }
    }
  }
});
