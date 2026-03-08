import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pk_PK: LocaleDefinition = {
  firstNamesMale: [
    'Muhammad', 'Ahmed', 'Ali', 'Hassan', 'Usman', 'Abdul', 'Razaq', 'Kareem',
    'Rahman', 'Rahim', 'Malik', 'Imran', 'Bilal', 'Faisal', 'Waseem', 'Naveed',
    'Shahid', 'Pervez', 'Tariq', 'Zahid', 'Mansoor', 'Iqbal', 'Farooq', 'Sarfraz',
    'Younis', 'Irfan', 'Kamran', 'Adnan', 'Sohail', 'Junaid', 'Omar', 'Hamza',
    'Yusuf', 'Ibrahim', 'Musa', 'Dawood', 'Suleman', 'Haroon', 'Saad', 'Huzaifa'
  ],
  firstNamesFemale: [
    'Fatima', 'Ayesha', 'Zainab', 'Khadija', 'Maryam', 'Sana', 'Hina', 'Nadia',
    'Sadia', 'Farah', 'Shazia', 'Rubab', 'Mahnoor', 'Hafsa', 'Amina', 'Sumaya',
    'Ruqayyah', 'Bushra', 'Kiran', 'Saima', 'Rabia', 'Tahira', 'Naheed', 'Shabana',
    'Nargis', 'Parveen', 'Tasneem', 'Yasmin', 'Zahra', 'Sakina', 'Masooma', 'Nusrat'
  ],
  lastNames: [
    'Khan', 'Malik', 'Ahmed', 'Ali', 'Hussain', 'Shah', 'Qureshi', 'Ansari',
    'Farooqui', 'Siddiqui', 'Usmani', 'Chaudhry', 'Raja', 'Butt', 'Sheikh',
    'Bhatti', 'Gill', 'Rana', 'Jutt', 'Gujjar', 'Awan', 'Syed', 'Naqvi',
    'Zaidi', 'Rizvi', 'Abbas', 'Mirza', 'Baig', 'Mughal', 'Pathan', 'Afghan'
  ],
  streets: [
    'Mall Road', 'Shahrah-e-Faisal', 'Kashmir Road', 'The Mall', 'Residency Road',
    'Jinnah Avenue', 'Constitution Avenue', 'Atatürk Avenue', 'Blue Area',
    'F-7 Markaz', 'G-9 Markaz', 'F-10 Markaz', 'I-8 Markaz', 'Defence Housing Authority',
    'Gulberg', 'Model Town', 'DHA Phase', 'Bahria Town', 'Lake City', 'Garden Town'
  ],
  cities: [
    'Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala',
    'Hyderabad', 'Peshawar', 'Islamabad', 'Quetta', 'Sargodha', 'Sialkot',
    'Bahawalpur', 'Sukkur', 'Larkana', 'Sheikhupura', 'Rahim Yar Khan',
    'Jhang', 'Gujrat', 'Mardan', 'Mingora', 'Dera Ghazi Khan', 'Sahiwal',
    'Nawabshah', 'Okara', 'Gilgit', 'Chitral', 'Skardu', 'Muzaffarabad'
  ],
  states: [
    'Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan',
    'Islamabad Capital Territory', 'Gilgit-Baltistan', 'Azad Jammu and Kashmir',
    'Federally Administered Tribal Areas'
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
    const houseNumber = Random.int(1, 999);
    const block = String.fromCharCode(65 + Random.int(0, 25));
    return `House ${houseNumber}, Block ${block}, ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};
