import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const de_DE: LocaleDefinition = {
  firstNamesMale: [
    'Lukas', 'Leon', 'Tim', 'Paul', 'Jonas', 'Finn', 'Noah', 'Felix',
    'Elias', 'Ben', 'Luca', 'Maximilian', 'Jan', 'Niklas', 'Tom', 'Moritz',
    'Max', 'Julian', 'David', 'Alexander', 'Simon', 'Fabian', 'Tobias',
    'Sebastian', 'Philipp', 'Florian', 'Kevin', 'Christian', 'Daniel',
    'Michael', 'Stefan', 'Thomas', 'Andreas', 'Matthias', 'Markus', 'Peter',
    'Klaus', 'Wolfgang', 'Jürgen', 'Hans', 'Dieter', 'Helmut', 'Werner'
  ],
  firstNamesFemale: [
    'Emma', 'Mia', 'Hannah', 'Sofia', 'Anna', 'Emilia', 'Lina', 'Marie',
    'Sophia', 'Lena', 'Lea', 'Leonie', 'Amelie', 'Laura', 'Lisa', 'Luisa',
    'Sarah', 'Julia', 'Katharina', 'Nina', 'Jana', 'Michelle', 'Christina',
    'Vanessa', 'Jessica', 'Jennifer', 'Sandra', 'Stefanie', 'Melanie',
    'Andrea', 'Petra', 'Sabine', 'Susanne', 'Martina', 'Monika', 'Birgit',
    'Claudia', 'Karin', 'Angelika', 'Ingrid', 'Helga', 'Gisela', 'Ursula'
  ],
  lastNames: [
    'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner',
    'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter',
    'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann', 'Braun',
    'Krüger', 'Hofmann', 'Hartmann', 'Lange', 'Schmitt', 'Werner', 'Schmitz',
    'Krause', 'Meier', 'Lehmann', 'Schmid', 'Schulze', 'Maier', 'Köhler',
    'Herrmann', 'König', 'Walter', 'Mayer', 'Huber', 'Kaiser', 'Fuchs',
    'Peters', 'Lang', 'Scholz', 'Möller', 'Weiß', 'Jung', 'Hahn', 'Schubert'
  ],
  streets: [
    'Hauptstraße', 'Bahnhofstraße', 'Gartenstraße', 'Schulstraße', 'Dorfstraße',
    'Kirchstraße', 'Bergstraße', 'Waldstraße', 'Schillerstraße', 'Goethestraße',
    'Lindenstraße', 'Parkstraße', 'Mozartstraße', 'Beethovenstraße', 'Bachstraße',
    'Kantstraße', 'Lessingstraße', 'Fichtestraße', 'Schubertstraße', 'Brahmsstraße',
    'Friedrichstraße', 'Wilhelmstraße', 'Marktstraße', 'Kaiserstraße', 'Poststraße',
    'Ringstraße', 'Am Markt', 'Rosenstraße', 'Birkenweg', 'Ahornweg'
  ],
  cities: [
    'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf',
    'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg',
    'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe',
    'Mannheim', 'Augsburg', 'Wiesbaden', 'Gelsenkirchen', 'Mönchengladbach',
    'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen', 'Halle', 'Magdeburg', 'Freiburg',
    'Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz', 'Rostock', 'Kassel'
  ],
  states: [
    'Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen',
    'Hamburg', 'Hessen', 'Mecklenburg-Vorpommern', 'Niedersachsen',
    'Nordrhein-Westfalen', 'Rheinland-Pfalz', 'Saarland', 'Sachsen',
    'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Projektmanager', 'Datenanalyst', 'Marketing Manager',
    'Vertriebsmitarbeiter', 'Buchhalter', 'Personalleiter', 'Designer',
    'Betriebsleiter', 'Business Analyst', 'Finanzanalyst', 'Produktmanager',
    'Systemadministrator', 'Kundenbetreuer', 'Quality Assurance Engineer',
    'Technischer Redakteur', 'Datenbankadministrator', 'Netzwerkingenieur'
  ],
  departments: [
    'Engineering', 'Marketing', 'Vertrieb', 'Personalwesen', 'Finanzen',
    'Betrieb', 'Kundenservice', 'IT', 'Forschung und Entwicklung',
    'Recht', 'Produktmanagement', 'Design', 'Qualitätssicherung', 'Verwaltung'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 200);
    return `${street} ${houseNumber}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};