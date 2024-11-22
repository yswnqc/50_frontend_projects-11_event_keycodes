const container = document.querySelector(".container");
const keyname = document.querySelector(".keyname");
const keycode = document.querySelector(".keycode");
const code = document.querySelector(".code");
const hint = document.querySelector(".hint");

window.addEventListener("keydown", (e) => {
  keyname.textContent = e.key === " " ? "Space" : e.key;
  keycode.textContent = e.keyCode;
  code.textContent = e.code;
});
