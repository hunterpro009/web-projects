let btn = document.querySelector(".btn");
let body = document.body;
let Audio = document.querySelector("audio");

btn.addEventListener("click", () => {
  body.classList.toggle("on");
  Audio.play();
});