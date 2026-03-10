import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const de_LI: LocaleDefinition = {
  firstNamesMale: [
    'Hans', 'Peter', 'Martin', 'Thomas', 'Andreas', 'Michael', 'Stefan', 'Daniel',
    'Markus', 'Christian', 'Alexander', 'Patrick', 'Florian', 'Lukas', 'Simon',
    'Philipp', 'David', 'Fabian', 'Jan', 'Tobias', 'Sebastian', 'Benjamin',
    'Manuel', 'Raphael', 'Kevin', 'Marco', 'Nicolas', 'Julian', 'Tim',
    'Jonas', 'Luca', 'Noah', 'Leon', 'Felix', 'Paul', 'Max', 'Jakob'
  ],
  firstNamesFemale: [
    'Maria', 'Elisabeth', 'Anna', 'Barbara', 'Elisabeth', 'Margaretha', 'Veronika',
    'Katharina', 'Christina', 'Sabine', 'Andrea', 'Petra', 'Monika', 'Brigitte',
    'Gabriele', 'Karin', 'Silvia', 'Martina', 'Claudia', 'Susanne', 'Nicole',
    'Stephanie', 'Daniela', 'Sandra', 'Simone', 'Vanessa', 'Jennifer', 'Lisa',
    'Sarah', 'Laura', 'Julia', 'Hannah', 'Lena', 'Sophie', 'Emma', 'Mia'
  ],
  lastNames: [
    'Büchel', 'Gassner', 'Marxer', 'Ritter', 'Schädler', 'Hassler', 'Ender',
    'Amann', 'Bargetze', 'Batliner', 'Beck', 'Biedermann', 'Brunner', 'Bühler',
    'Elkuch', 'Frick', 'Frommelt', 'Gerner', 'Gerner', 'Gassner', 'Gerner',
    'Hilti', 'Hoop', 'Huber', 'Jehle', 'Kaiser', 'Kaufmann', 'Kieber',
    'Kind', 'Konrad', 'Kranz', 'Lampert', 'Lutz', 'Mader', 'Malin',
    'Matter', 'Meier', 'Nagele', 'Ospelt', 'Oehri', 'Oehri', 'Quaderer',
    'Rheinberger', 'Risch', 'Schlegel', 'Schmid', 'Schneider', 'Schnüriger',
    'Schurti', 'Schurti', 'Sele', 'Thöny', 'Verling', 'Vogt', 'Wachter', 'Walser'
  ],
  streets: [
    'Äulestrasse', 'Bahnhofstrasse', 'Bendererstrasse', 'Bergstrasse',
    'Bildaistrasse', 'Binhagstrasse', 'Blegistrasse', 'Dorfstrasse',
    'Ebenholzstrasse', 'Feldstrasse', 'Gaberstrasse', 'Gaflei',
    'Gemeindestrasse', 'Hintergass', 'Hochstrasse', 'Im Riet',
    'Kirchstrasse', 'Landstrasse', 'Malanserstrasse', 'Mittelstrasse',
    'Oberstrasse', 'Reblestrasse', 'Rietstrasse', 'Schlossstrasse',
    'Städtle', 'Steinstrasse', 'Unterstutz', 'Waldstrasse'
  ],
  cities: [
    'Vaduz', 'Schaan', 'Balzers', 'Triesen', 'Eschen', 'Mauren',
    'Gamprin', 'Ruggell', 'Schellenberg', 'Triesenberg', 'Planken'
  ],
  states: [
    'Vaduz', 'Schaan', 'Balzers', 'Triesen', 'Eschen', 'Mauren',
    'Gamprin', 'Ruggell', 'Schellenberg', 'Triesenberg', 'Planken'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Softwareentwickler', 'Projektmanager', 'Datenanalyst', 'Marketingmanager',
    'Vertriebsmitarbeiter', 'Buchhalter', 'Personalmanager', 'Designer',
    'Betriebsleiter', 'Business Analyst', 'Produktmanager', 'Systemadministrator',
    'Kundendienstmitarbeiter', 'Qualitätssicherungsingenieur', 'Technischer Redakteur',
    'Datenbankadministrator', 'Netzwerkingenieur', 'UX-Designer', 'Content-Autor'
  ],
  departments: [
    'Entwicklung', 'Marketing', 'Vertrieb', 'Personalwesen', 'Finanzen',
    'Betrieb', 'Kundendienst', 'IT', 'Forschung und Entwicklung',
    'Recht', 'Produktmanagement', 'Design', 'Qualitätssicherung', 'Verwaltung'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 100);
    return `${street} ${houseNumber}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(9485, 9499));
  },

  phoneFormats: [
    '+423 ### ## ##',
    '+423 ## ## ##',
    '### ## ##',
    '## ## ##',
    '+423-###-##-##',
    '0## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'telecom.li', 'bluewin.ch', 'icloud.com', 'protonmail.com',
    'mail.com', 'zoho.com'
  ],

  companyNames: [
    'Hilti', 'Ivoclar Vivadent', 'Omya', 'Hilcona', 'Neutrik',
    'Liechtensteinische Landesbank', 'LGT Group', 'VP Bank',
    'Liechtensteinische Versicherung', 'Ospelt Group', 'Kind Group'
  ],

  industries: [
    'Technologie', 'Finanzen', 'Gesundheitswesen', 'Bildung', 'Einzelhandel',
    'Fertigung', 'Medien', 'Telekommunikation', 'Energie', 'Verkehr',
    'Immobilien', 'Beratung', 'Gastgewerbe', 'Automobil', 'Luftfahrt'
  ],

  catchPhrases: [
    'Innovation für morgen', 'Ihr Erfolg ist unser Ziel', 'Gemeinsam die Zukunft gestalten',
    'Qualität und Zuverlässigkeit', 'Exzellenz in jedem Detail', 'Ihr vertrauenswürdiger Partner',
    'Nachhaltiges Wachstum', 'Wert schaffen', 'Liechtensteiner Präzision'
  ]
};
