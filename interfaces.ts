interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const drink = {
	color: 'brown',
	carbonated: 'true',
	sugar: 40,
	summary(): string {
		return `My drink is has ${this.sugar} grams of sugar`;
	},
};

// Now with the interface setup, if any of the values in oldCivic are changed, typescript will warn us

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldCivic);

// Notice there are no errors when passing the drink object
// We can use an single interface to describe the shape or the different properties of very different objects.
// This encourages to make more generic and reusable functions
printSummary(drink);
