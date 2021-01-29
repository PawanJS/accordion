"use strict";

const paragraph = document.querySelectorAll(".js-paragraph");
const btnOpenAccordion = document.querySelectorAll(".js-btn-open");
const accordion = document.querySelectorAll(".js-accordion");

const openAccordion = function () {
  paragraph.forEach((p) => p.classList.add("paragraph-active"));
};

btnOpenAccordion.forEach((btn) => btn.addEventListener("click", openAccordion));
