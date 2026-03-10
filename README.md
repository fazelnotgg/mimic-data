# mimic-data

Library TypeScript ringan tanpa dependency eksternal untuk menghasilkan data dummy yang realistis dengan dukungan lokalisasi yang kuat.

## ✨ Fitur

- 🌍 **44 Locale** - Coverage global yang sangat luas
- 🪶 **Ringan** - Zero runtime dependencies  
- 📦 **Tree-shakeable** - Hanya bundle yang Anda gunakan
- 🔧 **TypeScript Native** - Full type safety
- 🎯 **Mudah Digunakan** - API yang sederhana dan intuitif

## 📦 Instalasi

```bash
npm install mimic-data
# atau
yarn add mimic-data
# atau
pnpm add mimic-data
```

## 🚀 Penggunaan Dasar

### Metode 1: Factory Function (Rekomendasi)

```typescript
import { createMimic } from 'mimic-data';

// Buat instance dengan locale tertentu
const mimic = createMimic('id_ID');

// Generate data
console.log(mimic.identity.fullName());
// Output: "Budi Santoso"

console.log(mimic.location.fullAddress());
// Output: "Jl. Merdeka No. 123, RT 5/RW 3, Jakarta, DKI Jakarta 12345"
```

### Metode 2: Class Langsung

```typescript
import { Mimic, locales } from 'mimic-data';

const mimic = new Mimic(locales.ja_JP);

console.log(mimic.identity.fullName());
// Output: "Tanaka Kenji"

console.log(mimic.location.fullAddress());
// Output: "〒123-4567 Tokyo, Yokohama, Chuo-dori 2-5-10"
```

## 🌏 Locale yang Tersedia (101 Locale!)

### Americas 🌎 (17)
- `en_US` / `en` / `us` / `usa` - 🇺🇸 USA (imperial)
- `es_US` / `es-us` - 🇺🇸 USA (Spanish)
- `en_CA` / `ca` / `canada` - 🇨🇦 Canada (metric)
- `fr_CA` / `fr-ca` - 🇨🇦 Canada (French)
- `es_MX` / `mx` / `mexico` - 🇲🇽 Mexico (metric)
- `pt_BR` / `pt` / `br` / `brazil` - 🇧🇷 Brazil (metric)
- `es_AR` / `ar` / `argentina` - 🇦🇷 Argentina (metric)
- `es_CL` / `cl` / `chile` - 🇨🇱 Chile (metric)
- `es_CO` / `co` / `colombia` - 🇨🇴 Colombia (metric)
- `es_PE` / `pe` / `peru` - 🇵🇪 Peru (metric)
- `es_VE` / `ve` / `venezuela` - 🇻🇪 Venezuela (metric)
- `es_EC` / `ec` / `ecuador` - 🇪🇨 Ecuador (metric)
- `es_BO` / `bo` / `bolivia` - 🇧🇴 Bolivia (metric)
- `es_PY` / `py` / `paraguay` - 🇵🇾 Paraguay (metric)
- `es_GT` / `gt` / `guatemala` - 🇬🇹 Guatemala (metric)
- `es_CR` / `cr` / `costa-rica` - 🇨🇷 Costa Rica (metric)
- `es_DO` / `do` / `dominican-republic` - 🇩🇴 Dominican Republic (metric)

