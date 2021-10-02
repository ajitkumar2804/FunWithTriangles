
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calcAreaBtn = document.querySelector("#calculateArea");
const output = document.querySelector("#message");

const calculateArea = () => {
  if (base.value && height.value) {
    if (base.value <= 0 || height.value <= 0) {
      return (output.innerText = "Please Enter Correct Values");
    }

    let area = 0.5 * base.value * height.value;
    output.innerHTML = `Area of the Triangle is ${area} cm${"2".sup()}`;
  } else {
    output.innerText = "Please enter Both The Values.";
  }
};

calcAreaBtn.addEventListener("click", calculateArea);