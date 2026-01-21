import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const nl_NL: LocaleDefinition = {
  firstNamesMale: [
    'Jan', 'Pieter', 'Kees', 'Henk', 'Johan', 'Daan', 'Lucas', 'Sem', 'Bram', 'Thijs',
    'Lars', 'Tim', 'Tom', 'Ruben', 'Sven', 'Stijn', 'Luuk', 'Jesse', 'Milan', 'Max',
    'Finn', 'Teun', 'Bas', 'Nick', 'Thomas', 'Jasper', 'Jelle', 'Roel', 'Sander'
  ],
  firstNamesFemale: [
    'Anna', 'Emma', 'Sophie', 'Julia', 'Lisa', 'Laura', 'Sanne', 'Eva', 'Lotte',
    'Sara', 'Isa', 'Anne', 'Nina', 'Fleur', 'Femke', 'Iris', 'Noa', 'Maud', 'Roos',
    'Eline', 'Demi', 'Lynn', 'Amy', 'Lieke', 'Naomi', 'Amber', 'Vera', 'Maja', 'Tess'
  ],
  lastNames: [
    'de Jong', 'Jansen', 'de Vries', 'van den Berg', 'van Dijk', 'Bakker', 'Janssen',
    'Visser', 'Smit', 'Meijer', 'de Boer', 'Mulder', 'de Groot', 'Bos', 'Vos',
    'Peters', 'Hendriks', 'van Leeuwen', 'Dekker', 'Brouwer', 'de Wit', 'Dijkstra',
    'Smits', 'de Graaf', 'van der Meer', 'van der Linden', 'Kok', 'Jacobs', 'de Haan'
  ],
  streets: [
    'Hoofdstraat', 'Kerkstraat', 'Schoolstraat', 'Dorpsstraat', 'Stationsweg',
    'Molenstraat', 'Nieuwstraat', 'Parkweg', 'Bosweg', 'Beatrixlaan', 'Wilhelminalaan',
    'Julianastraat', 'Koningstraat', 'Prins Hendrikstraat', 'Marktstraat',
    'Parallelweg', 'Gravenstraat', 'Binnenweg', 'Groeneweg', 'Lindenstraat'
  ],
  cities: [
    'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen',
    'Almere', 'Breda', 'Nijmegen', 'Enschede', 'Haarlem', 'Arnhem', 'Zaanstad',
    'Amersfoort', 'Apeldoorn', 'Hoofddorp', 'Maastricht', 'Leiden', 'Dordrecht',
    'Zoetermeer', 'Zwolle', 'Deventer', 'Delft', 'Alkmaar', 'Heerlen', 'Venlo'
  ],
  states: [
    'Noord-Holland', 'Zuid-Holland', 'Utrecht', 'Noord-Brabant', 'Gelderland',
    'Overijssel', 'Limburg', 'Groningen', 'Friesland', 'Zeeland', 'Flevoland', 'Drenthe'
  ],
  zipCodePattern: '#### @@',
  jobTitles: [
    'Software Engineer', 'Projectmanager', 'Data Analist', 'Marketingmanager',
    'Vertegenwoordiger', 'Accountant', 'HR Manager', 'Designer', 'Operationeel Manager',
    'Business Analist', 'Productmanager', 'Systeembeheerder', 'Kwaliteitsanalist'
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
    const number = Random.int(1, 250);
    const letter = Random.boolean() ? Random.pick(['A', 'B', 'C']) : '';
    return `${street} ${number}${letter}, ${zipCode}, ${city}`;
  },

  generateZipCode(): string {
    const digits = String(Random.int(1000, 9999));
    const letters = String.fromCharCode(65 + Random.int(0, 25)) + 
                    String.fromCharCode(65 + Random.int(0, 25));
    return `${digits} ${letters}`;
  }
};