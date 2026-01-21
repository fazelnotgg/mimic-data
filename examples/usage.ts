/**
 * Contoh penggunaan lengkap mimic-data
 * Run: npx tsx examples/usage.ts
 */

import { createMimic, getAllLocaleCodes } from '../src/index';

console.log('🌍 MIMIC DATA - Usage Examples\n');

// ============================================
// 1. BASIC USAGE
// ============================================
console.log('📌 1. BASIC USAGE - Indonesia');
console.log('================================');

const mimicID = createMimic('id_ID');

console.log('Nama:', mimicID.identity.fullName());
console.log('Alamat:', mimicID.location.fullAddress());
console.log('Fisik:', mimicID.physical.data());
console.log('Pekerjaan:', mimicID.work.data());

console.log('\n');

// ============================================
// 2. USING ALIASES
// ============================================
console.log('📌 2. USING ALIASES');
console.log('===================');

const mimicJapan = createMimic('jp'); // alias untuk ja_JP
const mimicGermany = createMimic('de'); // alias untuk de_DE
const mimicBrazil = createMimic('br'); // alias untuk pt_BR

console.log('Japan (using "jp"):', mimicJapan.identity.fullName());
console.log('Germany (using "de"):', mimicGermany.identity.fullName());
console.log('Brazil (using "br"):', mimicBrazil.identity.fullName());

console.log('\n');

// ============================================
// 3. GENERATE COMPLETE EMPLOYEE DATA
// ============================================
console.log('📌 3. COMPLETE EMPLOYEE DATA');
console.log('============================');

const employee = {
  ...mimicID.identity.person('male', { min: 25, max: 40 }),
  ...mimicID.location.address(),
  ...mimicID.physical.data(),
  ...mimicID.work.data(),
};

console.log(JSON.stringify(employee, null, 2));

console.log('\n');

// ============================================
// 4. BULK DATA GENERATION
// ============================================
console.log('📌 4. BULK DATA GENERATION - 5 Korean Employees');
console.log('================================================');

const mimicKorea = createMimic('ko_KR');

const koreanEmployees = Array.from({ length: 5 }, () => ({
  ...mimicKorea.identity.person(),
  ...mimicKorea.work.data(),
}));

koreanEmployees.forEach((emp, idx) => {
  console.log(`${idx + 1}. ${emp.fullName} - ${emp.jobTitle} (${emp.department})`);
});

console.log('\n');

// ============================================
// 5. COMPARING DIFFERENT LOCALES
// ============================================
console.log('📌 5. ADDRESS FORMAT COMPARISON');
console.log('================================');

const locales = ['id_ID', 'ja_JP', 'en_US', 'de_DE', 'fr_FR', 'pt_BR', 'ko_KR', 'en_AU'];

locales.forEach(locale => {
  const mimic = createMimic(locale);
  console.log(`${locale.padEnd(6)}: ${mimic.location.fullAddress()}`);
});

console.log('\n');

// ============================================
// 6. CUSTOM AGE RANGES
// ============================================
console.log('📌 6. CUSTOM AGE RANGES');
console.log('=======================');

const mimicFrance = createMimic('fr_FR');

console.log('Teenagers (13-19):');
Array.from({ length: 3 }, () => {
  const person = mimicFrance.identity.person(undefined, { min: 13, max: 19 });
  console.log(`  - ${person.fullName}, Age: ${person.age}`);
});

console.log('\nSeniors (60-80):');
Array.from({ length: 3 }, () => {
  const person = mimicFrance.identity.person(undefined, { min: 60, max: 80 });
  console.log(`  - ${person.fullName}, Age: ${person.age}`);
});

console.log('\n');

// ============================================
// 7. METRIC VS IMPERIAL SYSTEMS
// ============================================
console.log('📌 7. METRIC vs IMPERIAL SYSTEMS');
console.log('=================================');

const mimicUS = createMimic('en_US'); // Imperial
const mimicAU = createMimic('en_AU'); // Metric

const usPhysical = mimicUS.physical.data();
const auPhysical = mimicAU.physical.data();

console.log(`US (Imperial): ${usPhysical.height} ${usPhysical.heightUnit}, ${usPhysical.weight} ${usPhysical.weightUnit}`);
console.log(`AU (Metric):   ${auPhysical.height} ${auPhysical.heightUnit}, ${auPhysical.weight} ${auPhysical.weightUnit}`);

console.log('\n');

// ============================================
// 8. AVAILABLE LOCALES
// ============================================
console.log('📌 8. ALL AVAILABLE LOCALE CODES');
console.log('=================================');

const allCodes = getAllLocaleCodes();
console.log('Total codes:', allCodes.length);
console.log('Codes:', allCodes.join(', '));

console.log('\n');

// ============================================
// 9. REALISTIC DATA SHOWCASE
// ============================================
console.log('📌 9. REALISTIC DATA SHOWCASE - User Profiles');
console.log('==============================================');

const showcaseLocales = [
  { code: 'id', name: '🇮🇩 Indonesia' },
  { code: 'jp', name: '🇯🇵 Japan' },
  { code: 'us', name: '🇺🇸 USA' },
  { code: 'de', name: '🇩🇪 Germany' },
  { code: 'fr', name: '🇫🇷 France' },
  { code: 'br', name: '🇧🇷 Brazil' },
  { code: 'kr', name: '🇰🇷 South Korea' },
  { code: 'au', name: '🇦🇺 Australia' },
];

showcaseLocales.forEach(({ code, name }) => {
  const mimic = createMimic(code);
  const person = mimic.identity.person();
  
  console.log(`\n${name}`);
  console.log(`  Name: ${person.fullName}`);
  console.log(`  Age: ${person.age} years old`);
  console.log(`  Address: ${mimic.location.fullAddress()}`);
  console.log(`  Job: ${mimic.work.jobTitle()} @ ${mimic.work.department()}`);
});

console.log('\n\n✨ Done! Library bekerja dengan sempurna untuk semua locale!');