### Europe 🌍 (38)
- `en_GB` / `gb` / `uk` - 🇬🇧 UK (metric)
- `en_IE` / `ie` / `ireland` - 🇮🇪 Ireland (metric)
- `de_DE` / `de` / `germany` - 🇩🇪 Germany (metric)
- `de_AT` / `at` / `austria` - 🇦🇹 Austria (metric)
- `de_CH` / `ch` / `switzerland` - 🇨🇭 Switzerland (German)
- `fr_CH` / `fr-ch` - 🇨🇭 Switzerland (French)
- `it_CH` / `it-ch` - 🇨🇭 Switzerland (Italian)
- `fr_FR` / `fr` / `france` - 🇫🇷 France (metric)
- `fr_BE` / `fr-be` - 🇧🇪 Belgium (French)
- `nl_BE` / `be` / `belgium` - 🇧🇪 Belgium (Dutch)
- `it_IT` / `it` / `italy` - 🇮🇹 Italy (metric)
- `es_ES` / `es` / `spain` - 🇪🇸 Spain (metric)
- `ca_ES` / `ca` / `catalonia` - 🇪🇸 Spain (Catalan)
- `pt_PT` / `portugal` - 🇵🇹 Portugal (metric)
- `nl_NL` / `nl` / `netherlands` - 🇳🇱 Netherlands (metric)
- `de_LU` / `de-lu` - 🇱🇺 Luxembourg (German)
- `fr_LU` / `fr-lu` - 🇱🇺 Luxembourg (French)
- `de_LI` / `li` / `liechtenstein` - 🇱🇮 Liechtenstein (metric)
- `ru_RU` / `ru` / `russia` - 🇷🇺 Russia (metric)
- `pl_PL` / `pl` / `poland` - 🇵🇱 Poland (metric)
- `tr_TR` / `tr` / `turkey` - 🇹🇷 Turkey (metric)
- `sv_SE` / `sv` / `se` / `sweden` - 🇸🇪 Sweden (metric)
- `nb_NO` / `no` / `norway` - 🇳🇴 Norway (metric)
- `da_DK` / `da` / `dk` / `denmark` - 🇩🇰 Denmark (metric)
- `fi_FI` / `fi` / `finland` - 🇫🇮 Finland (metric)
- `el_GR` / `el` / `gr` / `greece` - 🇬🇷 Greece (metric)
- `cs_CZ` / `cs` / `cz` / `czech` - 🇨🇿 Czech Republic (metric)
- `hu_HU` / `hu` / `hungary` - 🇭🇺 Hungary (metric)
- `ro_RO` / `ro` / `romania` - 🇷🇴 Romania (metric)
- `uk_UA` / `ua` / `ukraine` - 🇺🇦 Ukraine (metric)
- `sk_SK` / `sk` / `slovakia` - 🇸🇰 Slovakia (metric)
- `hr_HR` / `hr` / `croatia` - 🇭🇷 Croatia (metric)
- `rs_RS` / `rs` / `serbia` - 🇷🇸 Serbia (metric)
- `lt_LT` / `lt` / `lithuania` - 🇱🇹 Lithuania (metric)
- `lv_LV` / `lv` / `latvia` - 🇱🇻 Latvia (metric)
- `et_EE` / `ee` / `estonia` - 🇪🇪 Estonia (metric)
- `bg_BG` / `bg` / `bulgaria` - 🇧🇬 Bulgaria (metric)
- `is_IS` / `is` / `iceland` - 🇮🇸 Iceland (metric)

### Asia-Pacific 🌏 (20)
- `zh_CN` / `zh` / `cn` / `china` - 🇨🇳 China (metric)
- `zh_TW` / `tw` / `taiwan` - 🇹🇼 Taiwan (metric)
- `zh_HK` / `hk` / `hongkong` - 🇭🇰 Hong Kong (metric)
- `ja_JP` / `ja` / `jp` / `japan` - 🇯🇵 Japan (metric)
- `ko_KR` / `ko` / `kr` / `korea` - 🇰🇷 South Korea (metric)
- `id_ID` / `id` / `indonesia` - 🇮🇩 Indonesia (metric)
- `ms_MY` / `ms` / `my` / `malaysia` - 🇲🇾 Malaysia (metric)
- `th_TH` / `th` / `thailand` - 🇹🇭 Thailand (metric)
- `vi_VN` / `vi` / `vn` / `vietnam` - 🇻🇳 Vietnam (metric)
- `en_SG` / `sg` / `singapore` - 🇸🇬 Singapore (metric)
- `en_PH` / `ph` / `philippines` - 🇵🇭 Philippines (metric)
- `en_AU` / `au` / `australia` - 🇦🇺 Australia (metric)
- `en_NZ` / `nz` / `new-zealand` - 🇳🇿 New Zealand (metric)
- `en_IN` / `in` / `india` - 🇮🇳 India (English)
- `hi_IN` / `hi` / `hindi` - 🇮🇳 India (Hindi)
- `bn_IN` / `bn-in` - 🇮🇳 India (Bengali)
- `bn_BD` / `bd` / `bangladesh` - 🇧🇩 Bangladesh (metric)
- `ne_NP` / `np` / `nepal` - 🇳🇵 Nepal (metric)
- `ur_PK` / `ur` / `urdu` - 🇵🇰 Pakistan (Urdu)
- `en_PK` / `pk` / `pakistan` - 🇵🇰 Pakistan (English)

