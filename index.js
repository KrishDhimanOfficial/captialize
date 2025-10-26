/**
 * Capitalizes the first letter of a text string
 * @param {string} text - The input text to capitalize
 * @returns {string} The text with first letter capitalized
 */

function capitalize(text, { every = true } = {}) {
    if (!text || typeof text !== 'string') {
        return '';
    }

    if (every) {
        return text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }
    return text.charAt(0).toUpperCase() + text.slice(1)
}

// Example usage:
// console.log(capitalize('hello world')); // Output: "Hello World"
// console.log(capitalize('world')); // Output: "World"

module.exports = { capitalize }; 