function toFahrenheit(celsius) {
 // Write your code here
	let farenhite = (celsius * 9 / 5) + 32;
	farenhite = farenhite.toFixed(2);
	return farenhite;
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
