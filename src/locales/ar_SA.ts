import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_SA: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Abdullah', 'Fahd', 'Khalid', 'Faisal', 'Mansour', 'Saud', 'Abdulaziz',
    'Turki', 'Sultan', 'Salman', 'Nasser', 'Talal', 'Bandar', 'Mishal', 'Abdulrahman',
    'Yousef', 'Ahmed', 'Ali', 'Omar', 'Hassan', 'Saad', 'Faris', 'Rakan', 'Nawaf',
    'Majed', 'Hamad', 'Waleed', 'Tariq', 'Rashid', 'Ibrahim', 'Ziyad'
  ],
  firstNamesFemale: [
    'Noura', 'Sarah', 'Maha', 'Hessa', 'Lulwa', 'Latifa', 'Abeer', 'Reem', 'Hind',
    'Jawaher', 'Mona', 'Amal', 'Deema', 'Lama', 'Nada', 'Hanan', 'Ghada', 'Basma',
    'Arwa', 'Reema', 'Maryam', 'Fatima', 'Nora', 'Layla', 'Dana', 'Sama', 'Rana',
    'Asma', 'Raghad', 'Wafa', 'Anoud', 'Atheer'
  ],
  lastNames: [
    'Al Saud', 'Al Otaibi', 'Al Ghamdi', 'Al Zahrani', 'Al Harbi', 'Al Qahtani',
    'Al Shehri', 'Al Malki', 'Al Dosari', 'Al Mutairi', 'Al Rashid', 'Al Saeed',
    'Al Mansour', 'Al Juhani', 'Al Anazi', 'Al Shamrani', 'Al Subai', 'Al Yami',
    'Al Faisal', 'Al Turki', 'Al Khalifa', 'Al Abdulaziz', 'Al Thani', 'Al Dawsari',
    'Al Shaalan', 'Al Balawi', 'Al Ahmadi', 'Al Sulaiman', 'Al Mubarak', 'Al Hamad'
  ],
  streets: [
    'King Fahd Road', 'King Abdullah Road', 'King Abdulaziz Road', 'Olaya Street',
    'Tahlia Street', 'Madinah Road', 'Makkah Road', 'Al Urubah Road', 'Prince Mohammed Road',
    'King Khalid Road', 'Al Malaz Street', 'Al Imam Saud Road', 'Al Amir Sultan Road',
    'Corniche Road', 'Airport Road', 'Al Kharj Road', 'Riyadh Park Road', 'King Saud Road'
  ],
  cities: [
    'Riyadh', 'Jeddah', 'Makkah', 'Madinah', 'Dammam', 'Khobar', 'Dhahran', 'Jubail',
    'Tabuk', 'Abha', 'Khamis Mushait', 'Buraidah', 'Hail', 'Najran', 'Yanbu', 'Jazan',
    'Al Ahsa', 'Taif', 'Qatif', 'Al Kharj', 'Ras Tanura', 'Hafar Al Batin', 'Arar', 'Sakaka'
  ],
  states: [
    'Riyadh', 'Makkah', 'Madinah', 'Eastern Province', 'Asir', 'Tabuk', 'Qassim',
    'Hail', 'Northern Borders', 'Jazan', 'Najran', 'Al Bahah', 'Al Jouf'
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
    const district = Random.pick(['Al Malaz', 'Al Olaya', 'Al Naseem', 'Al Salamah', 'Al Rawdah']);
    const buildingNumber = Random.int(1000, 9999);
    return `Building ${buildingNumber}, ${district}, ${street}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};