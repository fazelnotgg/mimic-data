import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const sw_TZ: LocaleDefinition = {
  firstNamesMale: [
    'Juma', 'John', 'Peter', 'David', 'Michael', 'Joseph', 'Daniel', 'Samuel',
    'Paul', 'Andrew', 'Stephen', 'Anthony', 'Thomas', 'Christopher', 'Patrick',
    'Francis', 'Robert', 'William', 'Charles', 'Richard', 'George', 'Edward',
    'Brian', 'Kevin', 'Eric', 'Dennis', 'Mark', 'Steven', 'Timothy', 'Simon',
    'Emmanuel', 'Victor', 'Alex', 'Fred', 'Henry', 'Nicholas', 'Benjamin', 'Isaac'
  ],
  firstNamesFemale: [
    'Mary', 'Jane', 'Elizabeth', 'Sarah', 'Grace', 'Ruth', 'Esther', 'Agnes',
    'Margaret', 'Catherine', 'Anne', 'Christine', 'Susan', 'Nancy', 'Jennifer',
    'Patricia', 'Linda', 'Barbara', 'Carol', 'Helen', 'Dorothy', 'Sandra',
    'Donna', 'Karen', 'Lisa', 'Michelle', 'Laura', 'Kimberly', 'Deborah',
    'Jessica', 'Sharon', 'Cynthia', 'Kathleen', 'Amy', 'Angela', 'Shirley', 'Anna'
  ],
  lastNames: [
    'Mwangi', 'Juma', 'Baraka', 'Mushi', 'Mkumbo', 'Mwakasege', 'Mrosso',
    'Ndunguru', 'Ngasongwa', 'Mlay', 'Mushi', 'Mariki', 'Mbwana', 'Mgaya',
    'Msechu', 'Mwakyusa', 'Makongoro', 'Mcharo', 'Mwakibete', 'Mwambene',
    'Mwambulukela', 'Mwambula', 'Mwamila', 'Mwampeta', 'Mwampembe', 'Mwampeta',
    'Mwasongwe', 'Mwashigadi', 'Mwinyimvua', 'Mnyaa', 'Mnyika', 'Mnyanzi'
  ],
  streets: [
    'Samora Avenue', 'Azikiwe Street', 'Mkwepu Street', 'India Street',
    'Kisutu Street', 'Jamhuri Street', 'Uhuru Street', 'Sokoine Drive',
    'Bibi Titi Mohamed Road', 'Nyerere Road', 'Morogoro Road', 'Bagamoyo Road',
    'Ali Hassan Mwinyi Road', 'Haile Selassie Road', 'Maktaba Street',
    'Gulion Lane', 'Shaban Robert Street', 'Msimbazi Street'
  ],
  cities: [
    'Dar es Salaam', 'Mwanza', 'Arusha', 'Dodoma', 'Mbeya', 'Morogoro',
    'Tanga', 'Zanzibar', 'Kigoma', 'Moshi', 'Tabora', 'Songea', 'Iringa',
    'Musoma', 'Shinyanga', 'Singida', 'Njombe', 'Bukoba', 'Sumbawanga',
    'Kasulu', 'Uji', 'Kibaha', 'Bagamoyo', 'Kilifi', 'Korogwe', 'Lindi'
  ],
  states: [
    'Dar es Salaam', 'Dodoma', 'Arusha', 'Kilimanjaro', 'Tanga', 'Morogoro',
    'Pwani', 'Lindi', 'Mtwara', 'Ruvuma', 'Iringa', 'Mbeya', 'Songwe',
    'Rukwa', 'Katavi', 'Tabora', 'Shinyanga', 'Simiyu', 'Geita', 'Mwanza',
    'Mara', 'Kagera', 'Kigoma', 'Manyara', 'Singida', 'Zanzibar Mjini Magharibi',
    'Zanzibar Kaskazini Unguja', 'Zanzibar Kusini Unguja', 'Zanzibar Kaskazini Pemba', 'Zanzibar Kusini Pemba'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer',
    'Operations Manager', 'Business Analyst', 'Product Manager',
    'Systems Administrator', 'Customer Service Representative', 'Quality Assurance Engineer',
    'Technical Writer', 'Database Administrator', 'Network Engineer', 'UX Designer'
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
    const streetNumber = Random.int(1, 500);
    const nyumba = Random.pick(['Nyumba', 'Ofisi', 'Duka']);
    const number = Random.int(1, 100);
    return `${nyumba} Namba ${number}, ${streetNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+255 7## ### ####',
    '+255 71# ### ####',
    '+255 72# ### ####',
    '+255 73# ### ####',
    '+255 74# ### ####',
    '+255 75# ### ####',
    '+255 76# ### ####',
    '+255 78# ### ####',
    '+255 79# ### ####',
    '07## ### ####',
    '071# ### ####',
    '072# ### ####',
    '073# ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'ttcl.co.tz', 'vodamail.co.tz', 'africellmail.com'
  ],

  companyNames: [
    'CRDB Bank', 'NMB Bank', 'NBC Bank', 'TPB Bank', 'Exim Bank',
    'Tanzania Breweries', 'East African Breweries', 'Vodacom Tanzania',
    'Airtel Tanzania', 'Tigo Tanzania', 'Africell', 'Tanzania Electric Supply Company',
    'Tanzania Revenue Authority', 'Tanzania Ports Authority', 'Air Tanzania'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Automotive', 'Agriculture',
    'Tourism', 'Mining', 'Fishing', 'Construction'
  ],

  catchPhrases: [
    'Innovating for tomorrow', 'Your success is our mission', 'Building the future together',
    'Quality and excellence', 'Committed to Tanzania', 'Your trusted partner',
    'Sustainable growth', 'Creating value', 'Proudly Tanzanian'
  ]
};
