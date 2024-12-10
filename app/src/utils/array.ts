/**
 * Returns a random subset of elements from a list using Fisher-Yates shuffle
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