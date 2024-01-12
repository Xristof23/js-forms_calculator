console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // --v-- write your code here --v--
  const numberA = Number(formElements.numberA.value);
  const numberB = Number(formElements.numberB.value);
  let result;
  if (formElements.operator.value === "addition") {
    result = add(numberA, numberB);
    console.log(formElements.operator.value + " result = " + result);
  } else if (formElements.operator.value === "subtraction") {
    result = subtract(numberA, numberB);
    console.log(formElements.operator.value + " result = " + result);
  } else if (formElements.operator.value === "multiplication") {
    result = multiply(numberA, numberB);
    console.log(formElements.operator.value + " result = " + result);
  } else if (formElements.operator.value === "division" && numberB != 0) {
    result = divide(numberA, numberB);
    console.log(formElements.operator.value + " result = " + result);
  } else {
    result = "Mathematical error: Thou shall not divide by zero!";
    console.log("Mathematical error: Thou shall not divide by zero!");
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
