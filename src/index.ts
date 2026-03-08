import { Mimic } from './core/mimic';
import { localeRegistry } from './core/registry';

// Import existing locales
import { en_US } from './locales/en_US';
import { ja_JP } from './locales/ja_JP';
import { id_ID } from './locales/id_ID';
import { de_DE } from './locales/de_DE';
import { fr_FR } from './locales/fr_FR';
import { pt_BR } from './locales/pt_BR';
import { ko_KR } from './locales/ko_KR';
import { en_AU } from './locales/en_AU';

// Import new locales (20 original)
import { zh_CN } from './locales/zh_CN';
import { en_IN } from './locales/en_IN';
import { es_MX } from './locales/es_MX';
import { it_IT } from './locales/it_IT';
import { es_ES } from './locales/es_ES';
import { nl_NL } from './locales/nl_NL';
import { en_CA } from './locales/en_CA';
import { en_GB } from './locales/en_GB';
import { ru_RU } from './locales/ru_RU';
import { pl_PL } from './locales/pl_PL';
import { tr_TR } from './locales/tr_TR';
import { sv_SE } from './locales/sv_SE';
import { nb_NO } from './locales/nb_NO';
import { da_DK } from './locales/da_DK';
import { fi_FI } from './locales/fi_FI';
import { es_AR } from './locales/es_AR';
import { es_CL } from './locales/es_CL';
import { th_TH } from './locales/th_TH';
import { vi_VN } from './locales/vi_VN';
import { ms_MY } from './locales/ms_MY';

// Import newest locales (16 additional)
import { en_SG } from './locales/en_SG';
import { en_PH } from './locales/en_PH';
import { en_NZ } from './locales/en_NZ';
import { en_ZA } from './locales/en_ZA';
import { pt_PT } from './locales/pt_PT';
import { el_GR } from './locales/el_GR';
import { cs_CZ } from './locales/cs_CZ';
import { de_AT } from './locales/de_AT';
import { de_CH } from './locales/de_CH';
import { nl_BE } from './locales/nl_BE';
import { hu_HU } from './locales/hu_HU';
import { ro_RO } from './locales/ro_RO';
import { ar_AE } from './locales/ar_AE';
import { ar_SA } from './locales/ar_SA';
import { ar_EG } from './locales/ar_EG';
import { he_IL } from './locales/he_IL';

// Import new locales - Eastern Europe
import { uk_UA } from './locales/uk_UA';
import { sk_SK } from './locales/sk_SK';
import { hr_HR } from './locales/hr_HR';
import { rs_RS } from './locales/rs_RS';
import { lt_LT } from './locales/lt_LT';
import { lv_LV } from './locales/lv_LV';
import { et_EE } from './locales/et_EE';
import { bg_BG } from './locales/bg_BG';
import { is_IS } from './locales/is_IS';

// Import new locales - Africa & Middle East
import { ng_NG } from './locales/ng_NG';
import { ke_KE } from './locales/ke_KE';
import { pk_PK } from './locales/pk_PK';
import { bd_BD } from './locales/bd_BD';
import { ir_IR } from './locales/ir_IR';
import { ma_MA } from './locales/ma_MA';

// Import new locales - Americas
import { co_CO } from './locales/co_CO';
import { pe_PE } from './locales/pe_PE';
import { ve_VE } from './locales/ve_VE';
import { gt_GT } from './locales/gt_GT';
import { cr_CR } from './locales/cr_CR';

// Import new locales - Asia
import { tw_TW } from './locales/tw_TW';

// Export types
export type {
  Gender,
  MetricSystem,
  PersonData,
  AddressData,
  PhysicalData,
  WorkData,
  AgeRange,
  LocaleData,
  LocaleDefinition
} from './types';

// Export core classes
export { Mimic } from './core/mimic';
export { Random } from './core/random';
export { localeRegistry } from './core/registry';

/**
 * ============================================
 * AUTO-REGISTRATION OF LOCALES
 * ============================================
 * Register all locales with their aliases
 */

