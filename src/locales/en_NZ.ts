import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_NZ: LocaleDefinition = {
  firstNamesMale: [
    'Oliver', 'Jack', 'Noah', 'William', 'James', 'Lucas', 'Mason', 'Ethan', 'Leo',
    'Liam', 'Benjamin', 'Hunter', 'Joshua', 'Samuel', 'Daniel', 'Matthew', 'Joseph',
    'Thomas', 'Harry', 'Charlie', 'Jacob', 'Archie', 'George', 'Max', 'Oscar',
    'Finn', 'Isaac', 'Connor', 'Ryan', 'Lachlan', 'Cooper', 'Riley', 'Flynn'
  ],
  firstNamesFemale: [
    'Charlotte', 'Olivia', 'Amelia', 'Isla', 'Mia', 'Harper', 'Emily', 'Ella', 'Sophie',
    'Ava', 'Lily', 'Grace', 'Chloe', 'Isabella', 'Ruby', 'Lucy', 'Zoe', 'Emma',
    'Hannah', 'Aria', 'Scarlett', 'Poppy', 'Evelyn', 'Willow', 'Sienna', 'Ivy',
    'Hazel', 'Aurora', 'Madison', 'Layla', 'Alice', 'Eleanor', 'Maya'
  ],
  lastNames: [
    'Smith', 'Wilson', 'Taylor', 'Brown', 'Williams', 'Jones', 'Anderson', 'White',
    'Thompson', 'Davis', 'Martin', 'Clark', 'Robinson', 'Walker', 'Young', 'Harris',
    'King', 'Scott', 'Green', 'Adams', 'Baker', 'Campbell', 'Mitchell', 'Roberts',
    'Carter', 'Phillips', 'Evans', 'Turner', 'Collins', 'Stewart', 'Morris', 'Murphy'
  ],
  streets: [
    'Queen Street', 'High Street', 'Main Street', 'Victoria Street', 'Lambton Quay',
    'Courtenay Place', 'Cuba Street', 'Willis Street', 'The Terrace', 'Customhouse Quay',
    'Karangahape Road', 'Ponsonby Road', 'Dominion Road', 'Great South Road', 'Broadway',
    'Riccarton Road', 'Colombo Street', 'Cashel Street', 'Manchester Street', 'Hereford Street'
  ],
  cities: [
    'Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Lower Hutt',
    'Dunedin', 'Palmerston North', 'Napier', 'Porirua', 'Hibiscus Coast', 'New Plymouth',
    'Rotorua', 'Whangarei', 'Nelson', 'Hastings', 'Invercargill', 'Upper Hutt',
    'Gisborne', 'Taupo', 'Blenheim', 'Pukekohe', 'Timaru', 'Whanganui'
  ],
  states: [
    'Auckland', 'Wellington', 'Canterbury', 'Waikato', 'Bay of Plenty', 'Otago',
    'Manawatu-Wanganui', 'Hawke\'s Bay', 'Northland', 'Taranaki', 'Southland',
    'Nelson', 'Marlborough', 'Tasman', 'Gisborne', 'West Coast'
  ],
  zipCodePattern: '####',
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
    const number = Random.int(1, 999);
    const unit = Random.boolean() ? `Unit ${Random.int(1, 50)}, ` : '';
    return `${unit}${number} ${street}, ${city} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+64 # ### ####',
    '0# ### ####',
    '+64 (0)# ### ####',
    '02# ### ####',
    '021 ### ####',
    '022 ### ####',
    '027 ### ####',
    '03 ### ####',
    '04 ### ####',
    '06 ### ####',
    '07 ### ####',
    '09 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.co.nz', 'outlook.co.nz', 'hotmail.co.nz', 'live.co.nz',
    'xtra.co.nz', 'vodafone.co.nz', 'slingshot.co.nz', 'orcon.net.nz', 'ihug.co.nz'
  ],

  companyNames: [
    'Air New Zealand', 'Fisher & Paykel Healthcare', 'Contact Energy', 'Meridian Energy',
    'Spark New Zealand', 'Vector Limited', 'Infratil Limited', 'Kathmandu Holdings',
    'The Warehouse Group', 'Foodstuffs North Island', 'Foodstuffs South Island',
    'ANZ Bank New Zealand', 'ASB Bank', 'BNZ Bank', 'Westpac New Zealand',
    'Fletcher Building', 'Goodman Property Trust', 'Kiwi Property Group', 'Z Energy'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Automotive', 'Aerospace'
  ],

  catchPhrases: [
    'Innovating for the future', 'Your success is our business', 'Building the future together',
    'Quality and trust', 'Excellence and commitment', 'Sustainable solutions',
    'Creating value', 'Your trusted partner', 'Leading the change'
  ]
};