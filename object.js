// 1.How to merge two objects.
const userProfile = {
  name: "John Doe",
  email: "johndoe@example.com",
  age: 30,
};

const userSettings = {
  theme: "dark",
  notifications: true,
  emailVerified: true,
};

const mergedUser = { ...userProfile, ...userSettings };
console.log(mergedUser);

const mergedObj = Object.assign({}, userProfile, userSettings);
console.log(mergedObj);

// --------------------------------------------------------------------------------
// 2.How would you check if a key exists in an object?
const object02 = { name: "Alice", age: 25 };

console.log("name" in object02);
console.log("address" in object02);

console.log(object02.hasOwnProperty("name"));
console.log(object02.hasOwnProperty("address"));

// --------------------------------------------------------------------------------
// 3.How to clone an object.

// 1] SHALLOW CLONE
const user = {
  name: "John",
  age: 30,
  address: { city: "New York", zip: "10001" },
};

const shallowCloneUser = { ...user };
console.log(shallowCloneUser);

shallowCloneUser.name = "Jane";
shallowCloneUser.address.city = "Los Angeles";
console.log(user.address.city);
console.log(shallowCloneUser.address.city);

// 2] DEEP CLONE
const product = {
  id: 101,
  name: "Laptop",
  specs: { processor: "Intel", ram: "16GB", storage: "512GB" },
  available: true,
};

const deepCloneProduct = JSON.parse(JSON.stringify(product));

console.log(deepCloneProduct);

deepCloneProduct.specs.ram = "32GB";
console.log(product.specs.ram);
console.log(deepCloneProduct.specs.ram);

// --------------------------------------------------------------------------------
// 4.Use `Object.keys()` to get all the keys of an object.
const object04 = {
  name: "John",
  age: 30,
  city: "New York",
};

const keys = Object.keys(object04);
console.log(keys);

// --------------------------------------------------------------------------------
// 5.How to combines multiple objects into one.
// Refer question 1
// --------------------------------------------------------------------------------
// 6.How would you iterate through all values of an object?
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

Object.values(person).forEach((value) => {
  console.log(value);
});

// for-in
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(person[key]);
  }
}

// for-of
for (let value of Object.values(person)) {
  console.log(value);
}

// --------------------------------------------------------------------------------
// 7.How to count the number of properties in an object.
const object07 = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(Object.keys(object07).length);

// --------------------------------------------------------------------------------
// 8.Use `Object.values()` to get all values of an object.
// Refer question 6
// --------------------------------------------------------------------------------
// 9.How would you add a new property to an object?
const object09 = {
  name: "Alice",
  age: 25,
};

// Dot notation
object09.city = "New York";

// using []
object09["gender"] = "Female";

console.log(object09);

// --------------------------------------------------------------------------------
// 10.Write a program that removes a property from an object.
const object10 = {
  name: "John",
  age: 30,
  city: "New York",
};

delete object10.age;
console.log("After deletion:", object10);

// --------------------------------------------------------------------------------
// 11.How to check if an object is empty.
const object11 = {};
console.log(Object.keys(object11).length);

// --------------------------------------------------------------------------------
// 12.Use `Object.entries()` to convert an object into an array of key-value pairs.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(Object.entries(car));

// --------------------------------------------------------------------------------
// 13.How to deep clone an object.
// Refer question 3
// --------------------------------------------------------------------------------
// 14.How would you check if a property of an object is an array?
const object14 = {
  name: "John",
  hobbies: ["reading", "cycling"],
  age: 30,
};

console.log(Array.isArray(object14.hobbies));

// --------------------------------------------------------------------------------
// 15.How to merge two arrays of objects based on a common key.
const array1 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const array2 = [
  { id: 1, city: "New York" },
  { id: 2, city: "Los Angeles" },
];

// Merging based on comman key in both obj - id
const merged = array1.map((item1) => {
  const item2 = array2.find((item) => item.id === item1.id);
  return { ...item1, ...item2 };
});

console.log(merged);

// --------------------------------------------------------------------------------
// 16.How would you create an object with a dynamic key name?
const key = "username";
const value = "Alice";

const object16 = {
  [key]: value,
};

console.log(object16);

// --------------------------------------------------------------------------------
// 17.How to get the values of an object that match a certain condition.
const object17 = {
  name: "John",
  age: 25,
  height: 180,
  weight: 75,
};

