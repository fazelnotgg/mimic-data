# mimic-data

[![npm version](https://img.shields.io/npm/v/mimic-data.svg)](https://www.npmjs.com/package/mimic-data)
[![npm downloads](https://img.shields.io/npm/dt/mimic-data.svg)](https://www.npmjs.com/package/mimic-data)
[![License](https://img.shields.io/npm/l/m)](https://opensourceimic-data.svg.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178c6.svg)](https://www.typescriptlang.org/)

Library TypeScript ringan tanpa dependency eksternal untuk menghasilkan data dummy yang realistis dengan dukungan lokalisasi yang kuat.

## ✨ Fitur

- 🌍 **101 Locale** - Coverage global yang sangat luas
- 🪶 **Ringan** - Zero runtime dependencies (~15KB minified)
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

## 🚀 Quick Start

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

## 📚 API Overview

### `createMimic(locale?: string): Mimic`
Buat instance Mimic dengan locale tertentu. Default: `en_US`

```typescript
const mimic = createMimic('ja_JP');
const mimicDefault = createMimic(); // menggunakan en_US
```

### Module Exports

| Export | Deskripsi |
|--------|-----------|
| `createMimic` | Factory function untuk membuat instance Mimic |
| `Mimic` | Class utama untuk generate data |
| `locales` | Object semua locale definitions |
| `Random` | Utility untuk random generation |
| `localeRegistry` | Registry untuk manage locales |
| `getAvailableLocales()` | Get semua locale codes utama |
| `getAllLocaleCodes()` | Get semua locale codes + aliases |

### Mimic Methods

| Module | Method | Deskripsi |
|--------|--------|-----------|
| `identity` | `firstName(gender?)` | Nama depan (male/female/random) |
| | `lastName()` | Nama belakang |
| | `fullName(gender?)` | Nama lengkap (format budaya) |
| | `gender()` | Gender (male/female) |
| | `age(range?)` | Umur (default 18-65) |
| | `dateOfBirth(range?)` | Tanggal lahir |
| | `person(gender?, range?)` | Semua data person |
| | `persons(count, gender?, range?)` | Generate multiple persons |
| | `uniquePersons(count, gender?, range?)` | Generate unique persons |
| `location` | `street()` | Nama jalan |
| | `city()` | Kota |
| | `state()` | Provinsi/State |
| | `zipCode()` | Kode pos |
| | `fullAddress()` | Alamat lengkap |
| | `address()` | Semua data address |
| | `addresses(count)` | Generate multiple addresses |
| | `uniqueAddresses(count)` | Generate unique addresses |
| `physical` | `height()` | Tinggi badan |
| | `weight()` | Berat badan |
| | `data()` | Semua data fisik |
| | `datas(count)` | Generate multiple physical data |
| `work` | `jobTitle()` | Judul pekerjaan |
| | `department()` | Departemen |
| | `data()` | Semua data pekerjaan |
| | `datas(count)` | Generate multiple work data |
| | `uniqueJobTitles(count)` | Unique job titles |
| | `uniqueDepartments(count)` | Unique departments |
| `contact` | `email(firstName?, lastName?)` | Email address |
| | `phone()` | Nomor telepon |
| | `website(name?)` | Website URL |
| | `data(firstName?, lastName?)` | Semua data kontak |
| | `datas(count)` | Generate multiple contact data |
| `company` | `name()` | Nama perusahaan |
| | `industry()` | Industri |
| | `catchPhrase()` | Tagline perusahaan |
| | `data()` | Semua data perusahaan |
| | `datas(count)` | Generate multiple company data |
| `Mimic` | `setLocale(locale)` | Ganti locale |
| | `generateMockEntities(count, options?)` | Generate complete entities |
| | `generateUniqueMockEntities(count, options?)` | Generate unique entities |

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

## 💻 Contoh Penggunaan

### Penggunaan Dasar

```typescript
import { createMimic } from 'mimic-data';

const mimic = createMimic('ja_JP');

console.log(mimic.identity.fullName());
// Output: "Tanaka Kenji"

console.log(mimic.location.fullAddress());
// Output: "〒123-4567 Tokyo, Yokohama, Chuo-dori 2-5-10"
```

### Dengan Class Langsung

```typescript
import { Mimic, locales } from 'mimic-data';

const mimic = new Mimic(locales.de_DE);
console.log(mimic.identity.fullName('female'));
// Output: "Maria Müller"
```

### Seeded Random (Reproducible Data)

```typescript
import { createMimic, Random } from 'mimic-data';

Random.seed(12345);

const mimic = createMimic('en_US');
const person1 = mimic.identity.person('male', { min: 25, max: 35 });

Random.seed(12345);
const person2 = mimic.identity.person('male', { min: 25, max: 35 });

console.log(person1.fullName === person2.fullName); // true

Random.unseed();
```

### Bulk Generation

```typescript
import { createMimic } from 'mimic-data';

const mimic = createMimic('id_ID');

const persons = mimic.identity.persons(100);
const addresses = mimic.location.uniqueAddresses(50);

const employees = mimic.generateMockEntities(200, {
  gender: 'female',
  ageRange: { min: 20, max: 40 }
});
```

### Complete Employee Data

```typescript
import { createMimic } from 'mimic-data';

const mimic = createMimic('id_ID');

const employee = {
  ...mimic.identity.person('male', { min: 25, max: 40 }),
  ...mimic.location.address(),
  ...mimic.physical.data(),
  ...mimic.work.data(),
  ...mimic.contact.data(),
  ...mimic.company.data()
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
//   department: "Engineering",
//   email: "budi.santoso123@gmail.com",
//   phone: "+62 812-3456-7890",
//   website: "www.budi-santoso.com",
//   name: "Techflow Solutions",
//   industry: "Technology",
//   catchPhrase: "Empower innovative solutions"
// }
```

## 🔧 TypeScript Types

```typescript
import { 
  Gender, 
  MetricSystem,
  PersonData,
  AddressData, 
  PhysicalData, 
  WorkData,
  ContactData,
  CompanyData,
  AgeRange,
  LocaleDefinition
} from 'mimic-data';

const person: PersonData = mimic.identity.person('female', { min: 25, max: 35 });
const address: AddressData = mimic.location.address();
const physical: PhysicalData = mimic.physical.data();
const work: WorkData = mimic.work.data();
const contact: ContactData = mimic.contact.data();
const company: CompanyData = mimic.company.data();
```

### Type Definitions

```typescript
type Gender = 'male' | 'female';
type MetricSystem = 'metric' | 'imperial';

interface PersonData {
  firstName: string;
  lastName: string;
  fullName: string;
  gender: Gender;
  age: number;
  dateOfBirth: Date;
}

interface AddressData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress: string;
}

interface PhysicalData {
  height: number;
  weight: number;
  heightUnit: 'cm' | 'ft';
  weightUnit: 'kg' | 'lb';
}

interface WorkData {
  jobTitle: string;
  department: string;
}

interface ContactData {
  email: string;
  phone: string;
  website: string;
}

interface CompanyData {
  name: string;
  industry: string;
  catchPhrase: string;
}

interface AgeRange {
  min?: number;
  max?: number;
}
```

## 🎲 Random Utilities

```typescript
import { Random } from 'mimic-data';

Random.seed(12345);

Random.int(1, 100);
Random.float(1.5, 10.5, 2);
Random.boolean();
Random.pick(['a', 'b', 'c']);
Random.shuffle([1, 2, 3, 4, 5]);
Random.multiple(() => Random.int(1, 100), 10);
Random.unique(() => Random.int(1, 1000), 20);
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

### Menambahkan Locale Baru

Dengan **Registry System**, menambah locale baru sangat mudah:

1. **Buat file locale** di `src/locales/xx_XX.ts`
2. **Implement interface** `LocaleDefinition`
3. **Import dan register** di `src/index.ts`

```typescript
// 1. Buat file: src/locales/es_ES.ts
import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_ES: LocaleDefinition = {
  firstNamesMale: ['Carlos', 'José', 'Antonio'],
  firstNamesFemale: ['María', 'Carmen', 'Ana'],
  lastNames: ['García', 'Fernández', 'López'],
  streets: ['Calle Mayor', 'Avenida Castellana'],
  cities: ['Madrid', 'Barcelona', 'Valencia'],
  states: ['Madrid', 'Cataluña', 'Andalucía'],
  zipCodePattern: '#####',
  jobTitles: ['Ingeniero de Software'],
  departments: ['Ingeniería', 'Marketing'],
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
```

## 🙏 Acknowledgments

Terinspirasi oleh library seperti Faker.js, namun dengan fokus pada:
- Zero runtime dependencies
- Lokalisasi yang lebih akurat
- Bundle size yang lebih kecil
- TypeScript-first approach
