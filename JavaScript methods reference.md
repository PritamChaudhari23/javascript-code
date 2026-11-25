# JavaScript Built-in Methods Cheat Sheet

## Array

| Method                 | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `pop()`                | Removes last element                                     |
| `push()`               | Adds last element                                        |
| `shift()`              | Removes first element                                    |
| `unshift()`            | Adds first element                                       |
| `splice(index, count)` | Removes given number of items starting from given index  |
| `slice(start, end)`    | Returns copy of a section of array                       |
| `map()`                | Creates a new array by transforming each element         |
| `filter()`             | Creates a new array with elements that pass a condition  |
| `sort()`               | Sorts elements (lexicographically by default)            |
| `concat()`             | Merges two or more arrays into a new array               |
| `reverse()`            | Reverses the order of elements in place                  |
| `reduce()`             | Reduces an array to a single value                       |
| `forEach()`            | Iterates over each element without returning a new array |
| `find()`               | Returns the first element that satisfies a condition     |
| `findIndex()`          | Returns the index of the first matching element          |
| `some()`               | Checks if at least one element satisfies a condition     |
| `every()`              | Checks if all elements satisfy a condition               |
| `includes()`           | Checks if an array contains a specific value             |
| `indexOf()`            | Returns the first index of a value                       |
| `lastIndexOf()`        | Returns the last index of a value                        |
| `flat()`               | Flattens nested arrays (default depth = 1)               |
| `join()`               | Converts an array into a string using a separator        |
| `Array.isArray()`      | Checks if a value is an array                            |
| Spread `...`           | Expands array elements                                   |
| `Set`                  | Used to remove duplicate values                          |
| `Map`                  | Used for unique objects based on a key                   |

**Loop equivalence**

```javascript
// both are same
for (i = 0; i < array.length; i++) {}
for (i = 0; i <= array.length - 1; i++) {}
```

---

## Object

| Method                              | Description                                        |
| ----------------------------------- | -------------------------------------------------- |
| `Object.keys()`                     | Array of an object's keys                          |
| `Object.values()`                   | Array of an object's values                        |
| `Object.entries()`                  | Key-value pairs as an array                        |
| `Object.assign()`                   | Copies properties from source objects to a target  |
| `Object.fromEntries()`              | Converts key-value pairs back into an object       |
| `Object.freeze()`                   | Prevents modification of an object                 |
| `Object.getOwnPropertyNames()`      | All own property names                             |
| `Object.getOwnPropertyDescriptor()` | Gets property metadata                             |
| `Object.setPrototypeOf()`           | Sets an object's prototype                         |
| `Object.create()`                   | Creates an object with a specified prototype       |
| `hasOwnProperty()`                  | Checks if a property exists directly on an object  |
| `in` operator                       | Checks if a key exists (including prototype chain) |
| `delete`                            | Removes a property from an object                  |
| Destructuring                       | Extracts properties into variables                 |
| Spread `...`                        | Shallow clones or merges objects                   |
| `JSON.stringify()`                  | Object to JSON string                              |
| `JSON.parse()`                      | JSON string to object                              |
| `for...in`                          | Iterates over enumerable object keys               |
| Recursion                           | Used for deep clone, deep equality, flattening     |

---

## String

| Method                  | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| `split()`               | Splits a string into an array                              |
| `join()`                | Joins array elements into a string                         |
| `reverse()`             | Reverses array elements (used with `split()` and `join()`) |
| `toLowerCase()`         | Converts to lowercase                                      |
| `toUpperCase()`         | Converts to uppercase                                      |
| `substring()`           | Extracts part of a string                                  |
| `slice()`               | Extracts a section of a string                             |
| `includes()`            | Checks if a substring exists                               |
| `indexOf()`             | First occurrence index                                     |
| `lastIndexOf()`         | Last occurrence index                                      |
| `startsWith()`          | Checks prefix                                              |
| `endsWith()`            | Checks suffix                                              |
| `replace()`             | Replaces part of a string                                  |
| `match()`               | Matches string against a regex                             |
| `trim()`                | Removes whitespace from both ends                          |
| `repeat()`              | Repeats a string n times                                   |
| `charAt()`              | Character at a given index                                 |
| `localeCompare()`       | Compares strings lexicographically                         |
| `String.fromCharCode()` | Converts ASCII code to character                           |

---

## Regex

| Pattern                                            | Description                                       |
| -------------------------------------------------- | ------------------------------------------------- |
| `/\s+/g`                                           | One or more whitespace characters                 |
| `/\d/g`                                            | Numeric digits                                    |
| `/^\d+$/`                                          | String contains only digits                       |
| `/[aeiouAEIOU]/g`                                  | All vowels                                        |
| `/\b\w/g`                                          | First character of each word                      |
| `/[^\w]/g`                                         | Punctuation and special characters (for removing) |
| `/[^a-zA-Z0-9\s]/g`                                | Special characters (for removing)                 |
| `/the/g`                                           | All occurrences of a word                         |
| `/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` | Email validation                                  |
| `/\d/`                                             | String contains at least one digit                |

