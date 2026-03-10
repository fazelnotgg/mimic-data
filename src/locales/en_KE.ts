import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_KE: LocaleDefinition = {
  firstNamesMale: [
    'Kamau', 'Omondi', 'Wanjohi', 'Kimani', 'Njoroge', 'Mwangi', 'Kariuki',
    'Maina', 'Kipchoge', 'Chebet', 'Sang', 'Koech', 'Rono', 'Cheruiyot',
    'Mutua', 'Kiptoo', 'Bett', 'Kirui', 'Tanui', 'Chirchir', 'Mohammed',
    'Ahmed', 'Hassan', 'Ali', 'Omar', 'Ibrahim', 'John', 'Peter', 'David', 'James'
  ],
  firstNamesFemale: [
    'Wanjiku', 'Achieng', 'Akinyi', 'Nyambura', 'Wambui', 'Njeri', 'Wangari',
    'Chepkoech', 'Jepkoech', 'Cheptoo', 'Jepchumba', 'Chepngetich', 'Jelagat',
    'Chemutai', 'Chebet', 'Cherono', 'Kiptoo', 'Bett', 'Auma', 'Adhiambo',
    'Fatuma', 'Aisha', 'Zainab', 'Mary', 'Jane', 'Grace', 'Ruth', 'Esther', 'Faith'
  ],
  lastNames: [
    'Kamau', 'Omondi', 'Wanjohi', 'Kimani', 'Njoroge', 'Mwangi', 'Kariuki',
    'Maina', 'Kipchoge', 'Chebet', 'Sang', 'Koech', 'Rono', 'Cheruiyot',
    'Mutua', 'Kiptoo', 'Bett', 'Kirui', 'Tanui', 'Chirchir', 'Mohammed',
    'Ochieng', 'Odhiambo', 'Kimutai', 'Kiprop', 'Chumba', 'Kiplagat', 'Chepchumba'
  ],
  streets: [
    'Kenyatta Avenue', 'Moi Avenue', 'Haile Selassie Avenue', 'University Way',
    'Kimathi Street', 'Koinange Street', 'Kenyatta Street', 'Tom Mboya Street',
    'Biashara Street', 'River Road', 'Ngong Road', 'Thika Road', 'Waiyaki Way',
    'Mombasa Road', 'Langata Road', 'Karen Road', 'Limuru Road', 'Kiambu Road'
  ],
  cities: [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Ruiru', 'Kikuyu',
    'Kangundo-Tala', 'Malindi', 'Thika', 'Kitui', 'Karuri', 'Nyeri',
    'Meru', 'Kakamega', 'Garissa', 'Kilifi', 'Bungoma', 'Naivasha',
    'Kericho', 'Kiambu', 'Machakos', 'Embu', 'Kajiado', 'Voi', 'Isiolo'
  ],
  states: [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Uasin Gishu', 'Kiambu',
    'Machakos', 'Kakamega', 'Bungoma', 'Kilifi', 'Kajiado', 'Nyeri',
    'Meru', 'Kericho', 'Nandi', 'Kisii', 'Nyamira', 'Homa Bay', 'Migori',
    'Siaya', 'Busia', 'Vihiga', 'Trans Nzoia', 'Elgeyo Marakwet', 'Baringo',
    'Laikipia', 'Samburu', 'Turkana', 'West Pokot', 'Marsabit', 'Isiolo',
    'Wajir', 'Mandera', 'Garissa', 'Taita Taveta', 'Kwale', 'Tana River',
    'Lamu', 'Taita', 'Kajiado', 'Narok', 'Bomet', 'Nyandarua', 'Kirinyaga',
    'Muranga', 'Tharaka Nithi', 'Embu', 'Kitui', 'Makueni'
  ],
  zipCodePattern: '#####',
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
    const building = Random.int(1, 500);
    return `P.O. Box ${Random.int(1000, 99999)}, ${building} ${street}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};
