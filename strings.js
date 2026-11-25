// 1.How to reverse a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// --------------------------------------------------------------------------------
// 2.How would you check if a string is a palindrome?
function isPalindrome(str) {
  const normalizedStr = str.toLowerCase();
  const len = normalizedStr.length;

  for (let i = 0; i < len / 2; i++) {
    if (normalizedStr[i] !== normalizedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// --------------------------------------------------------------------------------
// 3.How to counts the occurrences of a substring in a string.
function countSubstring(str, substr) {
  let count = 0;
  let position = 0;

  while (position < str.length) {
    position = str.indexOf(substr, position);
    if (position !== -1) {
      count++;
      position += substr.length;
    } else {
      break;
    }
  }
  return count;
}

console.log(countSubstring("hello world hello", "hello"));

// --------------------------------------------------------------------------------
// 4.Use `.split()` to convert a string into an array of words.
const str4 = "This is a string";
const words = str4.split(" ");
console.log(words);

// --------------------------------------------------------------------------------
// 5.How to find the longest word in a string.
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"));

// --------------------------------------------------------------------------------
// 6.How would you remove whitespace from the beginning and end of a string?
const str6 = "   hello world   ";
const trimmedStr = str6.trim();
console.log(trimmedStr);

// --------------------------------------------------------------------------------
// 7.How to converts a string to uppercase.
const str7 = "hello";
const upperStr = str7.toUpperCase();
console.log(upperStr);

// --------------------------------------------------------------------------------
// 8.Use `.substring()` to extract a part of a string.
const str8 = "hello world";
const subStr = str8.substring(0, 5);
console.log(subStr);

// --------------------------------------------------------------------------------
// 9.Write a program to find the first non-repeating character in a string.
function firstNonRepeating(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeating("swiss"));

// --------------------------------------------------------------------------------
// 10.How would you check if a string contains another string?
const str10 = "hello world";
console.log(str10.includes("world"));
console.log(str10.includes("earth"));

// --------------------------------------------------------------------------------
// 11.How to replaces a word in a string with another word.
const str11 = "hello world";
const newStr = str11.replace("world", "everyone");
console.log(newStr);

// --------------------------------------------------------------------------------
// 12.Use `.match()` to find all occurrences of a word in a string.
const str12 = "the quick brown fox jumps over the lazy dog";
const matches = str12.match(/the/g);
console.log(matches);

// --------------------------------------------------------------------------------
// 13.How to capitalize the first letter of each word in a string.
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(capitalizeWords("hello world"));

// --------------------------------------------------------------------------------
// 14.How would you compare two strings in a case-insensitive manner?
const str141 = "hello";
const str142 = "HELLO";

console.log(str141.toLowerCase() === str142.toLowerCase());

// --------------------------------------------------------------------------------
// 15.How to removes all vowels from a string.
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log(removeVowels("hello world"));

// --------------------------------------------------------------------------------
// 16.Use `.indexOf()` to find the index of the first occurrence of a substring.
const str16 = "hello world";
const index = str16.indexOf("world");
console.log(index);

// --------------------------------------------------------------------------------
// 17.How to check if a string starts with a given prefix.
const str17 = "hello world";
console.log(str17.startsWith("hello"));
console.log(str17.startsWith("world"));

// --------------------------------------------------------------------------------
// 18.How would you check if a string ends with a given suffix?
const str18 = "hello world";
console.log(str18.endsWith("world"));
console.log(str18.endsWith("hello"));

// --------------------------------------------------------------------------------
// 19.How to repeat a string `n` times.
function repeatString(str, n) {
  return str.repeat(n);
}

console.log(repeatString("hello", 3));

// --------------------------------------------------------------------------------
// 20.Use `.replace()` to remove all digits from a string.
const str20 = "hello123world456";
const result = str20.replace(/\d/g, "");
console.log(result);

// --------------------------------------------------------------------------------
// 21.How to finds the common prefix in an array of strings.
function commonPrefix(arr) {
  if (!arr.length) return "";

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

console.log(commonPrefix(["flower", "flow", "flight"]));

// --------------------------------------------------------------------------------
// 22.How would you check if a string contains only digits?
function isOnlyDigits(str) {
  return /^\d+$/.test(str);
}

console.log(isOnlyDigits("12345"));
console.log(isOnlyDigits("123a5"));

// --------------------------------------------------------------------------------
// 23.How to remove all whitespace characters from a string.
const str23 = "hello    world  ";
const noWhitespace = str23.replace(/\s+/g, "");
console.log(noWhitespace);

// --------------------------------------------------------------------------------
// 24.Use `.split()` to reverse the order of words in a string.
const str24 = "hello world how are you";
const reversed = str24.split(" ").reverse().join(" ");
console.log(reversed);

// --------------------------------------------------------------------------------
// 25.How to converts a string into an array of characters.
const str25 = "hello";
const chars = str25.split("");
console.log(chars);

// --------------------------------------------------------------------------------
// 26.How would you implement a function that trims the extra spaces inside a string?
function trimExtraSpaces(str) {
  return str.replace(/\s+/g, " ").trim();
}

console.log(trimExtraSpaces("  hello    world  "));

// --------------------------------------------------------------------------------
// 27.Write a program to find the longest substring without repeating characters.
function longestSubstring(str) {
  let maxLength = 0;
  let start = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    if (seen[str[end]] !== undefined) {
      start = Math.max(start, seen[str[end]] + 1);
    }
    seen[str[end]] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestSubstring("abcabcbb"));

// --------------------------------------------------------------------------------
// 28.Use `.charAt()` to get the character at a specific index of a string.
const str28 = "hello";
const char = str28.charAt(1);
console.log(char);

// --------------------------------------------------------------------------------
// 29.How to convert a string into title case.
function toTitleCase(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(toTitleCase("hello world"));

// --------------------------------------------------------------------------------
// 30.How would you check if a string is a valid email address?
function isValidEmail(str) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(str);
}

console.log(isValidEmail("test@example.com"));
console.log(isValidEmail("invalid-email"));

// --------------------------------------------------------------------------------
// 31.How to removes all special characters from a string.
function removeSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9\s]/g, "");
}

console.log(removeSpecialChars("Hello! World@123"));

// --------------------------------------------------------------------------------
// 32.How would you implement `.toLowerCase()` for strings manually?
function toLowerCaseManual(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result +=
      char >= "A" && char <= "Z"
        ? String.fromCharCode(char.charCodeAt(0) + 32)
        : char;
  }
  return result;
}

