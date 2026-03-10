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
import { en_NG } from './locales/en_NG';
import { en_KE } from './locales/en_KE';
import { en_PK } from './locales/en_PK';
import { bn_BD } from './locales/bn_BD';
import { fa_IR } from './locales/fa_IR';
import { ar_MA } from './locales/ar_MA';

// Import new locales - Americas
import { es_CO } from './locales/es_CO';
import { es_PE } from './locales/es_PE';
import { es_VE } from './locales/es_VE';
import { es_GT } from './locales/es_GT';
import { es_CR } from './locales/es_CR';

// Import new locales - Asia
import { zh_TW } from './locales/zh_TW';

// Import additional locales - Middle East
import { ar_IQ } from './locales/ar_IQ';
import { ar_KW } from './locales/ar_KW';
import { ar_QA } from './locales/ar_QA';
import { ar_BH } from './locales/ar_BH';
import { ar_DZ } from './locales/ar_DZ';
import { ar_JO } from './locales/ar_JO';
import { ar_LB } from './locales/ar_LB';
import { ar_LY } from './locales/ar_LY';
import { ar_OM } from './locales/ar_OM';
import { ar_SD } from './locales/ar_SD';
import { ar_SY } from './locales/ar_SY';
import { ar_TN } from './locales/ar_TN';
import { ar_YE } from './locales/ar_YE';

// Import additional locales - Europe
import { en_IE } from './locales/en_IE';
import { fr_BE } from './locales/fr_BE';
import { fr_CH } from './locales/fr_CH';
import { de_LI } from './locales/de_LI';
import { de_LU } from './locales/de_LU';
import { it_CH } from './locales/it_CH';
import { ca_ES } from './locales/ca_ES';
import { fr_LU } from './locales/fr_LU';

// Import additional locales - Americas
import { fr_CA } from './locales/fr_CA';
import { es_EC } from './locales/es_EC';
import { es_BO } from './locales/es_BO';
import { es_PY } from './locales/es_PY';
import { es_US } from './locales/es_US';
import { es_DO } from './locales/es_DO';

// Import additional locales - Asia
import { zh_HK } from './locales/zh_HK';
import { hi_IN } from './locales/hi_IN';
import { ne_NP } from './locales/ne_NP';
import { ur_PK } from './locales/ur_PK';
import { bn_IN } from './locales/bn_IN';

// Import additional locales - Africa
import { sw_KE } from './locales/sw_KE';
import { sw_TZ } from './locales/sw_TZ';
import { af_ZA } from './locales/af_ZA';
import { pt_MZ } from './locales/pt_MZ';

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
localeRegistry.register('en_NG', en_NG, ['ng', 'nigeria']);
localeRegistry.register('en_KE', en_KE, ['ke', 'kenya']);
localeRegistry.register('en_PK', en_PK, ['pk', 'pakistan']);
localeRegistry.register('bn_BD', bn_BD, ['bd', 'bangladesh', 'bengali']);
localeRegistry.register('fa_IR', fa_IR, ['fa', 'persian', 'farsi']);
localeRegistry.register('ar_MA', ar_MA, ['ma', 'morocco', 'arabic-morocco']);

// Americas locales
localeRegistry.register('es_CO', es_CO, ['co', 'colombia']);
localeRegistry.register('es_PE', es_PE, ['pe', 'peru']);
localeRegistry.register('es_VE', es_VE, ['ve', 'venezuela']);
localeRegistry.register('es_GT', es_GT, ['gt', 'guatemala']);
localeRegistry.register('es_CR', es_CR, ['cr', 'costa-rica']);

// Asia locales
localeRegistry.register('zh_TW', zh_TW, ['tw', 'taiwan']);

