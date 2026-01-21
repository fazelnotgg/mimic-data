import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fi_FI: LocaleDefinition = {
  firstNamesMale: [
    'Jari', 'Mika', 'Mikko', 'Juha', 'Petri', 'Jukka', 'Antti', 'Timo', 'Ville',
    'Matti', 'Pekka', 'Sami', 'Kari', 'Markus', 'Teemu', 'Joonas', 'Lauri', 'Tuomas',
    'Eero', 'Oskari', 'Valtteri', 'Aleksi', 'Oliver', 'Emil', 'Elias', 'Leo',
    'Onni', 'Aatos', 'Väinö', 'Eino', 'Veikko', 'Seppo', 'Heikki', 'Kalevi'
  ],
  firstNamesFemale: [
    'Maria', 'Anna', 'Johanna', 'Sari', 'Hanna', 'Kaisa', 'Laura', 'Sanna', 'Minna',
    'Tiina', 'Pirjo', 'Tuula', 'Eeva', 'Aino', 'Sofia', 'Emilia', 'Emma', 'Olivia',
    'Aada', 'Helmi', 'Lilja', 'Elli', 'Isla', 'Venla', 'Linnea', 'Matilda', 'Aino',
    'Kerttu', 'Ella', 'Anni', 'Iida', 'Sara', 'Oona', 'Pihla'
  ],
  lastNames: [
    'Virtanen', 'Korhonen', 'Nieminen', 'Mäkinen', 'Hämäläinen', 'Laine', 'Heikkinen',
    'Koskinen', 'Järvinen', 'Lehtonen', 'Lehtinen', 'Saarinen', 'Salminen', 'Heinonen',
    'Niemi', 'Heikkilä', 'Kinnunen', 'Salonen', 'Tuominen', 'Laitinen', 'Turunen',
    'Mattila', 'Rantanen', 'Karjalainen', 'Jokinen', 'Laaksonen', 'Savolainen', 'Mäkelä'
  ],
  streets: [
    'Mannerheimintie', 'Hämeentie', 'Aleksanterinkatu', 'Esplanadi', 'Bulevardi',
    'Pohjoinen Rautatiekatu', 'Fredrikinkatu', 'Iso Roobertinkatu', 'Kalevankatu',
    'Töölönkatu', 'Runeberginkatu', 'Mechelininkatu', 'Hietaniemenkatu', 'Lapinlahdenkatu',
    'Agricolankatu', 'Sturenkatu', 'Hämeentie', 'Koskelantie', 'Hitsaajankatu'
  ],
  cities: [
    'Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti',
    'Kuopio', 'Pori', 'Kouvola', 'Joensuu', 'Lappeenranta', 'Hämeenlinna', 'Vaasa',
    'Rovaniemi', 'Seinäjoki', 'Mikkeli', 'Kotka', 'Salo', 'Porvoo', 'Kokkola',
    'Lohja', 'Hyvinkää', 'Järvenpää', 'Rauma', 'Tuusula', 'Kajaani', 'Savonlinna'
  ],
  states: [
    'Uusimaa', 'Varsinais-Suomi', 'Satakunta', 'Kanta-Häme', 'Pirkanmaa', 'Päijät-Häme',
    'Kymenlaakso', 'Etelä-Karjala', 'Etelä-Savo', 'Pohjois-Savo', 'Pohjois-Karjala',
    'Keski-Suomi', 'Etelä-Pohjanmaa', 'Pohjanmaa', 'Keski-Pohjanmaa', 'Pohjois-Pohjanmaa',
    'Kainuu', 'Lappi', 'Ahvenanmaa'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ohjelmistokehittäjä', 'Projektipäällikkö', 'Data-analyytikko', 'Markkinointipäällikkö',
    'Myyntiedustaja', 'Kirjanpitäjä', 'HR-päällikkö', 'Suunnittelija', 'Toimintapäällikkö',
    'Liiketoiminta-analyytikko', 'Tuotepäällikkö', 'Järjestelmänvalvoja', 'Laatuinsinööri'
  ],
  departments: [
    'Kehitys', 'Markkinointi', 'Myynti', 'Henkilöstöhallinto', 'Talous', 'Toiminnot',
    'Asiakaspalvelu', 'IT', 'Tutkimus ja kehitys', 'Oikeusosasto', 'Hallinto'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    const apartment = Random.boolean() ? ` ${Random.int(1, 99)}` : '';
    return `${street} ${number}${apartment}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};