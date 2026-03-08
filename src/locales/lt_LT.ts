import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const lt_LT: LocaleDefinition = {
  firstNamesMale: [
    'Jonas', 'Kazimieras', 'Antanas', 'Juozas', 'Petras', 'Aleksandras', 'Stasys',
    'Mykolas', 'Andrius', 'Tomas', 'Mindaugas', 'Gintaras', 'Vytautas', 'Algirdas',
    'Darius', 'Rolandas', 'Saulius', 'Marius', 'Lukas', 'Domantas', 'Nojus',
    'Lukas', 'Matas', 'Tomas', 'Paulius', 'Simonas', 'Edgaras', 'Artūras', 'Žydrūnas', 'Arvydas'
  ],
  firstNamesFemale: [
    'Ona', 'Marija', 'Janina', 'Elena', 'Aldona', 'Genovaitė', 'Danguolė',
    'Rasa', 'Jūratė', 'Aušra', 'Vida', 'Laima', 'Giedrė', 'Nijolė', 'Birutė',
    'Edita', 'Inga', 'Laura', 'Greta', 'Emilija', 'Sofija', 'Elzbieta',
    'Kotryna', 'Ugnė', 'Rugilė', 'Gabija', 'Liepa', 'Aistė', 'Monika', 'Kristina'
  ],
  lastNames: [
    'Kazlauskas', 'Jankauskas', 'Petrauskas', 'Stankevičius', 'Vasiliauskas',
    'Žukauskas', 'Butkus', 'Paulauskas', 'Urbonas', 'Grigas', 'Rimkus',
    'Stonkus', 'Jasinskas', 'Kalinauskas', 'Karpavičius', 'Laurinavičius',
    'Macijauskas', 'Navickas', 'Orlauskas', 'Pocius', 'Ragulskis', 'Sakalauskas',
    'Tamulis', 'Valančius', 'Zdanavičius', 'Adomaitis', 'Baltakis', 'Dambrauskas'
  ],
  streets: [
    'Gedimino prospektas', 'Pilies gatvė', 'Didžioji gatvė', 'Vokiečių gatvė',
    'Laisvės alėja', 'Savanorių prospektas', 'Kalvarijų gatvė', 'Žirmūnų gatvė',
    'Ukmergės gatvė', 'Ozo gatvė', 'Konstitucijos prospektas', 'Verkių gatvė',
    'Antakalnio gatvė', 'Tuskulėnų gatvė', 'Širvintų gatvė', 'Gynėjų gatvė'
  ],
  cities: [
    'Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Alytus',
    'Marijampolė', 'Mažeikiai', 'Jonava', 'Utena', 'Kėdainiai', 'Telšiai',
    'Visaginas', 'Tauragė', 'Ukmergė', 'Plungė', 'Kretinga', 'Šilutė',
    'Radviliškis', 'Palanga', 'Gargždai', 'Druskininkai', 'Rokiškis', 'Biržai'
  ],
  states: [
    'Vilniaus apskritis', 'Kauno apskritis', 'Klaipėdos apskritis', 'Šiaulių apskritis',
    'Panevėžio apskritis', 'Alytaus apskritis', 'Marijampolės apskritis',
    'Tauragės apskritis', 'Telšių apskritis', 'Utenos apskritis'
  ],
  zipCodePattern: 'LT-#####',
  jobTitles: [
    'Programuotojas', 'Projektų vadovas', 'Duomenų analitikas', 'Rinkodaros vadovas',
    'Pardavimų atstovas', 'Buhalteris', 'Žmogiškųjų išteklių vadovas', 'Dizaineris',
    'Operacijų vadovas', 'Verslo analitikas', 'Produkto vadovas', 'Sistemų administratorius',
    'Kokybės inžinierius', 'Techninis rašytojas', 'Duomenų bazių administratorius',
    'Tinklų inžinierius', 'DevOps inžinierius', 'UX dizaineris', 'Turinio valdytojas'
  ],
  departments: [
    'Inžinerija', 'Rinkodara', 'Pardavimai', 'Žmogiškieji ištekliai', 'Finansai',
    'Operacijos', 'Klientų aptarnavimas', 'IT', 'Tyrimai ir plėtra',
    'Teisinis', 'Produktų valdymas', 'Dizainas', 'Kokybės užtikrinimas', 'Administracija'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 100);
    const apartment = Random.int(1, 50);
    return `${street} ${number}-${apartment}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return `LT-${String(Random.int(10000, 99999))}`;
  }
};
