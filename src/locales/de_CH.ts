import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const de_CH: LocaleDefinition = {
  firstNamesMale: [
    'David', 'Luca', 'Noah', 'Leon', 'Nico', 'Jan', 'Marco', 'Lukas', 'Jonas', 'Sandro',
    'Thomas', 'Michael', 'Daniel', 'Christian', 'Stefan', 'Patrick', 'Andreas', 'Markus',
    'Peter', 'Martin', 'Marcel', 'Simon', 'Fabian', 'Tobias', 'Raphael', 'Samuel',
    'Benjamin', 'Adrian', 'Florian', 'Dominik', 'Matthias', 'Alexander'
  ],
  firstNamesFemale: [
    'Mia', 'Emma', 'Laura', 'Lara', 'Sophie', 'Anna', 'Julia', 'Sara', 'Lea', 'Nina',
    'Lisa', 'Sarah', 'Melanie', 'Michelle', 'Jennifer', 'Nadine', 'Nicole', 'Stefanie',
    'Andrea', 'Sandra', 'Claudia', 'Martina', 'Jasmin', 'Vanessa', 'Sabrina', 'Anja',
    'Elena', 'Chiara', 'Alina', 'Elisa', 'Noemi', 'Ladina'
  ],
  lastNames: [
    'Müller', 'Meier', 'Schmid', 'Keller', 'Weber', 'Huber', 'Schneider', 'Meyer',
    'Steiner', 'Fischer', 'Gerber', 'Brunner', 'Baumann', 'Frei', 'Zimmermann', 'Moser',
    'Widmer', 'Wyss', 'Graf', 'Roth', 'Hofmann', 'Lehmann', 'Bühler', 'Hofer',
    'Suter', 'Kuhn', 'Koch', 'Blanc', 'Kohler', 'Wenger', 'Lang', 'Kaufmann'
  ],
  streets: [
    'Bahnhofstrasse', 'Hauptstrasse', 'Dorfstrasse', 'Bergstrasse', 'Kirchgasse',
    'Schulhausstrasse', 'Poststrasse', 'Seestrasse', 'Talstrasse', 'Gartenstrasse',
    'Waldhofstrasse', 'Industriestrasse', 'Rosenweg', 'Lindenweg', 'Parkstrasse',
    'Feldweg', 'Mühlestrasse', 'Brunnenweg', 'Ringstrasse', 'Zürcherstrasse'
  ],
  cities: [
    'Zürich', 'Genf', 'Basel', 'Lausanne', 'Bern', 'Winterthur', 'Luzern', 'St. Gallen',
    'Lugano', 'Biel', 'Thun', 'Köniz', 'La Chaux-de-Fonds', 'Schaffhausen', 'Fribourg',
    'Chur', 'Vernier', 'Neuchâtel', 'Uster', 'Sion', 'Emmen', 'Zug', 'Yverdon-les-Bains',
    'Kriens', 'Rapperswil-Jona', 'Dübendorf', 'Montreux', 'Frauenfeld', 'Dietikon', 'Wil'
  ],
  states: [
    'Zürich', 'Bern', 'Luzern', 'Uri', 'Schwyz', 'Obwalden', 'Nidwalden', 'Glarus',
    'Zug', 'Fribourg', 'Solothurn', 'Basel-Stadt', 'Basel-Landschaft', 'Schaffhausen',
    'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'St. Gallen', 'Graubünden',
    'Aargau', 'Thurgau', 'Ticino', 'Vaud', 'Valais', 'Neuchâtel', 'Genève', 'Jura'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Softwareentwickler', 'Projektleiter', 'Datenanalyst', 'Marketingleiter',
    'Verkäufer', 'Buchhalter', 'Personalleiter', 'Designer', 'Betriebsleiter',
    'Business Analyst', 'Produktmanager', 'Systemadministrator', 'Qualitätsingenieur'
  ],
  departments: [
    'Technik', 'Marketing', 'Verkauf', 'Personal', 'Finanzen', 'Betrieb',
    'Kundendienst', 'IT', 'Forschung und Entwicklung', 'Recht', 'Verwaltung'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 150);
    return `${street} ${number}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};