import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const lv_LV: LocaleDefinition = {
  firstNamesMale: [
    'Jānis', 'Andris', 'Māris', 'Ivars', 'Guntis', 'Juris', 'Edgars', 'Artūrs',
    'Uldis', 'Ēriks', 'Valdis', 'Aigars', 'Normunds', 'Sandis', 'Kaspars',
    'Renārs', 'Oskars', 'Kristaps', 'Toms', 'Dāvis', 'Rihards', 'Aleksandrs',
    'Sergejs', 'Dmitrijs', 'Aleksejs', 'Viktors', 'Pēteris', 'Pāvils', 'Jēkabs', 'Miķelis'
  ],
  firstNamesFemale: [
    'Līga', 'Inese', 'Ilze', 'Dace', 'Sandra', 'Inga', 'Zane', 'Laima',
    'Vita', 'Ieva', 'Kristīne', 'Agnese', 'Maija', 'Santa', 'Elīna',
    'Laura', 'Anna', 'Marija', 'Jekaterina', 'Natālija', 'Tatjana', 'Jeļena',
    'Olga', 'Svetlana', 'Irina', 'Aija', 'Baiba', 'Solvita', 'Guntra', 'Māra'
  ],
  lastNames: [
    'Bērziņš', 'Kalniņš', 'Ozoliņš', 'Liepiņš', 'Vanags', 'Jansons', 'Karlsons',
    'Andersons', 'Lejnieks', 'Krauze', 'Osis', 'Siliņš', 'Vītoliņš', 'Āboliņš',
    'Lācis', 'Caune', 'Zariņš', 'Birziņš', 'Eglītis', 'Kļaviņš', 'Muižnieks',
    'Sproģis', 'Šmits', 'Voss', 'Freimanis', 'Zariņš', 'Bērziņa', 'Kalniņa', 'Ozoliņa'
  ],
  streets: [
    'Brīvības bulvāris', 'Elizabetes iela', 'Krasta iela', 'Daugavgrīvas iela',
    'Maskavas iela', 'Dzirnavu iela', 'Tērbatas iela', 'Miera iela',
    'Valdemāra iela', 'Blaumaņa iela', 'Stabu iela', 'Lāčplēša iela',
    'Gogoļa iela', 'Prāgas iela', 'Skanstes iela', 'Gustava Zemgala gatve'
  ],
  cities: [
    'Rīga', 'Daugavpils', 'Liepāja', 'Jelgava', 'Jūrmala', 'Ventspils',
    'Rēzekne', 'Valmiera', 'Jēkabpils', 'Ogre', 'Tukums', 'Salaspils',
    'Cēsis', 'Olaine', 'Kuldīga', 'Saldus', 'Talsi', 'Dobele',
    'Sigulda', 'Ikšķile', 'Bauska', 'Limbazi', 'Aizkraukle', 'Gulbene'
  ],
  states: [
    'Rīga', 'Vidzeme', 'Latgale', 'Kurzeme', 'Zemgale', 'Pierīga'
  ],
  zipCodePattern: 'LV-####',
  jobTitles: [
    'Programmatūras inženieris', 'Projektu vadītājs', 'Datu analītiķis', 'Mārketinga vadītājs',
    'Pārdošanas pārstāvis', 'Grāmatvedis', 'HR vadītājs', 'Dizainers', 'Operāciju vadītājs',
    'Biznesa analītiķis', 'Produktu vadītājs', 'Sistēmu administrators', 'Kvalitātes inženieris',
    'Tehniskais rakstnieks', 'Datubāzu administrators', 'Tīklu inženieris', 'DevOps inženieris'
  ],
  departments: [
    'Inženierija', 'Mārketings', 'Pārdošana', 'Cilvēkresursi', 'Finanses',
    'Operācijas', 'Klientu apkalpošana', 'IT', 'Pētniecība un attīstība',
    'Juridiskais', 'Produktu vadība', 'Dizains', 'Kvalitātes nodrošinājums', 'Administrācija'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    const apartment = Random.int(1, 100);
    return `${street} ${number}-${apartment}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return `LV-${String(Random.int(1000, 9999))}`;
  }
};
