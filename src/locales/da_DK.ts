import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const da_DK: LocaleDefinition = {
  firstNamesMale: [
    'Morten', 'Peter', 'Jens', 'Michael', 'Lars', 'Henrik', 'Thomas', 'Søren',
    'Christian', 'Martin', 'Niels', 'Rasmus', 'Anders', 'Mikkel', 'Frederik',
    'Mathias', 'Casper', 'Simon', 'Mads', 'Jacob', 'Emil', 'Magnus', 'Lucas',
    'Oliver', 'William', 'Noah', 'Oscar', 'Victor', 'Alexander', 'Sebastian'
  ],
  firstNamesFemale: [
    'Anne', 'Kirsten', 'Mette', 'Hanne', 'Lene', 'Susanne', 'Camilla', 'Louise',
    'Maria', 'Sofie', 'Julie', 'Emma', 'Ida', 'Anna', 'Laura', 'Sarah', 'Mathilde',
    'Freja', 'Clara', 'Isabella', 'Alma', 'Ella', 'Karla', 'Josefine', 'Victoria',
    'Caroline', 'Katrine', 'Line', 'Rikke', 'Trine', 'Charlotte', 'Maja'
  ],
  lastNames: [
    'Nielsen', 'Jensen', 'Hansen', 'Pedersen', 'Andersen', 'Christensen', 'Larsen',
    'Sørensen', 'Rasmussen', 'Jørgensen', 'Petersen', 'Madsen', 'Kristensen', 'Olsen',
    'Thomsen', 'Christiansen', 'Poulsen', 'Johansen', 'Møller', 'Mortensen', 'Knudsen',
    'Jakobsen', 'Laursen', 'Simonsen', 'Frederiksen', 'Kjær', 'Schmidt', 'Holm'
  ],
  streets: [
    'Hovedgaden', 'Kirkevej', 'Skovvej', 'Parkvej', 'Strandvej', 'Møllevej',
    'Skolevej', 'Birkevej', 'Rosenvej', 'Vestergade', 'Østergade', 'Nørregade',
    'Søndergade', 'Tingvej', 'Lillevej', 'Storegade', 'Åvej', 'Byvej', 'Havnevej'
  ],
  cities: [
    'København', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding',
    'Horsens', 'Vejle', 'Roskilde', 'Herning', 'Silkeborg', 'Næstved', 'Fredericia',
    'Viborg', 'Køge', 'Holstebro', 'Taastrup', 'Slagelse', 'Hillerød', 'Sønderborg',
    'Holbæk', 'Svendborg', 'Hjørring', 'Frederikshavn', 'Rønne', 'Nykøbing F'
  ],
  states: [
    'Hovedstaden', 'Sjælland', 'Syddanmark', 'Midtjylland', 'Nordjylland'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Softwareingeniør', 'Projektleder', 'Dataanalytiker', 'Marketingchef',
    'Salgsrepræsentant', 'Revisor', 'HR-chef', 'Designer', 'Driftschef',
    'Forretningsanalytiker', 'Produktchef', 'Systemadministrator', 'Kvalitetsingeniør'
  ],
  departments: [
    'Engineering', 'Marketing', 'Salg', 'HR', 'Økonomi', 'Drift', 'Kundeservice',
    'IT', 'Forskning og udvikling', 'Juridisk', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    const floor = Random.boolean() ? `, ${Random.int(1, 5)}. sal` : '';
    return `${street} ${number}${floor}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};