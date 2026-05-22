/**
 * A utility library for string capitalization and case conversion.
 */

/**
 * Capitalizes the first letter of a text string.
 * 
 * @param {string} text - The input text to capitalize.
 * @param {object} [options] - Configuration options.
 * @param {boolean} [options.every=true] - If true, capitalizes the first letter of every space-separated word.
 * @returns {string} The text with the first letter capitalized.
 */
function capitalize(text, { every = true } = {}) {
    if (!text || typeof text !== 'string') {
        return '';
    }

    if (every) {
        return text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Regex used to extract words from a string for case conversions.
// Handles camelCase, PascalCase, snake_case, kebab-case, and mixed formats.
const WORD_REGEX = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;

/**
 * Extracts words from a given string.
 * 
 * @param {string} text - The string to extract words from.
 * @returns {string[]} An array of words.
 */
function extractWords(text) {
    if (!text || typeof text !== 'string') return [];
    return text.match(WORD_REGEX) || [];
}

/**
 * Converts a string to camelCase.
 * 
 * @param {string} text - The input text.
 * @returns {string} The camelCase formatted text.
 */
function camelCase(text) {
    return extractWords(text)
        .map((word, i) => {
            const lower = word.toLowerCase();
            return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

/**
 * Converts a string to PascalCase.
 * 
 * @param {string} text - The input text.
 * @returns {string} The PascalCase formatted text.
 */
function pascalCase(text) {
    return extractWords(text)
        .map(word => {
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

/**
 * Converts a string to snake_case.
 * 
 * @param {string} text - The input text.
 * @returns {string} The snake_case formatted text.
 */
function snakeCase(text) {
    return extractWords(text)
        .map(word => word.toLowerCase())
        .join('_');
}

/**
 * Converts a string to kebab-case.
 * 
 * @param {string} text - The input text.
 * @returns {string} The kebab-case formatted text.
 */
function kebabCase(text) {
    return extractWords(text)
        .map(word => word.toLowerCase())
        .join('-');
}

/**
 * Converts a string to Title Case.
 * 
 * @param {string} text - The input text.
 * @returns {string} The Title Case formatted text.
 */
function titleCase(text) {
    return extractWords(text)
        .map(word => {
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join(' ');
}

module.exports = { 
    capitalize,
    camelCase,
    pascalCase,
    snakeCase,
    kebabCase,
    titleCase
};