// Additional Middle East locales
localeRegistry.register('ar_IQ', ar_IQ, ['iq', 'iraq', 'mesopotamia']);
localeRegistry.register('ar_KW', ar_KW, ['kw', 'kuwait']);
localeRegistry.register('ar_QA', ar_QA, ['qa', 'qatar']);
localeRegistry.register('ar_BH', ar_BH, ['bh', 'bahrain']);
localeRegistry.register('ar_DZ', ar_DZ, ['dz', 'algeria', 'algerie']);
localeRegistry.register('ar_JO', ar_JO, ['jo', 'jordan', 'jordanie']);
localeRegistry.register('ar_LB', ar_LB, ['lb', 'lebanon', 'liban']);
localeRegistry.register('ar_LY', ar_LY, ['ly', 'libya', 'libye']);
localeRegistry.register('ar_OM', ar_OM, ['om', 'oman']);
localeRegistry.register('ar_SD', ar_SD, ['sd', 'sudan']);
localeRegistry.register('ar_SY', ar_SY, ['sy', 'syria', 'syrie']);
localeRegistry.register('ar_TN', ar_TN, ['tn', 'tunisia', 'tunisie']);
localeRegistry.register('ar_YE', ar_YE, ['ye', 'yemen']);

// Additional Europe locales
localeRegistry.register('en_IE', en_IE, ['ie', 'ireland', 'eire']);
localeRegistry.register('fr_BE', fr_BE, ['fr-be', 'wallonia', 'brussels']);
localeRegistry.register('fr_CH', fr_CH, ['fr-ch', 'romandie', 'geneva', 'lausanne']);
localeRegistry.register('de_LI', de_LI, ['li', 'liechtenstein']);
localeRegistry.register('de_LU', de_LU, ['de-lu', 'luxembourg-german']);
localeRegistry.register('it_CH', it_CH, ['it-ch', 'ticino', 'swiss-italian']);
localeRegistry.register('ca_ES', ca_ES, ['ca', 'catalonia', 'catalan']);
localeRegistry.register('fr_LU', fr_LU, ['fr-lu', 'luxembourg-french']);

// Additional Americas locales
localeRegistry.register('fr_CA', fr_CA, ['fr-ca', 'quebec', 'qc', 'canada-fr']);
localeRegistry.register('es_EC', es_EC, ['ec', 'ecuador']);
localeRegistry.register('es_BO', es_BO, ['bo', 'bolivia']);
localeRegistry.register('es_PY', es_PY, ['py', 'paraguay']);
localeRegistry.register('es_US', es_US, ['es-us', 'spanish-american', 'latino']);
localeRegistry.register('es_DO', es_DO, ['do', 'dominican-republic']);

// Additional Asia locales
localeRegistry.register('zh_HK', zh_HK, ['hk', 'hongkong', 'hong-kong']);
localeRegistry.register('hi_IN', hi_IN, ['hi', 'hindi', 'hindustan']);
localeRegistry.register('ne_NP', ne_NP, ['np', 'nepal', 'nepali']);
localeRegistry.register('ur_PK', ur_PK, ['ur', 'urdu', 'pakistan-urdu']);
localeRegistry.register('bn_IN', bn_IN, ['bn-in', 'bengali-india', 'west-bengal']);

// Additional Africa locales
localeRegistry.register('sw_KE', sw_KE, ['sw-ke', 'kenya-swahili']);
localeRegistry.register('sw_TZ', sw_TZ, ['sw-tz', 'tanzania-swahili']);
localeRegistry.register('af_ZA', af_ZA, ['af', 'afrikaans', 'south-africa-af']);
localeRegistry.register('pt_MZ', pt_MZ, ['mz', 'mozambique']);

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
  en_NG, en_KE, en_PK, bn_BD, fa_IR, ar_MA,
  // Americas (5)
  es_CO, es_PE, es_VE, es_GT, es_CR,
  // Asia (1)
  zh_TW,
  // Additional Middle East (13)
  ar_IQ, ar_KW, ar_QA, ar_BH, ar_DZ, ar_JO, ar_LB, ar_LY, ar_OM, ar_SD, ar_SY, ar_TN, ar_YE,
  // Additional Europe (8)
  en_IE, fr_BE, fr_CH, de_LI, de_LU, it_CH, ca_ES, fr_LU,
  // Additional Americas (6)
  fr_CA, es_EC, es_BO, es_PY, es_US, es_DO,
  // Additional Asia (5)
  zh_HK, hi_IN, ne_NP, ur_PK, bn_IN,
  // Additional Africa (4)
  sw_KE, sw_TZ, af_ZA, pt_MZ
};

// Default export
export default createMimic;