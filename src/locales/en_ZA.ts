import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_ZA: LocaleDefinition = {
  firstNamesMale: [
    'Liam', 'Joshua', 'Daniel', 'Matthew', 'Michael', 'Ethan', 'David', 'Ryan',
    'Connor', 'Benjamin', 'Luke', 'Thabang', 'Sipho', 'Thabo', 'Mandla', 'Bongani',
    'Jabulani', 'Sibusiso', 'Nkosinathi', 'Siyabonga', 'Andile', 'Lwazi', 'Sandile',
    'Dylan', 'Tyler', 'Nathan', 'Christian', 'Kyle', 'Cameron', 'Jordan'
  ],
  firstNamesFemale: [
    'Emma', 'Olivia', 'Sarah', 'Jessica', 'Emily', 'Hannah', 'Nicole', 'Amy',
    'Chloe', 'Sophie', 'Nomsa', 'Thandi', 'Zanele', 'Precious', 'Nomvula', 'Lindiwe',
    'Sibongile', 'Nokuthula', 'Busisiwe', 'Nompumelelo', 'Zinhle', 'Ayanda', 'Noluthando',
    'Madison', 'Mia', 'Kayla', 'Paige', 'Amelia', 'Grace', 'Isabella'
  ],
  lastNames: [
    'Smith', 'van der Merwe', 'Botha', 'Naidoo', 'Pillay', 'Mthembu', 'Dlamini', 'Nkosi',
    'Zulu', 'Ndlovu', 'Ngcobo', 'Khumalo', 'Sithole', 'Mahlangu', 'Molefe', 'Mokoena',
    'Du Plessis', 'Pretorius', 'Nel', 'Meyer', 'Venter', 'Muller', 'Marais', 'Coetzee',
    'Williams', 'Jones', 'Brown', 'Taylor', 'Johnson', 'Davies', 'Singh', 'Patel'
  ],
  streets: [
    'Mandela Street', 'Church Street', 'Main Road', 'Voortrekker Road', 'Oxford Road',
    'Rissik Street', 'Commissioner Street', 'Jorrisen Street', 'Rivonia Road', 'William Nicol Drive',
    'Jan Smuts Avenue', 'Beyers Naude Drive', 'Long Street', 'Adderley Street', 'Strand Street',
    'Kloof Street', 'Sea Point Promenade', 'Smith Street', 'Anton Lembede Street', 'Victoria Embankment'
  ],
  cities: [
    'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein',
    'East London', 'Pietermaritzburg', 'Polokwane', 'Nelspruit', 'Kimberley', 'Rustenburg',
    'George', 'Midrand', 'Centurion', 'Sandton', 'Soweto', 'Benoni', 'Boksburg',
    'Germiston', 'Randburg', 'Roodepoort', 'Vereeniging', 'Welkom', 'Newcastle'
  ],
  states: [
    'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Free State',
    'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape'
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
    return `${number} ${street}, ${city}, ${state}, ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+27 ## ### ####',
    '0## ### ####',
    '+27 (0)## ### ####',
    '0## #### ####',
    '06# ### ####',
    '07# ### ####',
    '08# ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.co.za', 'outlook.co.za', 'hotmail.co.za', 'live.co.za',
    'telkomsa.net', 'mweb.co.za', 'vodamail.co.za', 'absamail.co.za', 'iafrica.com'
  ],

  companyNames: [
    'Naspers Limited', 'Prosus NV', 'Anglo American plc', 'BHP Billiton', 'Rio Tinto',
    'Standard Bank Group', 'FirstRand Limited', 'Absa Group', 'Nedbank Group',
    'Capitec Bank', 'Discovery Limited', 'Old Mutual', 'Sanlam Limited',
    'MTN Group', 'Telkom SA', 'Vodacom Group', 'Shoprite Holdings', 'Pick n Pay Stores',
    'Woolworths Holdings', 'Massmart Holdings', 'Sasol Limited', 'Impala Platinum'
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