class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// We often use the private keyword to make a method that we do not want other developers to call.
/* 
class Car extends Vehicle {
	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car();

car.startDrivingProcess();
 */
