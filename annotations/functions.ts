// Typescript function
const add = (a: number, b: number): number => {
	return a + b;
};

// Notice how Typescript tells us here that a return is missing from this function
const subtract = (a: number, b: number): number => {
	a - b;
};

// This is now the correct version
const newSubtract = (a: number, b: number): number => {
	return a - b;
};

// Here is a classic function wtih annotation
function divide(a: number, b: number): number {
	return a / b;
}

// Anonymous Function assigned to a variable with annotation
const multiply = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
};

// never means its never going to exit the function. This is pretty rare
const throwError = (message: string): never => {
	throw new Error(message);
};

// Usually it is like this
const newThrowError = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}
	return message;
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};

// Typescript destructuring
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(date);
	console.log(weather);
};

/*   ES2015 
const oldLogWeather = ({date, weather}) => {
    console.log(date)
    console.log(weather)
}
*/
logWeather(todaysWeather);
