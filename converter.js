// console.log("hello megan");
// Write a program that will convert a temperature from fahrenheit to celsius,
// or from celsius to fahrenheit.
// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as
// the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted
// temperature
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the
// enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted
// temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature
// should be blue.
// For any other temperature, the color should be green.

//target SUBMIT button
var button = document.getElementById("convert");
//target CLEAR button
var clearButton = document.getElementById("clear");
//target input box to use event listener for when user presses enter
var inputEnter = document.getElementById("temp-to-convert");
//target the div where the result will be printed
var outputDiv = document.getElementById("temp-result");
//add an event listener to the submit button and run the determineCoverter function
button.addEventListener("click", determineConverter);
//add an event listener so that when the user clicks the reset button the page reloads
clearButton.addEventListener("click", function() {
	location.reload(true);
})
//add an event listener so that when the user hits enter the determineConverter funtion runs
inputEnter.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		determineConverter();
	}
})
//the determineConverter function receives the result of the numberGet function and passes it to the functions that convert temp
function determineConverter (clickEvent) {
	var startTemp = numberGet();
	if (choiceFahren) {
		toFahrenheit(startTemp);
	} else {
		toCelsius(startTemp);
	}
}
//get the value that the use types into the input text area
function numberGet() {
	var initialTemp = inputEnter.value;
	return initialTemp;
}
//converts the initial temp value from the user to celsius and calls the function that determines the color class to be applied (using initialTemp so we did not creat to heat index functions)
function toCelsius(initialTemp) {
  var newCelsius = Math.round((parseFloat(initialTemp) - 32) / 1.8);
  console.log("result", newCelsius);
  heatIndex(initialTemp);
  outputDiv.innerHTML = `${newCelsius}`;
  return newCelsius;
}
//converts the initial temp value from the user to fahrenheit and calls the function that determines the color class to be applied
function toFahrenheit(initialTemp) {
  var newFahrenheit = Math.round((parseFloat(initialTemp) * 1.8) + 32);
  console.log("result", newFahrenheit);
  heatIndex(newFahrenheit);
  outputDiv.innerHTML = `${newFahrenheit}`;
  return newFahrenheit;
}
//determines the color to be applied
function heatIndex (temp) {
	if (temp >= 90) {
		outputDiv.classList.add("red");
	} else if (temp <= 32) {
		outputDiv.classList.add("blue");
	} else {
		outputDiv.classList.add("green");
	}
}
//sets the initial value to false, true if user clicks Fahrenheit, false if user clicks Celsius - to be used in the determineConverter function
var choiceFahren = false;
var chooseToFahren = document.getElementById("fahrenheit");
chooseToFahren.addEventListener("click", function () {
	choiceFahren = true;
	console.log("event", choiceFahren);
})
var chooseToCelsius = document.getElementById("celsius");
chooseToCelsius.addEventListener("click", function () {
	choiceFahren = false;
	console.log("event", choiceFahren);
})