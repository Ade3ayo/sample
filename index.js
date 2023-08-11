"use strict";

const wrapper = document.querySelector(".wrapper");
const subscribe = document.querySelector(".sub-btn");
const email = document.querySelector("#email");
const form = document.querySelector("#form");
const success = document.querySelector(".success");
const inputValue = document.querySelector(".inputValue");
const dismiss = document.querySelector(".dismiss");

form.addEventListener("submit", function () {
  wrapper.classList.add("hidden");
  success.classList.remove("hidden");
  inputValue.innerHTML = email.value + ".";
});

dismiss.addEventListener("click", function () {
  wrapper.classList.remove("hidden");
  success.classList.add("hidden");
  email.value = "";
});
