"use strict";
const btnAnswer = document.querySelectorAll(".js-btn");

btnAnswer.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.parentElement.classList.contains("active")) {
      btn.parentElement.classList.toggle("active");
    } else {
      btnAnswer.forEach((btn) => {
        btn.parentElement.classList.remove("active");
      });
      btn.parentElement.classList.add("active");
    }
  });
});

// * The modern way
const btnAnswerLi = document.querySelectorAll(".js-li");
