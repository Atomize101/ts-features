const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// Type alias
type Drink = [string, boolean, number]; // This does not create an array. It creates an idea of a tuple

// This is a tuple that is annotated.
const pepsi: [string, boolean, number] = ['brown', true, 40];
const coke: Drink = ['brown', true, 80];
const tea: Drink = ['brown', false, 0];

// notice how this gives an error
pepsi[0] = 40;

const carSpecs: [number, number] = [400, 3354];
// As we can see with these two examples. Tuples are not that useful because we cannot also understand what the data is.

const carStats = {
	horsePower: 400,
	weight: 3354,
};
