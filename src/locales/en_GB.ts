import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_GB: LocaleDefinition = {
  firstNamesMale: [
    'Oliver', 'George', 'Harry', 'Jack', 'Jacob', 'Noah', 'Charlie', 'Muhammad', 'Thomas',
    'Oscar', 'William', 'James', 'Henry', 'Alfie', 'Leo', 'Joshua', 'Freddie', 'Ethan',
    'Archie', 'Isaac', 'Alexander', 'Joseph', 'Edward', 'Samuel', 'Daniel', 'Max',
    'Lucas', 'Mason', 'Harrison', 'Logan', 'Sebastian', 'Dylan', 'Arthur', 'Theo'
  ],
  firstNamesFemale: [
    'Olivia', 'Amelia', 'Isla', 'Ava', 'Emily', 'Isabella', 'Mia', 'Poppy', 'Ella',
    'Lily', 'Sophie', 'Grace', 'Sophia', 'Charlotte', 'Freya', 'Evie', 'Daisy', 'Florence',
    'Alice', 'Jessica', 'Ivy', 'Millie', 'Ruby', 'Rosie', 'Scarlett', 'Isabelle',
    'Phoebe', 'Willow', 'Sienna', 'Lucy', 'Emma', 'Harriet', 'Evelyn', 'Elsie'
  ],
  lastNames: [
    'Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Johnson', 'Davies',
    'Robinson', 'Wright', 'Thompson', 'Evans', 'Walker', 'White', 'Roberts', 'Green',
    'Hall', 'Wood', 'Jackson', 'Clarke', 'Patel', 'Khan', 'Lewis', 'James', 'Roberts',
    'Baker', 'Harrison', 'Hughes', 'Edwards', 'Collins', 'Morgan', 'Cooper', 'Bell'
  ],
  streets: [
    'High Street', 'Station Road', 'Main Street', 'Park Road', 'Church Street',
    'Victoria Road', 'Green Lane', 'Manor Road', 'Church Lane', 'Park Avenue',
    'The Avenue', 'Queens Road', 'New Road', 'Grange Road', 'King Street', 'Kingsway',
    'Windsor Road', 'London Road', 'Mill Lane', 'School Lane', 'The Green', 'The Crescent'
  ],
  cities: [
    'London', 'Birmingham', 'Manchester', 'Leeds', 'Liverpool', 'Newcastle', 'Sheffield',
    'Bristol', 'Glasgow', 'Leicester', 'Edinburgh', 'Bradford', 'Cardiff', 'Belfast',
    'Nottingham', 'Coventry', 'Kingston upon Hull', 'Stoke-on-Trent', 'Plymouth',
    'Wolverhampton', 'Derby', 'Southampton', 'Portsmouth', 'Brighton', 'Reading',
    'Northampton', 'Luton', 'Bolton', 'Aberdeen', 'York', 'Oxford', 'Cambridge'
  ],
  states: [
    'England', 'Scotland', 'Wales', 'Northern Ireland', 'Greater London', 'West Midlands',
    'Greater Manchester', 'West Yorkshire', 'South Yorkshire', 'Merseyside', 'Tyne and Wear'
  ],
  zipCodePattern: '@## #@@',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'Systems Administrator', 'Quality Assurance Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'IT', 'Research and Development', 'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 300);
    return `${number} ${street}, ${city}, ${zipCode}`;
  },

  generateZipCode(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const area = letters[Random.int(0, letters.length - 1)] + letters[Random.int(0, letters.length - 1)];
    const district = Random.int(1, 99);
    const sector = Random.int(0, 9);
    const unit = letters[Random.int(0, letters.length - 1)] + letters[Random.int(0, letters.length - 1)];
    return `${area}${district} ${sector}${unit}`;
  }
};