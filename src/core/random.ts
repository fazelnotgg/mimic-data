/**
 * Random utility functions using native Math.random()
 */
export class Random {
  /**
   * Get random element from array
   */
  static pick<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Get random integer between min and max (inclusive)
   */
  static int(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Get random float between min and max
   */
  static float(min: number, max: number, decimals: number = 2): number {
    const value = Math.random() * (max - min) + min;
    return Number(value.toFixed(decimals));
  }

  /**
   * Get random boolean
   */
  static boolean(): boolean {
    return Math.random() >= 0.5;
  }

  /**
   * Shuffle array (Fisher-Yates algorithm)
   */
  static shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}