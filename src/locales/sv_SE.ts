import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const sv_SE: LocaleDefinition = {
  firstNamesMale: [
    'Erik', 'Lars', 'Karl', 'Anders', 'Per', 'Johan', 'Nils', 'Lennart', 'Emil',
    'Oscar', 'Gustav', 'Viktor', 'Axel', 'Filip', 'Elias', 'Lucas', 'Alexander',
    'Oliver', 'William', 'Hugo', 'Liam', 'Noah', 'Adam', 'Isak', 'Anton', 'Theo',
    'Mattias', 'Magnus', 'Stefan', 'Peter', 'Mikael', 'Daniel', 'Fredrik', 'Björn'
  ],
  firstNamesFemale: [
    'Anna', 'Maria', 'Karin', 'Eva', 'Kristina', 'Lena', 'Emma', 'Sofia', 'Ingrid',
    'Birgitta', 'Sara', 'Lisa', 'Linnea', 'Maja', 'Elin', 'Ida', 'Ebba', 'Wilma',
    'Alice', 'Julia', 'Elsa', 'Alicia', 'Olivia', 'Astrid', 'Agnes', 'Ella', 'Freja',
    'Klara', 'Saga', 'Isabelle', 'Emilia', 'Hanna', 'Amanda', 'Josefin', 'Ellen'
  ],
  lastNames: [
    'Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson',
    'Persson', 'Svensson', 'Gustafsson', 'Pettersson', 'Jonsson', 'Jansson', 'Hansson',
    'Bengtsson', 'Jönsson', 'Lindberg', 'Jakobsson', 'Magnusson', 'Olofsson', 'Lindström',
    'Lindqvist', 'Lindgren', 'Berg', 'Axelsson', 'Bergström', 'Lundberg', 'Lind', 'Lundgren'
  ],
  streets: [
    'Storgatan', 'Drottninggatan', 'Kungsgatan', 'Biblioteksgatan', 'Birger Jarlsgatan',
    'Sveavägen', 'Vasagatan', 'Hamngatan', 'Karlavägen', 'Valhallavägen',
    'Linnégatan', 'Skånegatan', 'Södermalmsallén', 'Odengatan', 'Götgatan',
    'Ringvägen', 'Hornsgatan', 'Folkungagatan', 'Östermalmsgatan', 'Norrtullsgatan'
  ],
  cities: [
    'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping',
    'Helsingborg', 'Jönköping', 'Norrköping', 'Lund', 'Umeå', 'Gävle', 'Borås',
    'Eskilstuna', 'Södertälje', 'Karlstad', 'Täby', 'Växjö', 'Halmstad', 'Sundsvall',
    'Luleå', 'Trollhättan', 'Östersund', 'Borlänge', 'Falun', 'Skellefteå', 'Kalmar'
  ],
  states: [
    'Stockholm', 'Västra Götaland', 'Skåne', 'Uppsala', 'Västmanland', 'Örebro',
    'Östergötland', 'Jönköping', 'Kronoberg', 'Kalmar', 'Gotland', 'Blekinge',
    'Halland', 'Värmland', 'Dalarna', 'Gävleborg', 'Västernorrland', 'Jämtland',
    'Västerbotten', 'Norrbotten', 'Södermanland'
  ],
  zipCodePattern: '### ##',
  jobTitles: [
    'Mjukvaruingenjör', 'Projektledare', 'Dataanalytiker', 'Marknadschef',
    'Säljare', 'Revisor', 'HR-chef', 'Designer', 'Driftschef', 'Affärsanalytiker',
    'Produktchef', 'Systemadministratör', 'Kvalitetsingenjör', 'Utvecklare'
  ],
  departments: [
    'Teknik', 'Marknadsföring', 'Försäljning', 'Personal', 'Ekonomi', 'Drift',
    'Kundtjänst', 'IT', 'Forskning och utveckling', 'Juridik', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 150);
    const apartment = Random.boolean() ? ` lgh ${Random.int(1001, 1299)}` : '';
    return `${street} ${number}${apartment}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    const part1 = String(Random.int(100, 999));
    const part2 = String(Random.int(10, 99));
    return `${part1} ${part2}`;
  }
};