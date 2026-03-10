import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const af_ZA: LocaleDefinition = {
  firstNamesMale: [
    'Johan', 'Pieter', 'Andries', 'Willem', 'Jacobus', 'Johannes', 'Petrus',
    'Francois', 'Daniel', 'Stefanus', 'Christiaan', 'Michael', 'David',
    'Robert', 'John', 'James', 'William', 'Thomas', 'Charles', 'George',
    'Louis', 'Schalk', 'Barend', 'Hendrik', 'Gert', 'Dirk', 'Cornelius',
    'Nicolaas', 'Stephanus', 'Wynand', 'Ruan', 'Danie', 'Koos', 'Fanie'
  ],
  firstNamesFemale: [
    'Maria', 'Anna', 'Elizabeth', 'Susanna', 'Johanna', 'Catharina', 'Magdalena',
    'Sarah', 'Rachel', 'Rebecca', 'Martha', 'Helena', 'Sophia', 'Dorothea',
    'Mary', 'Jane', 'Anne', 'Christine', 'Susan', 'Nancy', 'Jennifer',
    'Patricia', 'Linda', 'Barbara', 'Carol', 'Helen', 'Dorothy', 'Sandra',
    'Donna', 'Karen', 'Lisa', 'Michelle', 'Laura', 'Kimberly', 'Deborah'
  ],
  lastNames: [
    'Botha', 'Van der Merwe', 'Smith', 'Venter', 'Van Zyl', 'Smit', 'Pretorius',
    'Kruger', 'Van Wyk', 'Visser', 'Van Jaarsveld', 'Steyn', 'Prinsloo',
    'Coetzee', 'Nel', 'Swart', 'Barnard', 'Viljoen', 'Botes', 'Marais',
    'Bekker', 'Olivier', 'Rossouw', 'Burger', 'Fourie', 'Van der Walt',
    'Meyer', 'Pienaar', 'Du Plessis', 'Du Toit', 'De Wet', 'De Villiers',
    'Engelbrecht', 'Groenewald', 'Hattingh', 'Human', 'Joubert', 'Kemp'
  ],
  streets: [
    'Adderley Street', 'Long Street', 'Buitengracht Street', 'Strand Street',
    'St Georges Mall', 'Plein Street', 'Wale Street', 'Roeland Street',
    'Kloof Street', 'Bree Street', 'President Street', 'Fox Street',
    'Commissioner Street', 'Pritchard Street', 'Jeppe Street', 'Main Road',
    'Jan Smuts Avenue', 'Louis Botha Avenue', 'Sandton Drive', 'William Nicol Drive'
  ],
  cities: [
    'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth',
    'Bloemfontein', 'East London', 'Pietermaritzburg', 'Nelspruit',
    'Polokwane', 'Kimberley', 'Rustenburg', 'George', 'Stellenbosch',
    'Paarl', 'Worcester', 'Mossel Bay', 'Knysna', 'Plettenberg Bay',
    'Hermanus', 'Oudtshoorn', 'Upington', 'Vereeniging', 'Welkom'
  ],
  states: [
    'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Free State',
    'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Sagteware-ingenieur', 'Projekbestuurder', 'Data-ontleder', 'Bemarkingsbestuurder',
    'Verteenwoordiger', 'Rekenmeester', 'HR-bestuurder', 'Ontwerper',
    'Bedryfsbestuurder', 'Besigheidsontleder', 'Produktbestuurder',
    'Stelseladministrateur', 'Kliëntediensverteenwoordiger', 'Gehalteversekeringsingenieur',
    'Tegniese Skrywer', 'Databasisadministrateur', 'Netwerkingenieur', 'UX-ontwerper'
  ],
  departments: [
    'Ingenieurswese', 'Bemarking', 'Verkope', 'Menslike Hulpbronne', 'Finansies',
    'Bedrywighede', 'Kliëntediens', 'IT', 'Navorsing en Ontwikkeling',
    'Regs', 'Produktbestuur', 'Ontwerp', 'Gehalteversekering', 'Administrasie'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    const suburb = Random.pick(['Sentrum', 'Noord', 'Suid', 'Oos', 'Wes', 'Ridge', 'Park', 'Gardens']);
    return `Posbus ${Random.int(1, 999)}, ${houseNumber} ${street}, ${suburb}, ${city}, ${state}, ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+27 1# ### ####',
    '+27 2# ### ####',
    '+27 3# ### ####',
    '+27 4# ### ####',
    '+27 5# ### ####',
    '+27 8# ### ####',
    '+27 7# ### ####',
    '01# ### ####',
    '02# ### ####',
    '03# ### ####',
    '04# ### ####',
    '08# ### ####',
    '07# ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'telkomsa.net', 'vodamail.co.za', 'mweb.co.za', 'absamail.co.za'
  ],

  companyNames: [
    'Naspers', 'Anglo American', 'Sasol', 'MTN', 'Vodacom',
    'Telkom', 'Standard Bank', 'FirstRand', 'Absa', 'Nedbank',
    'Capitec', 'Shoprite', 'Woolworths', 'Pick n Pay', 'Spar',
    'Eskom', 'Transnet', 'SAA', 'Discovery', 'Old Mutual'
  ],

  industries: [
    'Tegnologie', 'Finansies', 'Gesondheidsorg', 'Onderwys', 'Kleinhandel',
    'Vervaardiging', 'Media', 'Telekommunikasie', 'Energie', 'Vervoer',
    'Eiendom', 'Raadgewing', 'Gasvryheid', 'Otomotief', 'Lugvaart',
    'Mynbou', 'Landbou', 'Konstruksie', 'Toerisme'
  ],

  catchPhrases: [
    'Innovasie vir môre', 'U sukses is ons missie', 'Bou die toekoms saam',
    'Kwaliteit en uitnemendheid', 'Toegewy aan Suid-Afrika', 'U vertroude vennoot',
    'Volhoubare groei', 'Skep waarde', 'Trots Suid-Afrikaans'
  ]
};