---

## Set

Stores unique values of any type.

| Method / Property       | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `new Set()`             | Creates an empty Set                                 |
| `new Set(iterable)`     | Creates a Set from an iterable (array, string, etc.) |
| `set.add(value)`        | Adds a value                                         |
| `set.has(value)`        | Returns true if value exists                         |
| `set.delete(value)`     | Removes a value                                      |
| `set.clear()`           | Removes all values                                   |
| `set.size`              | Number of elements                                   |
| `set.forEach(callback)` | Iterates over values                                 |
| `set.values()`          | Iterator of values                                   |
| `set.keys()`            | Iterator of values (same as `values()`)              |
| `set.entries()`         | Iterator of `[value, value]` pairs                   |

**Common operations**

```javascript
[...new Set(array)]; // Remove duplicates from array
set.has(value); // Check if value exists
Array.from(set); // or [...set]   // Convert Set to Array
```

### WeakSet

Stores weak references to objects only.

| Method                   | Description                   |
| ------------------------ | ----------------------------- |
| `new WeakSet()`          | Creates an empty WeakSet      |
| `weakSet.add(object)`    | Adds an object                |
| `weakSet.has(object)`    | Returns true if object exists |
| `weakSet.delete(object)` | Removes an object             |

**Notes**

- Only stores objects, primitives are not allowed
- Uses weak references, so objects can be garbage collected even if in the WeakSet
- Cannot iterate (no `forEach`, `keys`, `values`, `entries`)
- No `size` property
- Good for storing metadata about objects

---

## Map

Stores key-value pairs with any type of key.

| Method / Property       | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| `new Map()`             | Creates an empty Map                                   |
| `new Map(iterable)`     | Creates a Map from an iterable of `[key, value]` pairs |
| `map.set(key, value)`   | Sets a key-value pair                                  |
| `map.get(key)`          | Returns the value for a key                            |
| `map.has(key)`          | Returns true if key exists                             |
| `map.delete(key)`       | Removes a key-value pair                               |
| `map.clear()`           | Removes all key-value pairs                            |
| `map.size`              | Number of key-value pairs                              |
| `map.forEach(callback)` | Iterates over entries                                  |
| `map.keys()`            | Iterator of keys                                       |
| `map.values()`          | Iterator of values                                     |
| `map.entries()`         | Iterator of `[key, value]` pairs                       |

**Common operations**

```javascript
for (const [key, value] of map) {
} // Iterate over entries
Object.fromEntries(map); // Map -> Object
new Map(Object.entries(object)); // Object -> Map
new Map([...map].filter(condition)); // Filter Map entries
```

### WeakMap

Stores weak references to objects as keys.

| Method                       | Description                         |
| ---------------------------- | ----------------------------------- |
| `new WeakMap()`              | Creates an empty WeakMap            |
| `weakMap.set(object, value)` | Sets an object-value pair           |
| `weakMap.get(object)`        | Returns the value for an object key |
| `weakMap.has(object)`        | Returns true if object key exists   |
| `weakMap.delete(object)`     | Removes an object-value pair        |

**Notes**

- Only objects as keys, primitives are not allowed
- Weak references for keys, so keys can be garbage collected
- Cannot iterate (no `forEach`, `keys`, `values`, `entries`)
- No `size` property
- Good for storing private data associated with objects

---

## Set vs Map vs Object

| Type       | Description                                          |
| ---------- | ---------------------------------------------------- |
| **Set**    | Unique values, membership checks, no key-value pairs |
| **Map**    | Key-value pairs, any key type, has `size`, ordered   |
| **Object** | Key-value pairs, keys are strings/symbols only       |

**When to use**

| Use         | When                                                        |
| ----------- | ----------------------------------------------------------- |
| **Set**     | Removing duplicates, membership testing, unique collections |
| **Map**     | Key-value storage with non-string keys, need `size`         |
| **WeakSet** | Private metadata about objects, automatic cleanup           |
| **WeakMap** | Private data for objects, automatic memory cleanup          |

---

## Date

### Creating

| Method                       | Description                              |
| ---------------------------- | ---------------------------------------- |
| `new Date()`                 | Current date and time                    |
| `new Date(year, month, day)` | Specific date, month is 0-11             |
| `new Date(dateString)`       | From a date string (e.g. `"2025-01-01"`) |
| `new Date(milliseconds)`     | From milliseconds since epoch            |

### Getters

| Method                                              | Description                                 |
| --------------------------------------------------- | ------------------------------------------- |
| `getFullYear()`                                     | Year (4-digit)                              |
| `getMonth()`                                        | Month (0-11, 0 = January)                   |
| `getDate()`                                         | Day of month (1-31)                         |
| `getDay()`                                          | Day of week (0-6, 0 = Sunday)               |
| `getHours()`                                        | Hour (0-23)                                 |
| `getMinutes()`                                      | Minutes (0-59)                              |
| `getSeconds()`                                      | Seconds (0-59)                              |
| `getMilliseconds()`                                 | Milliseconds (0-999)                        |
| `getTime()`                                         | Milliseconds since Jan 1, 1970 (Unix epoch) |
| `getTimezoneOffset()`                               | Timezone offset in minutes from UTC         |
| `getUTCFullYear()`, `getUTCMonth()`, `getUTCDate()` | UTC versions of getters                     |

