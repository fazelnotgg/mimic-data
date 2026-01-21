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

## 🌏 Locale yang Tersedia (44 Negara!)

### Americas 🌎 (6)
- `en_US` / `en` / `us` / `usa` - 🇺🇸 USA (imperial)
- `en_CA` / `ca` / `canada` - 🇨🇦 Canada (metric)
- `es_MX` / `mx` / `mexico` - 🇲🇽 Mexico (metric)
- `pt_BR` / `pt` / `br` / `brazil` - 🇧🇷 Brazil (metric)
- `es_AR` / `ar` / `argentina` - 🇦🇷 Argentina (metric)
- `es_CL` / `cl` / `chile` - 🇨🇱 Chile (metric)

### Europe 🌍 (19)
- `en_GB` / `gb` / `uk` / `britain` - 🇬🇧 UK (metric)
- `de_DE` / `de` / `germany` / `deutsch` - 🇩🇪 Germany (metric)
- `de_AT` / `at` / `austria` - 🇦🇹 Austria (metric)
- `de_CH` / `ch` / `switzerland` - 🇨🇭 Switzerland (metric)
- `fr_FR` / `fr` / `france` - 🇫🇷 France (metric)
- `it_IT` / `it` / `italy` / `italia` - 🇮🇹 Italy (metric)
- `es_ES` / `es` / `spain` / `españa` - 🇪🇸 Spain (metric)
- `pt_PT` / `portugal` - 🇵🇹 Portugal (metric)
- `nl_NL` / `nl` / `netherlands` / `holland` - 🇳🇱 Netherlands (metric)
- `nl_BE` / `be` / `belgium` - 🇧🇪 Belgium (metric)
- `ru_RU` / `ru` / `russia` - 🇷🇺 Russia (metric)
- `pl_PL` / `pl` / `poland` / `polska` - 🇵🇱 Poland (metric)
- `tr_TR` / `tr` / `turkey` / `turkiye` - 🇹🇷 Turkey (metric)
- `sv_SE` / `sv` / `se` / `sweden` / `sverige` - 🇸🇪 Sweden (metric)
- `nb_NO` / `no` / `norway` / `norge` - 🇳🇴 Norway (metric)
- `da_DK` / `da` / `dk` / `denmark` / `danmark` - 🇩🇰 Denmark (metric)
- `fi_FI` / `fi` / `finland` / `suomi` - 🇫🇮 Finland (metric)
- `el_GR` / `el` / `gr` / `greece` - 🇬🇷 Greece (metric)
- `cs_CZ` / `cs` / `cz` / `czech` - 🇨🇿 Czech Republic (metric)
- `hu_HU` / `hu` / `hungary` - 🇭🇺 Hungary (metric)
- `ro_RO` / `ro` / `romania` - 🇷🇴 Romania (metric)

### Asia-Pacific 🌏 (13)
- `zh_CN` / `zh` / `cn` / `china` - 🇨🇳 China (metric)
- `ja_JP` / `ja` / `jp` / `japan` - 🇯🇵 Japan (metric)
- `ko_KR` / `ko` / `kr` / `korea` - 🇰🇷 South Korea (metric)
- `en_IN` / `in` / `india` - 🇮🇳 India (metric)
- `id_ID` / `id` / `indonesia` - 🇮🇩 Indonesia (metric)
- `th_TH` / `th` / `thailand` - 🇹🇭 Thailand (metric)
- `vi_VN` / `vi` / `vn` / `vietnam` - 🇻🇳 Vietnam (metric)
- `ms_MY` / `ms` / `my` / `malaysia` - 🇲🇾 Malaysia (metric)
- `en_SG` / `sg` / `singapore` - 🇸🇬 Singapore (metric)
- `en_PH` / `ph` / `philippines` - 🇵🇭 Philippines (metric)
- `en_AU` / `au` / `aus` / `australia` - 🇦🇺 Australia (metric)
- `en_NZ` / `nz` / `new-zealand` - 🇳🇿 New Zealand (metric)
- `he_IL` / `he` / `il` / `israel` - 🇮🇱 Israel (metric)

### Middle East & Africa 🌍 (6)
- `ar_AE` / `ae` / `uae` / `emirates` - 🇦🇪 UAE (metric)
- `ar_SA` / `sa` / `saudi` / `saudi-arabia` - 🇸🇦 Saudi Arabia (metric)
- `ar_EG` / `eg` / `egypt` - 🇪🇬 Egypt (metric)
- `en_ZA` / `za` / `south-africa` - 🇿🇦 South Africa (metric)

**Total: 44 Locales dengan 120+ Aliases!**

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
```

### Mengganti Locale

```typescript
const mimic = createMimic('en_US');
console.log(mimic.identity.fullName()); // "John Smith"

mimic.setLocale(locales.ja_JP);
console.log(mimic.identity.fullName()); // "Tanaka Kenji"
```

## 🎯 Contoh Lengkap

```typescript
import { createMimic } from 'mimic-real-data';

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