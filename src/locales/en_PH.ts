import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_PH: LocaleDefinition = {
  firstNamesMale: [
    'John', 'Mark', 'Angelo', 'Joshua', 'James', 'Michael', 'Christian', 'Carl',
    'Kenneth', 'Anthony', 'Kristian', 'Daniel', 'Joseph', 'Gabriel', 'Rafael',
    'Emmanuel', 'Nathaniel', 'Matthew', 'Andrew', 'Samuel', 'Diego', 'Luis',
    'Marco', 'Paolo', 'Adrian', 'Ryan', 'Ethan', 'Jacob', 'Nathan', 'Vincent'
  ],
  firstNamesFemale: [
    'Maria', 'Anna', 'Princess', 'Angel', 'Andrea', 'Nicole', 'Michelle', 'Sarah',
    'Angelica', 'Christine', 'Patricia', 'Mary', 'Rose', 'Joy', 'Grace', 'Faith',
    'Hope', 'Kristine', 'Jasmine', 'Sofia', 'Isabella', 'Gabriela', 'Katrina',
    'Samantha', 'Jessica', 'Jennifer', 'Stephanie', 'Alexandra', 'Alessandra', 'Bianca'
  ],
  lastNames: [
    'dela Cruz', 'Garcia', 'Reyes', 'Ramos', 'Mendoza', 'Santos', 'Flores', 'Gonzales',
    'Bautista', 'Cruz', 'Fernandez', 'Lopez', 'Perez', 'Martinez', 'Rivera', 'Torres',
    'Aquino', 'Villanueva', 'Castro', 'Santiago', 'Morales', 'Valdez', 'Navarro',
    'Alvarez', 'Salazar', 'Romero', 'Manuel', 'Castillo', 'Aguilar', 'Mercado'
  ],
  streets: [
    'EDSA', 'Roxas Boulevard', 'Quezon Avenue', 'Taft Avenue', 'España Boulevard',
    'Ayala Avenue', 'Ortigas Avenue', 'Shaw Boulevard', 'Commonwealth Avenue',
    'C-5 Road', 'Katipunan Avenue', 'Magsaysay Avenue', 'Rizal Avenue', 'Del Pilar Street',
    'Araneta Avenue', 'Aurora Boulevard', 'Marcos Highway', 'Bonifacio Drive'
  ],
  cities: [
    'Manila', 'Quezon City', 'Makati', 'Pasig', 'Taguig', 'Pasay', 'Parañaque',
    'Las Piñas', 'Muntinlupa', 'Caloocan', 'Malabon', 'Navotas', 'Valenzuela',
    'Marikina', 'San Juan', 'Mandaluyong', 'Cebu City', 'Davao City', 'Zamboanga City',
    'Cagayan de Oro', 'General Santos', 'Iloilo City', 'Bacolod', 'Baguio'
  ],
  states: [
    'Metro Manila', 'Calabarzon', 'Central Luzon', 'Central Visayas', 'Western Visayas',
    'Davao Region', 'Northern Mindanao', 'Ilocos Region', 'Cagayan Valley', 'Bicol Region',
    'Eastern Visayas', 'Zamboanga Peninsula', 'SOCCSKSARGEN', 'Cordillera', 'MIMAROPA'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Assurance Engineer'
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
    const barangay = Random.pick(['Barangay San Antonio', 'Barangay Santa Cruz', 'Barangay San Jose', 'Barangay Poblacion']);
    return `${number} ${street}, ${barangay}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};