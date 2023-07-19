document.querySelector('.startTrip').addEventListener('click', () => {
	meter.setStartTime();
});
document.querySelector('.endTrip').addEventListener('click', () => {
	meter.setEndTime();
});


// meter is a variables storing an object
const meter = {
	// baseRate, currentTrip are properties of the object
	baseRatePerHour: 90,
	currentTripTime: 0,
	startTime: 0,
	// a reference in memory to the interval that will be established on line 25
	intervalId: null,
	//
	repeatedlyPrintElapsedTime: function () {
		// counts every 1000 milliseconds 
		this.intervalId = setInterval(() => {
			this.calcPrice()
		}, 1000);
	},
	// calcPrice is a method of the object
	calcPrice: function () {
		const elapsedTime = Date.now() - this.startTime;
		const elapsedTimeAsHour = elapsedTime / 1000 / 60 / 60;
		this.currentTripTime = elapsedTimeAsHour;
		//console.clear makes sure it prints one line in console not stacking lines
		console.clear()
		// toFixed is method to describe the decimal points, 2 is for $
		document.querySelector('.elapsedTime').textContent = (`Your Amount: $${(this.baseRatePerHour * this.currentTripTime).toFixed(2)}`);
	},
	// Start the ride method of the object
	setStartTime: function () {
		// Date.now is JS class written with capital D, () is used to call the current time
		this.startTime = Date.now();
		// when pressed start trip it starts printing repeatedly the time
		this.repeatedlyPrintElapsedTime();
	},
	setEndTime: function () {
		// stops the interval function running (meaning it stops our repeatedlyPrintElapsedTime function)
		clearInterval(this.intervalId);
		// calling the function of calc price to capture one final time the most of the current price
		this.calcPrice();
	},
}


