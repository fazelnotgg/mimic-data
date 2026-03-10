import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_IE: LocaleDefinition = {
  firstNamesMale: [
    'Sean', 'Jack', 'James', 'Conor', 'Daniel', 'Adam', 'Cian', 'Michael',
    'Luke', 'David', 'Ryan', 'Patrick', 'John', 'Thomas', 'Joseph',
    'Brian', 'Mark', 'Paul', 'Stephen', 'Kevin', 'Anthony', 'Charles',
    'Robert', 'William', 'Richard', 'George', 'Edward', 'Henry',
    'Arthur', 'Frederick', 'Albert', 'Louis', 'Alexander', 'Nicholas'
  ],
  firstNamesFemale: [
    'Emily', 'Emma', 'Sarah', 'Katie', 'Aoife', 'Sinead', 'Niamh', 'Ciara',
    'Orla', 'Rachel', 'Jennifer', 'Mary', 'Patricia', 'Margaret', 'Elizabeth',
    'Anne', 'Maria', 'Catherine', 'Bridget', 'Kathleen', 'Julia', 'Hannah',
    'Sophie', 'Olivia', 'Grace', 'Lucy', 'Chloe', 'Anna', 'Ruth', 'Laura',
    'Michelle', 'Karen', 'Donna', 'Carol', 'Linda', 'Barbara', 'Susan'
  ],
  lastNames: [
    'Murphy', 'Kelly', 'Byrne', 'Ryan', 'O\'Brien', 'Walsh', 'O\'Sullivan', 'Doyle',
    'McCarthy', 'O\'Connor', 'Doherty', 'Gallagher', 'O\'Neill', 'Murray', 'Hynes',
    'Molloy', 'Kavanagh', 'Sullivan', 'Fitzgerald', 'McMahon', 'Lynch', 'Quinn',
    'O\'Carroll', 'Power', 'Hayes', 'Kirby', 'Healy', 'Fitzpatrick', 'Flynn',
    'O\'Reilly', 'Cunningham', 'Daly', 'Brennan', 'Casey', 'Moran', ' Desmond'
  ],
  streets: [
    'O\'Connell Street', 'Grafton Street', 'Henry Street', 'Dame Street',
    'Patrick Street', 'Main Street', 'Church Road', 'Dublin Road',
    'Cork Road', 'Galway Road', 'Limerick Road', 'Waterford Road',
    'Kilkenny Road', 'Wexford Road', 'Sligo Road', 'Cavan Road',
    'Donegal Road', 'Mayo Road', 'Kerry Road', 'Clare Road', 'Tipperary Road'
  ],
  cities: [
    'Dublin', 'Cork', 'Limerick', 'Galway', 'Waterford', 'Drogheda',
    'Dundalk', 'Swords', 'Bray', 'Navan', 'Ennis', 'Kilkenny',
    'Carlow', 'Tralee', 'Newbridge', 'Portlaoise', 'Sligo', 'Clonmel',
    'Mullingar', 'Wexford', 'Letterkenny', 'Celbridge', 'Leixlip'
  ],
  states: [
    'Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Tipperary',
    'Kerry', 'Kildare', 'Meath', 'Wicklow', 'Wexford', 'Louth',
    'Mayo', 'Donegal', 'Sligo', 'Cavan', 'Monaghan', 'Leitrim',
    'Roscommon', 'Clare', 'Offaly', 'Laois', 'Westmeath', 'Longford',
    'Carlow', 'Kilkenny', 'Kerry'
  ],
  zipCodePattern: 'A## ####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Executive', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'Systems Administrator', 'Customer Support',
    'Quality Assurance Engineer', 'Technical Writer', 'Database Administrator',
    'Network Engineer', 'UX Designer', 'Content Writer', 'Account Manager'
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
    return `${street}, ${city}, Co. ${state}, ${zipCode}`;
  },

  generateZipCode(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter1 = letters.charAt(Random.int(0, 25));
    const letter2 = String(Random.int(0, 9));
    const letter3 = String(Random.int(0, 9));
    const part2 = String(Random.int(1000, 9999));
    return `${letter1}${letter2}${letter3} ${part2}`;
  },

  phoneFormats: [
    '+353 1 ### ####',
    '+353 21 ### ####',
    '+353 87 ### ####',
    '+353 86 ### ####',
    '+353 85 ### ####',
    '01 ### ####',
    '021 ### ####',
    '087 ### ####',
    '086 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.ie', 'outlook.com', 'hotmail.com',
    'eircom.net', 'indigo.ie', 'mail.com', 'icloud.com',
    'protonmail.com', 'zoho.com'
  ],

  companyNames: [
    'Ryanair', 'Aer Lingus', 'Guinness', 'Kerry Group', 'CRH',
    'Glanbia', 'Smurfit Kappa', 'Bank of Ireland', 'AIB',
    'Permanent TSB', 'Electric Ireland', ' Bord Gáis', 'Vodafone Ireland',
    'Three Ireland', 'Tesco Ireland', 'SuperValu'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Automotive', 'Aerospace',
    'Pharmaceuticals', 'Food & Beverage', 'Tourism'
  ],

  catchPhrases: [
    'Innovation with integrity', 'Your success is our story', 'Building tomorrow together',
    'Empowering Irish business', 'Quality you can trust', 'Excellence in every detail',
    'Where tradition meets innovation', 'Driving Irish enterprise',
    'Your partner in progress', 'Making it happen for Ireland'
  ]
};
