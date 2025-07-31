/**
 * Capitalizes the first letter of a text string
 * @param {string} text - The input text to capitalize
 * @returns {string} The text with first letter capitalized
 */
function capitalizeFirstLetter(text) {
    if (!text || typeof text !== 'string') {
        return '';
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Example usage:
// console.log(capitalizeFirstLetter('hello')); // Output: "Hello"
// console.log(capitalizeFirstLetter('world')); // Output: "World"

module.exports = { capitalizeFirstLetter }; 