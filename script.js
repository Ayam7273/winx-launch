//Type Effect
const dynamicTexts = document.querySelectorAll("h1 span");
const wordsList = ["Creatives", "Boosting Your Bottom Line"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = wordsList[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicTexts[wordIndex].textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (isDeleting) {
      wordIndex = (wordIndex + 1) % wordsList.length;
    }
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();