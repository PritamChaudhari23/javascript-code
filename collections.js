// 1.SETS
const numbers = new Set([1, 2, 3]);

// Adding elements
numbers.add(4); // Adds 4 to the Set
numbers.add(3); // Does nothing (3 is a duplicate)

// Checking if an element exists
console.log(numbers.has(3)); // true
console.log(numbers.has(5)); // false

// Iterating over the Set
numbers.forEach((number) => {
  console.log(number);
});

// Getting the size of the Set
console.log(numbers.size); // 4

// Removing an element
numbers.delete(2);

// Clearing the Set
numbers.clear();

// --------------------------------------------------------------------------------
// 2.WEAKSETS
// Create a WeakSet
const weakSet = new WeakSet();

// Create some objects
const obj1 = { id: 1 };
const obj2 = { id: 2 };

// Add objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Check if objects are in the WeakSet
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// Remove an object from the WeakSet
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false

// Example with garbage collection
let tempObject = { temp: "temporary" };
weakSet.add(tempObject); // Adding the object

// Once tempObject is no longer referenced, it will be garbage collected
tempObject = null; // WeakSet will not prevent garbage collection

// --------------------------------------------------------------------------------
// 3.MAPS
const myMap = new Map();

// Adding elements to the Map
myMap.set("name", "Alice");
myMap.set("age", 25);
myMap.set("job", "Engineer");

// Getting values from the Map
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.get("age")); // Output: 25

// Checking if a key exists
console.log(myMap.has("job")); // true
console.log(myMap.has("city")); // false

// Removing an element from the Map
myMap.delete("age");
console.log(myMap.has("age")); // false

// Iterating over the Map
myMap.set("city", "New York");
// Iterate over key-value pairs
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Iterate over keys
for (const key of myMap.keys()) {
  console.log(key);
}

// Iterate over values
for (const value of myMap.values()) {
  console.log(value);
}

// Clearing the Map
myMap.clear();
console.log(myMap.size); // Output: 0 (Map is empty)

// --------------------------------------------------------------------------------
// 4.WEAKMAPS
const weakMap = new WeakMap();

// Creating objects that will be used as keys
const objweak1 = { id: 1 };
const objweak2 = { id: 2 };

// Adding key-value pairs
weakMap.set(objweak1, "Data for object 1");
weakMap.set(objweak2, "Data for object 2");

// Accessing values
console.log(weakMap.get(objweak1)); // Output: Data for object 1
console.log(weakMap.get(objweak2)); // Output: Data for object 2

// Checking if keys exist
console.log(weakMap.has(objweak1)); // true
console.log(weakMap.has(objweak2)); // true

// Deleting a key-value pair
weakMap.delete(objweak1);
console.log(weakMap.has(objweak1)); // false (after deletion)

// Example of garbage collection
let tempObj = { temp: "temporary" };
weakMap.set(tempObj, "Some temporary data");

// Once tempObj is no longer referenced, it will be removed from the WeakMap
tempObj = null; // The WeakMap entry for tempObj is removed automatically
