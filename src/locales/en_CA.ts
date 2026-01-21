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
  }
};