### Setters

| Method                                              | Description                                  |
| --------------------------------------------------- | -------------------------------------------- |
| `setFullYear(year)`                                 | Sets the year                                |
| `setMonth(month)`                                   | Sets the month (0-11)                        |
| `setDate(day)`                                      | Sets the day of month (1-31)                 |
| `setHours(h, m, s, ms)`                             | Sets the time                                |
| `setMinutes(minutes)`                               | Sets the minutes                             |
| `setSeconds(seconds)`                               | Sets the seconds                             |
| `setMilliseconds(ms)`                               | Sets the milliseconds                        |
| `setTime(ms)`                                       | Sets the Date using milliseconds since epoch |
| `setUTCFullYear()`, `setUTCMonth()`, `setUTCDate()` | UTC versions of setters                      |

### Formatting

| Method                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `toLocaleDateString()` | Localized date (e.g. `"1/15/2026"`)          |
| `toLocaleTimeString()` | Localized time (e.g. `"2:30:45 PM"`)         |
| `toLocaleString()`     | Localized date and time                      |
| `toString()`           | String representation of the Date            |
| `toISOString()`        | ISO 8601 (e.g. `"2026-01-15T14:30:45.000Z"`) |
| `toDateString()`       | Date portion (e.g. `"Thu Jan 15 2026"`)      |
| `toTimeString()`       | Time portion                                 |
| `toUTCString()`        | UTC (GMT) format                             |

### Static

| Method                   | Description                         |
| ------------------------ | ----------------------------------- |
| `Date.now()`             | Current timestamp in ms since epoch |
| `Date.parse(dateString)` | Parses a date string, returns ms    |

### Common operations

```javascript
new Date(); // Current date
new Date(year, month - 1, day); // Specific date
date.setDate(date.getDate() + n); // Add days
date.setDate(date.getDate() - n); // Subtract days
Math.floor((date2 - date1) / (1000 * 60 * 60 * 24))(
  // Day difference
  year % 4 === 0 && year % 100 !== 0,
) || year % 400 === 0; // Leap year
date.toISOString().split("T")[0]; // Format YYYY-MM-DD
new Date(year, month, 0).getDate(); // Last day of month
```

---

## Math

### Methods

| Method                              | Description                                           |
| ----------------------------------- | ----------------------------------------------------- |
| `Math.random()`                     | Random number between 0 (inclusive) and 1 (exclusive) |
| `Math.floor()`                      | Rounds down                                           |
| `Math.ceil()`                       | Rounds up                                             |
| `Math.round()`                      | Rounds to nearest integer                             |
| `Math.trunc()`                      | Removes the decimal part                              |
| `Math.abs()`                        | Absolute value                                        |
| `Math.sqrt()`                       | Square root                                           |
| `Math.cbrt()`                       | Cube root                                             |
| `Math.pow()`                        | Base raised to the power of exponent                  |
| `Math.min()`                        | Smallest of given arguments                           |
| `Math.max()`                        | Largest of given arguments                            |
| `Math.sin()` / `cos()` / `tan()`    | Sine / cosine / tangent (radians)                     |
| `Math.asin()` / `acos()` / `atan()` | Inverse sine / cosine / tangent                       |
| `Math.atan2()`                      | Arctangent of y/x in radians                          |
| `Math.sinh()` / `cosh()` / `tanh()` | Hyperbolic sine / cosine / tangent                    |
| `Math.exp()`                        | e raised to the power of x                            |
| `Math.log()`                        | Natural log (base e)                                  |
| `Math.log10()`                      | Base-10 log                                           |
| `Math.log2()`                       | Base-2 log                                            |
| `Math.sign()`                       | Sign of a number (-1, 0, or 1)                        |

### Constants

| Constant       | Value                       |
| -------------- | --------------------------- |
| `Math.PI`      | ~3.14159                    |
| `Math.E`       | ~2.71828 (Euler's number)   |
| `Math.LN2`     | ~0.693 (natural log of 2)   |
| `Math.LN10`    | ~2.303 (natural log of 10)  |
| `Math.LOG2E`   | ~1.443 (base-2 log of E)    |
| `Math.LOG10E`  | ~0.434 (base-10 log of E)   |
| `Math.SQRT1_2` | ~0.707 (square root of 0.5) |
| `Math.SQRT2`   | ~1.414 (square root of 2)   |

### Common conversions

```javascript
degrees * (Math.PI / 180); // Degrees -> Radians
radians * (180 / Math.PI); // Radians -> Degrees
Math.floor(Math.random() * (max - min + 1)) + min; // Random integer in range
a + Math.random() * (b - a); // Random number between a and b
```

---
