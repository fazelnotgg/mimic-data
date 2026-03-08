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
  },

  phoneFormats: [
    '+60 ## ### ####',
    '0## ### ####',
    '+60 (0)## ### ####',
    '01# ### ####',
    '012 ### ####',
    '013 ### ####',
    '014 ### ####',
    '016 ### ####',
    '017 ### ####',
    '018 ### ####',
    '019 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com.my', 'outlook.com', 'hotmail.com', 'live.com',
    'tm.net.my', 'maxis.com.my', 'digi.com.my', 'celcom.com.my', 'unifi.com.my'
  ],

  companyNames: [
    'Petronas', 'Maybank', 'Public Bank', 'CIMB Group', 'Rhbank Malaysia',
    'Tenaga Nasional', 'Petronas Dagangan', 'Axiata Group', 'Maxis Berhad',
    'Digi.Com Berhad', 'Celcom Axiata', 'Umobile', 'AirAsia Berhad',
    'Malaysia Airlines', 'Sime Darby', 'IOI Corporation', 'Sime Darby Plantation',
    'Genting Berhad', 'Berjaya Group', 'YTL Corporation', 'Hong Leong Bank'
  ],

  industries: [
    'Teknologi', 'Kewangan', 'Kesihatan', 'Pendidikan', 'Runcit',
    'Perkilangan', 'Media', 'Telekomunikasi', 'Tenaga', 'Pengangkutan',
    'Hartanah', 'Perundingan', 'Perhotelan', 'Automotif', 'Aerospace'
  ],

  catchPhrases: [
    'Berinovasi untuk masa depan', 'Kejayaan anda adalah urusan kami', 'Membina masa depan bersama',
    'Kualiti dan kepercayaan', 'Kecemerlangan dan komitmen', 'Penyelesaian mampan',
    'Mencipta nilai', 'Rakan dipercayai anda', 'Memimpin perubahan'
  ]
};