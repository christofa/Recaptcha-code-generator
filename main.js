const captchaValue = document.querySelector("#captchaValue");
const inputCaptcha = document.querySelector("#inputCaptcha");
const submitBtn = document.querySelector("#submitBtn");
const successMsg = document.querySelector(".success");
const failedMsg = document.querySelector(".failed");

let totalValue = [
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
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

let cVal1 = totalValue[Math.floor(Math.random() * totalValue.length)];
let cVal2 = totalValue[Math.floor(Math.random() * totalValue.length)];
let cVal3 = totalValue[Math.floor(Math.random() * totalValue.length)];
let cVal4 = totalValue[Math.floor(Math.random() * totalValue.length)];
let cVal5 = totalValue[Math.floor(Math.random() * totalValue.length)];

let finalValue = cVal1 + cVal2 + cVal3 + cVal4 + cVal5;

captchaValue.innerHTML = finalValue;

let valueInput = "";
inputCaptcha.addEventListener("change", () => {
  valueInput = inputCaptcha.value;
});

submitBtn.addEventListener("click", () => {
  if (valueInput === finalValue) {
    successMsg.style.display = "block";
    setTimeout(() => document.logForm.submit(), 2000);
  } else if ((valueInput = "")) {
    alert("Please type the Captcha code");
  } else {
    failedMsg.style.display = "block";
    setTimeout(() => window.location.reload(), 1000);
  }
});
