const display = document.getElementById('display');

function appendToDisplay(value) {
  if (value === ',') {
    formatWithCommas();
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let expression = display.value.replace(/,/g, ''); // Remove commas before evaluation
    display.value = eval(expression).toLocaleString('en-US'); // Display result with thousand separators
  } catch (e) {
    display.value = 'Error';
  }
}

function calculatePercentage() {
  try {
    let currentValue = parseFloat(display.value.replace(/,/g, '')); // Remove commas
    let percentageValue = currentValue / 100;
    display.value = percentageValue.toLocaleString('en-US'); // Display result with thousand separators
  } catch (e) {
    display.value = 'Error';
  }
}

function formatWithCommas() {
  let currentValue = display.value.replace(/,/g, ''); // Remove existing commas
  if (currentValue && !isNaN(currentValue)) { // Check if it's a valid number and not empty
    display.value = parseFloat(currentValue).toLocaleString('en-US'); // Format with thousand separators
  }
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
