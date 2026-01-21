import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_EG: LocaleDefinition = {
  firstNamesMale: [
    'Mohamed', 'Ahmed', 'Mahmoud', 'Ali', 'Omar', 'Youssef', 'Hassan', 'Amr',
    'Khaled', 'Ibrahim', 'Mustafa', 'Osama', 'Tamer', 'Hossam', 'Karim', 'Tarek',
    'Sherif', 'Adel', 'Walid', 'Ashraf', 'Magdy', 'Hazem', 'Hany', 'Ayman',
    'Ramy', 'Wael', 'Essam', 'Medhat', 'Samir', 'Fathy', 'Samy', 'Nabil'
  ],
  firstNamesFemale: [
    'Fatma', 'Mona', 'Nour', 'Mariam', 'Sara', 'Nada', 'Heba', 'Aya', 'Salma',
    'Yasmin', 'Rana', 'Layla', 'Hala', 'Dina', 'Rania', 'Amira', 'Eman', 'Noha',
    'Sahar', 'Nagwa', 'Manal', 'Somaya', 'Ghada', 'Amal', 'Nawal', 'Hanan',
    'Maha', 'Samira', 'Hanaa', 'Rabab', 'Soha', 'Menna'
  ],
  lastNames: [
    'Mohamed', 'Ahmed', 'Ali', 'Hassan', 'Ibrahim', 'Mahmoud', 'Youssef', 'Abdel Rahman',
    'Abdel Aziz', 'Abdel Fattah', 'Abdel Hamid', 'El Sayed', 'El Shahat', 'Khalil',
    'Mostafa', 'Salah', 'Fouad', 'Rashad', 'Farouk', 'Shawky', 'Refaat', 'Abdallah',
    'El Sherbiny', 'El Maghraby', 'El Masry', 'El Naggar', 'El Sisi', 'El Din', 'Mansour'
  ],
  streets: [
    'Tahrir Street', 'Ramses Street', 'Salah Salem Street', 'Mohamed Farid Street',
    'Qasr El Nil Street', 'Talaat Harb Street', 'El Haram Street', 'Nasr Road',
    'Makram Ebeid Street', 'Mostafa El Nahhas Street', 'El Geish Street', 'El Nozha Street',
    'Abbas El Akkad Street', 'Ahmed Orabi Street', 'Port Said Street', 'October Bridge'
  ],
  cities: [
    'Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor',
    'Mansoura', 'El Mahalla El Kubra', 'Tanta', 'Asyut', 'Ismailia', 'Faiyum', 'Zagazig',
    'Aswan', 'Damietta', 'Damanhur', 'Minya', 'Beni Suef', 'Qena', 'Sohag', 'Hurghada',
    'Kafr El Sheikh', 'Arish', 'Mallawi', '6th of October City', 'Sharm El Sheikh'
  ],
  states: [
    'Cairo', 'Alexandria', 'Giza', 'Qalyubia', 'Port Said', 'Suez', 'Luxor',
    'Dakahlia', 'Gharbia', 'Sharqia', 'Asyut', 'Ismailia', 'Faiyum', 'Beheira',
    'Aswan', 'Damietta', 'Minya', 'Beni Suef', 'Qena', 'Sohag', 'Red Sea',
    'Kafr El Sheikh', 'North Sinai', 'South Sinai', 'Matruh', 'New Valley'
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
    const building = Random.int(1, 999);
    const floor = Random.int(1, 12);
    const apartment = Random.int(1, 50);
    return `Building ${building}, Floor ${floor}, Apartment ${apartment}, ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};