const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const wrapperRect = wrapper.getBoundingClientRect();
const notBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aku Juga Suka Kamu :)";
});

noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - notBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - notBtnRect.height)) + 1;

  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
