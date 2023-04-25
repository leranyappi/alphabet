"use strict";


const letters = document.querySelectorAll(".boxes__box");

const clickAudio = new Audio("audio/Mountain Audio - Menu Click.mp3");
const winAudio = new Audio("audio/huge win.wav");
let lettersNew;

for (let i = 0; i <= letters.length; i++) {
  letters[i].addEventListener("click", function () {
    clickAudio.play();
    if (letters[i].previousElementSibling != null) {
      letters[i].previousElementSibling.before(letters[i]);
      lettersNew = document.querySelectorAll(".boxes__box");
    } else if (letters[i].nextElementSibling != null) {
      letters[i].nextElementSibling.after(letters[i]);
      lettersNew = document.querySelectorAll(".boxes__box");
    }
    if (
      lettersNew[0].classList.contains("box_a") &&
      lettersNew[1].classList.contains("box_b") &&
      lettersNew[2].classList.contains("box_c") &&
      lettersNew[3].classList.contains("box_d") &&
      lettersNew[4].classList.contains("box_e") &&
      lettersNew[5].classList.contains("box_f")
    ) {
      winAudio.play();
    }
  });
}
