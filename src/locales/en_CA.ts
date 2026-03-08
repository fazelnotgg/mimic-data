import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_CA: LocaleDefinition = {
  firstNamesMale: [
    'Liam', 'Noah', 'Oliver', 'Ethan', 'Logan', 'Lucas', 'Mason', 'Benjamin', 'Jack',
    'James', 'William', 'Alexander', 'Michael', 'Jacob', 'Daniel', 'Matthew', 'Ryan',
    'Nathan', 'Samuel', 'Owen', 'Dylan', 'Connor', 'Carter', 'Caleb', 'Luke', 'Wyatt',
    'Thomas', 'Andrew', 'Nicholas', 'Adam', 'David', 'Joseph', 'Tyler', 'Hunter'
  ],
  firstNamesFemale: [
    'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper',
    'Emily', 'Abigail', 'Ella', 'Madison', 'Scarlett', 'Grace', 'Chloe', 'Victoria',
    'Sofia', 'Lily', 'Hannah', 'Avery', 'Zoe', 'Aria', 'Brooklyn', 'Claire', 'Leah',
    'Maya', 'Addison', 'Riley', 'Sarah', 'Rachel', 'Jessica', 'Jennifer', 'Laura'
  ],
  lastNames: [
    'Smith', 'Brown', 'Lee', 'Wilson', 'Martin', 'Roy', 'Tremblay', 'Anderson', 'Johnson',
    'Taylor', 'Gagnon', 'White', 'Thomas', 'Thompson', 'Campbell', 'Clark', 'Lewis',
    'Walker', 'Hall', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Robinson', 'Green',
    'MacDonald', 'Murphy', 'Stewart', 'Cook', 'Bailey', 'Kelly', 'Ross', 'Mitchell'
  ],
  streets: [
    'Main Street', 'King Street', 'Queen Street', 'Yonge Street', 'Bloor Street',
    'Dundas Street', 'College Street', 'Bay Street', 'University Avenue', 'Front Street',
    'Wellington Street', 'Richmond Street', 'Adelaide Street', 'Spadina Avenue',
    'Parliament Street', 'Jarvis Street', 'Church Street', 'Victoria Street', 'First Avenue'
  ],
  cities: [
    'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg',
    'Quebec City', 'Hamilton', 'Kitchener', 'London', 'Victoria', 'Halifax', 'Oshawa',
    'Windsor', 'Saskatoon', 'Regina', 'Barrie', 'Kelowna', 'Abbotsford', 'Sherbrooke',
    'Guelph', 'Kingston', 'Trois-Rivières', 'Sudbury', 'Thunder Bay', 'Moncton'
  ],
  states: [
    'Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan',
    'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador', 'Prince Edward Island',
    'Northwest Territories', 'Yukon', 'Nunavut'
  ],
  zipCodePattern: '@#@ #@#',
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
    const number = Random.int(1, 9999);
    const unit = Random.boolean() ? `Unit ${Random.int(1, 100)}, ` : '';
    return `${unit}${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    const letters = 'ABCDEFGHJKLMNPRSTVWXYZ';
    const digits = '0123456789';
    return `${letters[Random.int(0, letters.length - 1)]}${digits[Random.int(0, 9)]}${letters[Random.int(0, letters.length - 1)]} ${digits[Random.int(0, 9)]}${letters[Random.int(0, letters.length - 1)]}${digits[Random.int(0, 9)]}`;
  },

  phoneFormats: [
    '+1 (###) ###-####',
    '(###) ###-####',
    '###-###-####',
    '###.###.####',
    '+1 ### ###-####',
    '1 (###) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.ca', 'outlook.com', 'hotmail.com', 'live.ca',
    'sympatico.ca', 'rogers.com', 'shaw.ca', 'telus.net', 'bell.net'
  ],

  companyNames: [
    'Royal Bank of Canada', 'Toronto-Dominion Bank', 'Enbridge Inc', 'Canadian National Railway',
    'Bank of Nova Scotia', 'Bank of Montreal', 'Canadian Imperial Bank', 'Suncor Energy',
    'Canadian Natural Resources', 'BCE Inc', 'Telus Corporation', 'Rogers Communications',
    'George Weston Limited', 'Loblaw Companies', 'Empire Company', 'Metro Inc',
    'Air Canada', 'Canadian Pacific Railway', 'Barrick Gold', 'Agnico Eagle Mines'
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