"use strict";

const wrapper = document.querySelector(".wrapper");
const subscribe = document.querySelector(".sub-btn");
const email = document.querySelector("#email");
const form = document.querySelector("#form");
const success = document.querySelector(".success");
const inputValue = document.querySelector(".inputValue");
const dismiss = document.querySelector(".dismiss");
const invalid = document.querySelector(".invalid-msg");
const input = document.querySelector("input");

function error() {
  invalid.classList.remove("hidden");
  input.style.color = "hsl(4, 100%, 67%)";
  input.style.background = "pink";
  input.style.border = "solid 0.5px hsl(4, 100%, 67%)";
}

email.addEventListener("input", function () {
  if (email.validity.valid) {
    invalid.classList.add("hidden");
    input.style.background = "white";
    input.style.color = "black";
    input.style.border = "none";
  } else {
    error();
  }
});

form.addEventListener("submit", function (e) {
  if (!email.validity.valid) {
    error();
  } else {
    wrapper.classList.add("hidden");
    success.classList.remove("hidden");
    inputValue.innerHTML = email.value + ".";
  }
  e.preventDefault();
});

dismiss.addEventListener("click", function () {
  wrapper.classList.remove("hidden");
  success.classList.add("hidden");
  email.value = "";
});
