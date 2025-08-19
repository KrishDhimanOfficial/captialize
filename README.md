# Capitalize First Letter

A simple utility function that capitalizes the first letter of a given string. This is useful for formatting titles, names, or any text content where the first letter should be uppercase.

https://github.com/KrishDhimanOfficial/captialize

---

## 📦 Installation

If using as part of your npm package:

```bash
npm install captialize


/**
 * Capitalizes the first letter of a text string
 * @param {string} text - The input text to capitalize
 * @returns {string} The text with first letter capitalized
 */

const { capitalizeFirstLetter } = require('captialize');

console.log(capitalizeFirstLetter('hello')); // Output: "Hello"
console.log(capitalizeFirstLetter('world')); // Output: "World"
console.log(capitalizeFirstLetter(''));      // Output: ""
console.log(capitalizeFirstLetter(null));    // Output: ""