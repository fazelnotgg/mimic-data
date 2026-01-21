import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_AE: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Abdullah', 'Sultan', 'Khalid', 'Omar', 'Ali', 'Hassan',
    'Saeed', 'Rashid', 'Hamad', 'Majid', 'Fahad', 'Nasser', 'Faisal', 'Yousef',
    'Ibrahim', 'Abdulrahman', 'Saud', 'Mansour', 'Talal', 'Waleed', 'Tariq', 'Zayed',
    'Rashed', 'Hamdan', 'Maktoum', 'Obaid', 'Salem', 'Marwan', 'Jassim', 'Nawaf'
  ],
  firstNamesFemale: [
    'Fatima', 'Aisha', 'Mariam', 'Noura', 'Sara', 'Hessa', 'Latifa', 'Shamsa',
    'Moza', 'Sheikha', 'Amna', 'Salama', 'Meitha', 'Hind', 'Maryam', 'Shamma',
    'Reem', 'Layla', 'Dana', 'Khawla', 'Budoor', 'Jawaher', 'Maitha', 'Mouza',
    'Shaikha', 'Alia', 'Asma', 'Hanan', 'Nada', 'Noor', 'Wadha', 'Mahra'
  ],
  lastNames: [
    'Al Maktoum', 'Al Nahyan', 'Al Qasimi', 'Al Sharqi', 'Al Nuaimi', 'Al Mualla',
    'Al Ali', 'Al Mansouri', 'Al Shamsi', 'Al Ketbi', 'Al Kaabi', 'Al Dhaheri',
    'Al Mazrouei', 'Al Hamadi', 'Al Suwaidi', 'Al Zaabi', 'Al Marzouqi', 'Al Ahbabi',
    'Al Mansoori', 'Al Blooshi', 'Al Muhairi', 'Al Shehhi', 'Al Hashimi', 'Al Zarooni',
    'Al Falasi', 'Al Ameri', 'Al Kindi', 'Al Marri', 'Al Yasi', 'Al Mheiri'
  ],
  streets: [
    'Sheikh Zayed Road', 'Khalifa Street', 'Hamdan Street', 'Al Wasl Road', 'Jumeirah Road',
    'Al Khaleej Road', 'Airport Road', 'Al Rigga Road', 'Al Maktoum Road', 'Baniyas Road',
    'Sheikh Mohammed Bin Rashid Boulevard', 'Al Salam Street', 'Al Ain Road', 'Corniche Road',
    'Sheikh Rashid Road', 'Al Ittihad Road', 'Al Dhafra Street', 'Marina Walk', 'The Walk JBR'
  ],
  cities: [
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman', 'Ras Al Khaimah', 'Fujairah',
    'Umm Al Quwain', 'Khor Fakkan', 'Dibba', 'Kalba', 'Jebel Ali', 'Al Dhaid',
    'Madinat Zayed', 'Liwa', 'Ghayathi', 'Ruwais', 'Al Mirfa', 'Mezaira'
  ],
  states: [
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'
  ],
  zipCodePattern: '',
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
    const building = Random.pick(['Tower', 'Building', 'Plaza', 'Centre']);
    const buildingName = Random.pick(['Al Barsha', 'Marina', 'Downtown', 'Business Bay']);
    const office = Random.int(100, 999);
    return `Office ${office}, ${buildingName} ${building}, ${street}, ${city}, ${state}`;
  },

  generateZipCode(): string {
    return ''; // UAE doesn't use postal codes
  }
};