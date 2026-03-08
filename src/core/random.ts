/**
 * Seeded random number generator using Mulberry32 algorithm
 * Provides reproducible random sequences for testing
 */
export class Random {
  private static seedValue: number | null = null;

  /**
   * Initialize seeded random with a specific seed
   * Call this to reproduce the same random sequence
   * @param seed - Number seed for reproducible randomness
   */
  static seed(seed: number): void {
    this.seedValue = seed;
  }

  /**
   * Reset to native Math.random() (non-deterministic)
   */
  static unseed(): void {
    this.seedValue = null;
  }

  /**
   * Get random number (seeded or native)
   */
  private static random(): number {
    if (this.seedValue !== null) {
      // Mulberry32 algorithm
      this.seedValue |= 0;
      this.seedValue = (this.seedValue + 0x6D2B79F5) | 0;
      let t = Math.imul(this.seedValue ^ (this.seedValue >>> 15), 1 | this.seedValue);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    return Math.random();
  }

  /**
   * Get random integer between min and max (inclusive)
   */
  static int(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }

  /**
   * Get random float between min and max
   */
  static float(min: number, max: number, decimals: number = 2): number {
    const value = this.random() * (max - min) + min;
    return Number(value.toFixed(decimals));
  }

  /**
   * Get random boolean
   */
  static boolean(): boolean {
    return this.random() >= 0.5;
  }

  /**
   * Get random element from array
   */
  static pick<T>(array: T[]): T {
    return array[Math.floor(this.random() * array.length)];
  }

  /**
   * Shuffle array (Fisher-Yates algorithm)
   */
  static shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(this.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  /**
   * Generate multiple random values at once
   */
  static multiple<T>(generator: () => T, count: number): T[] {
    const results: T[] = [];
    for (let i = 0; i < count; i++) {
      results.push(generator());
    }
    return results;
  }

  /**
   * Generate unique random values (no duplicates)
   */
  static unique<T>(generator: () => T, count: number, maxAttempts: number = 1000): T[] {
    const results = new Set<T>();
    let attempts = 0;

    while (results.size < count && attempts < maxAttempts) {
      results.add(generator());
      attempts++;
    }

    if (results.size < count) {
      throw new Error(
        `Could not generate ${count} unique values after ${maxAttempts} attempts. ` +
        'The generator may have insufficient variety.'
      );
    }

    return Array.from(results);
  }
}
