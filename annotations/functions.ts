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
