import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const sw_KE: LocaleDefinition = {
  firstNamesMale: [
    'James', 'John', 'Peter', 'David', 'Michael', 'Joseph', 'Daniel', 'Samuel',
    'Paul', 'Andrew', 'Stephen', 'Anthony', 'Thomas', 'Christopher', 'Patrick',
    'Francis', 'Robert', 'William', 'Charles', 'Richard', 'George', 'Edward',
    'Brian', 'Kevin', 'Eric', 'Brian', 'Dennis', 'Mark', 'Steven', 'Timothy',
    'Boniface', 'Victor', 'Alex', 'Fred', 'Henry', 'Nicholas', 'Benjamin', 'Simon'
  ],
  firstNamesFemale: [
    'Mary', 'Jane', 'Elizabeth', 'Sarah', 'Grace', 'Ruth', 'Esther', 'Agnes',
    'Margaret', 'Catherine', 'Anne', 'Christine', 'Susan', 'Nancy', 'Jennifer',
    'Patricia', 'Linda', 'Barbara', 'Carol', 'Helen', 'Dorothy', 'Sandra',
    'Donna', 'Karen', 'Lisa', 'Michelle', 'Laura', 'Kimberly', 'Deborah',
    'Jessica', 'Sharon', 'Cynthia', 'Kathleen', 'Amy', 'Angela', 'Shirley', 'Anna'
  ],
  lastNames: [
    'Omondi', 'Odhiambo', 'Otieno', 'Owino', 'Okoth', 'Omondi', 'Onyango',
    'Kamau', 'Mwangi', 'Mutua', 'Mwangi', 'Kipchoge', 'Kiptoo', 'Chebet',
    'Jepkemoi', 'Chepkoech', 'Wanjiku', 'Wanjiru', 'Njeri', 'Muthoni',
    'Akinyi', 'Atieno', 'Adhiambo', 'Achieng', 'Ochieng', 'Ouma', 'Omollo',
    'Koech', 'Tanui', 'Kiprop', 'Kiptum', 'Cheruiyot', 'Kipngeno', 'Langat'
  ],
  streets: [
    'Moi Avenue', 'Kenyatta Avenue', 'Haile Selassie Avenue', 'University Way',
    'Tom Mboya Street', 'Government Road', 'Kenyatta Road', 'Kimathi Street',
    'Mama Ngina Street', 'Kilimani Road', 'Ngong Road', 'Waiyaki Way',
    'Thika Road', 'Jogoo Road', 'Juja Road', 'Mombasa Road', 'Langata Road',
    'Limuru Road', 'Kiambu Road', 'Githurai Road', 'Thika Superhighway'
  ],
  cities: [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Ruiru', 'Kikuyu',
    'Kangundo-Tala', 'Malindi', 'Thika', 'Kitui', 'Karuri', 'Nyeri',
    'Meru', 'Kakamega', 'Garissa', 'Machakos', 'Kisii', 'Nanyuki', 'Naivasha',
    'Kericho', 'Bungoma', 'Voi', 'Kilifi', 'Busia', 'Embu', 'Mumias'
  ],
  states: [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Uasin Gishu', 'Kiambu',
    'Machakos', 'Meru', 'Kakamega', 'Bungoma', 'Kilifi', 'Kajiado',
    'Nyeri', 'Murang\'a', 'Kirinyaga', 'Embu', 'Tharaka-Nithi', 'Kitui',
    'Makueni', 'Kericho', 'Bomet', 'Nandi', 'Uasin Gishu', 'Trans-Nzoia',
    'Busia', 'Siaya', 'Kisumu', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira',
    'Narok', 'Kajiado', 'Taita-Taveta', 'Kwale', 'Kilifi', 'Tana River',
    'Garissa', 'Wajir', 'Mandera', 'Marsabit', 'Isiolo', 'Samburu',
    'Turkana', 'West Pokot', 'Baringo', 'Laikipia', 'Nyandarua'
  ],
  zipCodePattern: '#####',
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
    const buildingName = Random.pick(['Plaza', 'Centre', 'Tower', 'House', 'Court']);
    const floor = Random.int(1, 20);
    const room = Random.int(1, 50);
    return `${buildingName}, ${street}, ${floor}F, Room ${room}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+254 7## ### ###',
    '+254 71# ### ###',
    '+254 72# ### ###',
    '+254 73# ### ###',
    '+254 75# ### ###',
    '+254 76# ### ###',
    '+254 78# ### ###',
    '+254 79# ### ###',
    '07## ### ###',
    '071# ### ###',
    '072# ### ###',
    '073# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'safaricom.co.ke', 'kenyaweb.com', 'swiftmail.co.ke'
  ],

  companyNames: [
    'Safaricom', 'Kenya Airways', 'Equity Bank', 'KCB Bank', 'Co-operative Bank',
    'NCBA Bank', 'Stanbic Bank', 'Barclays Bank', 'Standard Chartered',
    'Kenya Power', 'Kenya Revenue Authority', 'East African Breweries',
    'Nairobi Securities Exchange', 'Jubilee Insurance', 'Britam Insurance'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Automotive', 'Agriculture',
    'Tourism', 'Mining', 'Textile', 'Construction'
  ],

  catchPhrases: [
    'Innovating for tomorrow', 'Your success is our mission', 'Building the future together',
    'Quality and excellence', 'Committed to Kenya', 'Your trusted partner',
    'Sustainable growth', 'Creating value', 'Proudly Kenyan'
  ]
};
