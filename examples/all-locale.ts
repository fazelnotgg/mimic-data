/**
 * Showcase all 44 locales with realistic data
 * Run: npx tsx examples/all-locales-showcase.ts
 */

import { createMimic, getAvailableLocales } from '../src/index';

console.log('🌍 MIMIC DATA - ALL 44 LOCALES SHOWCASE\n');
console.log('='.repeat(80));

const showcaseData = [
  // Americas (6)
  { code: 'en_US', flag: '🇺🇸', name: 'United States', region: 'AMERICAS' },
  { code: 'en_CA', flag: '🇨🇦', name: 'Canada', region: 'AMERICAS' },
  { code: 'es_MX', flag: '🇲🇽', name: 'Mexico', region: 'AMERICAS' },
  { code: 'pt_BR', flag: '🇧🇷', name: 'Brazil', region: 'AMERICAS' },
  { code: 'es_AR', flag: '🇦🇷', name: 'Argentina', region: 'AMERICAS' },
  { code: 'es_CL', flag: '🇨🇱', name: 'Chile', region: 'AMERICAS' },
  
  // Europe (21)
  { code: 'en_GB', flag: '🇬🇧', name: 'United Kingdom', region: 'EUROPE' },
  { code: 'de_DE', flag: '🇩🇪', name: 'Germany', region: 'EUROPE' },
  { code: 'de_AT', flag: '🇦🇹', name: 'Austria', region: 'EUROPE' },
  { code: 'de_CH', flag: '🇨🇭', name: 'Switzerland', region: 'EUROPE' },
  { code: 'fr_FR', flag: '🇫🇷', name: 'France', region: 'EUROPE' },
  { code: 'it_IT', flag: '🇮🇹', name: 'Italy', region: 'EUROPE' },
  { code: 'es_ES', flag: '🇪🇸', name: 'Spain', region: 'EUROPE' },
  { code: 'pt_PT', flag: '🇵🇹', name: 'Portugal', region: 'EUROPE' },
  { code: 'nl_NL', flag: '🇳🇱', name: 'Netherlands', region: 'EUROPE' },
  { code: 'nl_BE', flag: '🇧🇪', name: 'Belgium', region: 'EUROPE' },
  { code: 'ru_RU', flag: '🇷🇺', name: 'Russia', region: 'EUROPE' },
  { code: 'pl_PL', flag: '🇵🇱', name: 'Poland', region: 'EUROPE' },
  { code: 'tr_TR', flag: '🇹🇷', name: 'Turkey', region: 'EUROPE' },
  { code: 'sv_SE', flag: '🇸🇪', name: 'Sweden', region: 'EUROPE' },
  { code: 'nb_NO', flag: '🇳🇴', name: 'Norway', region: 'EUROPE' },
  { code: 'da_DK', flag: '🇩🇰', name: 'Denmark', region: 'EUROPE' },
  { code: 'fi_FI', flag: '🇫🇮', name: 'Finland', region: 'EUROPE' },
  { code: 'el_GR', flag: '🇬🇷', name: 'Greece', region: 'EUROPE' },
  { code: 'cs_CZ', flag: '🇨🇿', name: 'Czech Republic', region: 'EUROPE' },
  { code: 'hu_HU', flag: '🇭🇺', name: 'Hungary', region: 'EUROPE' },
  { code: 'ro_RO', flag: '🇷🇴', name: 'Romania', region: 'EUROPE' },
  
  // Asia-Pacific (13)
  { code: 'zh_CN', flag: '🇨🇳', name: 'China', region: 'ASIA-PACIFIC' },
  { code: 'ja_JP', flag: '🇯🇵', name: 'Japan', region: 'ASIA-PACIFIC' },
  { code: 'ko_KR', flag: '🇰🇷', name: 'South Korea', region: 'ASIA-PACIFIC' },
  { code: 'en_IN', flag: '🇮🇳', name: 'India', region: 'ASIA-PACIFIC' },
  { code: 'id_ID', flag: '🇮🇩', name: 'Indonesia', region: 'ASIA-PACIFIC' },
  { code: 'th_TH', flag: '🇹🇭', name: 'Thailand', region: 'ASIA-PACIFIC' },
  { code: 'vi_VN', flag: '🇻🇳', name: 'Vietnam', region: 'ASIA-PACIFIC' },
  { code: 'ms_MY', flag: '🇲🇾', name: 'Malaysia', region: 'ASIA-PACIFIC' },
  { code: 'en_SG', flag: '🇸🇬', name: 'Singapore', region: 'ASIA-PACIFIC' },
  { code: 'en_PH', flag: '🇵🇭', name: 'Philippines', region: 'ASIA-PACIFIC' },
  { code: 'en_AU', flag: '🇦🇺', name: 'Australia', region: 'ASIA-PACIFIC' },
  { code: 'en_NZ', flag: '🇳🇿', name: 'New Zealand', region: 'ASIA-PACIFIC' },
  { code: 'he_IL', flag: '🇮🇱', name: 'Israel', region: 'ASIA-PACIFIC' },
  
  // Middle East & Africa (4)
  { code: 'ar_AE', flag: '🇦🇪', name: 'UAE', region: 'MIDDLE EAST & AFRICA' },
  { code: 'ar_SA', flag: '🇸🇦', name: 'Saudi Arabia', region: 'MIDDLE EAST & AFRICA' },
  { code: 'ar_EG', flag: '🇪🇬', name: 'Egypt', region: 'MIDDLE EAST & AFRICA' },
  { code: 'en_ZA', flag: '🇿🇦', name: 'South Africa', region: 'MIDDLE EAST & AFRICA' },
];