### Middle East & Africa 🌍 (26)
- `ar_SA` / `sa` / `saudi` - 🇸🇦 Saudi Arabia (metric)
- `ar_AE` / `ae` / `uae` - 🇦🇪 UAE (metric)
- `ar_EG` / `eg` / `egypt` - 🇪🇬 Egypt (metric)
- `ar_MA` / `ma` / `morocco` - 🇲🇦 Morocco (metric)
- `ar_IQ` / `iq` / `iraq` - 🇮🇶 Iraq (metric)
- `ar_KW` / `kw` / `kuwait` - 🇰🇼 Kuwait (metric)
- `ar_QA` / `qa` / `qatar` - 🇶🇦 Qatar (metric)
- `ar_BH` / `bh` / `bahrain` - 🇧🇭 Bahrain (metric)
- `ar_DZ` / `dz` / `algeria` - 🇩🇿 Algeria (metric)
- `ar_JO` / `jo` / `jordan` - 🇯🇴 Jordan (metric)
- `ar_LB` / `lb` / `lebanon` - 🇱🇧 Lebanon (metric)
- `ar_LY` / `ly` / `libya` - 🇱🇾 Libya (metric)
- `ar_OM` / `om` / `oman` - 🇴🇲 Oman (metric)
- `ar_SD` / `sd` / `sudan` - 🇸🇩 Sudan (metric)
- `ar_SY` / `sy` / `syria` - 🇸🇾 Syria (metric)
- `ar_TN` / `tn` / `tunisia` - 🇹🇳 Tunisia (metric)
- `ar_YE` / `ye` / `yemen` - 🇾🇪 Yemen (metric)
- `he_IL` / `he` / `il` / `israel` - 🇮🇱 Israel (metric)
- `fa_IR` / `fa` / `iran` - 🇮🇷 Iran (metric)
- `en_ZA` / `za` / `south-africa` - 🇿🇦 South Africa (English)
- `af_ZA` / `af` / `afrikaans` - 🇿🇦 South Africa (Afrikaans)
- `en_NG` / `ng` / `nigeria` - 🇳🇬 Nigeria (metric)
- `en_KE` / `ke` / `kenya` - 🇰🇪 Kenya (English)
- `sw_KE` / `sw-ke` - 🇰🇪 Kenya (Swahili)
- `sw_TZ` / `sw-tz` - 🇹🇿 Tanzania (Swahili)
- `pt_MZ` / `mz` / `mozambique` - 🇲🇿 Mozambique (metric)

**Total: 101 Locale dengan 250+ Aliases!**

## 📚 API Reference

### Identity (Identitas)

```typescript
// Nama depan berdasarkan gender
mimic.identity.firstName('male');    // "Takashi"
mimic.identity.firstName('female');  // "Yuki"
mimic.identity.firstName();          // Random gender

// Nama belakang
mimic.identity.lastName();           // "Tanaka"

// Nama lengkap (format sesuai budaya)
mimic.identity.fullName('male');     // Japan: "Tanaka Takashi"
                                     // US: "John Smith"
                                     // ID: "Budi Santoso"

// Gender
mimic.identity.gender();             // "male" | "female"

// Umur dengan range
mimic.identity.age();                // 18-65 (default)
mimic.identity.age({ min: 25, max: 40 }); // Custom range

// Tanggal lahir
mimic.identity.dateOfBirth();
mimic.identity.dateOfBirth({ min: 30, max: 50 });

// Generate semua data person sekaligus
const person = mimic.identity.person('female', { min: 25, max: 35 });
// {
//   firstName: "Yuki",
//   lastName: "Tanaka",
//   fullName: "Tanaka Yuki",
//   gender: "female",
//   age: 28,
//   dateOfBirth: Date
// }

// 🚀 NEW: Generate multiple persons at once
const persons = mimic.identity.persons(10); // Array of 10 persons

// 🚀 NEW: Generate unique persons (no duplicate full names)
const uniquePersons = mimic.identity.uniquePersons(5);
```

### Location (Lokasi)

```typescript
// Komponen alamat individual
mimic.location.street();     // "Chuo-dori"
mimic.location.city();       // "Tokyo"
mimic.location.state();      // "Kanagawa"
mimic.location.zipCode();    // "123-4567" (Japan format)

// Alamat lengkap (format sesuai negara)
mimic.location.fullAddress();
// Japan: "〒123-4567 Tokyo, Yokohama, Chuo-dori 2-5-10"
// US: "1234 Main Street, New York, California 12345"
// ID: "Jl. Merdeka No. 123, RT 5/RW 3, Jakarta, DKI Jakarta 12345"

// Generate semua data address sekaligus
const address = mimic.location.address();
// {
//   street: "Chuo-dori",
//   city: "Tokyo",
//   state: "Kanagawa",
//   zipCode: "123-4567",
//   fullAddress: "〒123-4567 Tokyo, Yokohama, Chuo-dori 2-5-10"
// }

// 🚀 NEW: Generate multiple addresses at once
const addresses = mimic.location.addresses(10); // Array of 10 addresses

// 🚀 NEW: Generate unique addresses (no duplicate full addresses)
const uniqueAddresses = mimic.location.uniqueAddresses(5);
```

