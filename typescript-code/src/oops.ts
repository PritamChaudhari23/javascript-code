// Class
class Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log(`${this.make} ${this.model} is starting.`);
  }

  stop(): void {
    console.log(`${this.make} ${this.model} is stopping.`);
  }

  honk(): void {
    console.log(`${this.make} ${this.model} is honking.`);
  }

  getInfo(): void {
    console.log(`Vehicle: ${this.make} ${this.model}, Year: ${this.year}`);
  }

  accelerate(): void {
    console.log(`${this.make} ${this.model} is accelerating.`);
  }

  brake(): void {
    console.log(`${this.make} ${this.model} is braking.`);
  }
}

// Object
const vehicle = new Vehicle("Toyota", "Camry", 2022);

vehicle.start();
vehicle.accelerate();
vehicle.honk();
vehicle.brake();
vehicle.stop();
vehicle.getInfo();

// INHERITANCE
class Car extends Vehicle {
  numberOfDoors: number;

  constructor(
    make: string,
    model: string,
    year: number,
    numberOfDoors: number
  ) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }

  openDoors(): void {
    console.log(`Opening ${this.numberOfDoors} doors.`);
  }
}

const car = new Car("Honda", "Accord", 1998, 4);
car.start();
car.openDoors();

class Spaceship extends Vehicle {
  fuelType: string;

  constructor(make: string, model: string, year: number, fuelType: string) {
    super(make, model, year);
    this.fuelType = fuelType;
  }

  launch(): void {
    console.log(
      `${this.make} ${this.model} in year ${this.year} spaceship is launching with ${this.fuelType} fuel.`
    );
  }
}

const spaceship = new Spaceship("SpaceX", "Starship", 2022, "liquid methane");

spaceship.start();
spaceship.launch();

// POLYMORPHISM
class Motorcycle extends Vehicle {
  start(): void {
    console.log("Motorcycle is revving up.");
  }
}

const motorcycle = new Motorcycle("Harley", "Davidson", 2023);
vehicle.start(); // Outputs: Vehicle is starting.
motorcycle.start(); // Outputs: Motorcycle is revving up.

// ABSTRACTION

// Abstract Class
abstract class AbstractVehicle {
  constructor(public make: string, public model: string) {}

  // Abstract method (must be implemented by subclass)
  abstract start(): void;

  // Concrete method (can be used as is)
  stop(): void {
    console.log(`${this.make} ${this.model} is stopping.`);
  }
}

class AbstractCar extends AbstractVehicle {
  // Implementing the abstract method
  start(): void {
    console.log(`${this.make} ${this.model} is starting.`);
  }
}

const myCar = new AbstractCar("Toyota", "Corolla");
myCar.start();
myCar.stop();

// Interface for Vehicle
interface VehicleInterface {
  make: string;
  model: string;
  start(): void;
  stop(): void;
}

class BikeImplementation implements VehicleInterface {
  constructor(public make: string, public model: string) {}

  // Implementing the interface method
  start(): void {
    console.log(`${this.make} ${this.model} bike is starting.`);
  }

  stop(): void {
    console.log(`${this.make} ${this.model} bike is stopping.`);
  }
}

const myBike = new BikeImplementation("Honda", "CBR");
myBike.start();
myBike.stop();

// ENCAPSULATION
class EncapsulatedVehicle {
  // Private fields with TypeScript's access modifiers
  private make: string;
  private model: string;
  private year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log(`${this.make} ${this.model} is starting.`);
  }

  stop(): void {
    console.log(`${this.make} ${this.model} is stopping.`);
  }

  honk(): void {
    console.log(`${this.make} ${this.model} is honking.`);
  }

  getInfo(): void {
    console.log(`Vehicle: ${this.make} ${this.model}, Year: ${this.year}`);
  }

  accelerate(): void {
    console.log(`${this.make} ${this.model} is accelerating.`);
  }

  brake(): void {
    console.log(`${this.make} ${this.model} is braking.`);
  }

  // Getters and setters
  get getMake(): string {
    return this.make;
  }

  set setMake(make: string) {
    this.make = make;
  }

  get getModel(): string {
    return this.model;
  }

  set setModel(model: string) {
    this.model = model;
  }

  get getYear(): number {
    return this.year;
  }

  set setYear(year: number) {
    if (year > 1885) {
      this.year = year;
    } else {
      console.log("Invalid year. Vehicles weren't around before 1885.");
    }
  }
}

