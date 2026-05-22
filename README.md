# Capitalize First Letter & Case Utilities

A lightweight utility library for string capitalization and advanced case conversions. Useful for formatting titles, names, variable names, or any text content.

---

## 📦 Installation

If using as part of your npm package:

```bash
npm install captialize
```

## 🚀 Usage

### Capitalize

Capitalizes the first letter of a string. By default, it capitalizes the first letter of every word.

```javascript
const { capitalize } = require('captialize');

console.log(capitalize('hello world')); // Output: "Hello World"
console.log(capitalize('hello world', { every: false })); // Output: "Hello world"
console.log(capitalize(''));      // Output: ""
console.log(capitalize(null));    // Output: ""
```

### Case Conversions

The library also includes standard case conversion utilities:

```javascript
const { 
  camelCase, 
  pascalCase, 
  snakeCase, 
  kebabCase, 
  titleCase 
} = require('captialize');

// camelCase
console.log(camelCase('Hello World')); // "helloWorld"
console.log(camelCase('--foo-bar--')); // "fooBar"

// PascalCase
console.log(pascalCase('hello world')); // "HelloWorld"

// snake_case
console.log(snakeCase('camelCase')); // "camel_case"
console.log(snakeCase('Hello World')); // "hello_world"

// kebab-case
console.log(kebabCase('hello_world')); // "hello-world"
console.log(kebabCase('camelCase')); // "camel-case"

// Title Case
console.log(titleCase('hello_world')); // "Hello World"
```