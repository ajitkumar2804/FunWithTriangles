const sides = document.querySelectorAll("#side");
const calculateBtn = document.querySelector("#calhypo");
const outputEl = document.querySelector("#message");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

calculateBtn.addEventListener("click", calculateHypotenuse);