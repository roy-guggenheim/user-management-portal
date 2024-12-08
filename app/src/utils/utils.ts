/**
 * Capitalizes the first letter of a string
 * @param str String to capitalize
 * @returns String with the first letter capitalized
 */
export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Returns random integer between min and max (inclusive)
 * @param min Minimum value
 * @param max Maximum value
 */
export const randomInt = (min: number, max: number) => {
    const random = Math.random();
    return Math.floor(random * (max - min + 1)) + min;
}

/**
 * Returns a random subset of elements from a list
 * @param list List of elements
 * @param length Length of the subset
 * @returns New array with random elements from the list
 */
export function getRandomElements<T>(list: T[], length: number): T[] {
    if (length >= list.length) return [...list];
    if (length <= 0) return [];

    const shuffled = [...list];

    for (let i = 0; i < length; i++) {
        const j = i + Math.floor(Math.random() * (list.length - i));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, length);
}