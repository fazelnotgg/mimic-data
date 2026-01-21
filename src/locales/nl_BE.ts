import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const nl_BE: LocaleDefinition = {
  firstNamesMale: [
    'Lars', 'Thomas', 'Lucas', 'Maxime', 'Nathan', 'Louis', 'Noah', 'Arthur', 'Victor',
    'Adam', 'Mohamed', 'Nicolas', 'Alexander', 'Simon', 'Mathias', 'Robbe', 'Wout',
    'Jan', 'Pieter', 'Koen', 'Bart', 'Tom', 'Kevin', 'David', 'Michael', 'Johan',
    'Marc', 'Steven', 'Peter', 'Filip', 'Stijn', 'Bram'
  ],
  firstNamesFemale: [
    'Emma', 'Louise', 'Marie', 'Anna', 'Laura', 'Lisa', 'Julie', 'Noor', 'Lotte',
    'Sara', 'Camille', 'Charlotte', 'Ella', 'Nina', 'Fien', 'Lena', 'Amber', 'Luna',
    'Sarah', 'Sophie', 'Kim', 'Elke', 'Sofie', 'Eline', 'Jana', 'Karen', 'Nathalie',
    'Katrien', 'Ann', 'Veerle', 'Ellen', 'Inge'
  ],
  lastNames: [
    'Peeters', 'Janssens', 'Maes', 'Jacobs', 'Mertens', 'Willems', 'Claes', 'Goossens',
    'Wouters', 'De Smet', 'De Vos', 'Hermans', 'Van de Velde', 'Vermeulen', 'Dubois',
    'Lambert', 'Laurent', 'Simon', 'Leroy', 'Dupont', 'Martens', 'De Wilde', 'Hendrickx',
    'Michiels', 'Van den Berg', 'Pauwels', 'Stevens', 'De Clercq', 'Coppens', 'Bogaert'
  ],
  streets: [
    'Grote Markt', 'Kerkstraat', 'Dorpsstraat', 'Stationsstraat', 'Hoogstraat',
    'Molenstraat', 'Nieuwstraat', 'Brugsestraat', 'Antwerpsestraat', 'Brusselsestraat',
    'Koning Albertlaan', 'Koningin Elisabethlaan', 'Leopold II-laan', 'Mechelsesteenweg',
    'Turnhoutsebaan', 'Leuvenselaan', 'Gentsebaan', 'Gentsestraat', 'Markt', 'Burg'
  ],
  cities: [
    'Brussel', 'Antwerpen', 'Gent', 'Charleroi', 'Luik', 'Brugge', 'Namen', 'Leuven',
    'Bergen', 'Mechelen', 'Aalst', 'La Louvière', 'Kortrijk', 'Hasselt', 'Sint-Niklaas',
    'Oostende', 'Doornik', 'Genk', 'Seraing', 'Roeselare', 'Moeskroen', 'Verviers',
    'Dendermonde', 'Beringen', 'Turnhout', 'Dilbeek', 'Heist-op-den-Berg', 'Vilvoorde'
  ],
  states: [
    'Antwerpen', 'Limburg', 'Oost-Vlaanderen', 'West-Vlaanderen', 'Vlaams-Brabant',
    'Waals-Brabant', 'Henegouwen', 'Luik', 'Luxemburg', 'Namen', 'Brussels Hoofdstedelijk Gewest'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Software Engineer', 'Projectmanager', 'Data Analist', 'Marketingmanager',
    'Verkoopvertegenwoordiger', 'Boekhouder', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analist', 'Productmanager', 'Systeembeheerder', 'Kwaliteitsingenieur'
  ],
  departments: [
    'Engineering', 'Marketing', 'Verkoop', 'Human Resources', 'Financiën', 'Operaties',
    'Klantenservice', 'IT', 'Onderzoek en Ontwikkeling', 'Juridisch', 'Administratie'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 300);
    const bus = Random.boolean() ? ` bus ${Random.int(1, 50)}` : '';
    return `${street} ${number}${bus}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};