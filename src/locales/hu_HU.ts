import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const hu_HU: LocaleDefinition = {
  firstNamesMale: [
    'László', 'István', 'József', 'János', 'Zoltán', 'Sándor', 'Gábor', 'Ferenc',
    'Péter', 'Attila', 'Tamás', 'András', 'Balázs', 'Máté', 'Dávid', 'Ádám',
    'Levente', 'Bence', 'Márk', 'Dominik', 'Norbert', 'Kristóf', 'Richárd', 'Viktor',
    'Gyula', 'Imre', 'Csaba', 'Tibor', 'Mihály', 'Zsolt', 'Krisztián', 'Róbert'
  ],
  firstNamesFemale: [
    'Mária', 'Erzsébet', 'Ilona', 'Katalin', 'Éva', 'Anna', 'Margit', 'Judit',
    'Ágnes', 'Eszter', 'Andrea', 'Krisztina', 'Erika', 'Mónika', 'Zsuzsanna', 'Réka',
    'Petra', 'Laura', 'Zsófia', 'Lilla', 'Dóra', 'Boglárka', 'Fanni', 'Viktória',
    'Renáta', 'Nikolett', 'Tímea', 'Beatrix', 'Anita', 'Noémi', 'Emese', 'Orsolya'
  ],
  lastNames: [
    'Nagy', 'Kovács', 'Tóth', 'Szabó', 'Horváth', 'Varga', 'Kiss', 'Molnár',
    'Németh', 'Farkas', 'Balogh', 'Papp', 'Takács', 'Juhász', 'Lakatos', 'Mészáros',
    'Oláh', 'Simon', 'Rácz', 'Fekete', 'Szűcs', 'Kocsis', 'Szilágyi', 'Török',
    'Fehér', 'Balázs', 'Gál', 'Vincze', 'Szalai', 'Máté', 'Kozma', 'Hegedűs'
  ],
  streets: [
    'Fő utca', 'Kossuth utca', 'Petőfi utca', 'Rákóczi út', 'Dózsa György út',
    'Árpád utca', 'Vörösmarty utca', 'Bem utca', 'Ady Endre utca', 'József Attila utca',
    'Mátyás király utca', 'Széchenyi utca', 'Deák Ferenc utca', 'Hősök tere',
    'Andrássy út', 'Váci utca', 'Dohány utca', 'Nagykörút', 'Baross utca', 'Üllői út'
  ],
  cities: [
    'Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr', 'Nyíregyháza', 'Kecskemét',
    'Székesfehérvár', 'Szombathely', 'Szolnok', 'Tatabánya', 'Kaposvár', 'Érd', 'Veszprém',
    'Békéscsaba', 'Zalaegerszeg', 'Sopron', 'Eger', 'Nagykanizsa', 'Dunakeszi', 'Hódmezővásárhely',
    'Szentendre', 'Cegléd', 'Vác', 'Gyula', 'Baja', 'Ózd', 'Salgótarján', 'Mosonmagyaróvár'
  ],
  states: [
    'Budapest', 'Pest', 'Fejér', 'Komárom-Esztergom', 'Veszprém', 'Győr-Moson-Sopron',
    'Vas', 'Zala', 'Baranya', 'Somogy', 'Tolna', 'Borsod-Abaúj-Zemplén', 'Heves',
    'Nógrád', 'Hajdú-Bihar', 'Jász-Nagykun-Szolnok', 'Szabolcs-Szatmár-Bereg',
    'Bács-Kiskun', 'Békés', 'Csongrád-Csanád'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Szoftverfejlesztő', 'Projektvezető', 'Adatelemző', 'Marketing menedzser',
    'Értékesítési képviselő', 'Könyvelő', 'HR vezető', 'Tervező', 'Üzemeltetési vezető',
    'Üzleti elemző', 'Termékmenedzser', 'Rendszergazda', 'Minőségbiztosítási mérnök'
  ],
  departments: [
    'Mérnöki', 'Marketing', 'Értékesítés', 'Humán erőforrás', 'Pénzügy', 'Üzemeltetés',
    'Ügyfélszolgálat', 'IT', 'Kutatás-fejlesztés', 'Jogi', 'Adminisztráció'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    // Hungarian name format: Last First
    return `${lastName} ${firstName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${zipCode} ${city}, ${street} ${number}.`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};