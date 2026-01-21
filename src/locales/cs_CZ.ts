import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const cs_CZ: LocaleDefinition = {
  firstNamesMale: [
    'Jiří', 'Jan', 'Petr', 'Josef', 'Pavel', 'Martin', 'Tomáš', 'Jaroslav', 'Miroslav',
    'Zdeněk', 'Václav', 'Milan', 'Michal', 'František', 'David', 'Lukáš', 'Jakub',
    'Ondřej', 'Filip', 'Stanislav', 'Vojtěch', 'Adam', 'Radek', 'Daniel', 'Marek',
    'Aleš', 'Roman', 'Ladislav', 'Karel', 'Patrik', 'Dominik', 'Matěj'
  ],
  firstNamesFemale: [
    'Marie', 'Jana', 'Eva', 'Anna', 'Hana', 'Věra', 'Lenka', 'Alena', 'Petra',
    'Kateřina', 'Lucie', 'Martina', 'Veronika', 'Jitka', 'Ivana', 'Michaela',
    'Helena', 'Zuzana', 'Markéta', 'Andrea', 'Monika', 'Barbora', 'Tereza', 'Nikola',
    'Simona', 'Kristýna', 'Natálie', 'Adéla', 'Eliška', 'Karolína', 'Daniela'
  ],
  lastNames: [
    'Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý',
    'Horáček', 'Němec', 'Pospíšil', 'Pokorný', 'Hájek', 'Jelínek', 'Král', 'Růžička',
    'Beneš', 'Fiala', 'Sedláček', 'Doležal', 'Zeman', 'Kolář', 'Navrátil', 'Čermák',
    'Urban', 'Vaněk', 'Blažek', 'Krejčí', 'Moravec', 'Marek', 'Štěpánek', 'Šimek'
  ],
  streets: [
    'Václavské náměstí', 'Národní třída', 'Na Příkopě', 'Pařížská ulice', 'Karlova ulice',
    'Nerudova ulice', 'Revolucní', 'Spálená', 'Vinohradská', 'Jugoslávská', 'Náměstí Míru',
    'Jungmannova', 'Jindřišská', 'Sokolská', 'Žitná', 'Anglická', 'Italská', 'Rumunská'
  ],
  cities: [
    'Praha', 'Brno', 'Ostrava', 'Plzeň', 'Liberec', 'Olomouc', 'České Budějovice',
    'Hradec Králové', 'Ústí nad Labem', 'Pardubice', 'Zlín', 'Havířov', 'Kladno',
    'Most', 'Opava', 'Frýdek-Místek', 'Jihlava', 'Teplice', 'Karviná', 'Karlovy Vary',
    'Děčín', 'Chomutov', 'Přerov', 'Jablonec nad Nisou', 'Mladá Boleslav', 'Prostějov'
  ],
  states: [
    'Hlavní město Praha', 'Středočeský', 'Jihočeský', 'Plzeňský', 'Karlovarský',
    'Ústecký', 'Liberecký', 'Královéhradecký', 'Pardubický', 'Vysočina',
    'Jihomoravský', 'Olomoucký', 'Zlínský', 'Moravskoslezský'
  ],
  zipCodePattern: '### ##',
  jobTitles: [
    'Softwarový inženýr', 'Projektový manažer', 'Datový analytik', 'Marketingový manažer',
    'Obchodní zástupce', 'Účetní', 'Personalista', 'Designer', 'Provozní manažer',
    'Business analytik', 'Produktový manažer', 'Správce systému', 'Kontrolor kvality'
  ],
  departments: [
    'Technický', 'Marketing', 'Prodej', 'Lidské zdroje', 'Finance', 'Provoz',
    'Zákaznický servis', 'IT', 'Výzkum a vývoj', 'Právní', 'Administrativa'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street} ${number}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    const part1 = String(Random.int(100, 999));
    const part2 = String(Random.int(10, 99));
    return `${part1} ${part2}`;
  }
};