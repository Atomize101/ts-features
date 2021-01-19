const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// 2 dimensional array
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Annotated empty 2d array
const emptyCarsByMake: string[][] = [];

// Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);
// Shows an error because the array is supposed to be strings.

// Help with 'map'
carMakers.map((car: string): string => {
	return car.toUpperCase();
});