const encapsulatedVehicle = new EncapsulatedVehicle("Toyota", "Camry", 2022);

console.log(encapsulatedVehicle.getMake); // Outputs: Toyota
encapsulatedVehicle.setMake = "Honda";

console.log(encapsulatedVehicle.getMake); // Outputs: Honda
console.log(encapsulatedVehicle.getModel); // Outputs: Camry

encapsulatedVehicle.setModel = "Accord";
console.log(encapsulatedVehicle.getMake); // Outputs: Accord
console.log(encapsulatedVehicle.getYear); // Outputs: 2022

encapsulatedVehicle.setYear = 2025;
console.log(encapsulatedVehicle.getYear); // Outputs: 2025
encapsulatedVehicle.setYear = 1800; // Outputs: Invalid year. Vehicles weren't around before 1885.

encapsulatedVehicle.start(); // Outputs: Honda Accord is starting.
encapsulatedVehicle.getInfo(); // Outputs: Vehicle: Honda Accord, Year: 2025

// AGGREGATION
class Engine {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  start(): void {
    console.log(`${this.type} engine starting...`);
  }
}

class AggregationVehicle {
  make: string;
  model: string;
  year: number;
  engine: Engine;

  constructor(make: string, model: string, year: number, engine: Engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    // Aggregation: Vehicle uses an external Engine object
    this.engine = engine;
  }

  start(): void {
    console.log(`${this.make} ${this.model} is starting...`);
    this.engine.start(); // Starts the external engine
  }
}

const v8Engine = new Engine("V8");
const aggregationVehicle = new AggregationVehicle(
  "Ford",
  "Mustang",
  2022,
  v8Engine
);

aggregationVehicle.start();

// COMPOSITION
class Transmission {
  shift(): void {
    console.log("Transmission shifting...");
  }
}

class CompositionVehicle {
  make: string;
  model: string;
  year: number;
  engine: Engine;
  transmission: Transmission;

  constructor(
    make: string,
    model: string,
    year: number,
    engineType: string,
    transmissionType: string
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    // Composition: Vehicle has an Engine and Transmission
    this.engine = new Engine(engineType);
    this.transmission = new Transmission();
  }

  start(): void {
    console.log(`${this.make} ${this.model} is starting...`);
    this.engine.start(); // Starting the engine
  }

  shift(): void {
    console.log(`${this.make} ${this.model} is shifting gears...`);
    this.transmission.shift(); // Shifting the transmission
  }
}

const compositionVehicle = new CompositionVehicle(
  "Toyota",
  "Camry",
  2022,
  "V6",
  "Automatic"
);
compositionVehicle.start();
compositionVehicle.shift();

// ASSOCIATION
class Driver {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  drive(vehicle: Vehicle): void {
    console.log(
      `${this.name} is driving the ${vehicle.make} ${vehicle.model}.`
    );
  }
}

const driver = new Driver("Alice");
const car2 = new Vehicle("BMW", "X5", 2023);
driver.drive(car2); // Outputs: Alice is driving the BMW X5.

// COUPLING
class CouplingVehicle {
  make: string;
  model: string;
  year: number;
  engine: Engine;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    // Tight Coupling: The Vehicle directly creates an Engine object
    this.engine = new Engine("V8"); // Vehicle is tightly coupled to the Engine class
  }

  start(): void {
    console.log(`${this.make} ${this.model} is starting...`);
    this.engine.start(); // Starts the engine created inside the vehicle
  }
}

const couplingVehicle = new CouplingVehicle("Ford", "Mustang", 2022);
couplingVehicle.start(); // Outputs: Ford Mustang is starting... V8 engine starting...

/**
 * Entities: Base class - Vehicle
 * Car
 * Motorcycle
 * Train
 * Boat
 * Aeroplane
 * Spaceship
 */