const values = Object.values(object17).filter(
  (value) => typeof value === "number" && value > 30,
);

console.log(values);

// --------------------------------------------------------------------------------
// 18.How to returns the first key that matches a condition in an object.
const object18 = {
  name: "John",
  age: 25,
  height: 180,
  weight: 75,
};

const firstKey = Object.keys(object18).find((key) => object18[key] > 30);

console.log(firstKey);

// --------------------------------------------------------------------------------
// 19.How would you convert an object into a query string (for use in a URL)?
const object19 = { name: "John", age: 30, city: "New York" };

const queryString = Object.keys(object19)
  .map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(object19[key])}`,
  )
  .join("&");

console.log(queryString);

// --------------------------------------------------------------------------------
// 20.How to swap the keys and values of an object.
const object20 = { a: 1, b: 2, c: 3 };
const swappedObj = Object.fromEntries(
  Object.entries(object20).map(([key, value]) => [value, key]),
);
console.log(swappedObj);

// --------------------------------------------------------------------------------
// 21.Use `Object.assign()` to combine properties from multiple objects into a new object.
// Refer question 1
// --------------------------------------------------------------------------------
// 22.How to convert an object to JSON.
const object22 = { name: "John", age: 30 };
console.log(JSON.stringify(object22));

// --------------------------------------------------------------------------------
// 23.How would you find the property with the highest value in an object?
const object23 = { a: 10, b: 50, c: 30 };
const maxKey = Object.keys(object23).reduce((a, b) =>
  object23[a] > object23[b] ? a : b,
);
console.log(maxKey);

// --------------------------------------------------------------------------------
// 24.Write a program to check if an object contains nested objects and retrieve those.
const obj24 = {
  name: "John",
  address: { city: "New York", zip: "10001" },
  age: 30,
};

const nestedObjects = Object.entries(obj24).filter(
  ([key, value]) => typeof value === "object" && value !== null,
);

console.log(nestedObjects);

// --------------------------------------------------------------------------------
// 25.How to updates an object property only if it exists.
const obj25 = { name: "John", age: 30 };
if ("age" in obj25) {
  obj25.age = 31;
}
console.log(obj25);

// --------------------------------------------------------------------------------
// 26.Use `Object.freeze()` to prevent changes to an object.
const obj26 = { name: "John", age: 30 };
Object.freeze(obj26);

obj26.age = 31;
console.log(obj26);

// --------------------------------------------------------------------------------
// 27.How would you destructure an object to extract specific values?
const obj27 = { name: "John", age: 30, city: "New York" };
const { name, age } = obj27;
console.log(name, age);

// --------------------------------------------------------------------------------
// 28.How to checks if a key exists in an object and if its value is a number.
const obj28 = { name: "John", age: 30 };

if ("age" in obj28 && typeof obj28.age === "number") {
  console.log("The 'age' key exists and its value is a number.");
} else {
  console.log("Condition not met.");
}

// --------------------------------------------------------------------------------
// 29.How would you compare two objects for equality (including nested properties)?
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { b: 2 }, c: 3 };

console.log(deepEqual(obj1, obj2)); // true

// --------------------------------------------------------------------------------
// 30.How to remove all keys with falsy values from an object.
const obj30 = { a: 1, b: 0, c: null, d: "hello" };

const cleanedObj = Object.fromEntries(
  Object.entries(obj30).filter(([key, value]) => value),
);
console.log(cleanedObj);

// --------------------------------------------------------------------------------
// 31.How to flattens a nested object.
function flattenObject(obj, prefix = "") {
  let result = {};
  for (let [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

const userProfile2 = {
  id: 1,
  name: "John Doe",
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
  },
  social: {
    facebook: "john.doe",
    twitter: "@johndoe",
  },
};

console.log(flattenObject(userProfile2));

// --------------------------------------------------------------------------------
// 32.How would you use `Object.getOwnPropertyNames()` to get all the properties of an object?
const obj32 = { name: "John", age: 30 };
console.log(Object.getOwnPropertyNames(obj32));

// --------------------------------------------------------------------------------
// 33.Write a program that adds a new property to all objects in an array.
const arr = [{ name: "John" }, { name: "Alice" }];
arr.forEach((obj) => (obj.age = 30));

console.log(arr);

// --------------------------------------------------------------------------------
// 34.How would you convert an object to an array of its keys?
console.log(Object.keys({ name: "John", age: 30 }));

// --------------------------------------------------------------------------------
// 35.How to check if an object is a prototype of another object.
const obj351 = {};
const obj352 = Object.create(obj351);

console.log(obj351.isPrototypeOf(obj352));

// --------------------------------------------------------------------------------
// 36.Use `Object.setPrototypeOf()` to set the prototype of an object.
const obj361 = { a: 1 };
const obj362 = { b: 2 };

Object.setPrototypeOf(obj362, obj361);

console.log(obj362.a);

// --------------------------------------------------------------------------------
// 37.How to iterates through an object and logs all key-value pairs.
const obj37 = { name: "John", age: 30 };
for (let [key, value] of Object.entries(obj37)) {
  console.log(key, value);
}

// --------------------------------------------------------------------------------
// 38.How would you prevent an object from being modified?
// Refer question 26
// --------------------------------------------------------------------------------
// 39.How to merge two objects but with priority to properties of the second object.
const obj391 = { a: 1, b: 2 };
const obj392 = { b: 3, c: 4 };

const mergedObj2 = { ...obj391, ...obj392 };
console.log(mergedObj2);

// --------------------------------------------------------------------------------
// 40.How would you check for deep equality of two objects using recursion?
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

const obj331 = { a: { b: 2 }, c: 3 };
const obj332 = { a: { b: 2 }, c: 3 };

console.log(deepEqual(obj331, obj332));

// --------------------------------------------------------------------------------
// 41.How to get the unique values from an array of objects based on a key.
const arr2 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
];

const uniqueValues = [...new Map(arr2.map((item) => [item.id, item])).values()];

console.log(uniqueValues);

// --------------------------------------------------------------------------------
// 42.How would you iterate over an object’s properties using a `for-in` loop?
// Refer question 6
// --------------------------------------------------------------------------------
// 43.Write a program to check if all properties of an object are strings.
const obj43 = { name: "Alice", city: "New York", country: "USA" };
const allStrings = Object.values(obj43).every(
  (value) => typeof value === "string",
);
console.log(allStrings);

// --------------------------------------------------------------------------------
// 44.How would you create an object with default values using destructuring?
const obj44 = { name1: "Alice", age1: 25 };
const { name1, age1, city = "New York" } = obj44;
console.log(name1, age1, city);

// --------------------------------------------------------------------------------
// 45.How to map through the properties of an object and return a new object.
const obj45 = { name: "Alice", age: 25, city: "New York" };

const mappedObj = Object.keys(obj45).reduce((newObj, key) => {
  newObj[key] = obj45[key].toString();
  return newObj;
}, {});

console.log(mappedObj);

// --------------------------------------------------------------------------------
// 46.Use `Object.getOwnPropertyDescriptor()` to retrieve the descriptor of a property.
const obj46 = { name: "Alice", age: 25 };
const descriptor = Object.getOwnPropertyDescriptor(obj46, "name");
console.log(descriptor);

// --------------------------------------------------------------------------------
// 47.How to find a key in an object that contains a specific value.
const obj47 = { name: "Alice", age: 25, city: "New York" };
const foundkey = Object.keys(obj47).find((key) => obj47[key] === "New York");
console.log(foundkey);

// --------------------------------------------------------------------------------
// 48.How would you convert a nested object into a flat structure with dot notation keys?
function flattenObject(obj, prefix = "") {
  let result = {};
  for (let [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

const nestedObj = { a: 1, b: { x: 2, y: 3 }, c: { d: 4 } };
console.log(flattenObject(nestedObj));

// --------------------------------------------------------------------------------
// 49.Write a program to delete all keys with values greater than a specified number in an object.
const obj49 = { a: 10, b: 20, c: 5, d: 30 };

const threshold = 15;
Object.keys(obj49).forEach((key) => {
  if (obj49[key] > threshold) {
    delete obj49[key];
  }
});

console.log(obj49);

// --------------------------------------------------------------------------------
// 50.How to check if an object contains any circular references.
function hasCircularReference(obj) {
  const seen = new Set();

  function detect(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    if (seen.has(obj)) return true;
    seen.add(obj);
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && detect(obj[key])) {
        return true;
      }
    }
    return false;
  }

  return detect(obj);
}

const obj50 = {};
obj50.circular = obj50;

console.log(hasCircularReference(obj50));
