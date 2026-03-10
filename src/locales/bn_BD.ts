import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const bn_BD: LocaleDefinition = {
  firstNamesMale: [
    'Rahim', 'Karim', 'Abdul', 'Mohammad', 'Ahmed', 'Ali', 'Hassan', 'Hussain',
    'Ibrahim', 'Ismail', 'Kamal', 'Jamal', 'Mizanur', 'Habibur', 'Shafiqur',
    'Atiqur', 'Matiur', 'Ziaur', 'Mokhlesur', 'Golam', 'Abul', 'Nurul',
    'Harun', 'Rafiqul', 'Badrul', 'Shamsul', 'Najmul', 'Mahbubur', 'Anisur', 'Mosharraf'
  ],
  firstNamesFemale: [
    'Rahima', 'Karima', 'Fatema', 'Ayesha', 'Khadija', 'Nasrin', 'Salma',
    'Ruma', 'Sultana', 'Parvin', 'Shirin', 'Hasina', 'Roksana', 'Tahmina',
    'Nargis', 'Shamima', 'Nusrat', 'Rubina', 'Sultana', 'Jahanara', 'Begum',
    'Amina', 'Safia', 'Zohra', 'Momena', 'Hosne', 'Kohinoor', 'Feroza', 'Laila', 'Taslima'
  ],
  lastNames: [
    'Ahmed', 'Khan', 'Islam', 'Hassan', 'Ali', 'Mohammad', 'Rahman', 'Karim',
    'Haque', 'Hossain', 'Miah', 'Sikder', 'Bhuiyan', 'Chowdhury', 'Talukder',
    'Sarker', 'Das', 'Roy', 'Ghosh', 'Paul', 'Gupta', 'Sen', 'Barman',
    'Rabbani', 'Alam', 'Uddin', 'Mia', 'Biswas', 'Mandal', 'Khatun'
  ],
  streets: [
    'Gulshan Avenue', 'Banani Road', 'Dhanmondi Road', 'Mirpur Road', 'Satmasjid Road',
    'Kemal Ataturk Avenue', 'Bir Uttam Rafiqul Islam Avenue', 'Rokeya Sarani',
    'Kazi Nazrul Islam Avenue', 'Sonargaon Road', 'Airport Road', 'Dhaka-Chittagong Highway',
    'Shahbag Road', 'Elephant Road', 'Satrasta Road', 'Green Road', 'Panthapath',
    'West Panthapath', 'Hatirjheel Road', 'Progoti Sarani', 'Jahangir Road'
  ],
  cities: [
    'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Rangpur',
    'Comilla', 'Gazipur', 'Narayanganj', 'Mymensingh', 'Bogra', 'Dinajpur',
    'Jessore', 'Pabna', 'Sirajganj', 'Tangail', 'Jamalpur', 'Kushtia',
    'Faridpur', 'Noakhali', 'Feni', 'Cox\'s Bazar', 'Brahmanbaria', 'Habiganj'
  ],
  states: [
    'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Rangpur', 'Mymensingh'
  ],
  zipCodePattern: '####',
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
    const houseNumber = Random.int(1, 999);
    const road = Random.int(1, 200);
    const block = Random.int(1, 50);
    return `House ${houseNumber}, Road ${road}, Block ${block}, ${street}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};
