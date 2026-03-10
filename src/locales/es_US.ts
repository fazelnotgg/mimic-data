import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_US: LocaleDefinition = {
  firstNamesMale: [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph',
    'Thomas', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald',
    'Steven', 'Andrew', 'Paul', 'Joshua', 'Kenneth', 'Kevin', 'Brian', 'George',
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Pedro', 'Jorge', 'Mario'
  ],
  firstNamesFemale: [
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth', 'Susan',
    'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra',
    'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Carol', 'Amanda',
    'María', 'Josefa', 'Juana', 'Rosa', 'Ana', 'Carmen', 'Luisa', 'Sofia'
  ],
  lastNames: [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
    'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
    'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
    'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker'
  ],
  streets: [
    'Main Street', 'Oak Avenue', 'Maple Drive', 'Cedar Lane', 'Elm Street',
    'Washington Boulevard', 'Park Avenue', 'Hill Road', 'Forest Lane',
    'River Road', 'Sunset Boulevard', 'First Avenue', 'Broadway',
    'Madison Avenue', 'Lincoln Street', 'Jefferson Avenue', 'Highland Avenue'
  ],
  cities: [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
    'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville',
    'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle',
    'Denver', 'Boston', 'Miami', 'Atlanta', 'Detroit', 'Portland', 'Las Vegas'
  ],
  states: [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'Human Resources Manager', 'Designer',
    'Operations Manager', 'Business Analyst', 'Financial Analyst', 'Product Manager',
    'Systems Administrator', 'Customer Service Representative', 'Quality Assurance Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Product Management', 'Design', 'Quality Assurance', 'Administration'
  ],
  metricSystem: 'imperial',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    const apt = Random.int(1, 500);
    return `${houseNumber} ${street}, Apt ${apt}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+1 (###) ###-####',
    '(###) ###-####',
    '###-###-####',
    '###.###.####',
    '1-###-###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com',
    'icloud.com', 'protonmail.com', 'mail.com', 'zoho.com', 'yandex.com'
  ],

  companyNames: [
    'Walmart', 'Amazon', 'Apple', 'Microsoft', 'Google', 'Facebook',
    'Berkshire Hathaway', 'JPMorgan Chase', 'Johnson & Johnson',
    'Visa', 'Procter & Gamble', 'UnitedHealth', 'Home Depot', 'Mastercard'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Automotive', 'Aerospace'
  ],

  catchPhrases: [
    'Innovating tomorrow, today', 'Your success is our business', 'Building the future together',
    'Empowering possibilities', 'Transforming ideas into reality', 'Excellence in every detail',
    'Where quality meets innovation', 'Driving progress through technology'
  ]
};
