/**
 * Returns random integer between min and max (inclusive)
 * @param min Minimum value
 * @param max Maximum value
 */
export const randomInt = (min: number, max: number): number => {
    const random = Math.random();
    return Math.floor(random * (max - min + 1)) + min;
} 