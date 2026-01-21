import { LocaleDefinition } from '../types';

/**
 * Locale Registry untuk manajemen locale yang efisien
 * Mendukung lazy loading dan auto-registration
 */
class LocaleRegistry {
  private locales: Map<string, LocaleDefinition> = new Map();
  private aliases: Map<string, string> = new Map();

  /**
   * Register locale baru
   * @param code - Kode locale utama (contoh: 'en_US')
   * @param definition - Definisi locale
   * @param aliasesArray - Array alias untuk locale ini (contoh: ['en', 'us'])
   */
  register(
    code: string,
    definition: LocaleDefinition,
    aliasesArray: string[] = []
  ): void {
    this.locales.set(code, definition);
    
    // Register aliases
    for (const alias of aliasesArray) {
      this.aliases.set(alias, code);
    }
  }

  /**
   * Get locale definition
   * @param code - Kode locale atau alias
   * @returns LocaleDefinition atau undefined
   */
  get(code: string): LocaleDefinition | undefined {
    // Cek langsung di locales
    if (this.locales.has(code)) {
      return this.locales.get(code);
    }
    
    // Cek di aliases
    const mainCode = this.aliases.get(code);
    if (mainCode) {
      return this.locales.get(mainCode);
    }
    
    return undefined;
  }

  /**
   * Check apakah locale tersedia
   */
  has(code: string): boolean {
    return this.locales.has(code) || this.aliases.has(code);
  }

  /**
   * Get semua locale yang tersedia
   */
  getAvailableLocales(): string[] {
    return Array.from(this.locales.keys());
  }

  /**
   * Get semua aliases yang tersedia
   */
  getAvailableAliases(): string[] {
    return Array.from(this.aliases.keys());
  }

  /**
   * Get semua kode (locale + aliases)
   */
  getAllCodes(): string[] {
    return [
      ...this.getAvailableLocales(),
      ...this.getAvailableAliases()
    ];
  }
}

// Singleton instance
export const localeRegistry = new LocaleRegistry();