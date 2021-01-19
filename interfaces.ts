interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	isBroken: true,
};

// Now with the interface setup, if any of the values in oldCivic are changed, typescript will warn us

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.name}`);
};

printVehicle(oldCivic);
