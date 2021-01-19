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

// Now with the interface setup, if any of the values in oldCivic are changed, typescript will warn us

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldCivic);