### Physical (Data Fisik)

```typescript
// Tinggi (unit sesuai locale)
mimic.physical.height();
// Metric: { height: 175, weight: 0, heightUnit: 'cm', weightUnit: 'kg' }
// Imperial: { height: 5.9, weight: 0, heightUnit: 'ft', weightUnit: 'lb' }

// Berat (unit sesuai locale)
mimic.physical.weight();
// Metric: { height: 0, weight: 70, heightUnit: 'cm', weightUnit: 'kg' }
// Imperial: { height: 0, weight: 154, heightUnit: 'ft', weightUnit: 'lb' }

// Generate semua data physical sekaligus
const physical = mimic.physical.data();
// Metric: { height: 175, weight: 70, heightUnit: 'cm', weightUnit: 'kg' }
// Imperial: { height: 5.9, weight: 154, heightUnit: 'ft', weightUnit: 'lb' }

// 🚀 NEW: Generate multiple physical data at once
const physicals = mimic.physical.datas(10); // Array of 10 physical data
```

### Work (Data Pekerjaan)

```typescript
mimic.work.jobTitle();      // "Software Engineer"
mimic.work.department();    // "Engineering"

// Generate semua data work sekaligus
const work = mimic.work.data();
// {
//   jobTitle: "Software Engineer",
//   department: "Engineering"
// }

// 🚀 NEW: Generate multiple work data at once
const works = mimic.work.datas(10); // Array of 10 work data

// 🚀 NEW: Generate unique job titles
const uniqueJobTitles = mimic.work.uniqueJobTitles(5);

// 🚀 NEW: Generate unique departments
const uniqueDepartments = mimic.work.uniqueDepartments(3);
```

### Contact (Kontak) - NEW! 📧

```typescript
// Generate email
mimic.contact.email('John', 'Doe');  // "john.doe123@gmail.com"
mimic.contact.email('Jane');         // "jane456@yahoo.com"
mimic.contact.email();               // "random789@outlook.com"

// Generate phone number (locale-specific format)
mimic.contact.phone();  // US: "+1 (555) 123-4567"
                        // ID: "+62 812-3456-7890"

// Generate website
mimic.contact.website();        // "www.acme-corp.com"
mimic.contact.website('Google');// "www.google.com"

// Generate complete contact data
const contact = mimic.contact.data('John', 'Doe');
// {
//   email: "john.doe123@gmail.com",
//   phone: "+1 (555) 123-4567",
//   website: "www.john-doe.com"
// }

// 🚀 Generate multiple contact data
const contacts = mimic.contact.datas(10);
```

### Company (Perusahaan) - NEW! 🏢

```typescript
// Generate company name
mimic.company.name();  // "Techflow Solutions"
                       // "PT Telkom Indonesia" (id_ID)

// Generate industry
mimic.company.industry();  // "Technology"
                           // "Teknologi" (id_ID)

// Generate catch phrase
mimic.company.catchPhrase();  // "Empower innovative solutions"

// Generate complete company data
const company = mimic.company.data();
// {
//   name: "Quantumspark Labs",
//   industry: "Technology",
//   catchPhrase: "Transform cutting-edge experiences"
// }

// 🚀 Generate multiple company data
const companies = mimic.company.datas(10);
```

### Mengganti Locale

```typescript
const mimic = createMimic('en_US');
console.log(mimic.identity.fullName()); // "John Smith"

mimic.setLocale(locales.ja_JP);
console.log(mimic.identity.fullName()); // "Tanaka Kenji"
```

## 🚀 Fitur Baru (v1.1.0)

### 🔁 Seeded Random (Reproducible Data)

Generate data yang sama secara konsisten untuk testing:

```typescript
import { createMimic, Random } from 'mimic-data';

// Set seed untuk reproducible randomness
Random.seed(12345);

const mimic = createMimic('en_US');
const person1 = mimic.identity.person('male', { min: 25, max: 35 });

// Reset seed yang sama
Random.seed(12345);
const person2 = mimic.identity.person('male', { min: 25, max: 35 });

// person1 dan person2 akan IDENTIK!
console.log(person1.fullName === person2.fullName); // true
console.log(person1.age === person2.age); // true

// Reset ke random non-deterministik
Random.unseed();
```

### 📦 Bulk Generation

Generate banyak data sekaligus dengan performa optimal:

