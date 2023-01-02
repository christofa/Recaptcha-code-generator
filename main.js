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

// captchaValue.innerHTML = finalValue;

//Making the text distorted with blotterJS
let text = new Blotter.Text(finalValue, {
  family: "Barracuda",
  size: 30,
  color: "black",
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 5,
  paddingBottom: 5,
});

let material = new Blotter.ChannelSplitMaterial();

material.uniforms.uOffset.value = 0.02;
material.uniforms.uRotation.value = 20;
material.uniforms.uAnimateNoise.value = 1; //Its used to animate noise in text
material.uniforms.uApplyBlur.value = 1; //Its used for blur effect in text

let blotter = new Blotter(material, {
  texts: text,
});
let scope = blotter.forText(text);
scope.appendTo(captchaValue);

document.addEventListener("mousemove", (e) => {
  material.uniforms.uOffset.value = e.clientX * 0.0001;
  material.uniforms.uRotation.value = e.clientY * 0.1;
});

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
