const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateEl = document.querySelector("#generate-el");
let firstResultEl = document.querySelector("#first-result-el");
let secondResultEl = document.querySelector("#second-result-el");
let passwordLength = 15;

function generatePassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

generateEl.addEventListener("click", function () {
  const generatedPasswordOne = generatePassword(passwordLength);
  const generatedPasswordTwo = generatePassword(passwordLength);
  firstResultEl.textContent = generatedPasswordOne;
  secondResultEl.textContent = generatedPasswordTwo;
});

firstResultEl.addEventListener("click", () => {
  if (firstResultEl.textContent.trim() !== "") {
    navigator.clipboard
      .writeText(firstResultEl.textContent)
      .then(() => alert("First password copied!"))
      .catch((err) => console.error("Failed to copy: ", err));
  }
});

secondResultEl.addEventListener("click", () => {
  if (secondResultEl.textContent.trim() !== "") {
    navigator.clipboard
      .writeText(secondResultEl.textContent)
      .then(() => alert("Second password copied!"))
      .catch((err) => console.error("Failed to copy: ", err));
  }
});