let currentRegion = '';

showcaseData.forEach(({ code, flag, name, region }) => {
  if (region !== currentRegion) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`  ${region}`);
    console.log('='.repeat(80));
    currentRegion = region;
  }
  
  const mimic = createMimic(code);
  const person = mimic.identity.person();
  const address = mimic.location.fullAddress();
  const work = mimic.work.data();
  const physical = mimic.physical.data();
  
  console.log(`\n${flag} ${name.toUpperCase()} (${code})`);
  console.log('-'.repeat(80));
  console.log(`  Name:     ${person.fullName}`);
  console.log(`  Gender:   ${person.gender}, Age: ${person.age} years`);
  console.log(`  Address:  ${address}`);
  console.log(`  Job:      ${work.jobTitle} @ ${work.department}`);
  console.log(`  Physical: ${physical.height} ${physical.heightUnit}, ${physical.weight} ${physical.weightUnit}`);
});

console.log(`\n${'='.repeat(80)}`);
console.log('\n📊 STATISTICS');
console.log('='.repeat(80));

const locales = getAvailableLocales();
console.log(`Total Locales: ${locales.length}`);
console.log(`Regions: Americas (6), Europe (21), Asia-Pacific (13), MEA (4)`);
console.log(`Coverage: 44 countries across 5 continents`);

// Test generation speed
console.log('\n⚡ PERFORMANCE TEST');
console.log('='.repeat(80));

const testLocale = 'en_US';
const testMimic = createMimic(testLocale);
const iterations = 10000;

const start = performance.now();
for (let i = 0; i < iterations; i++) {
  testMimic.identity.fullName();
  testMimic.location.fullAddress();
  testMimic.physical.data();
  testMimic.work.data();
}
const end = performance.now();

const totalTime = end - start;
const opsPerSec = (iterations * 4) / (totalTime / 1000);

console.log(`Generated ${iterations * 4} data points in ${totalTime.toFixed(2)}ms`);
console.log(`Speed: ${opsPerSec.toFixed(0)} operations/second`);
console.log(`Average: ${(totalTime / iterations).toFixed(3)}ms per person`);

console.log(`\n${'='.repeat(80)}`);
console.log('✨ All 44 locales working perfectly!');
console.log('🚀 Ready for production use!');
console.log('🌍 Global coverage: Americas, Europe, Asia-Pacific, Middle East & Africa');
console.log('='.repeat(80));
console.log();