// Original 8 locales
localeRegistry.register('en_US', en_US, ['en', 'us', 'usa']);
localeRegistry.register('ja_JP', ja_JP, ['ja', 'jp', 'japan']);
localeRegistry.register('id_ID', id_ID, ['id', 'indonesia']);
localeRegistry.register('de_DE', de_DE, ['de', 'germany', 'deutsch']);
localeRegistry.register('fr_FR', fr_FR, ['fr', 'france']);
localeRegistry.register('pt_BR', pt_BR, ['pt', 'br', 'brazil', 'brasil']);
localeRegistry.register('ko_KR', ko_KR, ['ko', 'kr', 'korea']);
localeRegistry.register('en_AU', en_AU, ['au', 'aus', 'australia']);

// New 20 locales
localeRegistry.register('zh_CN', zh_CN, ['zh', 'cn', 'china']);
localeRegistry.register('en_IN', en_IN, ['in', 'india']);
localeRegistry.register('es_MX', es_MX, ['mx', 'mexico']);
localeRegistry.register('it_IT', it_IT, ['it', 'italy', 'italia']);
localeRegistry.register('es_ES', es_ES, ['es', 'spain', 'españa']);
localeRegistry.register('nl_NL', nl_NL, ['nl', 'netherlands', 'holland']);
localeRegistry.register('en_CA', en_CA, ['ca', 'canada']);
localeRegistry.register('en_GB', en_GB, ['gb', 'uk', 'britain']);
localeRegistry.register('ru_RU', ru_RU, ['ru', 'russia']);
localeRegistry.register('pl_PL', pl_PL, ['pl', 'poland', 'polska']);
localeRegistry.register('tr_TR', tr_TR, ['tr', 'turkey', 'turkiye']);
localeRegistry.register('sv_SE', sv_SE, ['sv', 'se', 'sweden', 'sverige']);
localeRegistry.register('nb_NO', nb_NO, ['no', 'norway', 'norge']);
localeRegistry.register('da_DK', da_DK, ['da', 'dk', 'denmark', 'danmark']);
localeRegistry.register('fi_FI', fi_FI, ['fi', 'finland', 'suomi']);
localeRegistry.register('es_AR', es_AR, ['ar', 'argentina']);
localeRegistry.register('es_CL', es_CL, ['cl', 'chile']);
localeRegistry.register('th_TH', th_TH, ['th', 'thailand']);
localeRegistry.register('vi_VN', vi_VN, ['vi', 'vn', 'vietnam']);
localeRegistry.register('ms_MY', ms_MY, ['ms', 'my', 'malaysia']);

// Newest 16 locales
localeRegistry.register('en_SG', en_SG, ['sg', 'singapore']);
localeRegistry.register('en_PH', en_PH, ['ph', 'philippines']);
localeRegistry.register('en_NZ', en_NZ, ['nz', 'new-zealand']);
localeRegistry.register('en_ZA', en_ZA, ['za', 'south-africa']);
localeRegistry.register('pt_PT', pt_PT, ['portugal']);
localeRegistry.register('el_GR', el_GR, ['el', 'gr', 'greece']);
localeRegistry.register('cs_CZ', cs_CZ, ['cs', 'cz', 'czech']);
localeRegistry.register('de_AT', de_AT, ['at', 'austria']);
localeRegistry.register('de_CH', de_CH, ['ch', 'switzerland']);
localeRegistry.register('nl_BE', nl_BE, ['be', 'belgium']);
localeRegistry.register('hu_HU', hu_HU, ['hu', 'hungary']);
localeRegistry.register('ro_RO', ro_RO, ['ro', 'romania']);
localeRegistry.register('ar_AE', ar_AE, ['ae', 'uae', 'emirates']);
localeRegistry.register('ar_SA', ar_SA, ['sa', 'saudi', 'saudi-arabia']);
localeRegistry.register('ar_EG', ar_EG, ['eg', 'egypt']);
localeRegistry.register('he_IL', he_IL, ['he', 'il', 'israel']);

