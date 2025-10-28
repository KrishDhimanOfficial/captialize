# Capitalize First Letter

A simple utility function that capitalizes the first letter of a given string. This is useful for formatting titles, names, or any text content where the first letter should be uppercase.

---

## 📦 Installation

If using as part of your npm package:

```bash

/**
 * Capitalizes the first letter of a text string
 * @param {string} text - The input text to capitalize
 * @returns {string} The text with first letter capitalized
 */

const { capitalize } = require('captialize');

console.log(capitalize('hello world',{every:true})) // Output: "Hello World"
console.log(capitalize('hello')); // Output: "Hello"
console.log(capitalize('world')); // Output: "World"
console.log(capitalize(''));      // Output: ""
console.log(capitalize(null));    // Output: ""