console.log(toLowerCaseManual("HELLO WORLD"));

// --------------------------------------------------------------------------------
// 33.How to counts the number of words in a string.
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

console.log(countWords("Hello world, this is JavaScript."));

// --------------------------------------------------------------------------------
// 34.Use `.split()` to turn a string into an array of lines (split by newline character).
const str = "First line\nSecond line\nThird line";
const lines = str.split("\n");
console.log(lines);

// --------------------------------------------------------------------------------
// 35.How would you find the second most frequent character in a string?
function secondMostFrequent(str) {
  const freqMap = {};

  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  const frequencies = Object.values(freqMap).sort((a, b) => b - a);

  if (frequencies.length < 2) {
    return null;
  }

  const secondFreq = frequencies[1];

  for (let char in freqMap) {
    if (freqMap[char] === secondFreq) {
      return char;
    }
  }
  return null;
}

console.log(secondMostFrequent("aabbbcc"));
console.log(secondMostFrequent("aaa"));
console.log(secondMostFrequent("aabb"));

// --------------------------------------------------------------------------------
// 36.How to reverse words in a string without changing the word order.
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Hello world"));

// --------------------------------------------------------------------------------
// 37.Use `.replace()` to replace the first occurrence of a substring in a string.
const str37 = "I love JavaScript. JavaScript is fun.";
const newStr37 = str37.replace("JavaScript", "Python");
console.log(newStr37);

// --------------------------------------------------------------------------------
// 38.How to compares two strings ignoring spaces and punctuation.
function compareStringsIgnoreSpaces(str1, str2) {
  const cleanStr = (str) => str.replace(/[^\w]/g, "").toLowerCase();

  return cleanStr(str1) === cleanStr(str2);
}

console.log(compareStringsIgnoreSpaces("Hello, World!", "Hello World"));

// --------------------------------------------------------------------------------
// 39.How would you implement `.concat()` for strings manually?
function concatStrings(str1, str2) {
  return str1 + str2;
}

console.log(concatStrings("Hello", " World"));

// --------------------------------------------------------------------------------
// 40.Write a program to remove all numeric digits from a string.
// Refer question 20
// --------------------------------------------------------------------------------
// 41.How would you check if a string contains any numbers?
function containsNumbers(str) {
  return /\d/.test(str);
}

console.log(containsNumbers("Hello123"));
console.log(containsNumbers("Hello"));

// --------------------------------------------------------------------------------
// 42.How to check if a string is a valid palindrome, ignoring spaces and punctuation.
function isValidPalindrome(str) {
  const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
  const reversed = cleanStr.split("").reverse().join("");

  return cleanStr === reversed;
}

console.log(isValidPalindrome("A man, a plan, a canal, Panama"));

// --------------------------------------------------------------------------------
// 43.Use `.split()` to turn a sentence into an array of words and sort them alphabetically.
const sentence = "hello world this is JavaScript";
const sortedWords = sentence.split(" ").sort();
console.log(sortedWords);

// --------------------------------------------------------------------------------
// 44.How to find the index of the last occurrence of a character in a string.
function lastIndexOfChar(str, char) {
  return str.lastIndexOf(char);
}

console.log(lastIndexOfChar("hello world", "o"));

// --------------------------------------------------------------------------------
// 45.How would you implement `.repeat()` without using the built-in method?
function repeatString(str, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

console.log(repeatString("hello", 3));

// --------------------------------------------------------------------------------
// 46.Write a program to remove all vowels from a string using regular expressions.
function removeVowelsWithRegex(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log(removeVowelsWithRegex("hello world"));

// --------------------------------------------------------------------------------
// 47.How would you convert a string into a number without using `parseInt`?
function stringToNumber(str) {
  return +str;
}

console.log(stringToNumber("1234"));

// --------------------------------------------------------------------------------
// 48.How to finds the frequency of each letter in a string.
function letterFrequency(str) {
  const freqMap = {};
  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }
  return freqMap;
}

console.log(letterFrequency("hello world"));

// --------------------------------------------------------------------------------
// 49.How would you find all the distinct characters in a string?
function distinctCharacters(str) {
  return [...new Set(str)].join("");
}

console.log(distinctCharacters("hello world"));

// --------------------------------------------------------------------------------
// 50.How to find the longest substring between two given characters in a string.
function longestSubstringBetweenChars(str, char1, char2) {
  const start = str.indexOf(char1);
  const end = str.lastIndexOf(char2);

  if (start === -1 || end === -1 || start >= end) return "";

  return str.substring(start + 1, end);
}

console.log(longestSubstringBetweenChars("hello [world] here", "[", "]"));

// --------------------------------------------------------------------------------
// 51.Print all the alphabets using forEach
const alphabets = "abcdefghijklmnopqrstuvwxyz";
[...alphabets].forEach((letter) => console.log(letter));
