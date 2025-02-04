function handleSubmit() {
  const number = parseFloat(document.getElementById("number").value);
  const resultElement = document.getElementById("result");

  if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid number.";
  } else if (number < 0) {
    resultElement.textContent = "Enter a positive value.";
  } else {
    const nextNumbers = [];
    let currentNumber = number + 2;

    for (let i = 0; i < 3; i++, currentNumber += 2) {
      nextNumbers.push(currentNumber);
    }

    const type = number % 2 === 0 ? "even" : "odd";
    resultElement.textContent = `Next 3 ${type} numbers: ${nextNumbers.join(
      ", "
    )}`;
  }
}
