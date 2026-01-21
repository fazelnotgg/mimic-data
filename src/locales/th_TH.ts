import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const th_TH: LocaleDefinition = {
  firstNamesMale: [
    'Somchai', 'Somsak', 'Chai', 'Niran', 'Anon', 'Thana', 'Korn', 'Pong',
    'Arun', 'Wit', 'Sak', 'Nop', 'Chai', 'Manop', 'Anucha', 'Weerasak',
    'Surasak', 'Prasert', 'Phong', 'Sombat', 'Narong', 'Wichit', 'Lek', 'Noi',
    'Anurak', 'Sarawut', 'Kittipong', 'Jirawat', 'Thanawat', 'Apichai'
  ],
  firstNamesFemale: [
    'Somying', 'Noi', 'Lek', 'Malee', 'Siriporn', 'Suda', 'Nittaya', 'Pornpan',
    'Orathai', 'Wanida', 'Suwanna', 'Pranee', 'Rattana', 'Chanya', 'Supaporn',
    'Areerat', 'Apinya', 'Waranya', 'Jirapha', 'Panida', 'Kanokwan', 'Sudarat',
    'Naruemon', 'Wilai', 'Amara', 'Thanaporn', 'Pimsiri', 'Sirikul', 'Nutcha'
  ],
  lastNames: [
    'Srisuk', 'Tantrakul', 'Wongcharoen', 'Pholchai', 'Saetang', 'Chanthara', 'Wattana',
    'Ruangsri', 'Pornprasert', 'Thongchai', 'Suwannaphon', 'Chaiyaporn', 'Kingkaew',
    'Intharasombat', 'Duangkaew', 'Maneekan', 'Somkhuan', 'Thepthong', 'Ratanaporn',
    'Wongsawat', 'Chanthaburi', 'Phongsri', 'Methaphan', 'Rattanawong', 'Phongphan'
  ],
  streets: [
    'Sukhumvit Road', 'Rama IV Road', 'Silom Road', 'Sathorn Road', 'Ratchadamri Road',
    'Petchburi Road', 'Rama I Road', 'Phayathai Road', 'Ratchadaphisek Road',
    'Vibhavadi Rangsit Road', 'Ladprao Road', 'Charoenkrung Road', 'Yaowarat Road',
    'Ratchawithi Road', 'Lan Luang Road', 'Phra Athit Road', 'Khao San Road'
  ],
  cities: [
    'Bangkok', 'Nonthaburi', 'Nakhon Ratchasima', 'Chiang Mai', 'Hat Yai', 'Udon Thani',
    'Pak Kret', 'Khon Kaen', 'Chon Buri', 'Nakhon Si Thammarat', 'Rayong', 'Lampang',
    'Ubon Ratchathani', 'Surat Thani', 'Phuket', 'Nakhon Sawan', 'Chiang Rai', 'Saraburi',
    'Samut Prakan', 'Trang', 'Phitsanulok', 'Krabi', 'Songkhla', 'Phetchaburi'
  ],
  states: [
    'Bangkok', 'Nonthaburi', 'Pathum Thani', 'Samut Prakan', 'Chiang Mai', 'Chon Buri',
    'Nakhon Ratchasima', 'Khon Kaen', 'Surat Thani', 'Udon Thani', 'Phuket', 'Songkhla',
    'Rayong', 'Nakhon Si Thammarat', 'Chiang Rai', 'Ubon Ratchathani', 'Phitsanulok'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Engineer'
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
    const soi = Random.int(1, 50);
    const number = Random.int(1, 999);
    return `${number} Soi ${soi}, ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};