```typescript
import { createMimic } from 'mimic-data';

const mimic = createMimic('id_ID');

// Generate 100 persons sekaligus
const persons = mimic.identity.persons(100);

// Generate 50 unique addresses (no duplicates)
const addresses = mimic.location.uniqueAddresses(50);

// Generate 200 complete mock entities
const entities = mimic.generateMockEntities(200, {
  gender: 'female',
  ageRange: { min: 20, max: 40 }
});

// Generate unique mock entities
const uniqueEntities = mimic.generateUniqueMockEntities(100);
```

### 🎯 Random Utilities

```typescript
import { Random } from 'mimic-data';

// Generate multiple values
const numbers = Random.multiple(() => Random.int(1, 100), 10);

// Generate unique values (no duplicates)
const uniqueNumbers = Random.unique(() => Random.int(1, 1000), 20);

// Shuffle array
const shuffled = Random.shuffle([1, 2, 3, 4, 5]);

// Pick random element
const randomItem = Random.pick(['apple', 'banana', 'cherry']);
```

### ⚡ Performance Improvements

- **Caching**: Generator methods di-cache untuk performa lebih cepat
- **Bulk Operations**: Generate banyak data dalam satu panggilan
- **Optimized Getters**: Tidak ada recreation pada setiap akses

```typescript
// Getter methods sekarang di-cache (lebih cepat)
const identity1 = mimic.identity;
const identity2 = mimic.identity;
console.log(identity1 === identity2); // true (same cached instance)
```

## 🎯 Contoh Lengkap

```typescript
import { createMimic } from 'mimic-data';

// Generate data karyawan Indonesia
const mimic = createMimic('id_ID');

const employee = {
  ...mimic.identity.person('male', { min: 25, max: 40 }),
  ...mimic.location.address(),
  ...mimic.physical.data(),
  ...mimic.work.data()
};

console.log(employee);
// {
//   firstName: "Budi",
//   lastName: "Santoso",
//   fullName: "Budi Santoso",
//   gender: "male",
//   age: 32,
//   dateOfBirth: 1992-05-15T00:00:00.000Z,
//   street: "Jl. Merdeka",
//   city: "Jakarta",
//   state: "DKI Jakarta",
//   zipCode: "12345",
//   fullAddress: "Jl. Merdeka No. 123, RT 5/RW 3, Jakarta, DKI Jakarta 12345",
//   height: 175,
//   weight: 70,
//   heightUnit: "cm",
//   weightUnit: "kg",
//   jobTitle: "Software Engineer",
//   department: "Engineering"
// }
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Development mode (watch)
npm run dev

# Run tests
npm test

# Type check
npm run type-check
```

## 📝 Lisensi

MIT

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buka issue atau pull request.

### Menambahkan Locale Baru (Sangat Mudah!)

Dengan **Registry System**, menambah locale baru sangat mudah:

1. **Buat file locale** di `src/locales/xx_XX.ts`
2. **Implement interface** `LocaleDefinition`
3. **Import dan register** di `src/index.ts`

**Contoh: Menambahkan locale Spanyol**

```typescript
// 1. Buat file: src/locales/es_ES.ts
import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_ES: LocaleDefinition = {
  firstNamesMale: ['Carlos', 'José', 'Antonio', ...],
  firstNamesFemale: ['María', 'Carmen', 'Ana', ...],
  lastNames: ['García', 'Fernández', 'López', ...],
  streets: ['Calle Mayor', 'Avenida Castellana', ...],
  cities: ['Madrid', 'Barcelona', 'Valencia', ...],
  states: ['Madrid', 'Cataluña', 'Andalucía', ...],
  zipCodePattern: '#####',
  jobTitles: ['Ingeniero de Software', ...],
  departments: ['Ingeniería', 'Marketing', ...],
  metricSystem: 'metric',
  
  formatFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  },
  
  formatAddress(street, city, state, zipCode) {
    return `${street} ${Random.int(1, 200)}, ${zipCode} ${city}`;
  },
  
  generateZipCode() {
    return String(Random.int(10000, 99999));
  }
};

// 2. Register di src/index.ts
import { es_ES } from './locales/es_ES';
localeRegistry.register('es_ES', es_ES, ['es', 'spain', 'españa']);

// 3. Export (opsional, untuk advanced usage)
export const locales = {
  // ... existing locales
  es_ES
};
```

**Selesai!** Locale baru Anda langsung tersedia:

```typescript
const mimic = createMimic('es'); // atau 'es_ES' atau 'spain'
console.log(mimic.identity.fullName()); // "Carlos García"
```

## 🙏 Acknowledgments

Terinspirasi oleh library seperti Faker.js, namun dengan fokus pada:
- Zero runtime dependencies
- Lokalisasi yang lebih akurat
- Bundle size yang lebih kecil
- TypeScript-first approach