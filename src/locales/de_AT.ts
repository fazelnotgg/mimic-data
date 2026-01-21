import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const de_AT: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'Thomas', 'Christian', 'Andreas', 'Stefan', 'Markus', 'Alexander', 'Wolfgang',
    'Florian', 'Daniel', 'Patrick', 'Mario', 'Manuel', 'Christoph', 'Philipp', 'Matthias',
    'David', 'Sebastian', 'Lukas', 'Johannes', 'Marcel', 'Dominik', 'Benjamin', 'Tobias',
    'Simon', 'Martin', 'Peter', 'Franz', 'Josef', 'Maximilian', 'Jakob', 'Felix'
  ],
  firstNamesFemale: [
    'Anna', 'Julia', 'Sarah', 'Lisa', 'Laura', 'Katharina', 'Marie', 'Sophie', 'Lena',
    'Magdalena', 'Christina', 'Nina', 'Hannah', 'Stefanie', 'Sandra', 'Daniela', 'Melanie',
    'Jasmin', 'Verena', 'Elisabeth', 'Andrea', 'Maria', 'Petra', 'Sabine', 'Martina',
    'Claudia', 'Eva', 'Michaela', 'Karin', 'Susanne', 'Barbara', 'Angelika'
  ],
  lastNames: [
    'Müller', 'Gruber', 'Wagner', 'Huber', 'Pichler', 'Steiner', 'Moser', 'Mayer',
    'Berger', 'Hofer', 'Leitner', 'Bauer', 'Schmid', 'Schneider', 'Reiter', 'Fischer',
    'Weber', 'Maier', 'Schwarz', 'Eder', 'Brunner', 'Lang', 'Hoffmann', 'Binder',
    'Lechner', 'Wolf', 'Koller', 'Fuchs', 'Haas', 'Wimmer', 'Egger', 'Aigner'
  ],
  streets: [
    'Hauptstraße', 'Bahnhofstraße', 'Kirchenplatz', 'Marktplatz', 'Dorfstraße', 'Schulstraße',
    'Wiener Straße', 'Linzer Straße', 'Salzburger Straße', 'Grazer Straße', 'Ringstraße',
    'Innsbrucker Straße', 'Am Ring', 'Schönbrunner Straße', 'Mariahilfer Straße',
    'Kärntner Straße', 'Graben', 'Herrengasse', 'Landstraße', 'Favoritenstraße'
  ],
  cities: [
    'Wien', 'Graz', 'Linz', 'Salzburg', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels',
    'Sankt Pölten', 'Dornbirn', 'Steyr', 'Wiener Neustadt', 'Feldkirch', 'Bregenz',
    'Leonding', 'Klosterneuburg', 'Baden', 'Wolfsberg', 'Leoben', 'Krems', 'Traun',
    'Amstetten', 'Lustenau', 'Kapfenberg', 'Mödling', 'Hallein', 'Kufstein', 'Traiskirchen'
  ],
  states: [
    'Wien', 'Niederösterreich', 'Oberösterreich', 'Steiermark', 'Tirol', 'Kärnten',
    'Salzburg', 'Vorarlberg', 'Burgenland'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Softwareentwickler', 'Projektmanager', 'Datenanalyst', 'Marketingleiter',
    'Vertriebsmitarbeiter', 'Buchhalter', 'Personalleiter', 'Designer', 'Betriebsleiter',
    'Business Analyst', 'Produktmanager', 'Systemadministrator', 'Qualitätsingenieur'
  ],
  departments: [
    'Technik', 'Marketing', 'Vertrieb', 'Personalwesen', 'Finanzen', 'Betrieb',
    'Kundenservice', 'IT', 'Forschung und Entwicklung', 'Recht', 'Verwaltung'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 150);
    const door = Random.int(1, 30);
    return `${street} ${number}/${door}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};