import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_NG: LocaleDefinition = {
  firstNamesMale: [
    'Chukwudi', 'Oluwaseun', 'Adebayo', 'Ifeanyi', 'Nnamdi', 'Kemi', 'Tunde',
    'Emeka', 'Chinedu', 'Olumide', 'Babatunde', 'Folake', 'Wale', 'Akin',
    'Chioma', 'Obinna', 'Chijioke', 'Ngozi', 'Ibrahim', 'Musa', 'Yusuf',
    'Mohammed', 'Ahmed', 'Abubakar', 'Sani', 'Godwin', 'Chukwuemeka', 'Kelechi'
  ],
  firstNamesFemale: [
    'Adunni', 'Morenike', 'Chioma', 'Nneka', 'Amara', 'Olufunke', 'Bimpe',
    'Folashade', 'Yetunde', 'Ibukun', 'Omolara', 'Adebisi', 'Titilayo', 'Funmilayo',
    'Chidinma', 'Kamsi', 'Ngozi', 'Adaeze', 'Obiageli', 'Chiamaka', 'Aisha',
    'Fatima', 'Zainab', 'Khadijah', 'Hauwa', 'Blessing', 'Grace', 'Joy', 'Faith'
  ],
  lastNames: [
    'Okafor', 'Adeyemi', 'Okonkwo', 'Ogunleye', 'Balogun', 'Ibrahim', 'Mohammed',
    'Akinwale', 'Eze', 'Nwosu', 'Okoro', 'Adebayo', 'Oladipo', 'Fasasi',
    'Ogunbiyi', 'Adeleke', 'Olowu', 'Ajayi', 'Kolawole', 'Oyelami', 'Bello',
    'Yakubu', 'Danjuma', 'Okon', 'Bassey', 'Effiong', 'Udo', 'Obi', 'Nnaji'
  ],
  streets: [
    'Adetokunbo Ademola Street', 'Herbert Macaulay Way', 'Ahmadu Bello Way',
    'Obafemi Awolowo Way', 'Ikorodu Road', 'Lagos-Abeokuta Expressway',
    'Allen Avenue', 'Awolowo Road', 'Adeniyi Jones Avenue', 'Isaac John Street',
    'Adeola Odeku Street', 'Sanusi Fafunwa Street', 'Akin Adesola Street',
    'Bode Thomas Street', 'Shitta Bey Street', 'Broad Street', 'Marina Road'
  ],
  cities: [
    'Lagos', 'Kano', 'Ibadan', 'Abuja', 'Port Harcourt', 'Benin City', 'Kaduna',
    'Maiduguri', 'Zaria', 'Aba', 'Jos', 'Ilorin', 'Oyo', 'Enugu', 'Abeokuta',
    'Onitsha', 'Warri', 'Sokoto', 'Calabar', 'Uyo', 'Katsina', 'Bauchi',
    'Akure', 'Osogbo', 'Gombe', 'Damaturu', 'Lafia', 'Minna', 'Yenagoa'
  ],
  states: [
    'Lagos', 'Kano', 'Oyo', 'Federal Capital Territory', 'Rivers', 'Edo',
    'Kaduna', 'Borno', 'Katsina', 'Abia', 'Imo', 'Ogun', 'Ondo', 'Osun',
    'Ekiti', 'Kwara', 'Kogi', 'Benue', 'Nasarawa', 'Plateau', 'Bauchi',
    'Gombe', 'Taraba', 'Adamawa', 'Sokoto', 'Kebbi', 'Zamfara', 'Jigawa',
    'Yobe', 'Akwa Ibom', 'Cross River', 'Bayelsa', 'Ebonyi', 'Enugu', 'Anambra'
  ],
  zipCodePattern: '######',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer',
    'Operations Manager', 'Business Analyst', 'Product Manager', 'System Administrator',
    'Quality Assurance Engineer', 'Technical Writer', 'Database Administrator',
    'Network Engineer', 'DevOps Engineer', 'UX Designer', 'Content Manager'
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
    const number = Random.int(1, 100);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100001, 999999));
  }
};
