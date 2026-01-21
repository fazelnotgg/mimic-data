import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_AU: LocaleDefinition = {
  firstNamesMale: [
    'Oliver', 'Jack', 'Noah', 'William', 'Thomas', 'James', 'Henry', 'Lucas',
    'Charlie', 'Ethan', 'Liam', 'Mason', 'Benjamin', 'Alexander', 'Samuel',
    'Daniel', 'Matthew', 'Joshua', 'Ryan', 'Andrew', 'Michael', 'David',
    'Christopher', 'Nathan', 'Jacob', 'Dylan', 'Luke', 'Isaac', 'Harrison',
    'Lachlan', 'Cooper', 'Max', 'Angus', 'Hamish', 'Oscar', 'Archer', 'Flynn'
  ],
  firstNamesFemale: [
    'Charlotte', 'Amelia', 'Olivia', 'Isla', 'Mia', 'Ava', 'Grace', 'Chloe',
    'Emily', 'Sophie', 'Ella', 'Ruby', 'Harper', 'Zoe', 'Lucy', 'Lily',
    'Emma', 'Isabella', 'Sophia', 'Hannah', 'Jessica', 'Sarah', 'Madison',
    'Abigail', 'Elizabeth', 'Scarlett', 'Sienna', 'Matilda', 'Georgia',
    'Evie', 'Willow', 'Ivy', 'Layla', 'Jasmine', 'Poppy', 'Maya', 'Aria'
  ],
  lastNames: [
    'Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson',
    'White', 'Martin', 'Anderson', 'Thompson', 'Nguyen', 'Thomas', 'Walker',
    'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'King', 'Murphy', 'Edwards',
    'Hall', 'Moore', 'Clark', 'Jackson', 'Young', 'Lewis', 'Wood', 'Scott',
    'Green', 'Davis', 'Baker', 'Adams', 'Nelson', 'Hill', 'Mitchell', 'Campbell',
    'Roberts', 'Carter', 'Phillips', 'Evans', 'Turner', 'Collins', 'Stewart',
    'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Cooper', 'Richardson'
  ],
  streets: [
    'George Street', 'Elizabeth Street', 'King Street', 'Queen Street', 'Collins Street',
    'Bourke Street', 'Flinders Street', 'Swanston Street', 'William Street', 'Victoria Street',
    'Chapel Street', 'High Street', 'Main Road', 'Oxford Street', 'Brunswick Street',
    'Smith Street', 'Sydney Road', 'Lygon Street', 'Fitzroy Street', 'Acland Street',
    'Beach Road', 'Princes Highway', 'Pacific Highway', 'Anzac Parade', 'Military Road',
    'Crown Street', 'Park Road', 'Station Street', 'Church Street', 'Bay Street'
  ],
  cities: [
    'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle',
    'Canberra', 'Sunshine Coast', 'Wollongong', 'Hobart', 'Geelong', 'Townsville',
    'Cairns', 'Darwin', 'Toowoomba', 'Ballarat', 'Bendigo', 'Albury', 'Launceston',
    'Mackay', 'Rockhampton', 'Bunbury', 'Bundaberg', 'Wagga Wagga', 'Hervey Bay',
    'Mildura', 'Shepparton', 'Port Macquarie', 'Gladstone', 'Tamworth', 'Dubbo'
  ],
  states: [
    'New South Wales', 'Victoria', 'Queensland', 'Western Australia',
    'South Australia', 'Tasmania', 'Northern Territory',
    'Australian Capital Territory'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer',
    'Operations Manager', 'Business Analyst', 'Financial Analyst', 'Product Manager',
    'Systems Administrator', 'Customer Service Representative', 'Quality Assurance Engineer',
    'Technical Writer', 'Database Administrator', 'Network Engineer', 'Tradesperson',
    'Nurse', 'Teacher', 'Electrician', 'Plumber', 'Carpenter', 'Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Product Management', 'Design', 'Quality Assurance', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 999);
    const unitNumber = Random.boolean() ? `Unit ${Random.int(1, 50)}/` : '';
    return `${unitNumber}${houseNumber} ${street}, ${city} ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};