/**
 * Capitalizes the first letter of a string
 * @param str String to capitalize
 * @returns String with the first letter capitalized
 */
export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
} 