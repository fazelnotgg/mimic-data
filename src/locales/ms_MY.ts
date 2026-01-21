import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ms_MY: LocaleDefinition = {
  firstNamesMale: [
    'Ahmad', 'Ali', 'Hassan', 'Ismail', 'Ibrahim', 'Mohd', 'Abdullah', 'Yusof',
    'Rahman', 'Aziz', 'Zulkifli', 'Hamid', 'Halim', 'Hakim', 'Amin', 'Rashid',
    'Fahmi', 'Faiz', 'Hafiz', 'Amirul', 'Danial', 'Syafiq', 'Iqbal', 'Haikal',
    'Rizal', 'Ammar', 'Zikri', 'Arif', 'Ashraf', 'Firdaus', 'Nabil', 'Hakimi'
  ],
  firstNamesFemale: [
    'Siti', 'Nur', 'Norain', 'Farah', 'Aisha', 'Zainab', 'Fatimah', 'Maryam',
    'Amira', 'Sarah', 'Alya', 'Nadia', 'Sofea', 'Hanna', 'Aisyah', 'Najwa',
    'Qistina', 'Irdina', 'Balqis', 'Ain', 'Nasuha', 'Izyan', 'Natasha', 'Erina',
    'Fatin', 'Hanis', 'Syahirah', 'Insyirah', 'Marissa', 'Zulaikha', 'Nabila'
  ],
  lastNames: [
    'Abdullah', 'Ahmad', 'Mohamed', 'Ibrahim', 'Hassan', 'Ismail', 'Rahman', 'Ali',
    'Omar', 'Osman', 'Yusof', 'Aziz', 'Hamid', 'Salleh', 'Idris', 'Daud', 'Bakar',
    'Mansor', 'Hussain', 'Yasin', 'Karim', 'Samad', 'Sulaiman', 'Hashim', 'Ramli',
    'Harun', 'Wahab', 'Zain', 'Latif', 'Rashid', 'Ghani', 'Nasir', 'Rahim'
  ],
  streets: [
    'Jalan Raja', 'Jalan Sultan', 'Jalan Tun Razak', 'Jalan Ampang', 'Jalan Bukit Bintang',
    'Jalan Masjid India', 'Jalan Tuanku Abdul Rahman', 'Jalan Pudu', 'Jalan Imbi',
    'Jalan Hang Tuah', 'Jalan Petaling', 'Jalan Chow Kit', 'Jalan Ipoh', 'Jalan Kelang Lama',
    'Jalan Tun Perak', 'Jalan Munshi Abdullah', 'Jalan Genting Klang', 'Jalan Pahang'
  ],
  cities: [
    'Kuala Lumpur', 'George Town', 'Ipoh', 'Shah Alam', 'Petaling Jaya', 'Johor Bahru',
    'Malacca City', 'Alor Setar', 'Kuching', 'Kota Kinabalu', 'Seremban', 'Kuantan',
    'Klang', 'Subang Jaya', 'Kota Bharu', 'Sandakan', 'Kuala Terengganu', 'Miri',
    'Kangar', 'Putrajaya', 'Cyberjaya', 'Taiping', 'Sibu', 'Muar', 'Batu Pahat'
  ],
  states: [
    'Selangor', 'Johor', 'Penang', 'Perak', 'Kedah', 'Pahang', 'Negeri Sembilan',
    'Melaka', 'Kelantan', 'Terengganu', 'Perlis', 'Sabah', 'Sarawak',
    'Kuala Lumpur', 'Putrajaya', 'Labuan'
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
    const number = Random.int(1, 999);
    const taman = Random.pick(['Taman', 'Bandar', 'Kampung']);
    const area = Random.pick(['Indah', 'Jaya', 'Perdana', 'Utama', 'Sentosa']);
    return `No. ${number}, ${street}, ${taman} ${area}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};