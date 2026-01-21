import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_SG: LocaleDefinition = {
  firstNamesMale: [
    'Wei Ming', 'Jun Hao', 'Ryan', 'Ethan', 'Kai', 'Zhi Hao', 'Darren', 'Marcus',
    'Nicholas', 'Brandon', 'Wei Jie', 'Joshua', 'Matthew', 'Daniel', 'Benjamin',
    'Aaron', 'Isaac', 'Jayden', 'Aiden', 'Sean', 'Adrian', 'Xavier', 'Lucas',
    'Nathan', 'Tyler', 'Arjun', 'Ravi', 'Kumar', 'Raj', 'Vikram'
  ],
  firstNamesFemale: [
    'Hui Ling', 'Xin Yi', 'Rachel', 'Chloe', 'Emma', 'Ying Xuan', 'Sarah', 'Emily',
    'Michelle', 'Nicole', 'Angela', 'Amanda', 'Cheryl', 'Joyce', 'Melissa', 'Sophia',
    'Isabelle', 'Natalie', 'Ashley', 'Crystal', 'Priya', 'Divya', 'Kavitha', 'Ananya',
    'Shreya', 'Mei Ling', 'Li Ying', 'Jia Yi', 'Shi Hui', 'Wei Ting'
  ],
  lastNames: [
    'Tan', 'Lim', 'Lee', 'Ng', 'Ong', 'Wong', 'Goh', 'Chua', 'Chan', 'Koh',
    'Teo', 'Ang', 'Yeo', 'Lau', 'Tay', 'Ho', 'Low', 'Sim', 'Chia', 'Toh',
    'Kumar', 'Singh', 'Kaur', 'Rahman', 'Ali', 'Hassan', 'Ahmad', 'Mohamed',
    'Abdullah', 'Ibrahim', 'Chen', 'Wang', 'Zhang', 'Liu', 'Yang'
  ],
  streets: [
    'Orchard Road', 'Raffles Boulevard', 'Shenton Way', 'Marina Boulevard', 'Beach Road',
    'North Bridge Road', 'South Bridge Road', 'Collyer Quay', 'Robinson Road', 'Cecil Street',
    'Eu Tong Sen Street', 'Serangoon Road', 'Geylang Road', 'Balestier Road', 'Thomson Road',
    'Bukit Timah Road', 'Clementi Road', 'Jurong East Avenue', 'Ang Mo Kio Avenue', 'Tampines Avenue'
  ],
  cities: [
    'Singapore', 'Woodlands', 'Tampines', 'Jurong East', 'Ang Mo Kio', 'Bedok',
    'Hougang', 'Yishun', 'Sembawang', 'Bukit Panjang', 'Choa Chu Kang', 'Punggol',
    'Sengkang', 'Pasir Ris', 'Clementi', 'Bukit Batok', 'Toa Payoh', 'Queenstown'
  ],
  states: [
    'Central Region', 'North Region', 'North-East Region', 'East Region', 'West Region'
  ],
  zipCodePattern: '######',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Executive', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Engineer'
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
    const block = Random.int(1, 999);
    const unit = `#${Random.int(1, 40).toString().padStart(2, '0')}-${Random.int(1, 999)}`;
    return `Blk ${block} ${street}, ${unit}, Singapore ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  }
};