// Eastern Europe locales
localeRegistry.register('uk_UA', uk_UA, ['ua', 'ukraine']);
localeRegistry.register('sk_SK', sk_SK, ['sk', 'slovakia']);
localeRegistry.register('hr_HR', hr_HR, ['hr', 'croatia']);
localeRegistry.register('rs_RS', rs_RS, ['rs', 'serbia']);
localeRegistry.register('lt_LT', lt_LT, ['lt', 'lithuania']);
localeRegistry.register('lv_LV', lv_LV, ['lv', 'latvia']);
localeRegistry.register('et_EE', et_EE, ['ee', 'estonia']);
localeRegistry.register('bg_BG', bg_BG, ['bg', 'bulgaria']);
localeRegistry.register('is_IS', is_IS, ['is', 'iceland']);

// Africa & Middle East locales
localeRegistry.register('ng_NG', ng_NG, ['ng', 'nigeria']);
localeRegistry.register('ke_KE', ke_KE, ['ke', 'kenya']);
localeRegistry.register('pk_PK', pk_PK, ['pk', 'pakistan']);
localeRegistry.register('bd_BD', bd_BD, ['bd', 'bangladesh']);
localeRegistry.register('ir_IR', ir_IR, ['ir', 'iran']);
localeRegistry.register('ma_MA', ma_MA, ['ma', 'morocco']);

// Americas locales
localeRegistry.register('co_CO', co_CO, ['co', 'colombia']);
localeRegistry.register('pe_PE', pe_PE, ['pe', 'peru']);
localeRegistry.register('ve_VE', ve_VE, ['ve', 'venezuela']);
localeRegistry.register('gt_GT', gt_GT, ['gt', 'guatemala']);
localeRegistry.register('cr_CR', cr_CR, ['cr', 'costa-rica']);

// Asia locales
localeRegistry.register('tw_TW', tw_TW, ['tw', 'taiwan']);

/**
 * Factory function to create Mimic instance with specified locale
 */
export function createMimic(locale: string = 'en_US'): Mimic {
  const localeDefinition = localeRegistry.get(locale);
  
  if (!localeDefinition) {
    const available = localeRegistry.getAllCodes().join(', ');
    throw new Error(
      `Locale '${locale}' not found.\n` +
      `Available locales: ${available}`
    );
  }
  
  return new Mimic(localeDefinition);
}

/**
 * Get available main locale codes
 */
export function getAvailableLocales(): string[] {
  return localeRegistry.getAvailableLocales();
}

/**
 * Get all codes (locales + aliases)
 */
export function getAllLocaleCodes(): string[] {
  return localeRegistry.getAllCodes();
}

/**
 * Export all locale definitions for advanced usage
 */
export const locales = {
  // Original 8
  en_US, ja_JP, id_ID, de_DE, fr_FR, pt_BR, ko_KR, en_AU,
  // New (20)
  zh_CN, en_IN, es_MX, it_IT, es_ES, nl_NL, en_CA, en_GB,
  ru_RU, pl_PL, tr_TR, sv_SE, nb_NO, da_DK, fi_FI,
  es_AR, es_CL, th_TH, vi_VN, ms_MY,
  // Newest (16)
  en_SG, en_PH, en_NZ, en_ZA, pt_PT, el_GR, cs_CZ, de_AT,
  de_CH, nl_BE, hu_HU, ro_RO, ar_AE, ar_SA, ar_EG, he_IL,
  // Eastern Europe (9)
  uk_UA, sk_SK, hr_HR, rs_RS, lt_LT, lv_LV, et_EE, bg_BG, is_IS,
  // Africa & Middle East (6)
  ng_NG, ke_KE, pk_PK, bd_BD, ir_IR, ma_MA,
  // Americas (5)
  co_CO, pe_PE, ve_VE, gt_GT, cr_CR,
  // Asia (1)
  tw_TW
};

// Default export
export default createMimic;