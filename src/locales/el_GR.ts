import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const el_GR: LocaleDefinition = {
  firstNamesMale: [
    'Georgios', 'Ioannis', 'Konstantinos', 'Dimitrios', 'Nikolaos', 'Panagiotis', 'Vasileios',
    'Christos', 'Athanasios', 'Michail', 'Spyridon', 'Andreas', 'Alexandros', 'Stefanos',
    'Antonios', 'Theodoros', 'Evangelos', 'Ilias', 'Petros', 'Apostolos', 'Anastasios',
    'Grigorios', 'Charalampos', 'Nikos', 'Kostas', 'Giorgos', 'Yannis', 'Dimitris', 'Marios'
  ],
  firstNamesFemale: [
    'Maria', 'Eleni', 'Aikaterini', 'Vasiliki', 'Sofia', 'Angeliki', 'Georgia', 'Dimitra',
    'Konstantina', 'Paraskevi', 'Ioanna', 'Anastasia', 'Christina', 'Styliani', 'Fotini',
    'Panagiota', 'Despina', 'Katerina', 'Anna', 'Alexandra', 'Irini', 'Nikoletta',
    'Evangelia', 'Chrysoula', 'Theodora', 'Zoi', 'Antonia', 'Eleftheria', 'Marina'
  ],
  lastNames: [
    'Papadopoulos', 'Pappas', 'Georgiou', 'Dimitriou', 'Nikolaou', 'Ioannou', 'Konstantinou',
    'Christodoulou', 'Vasiliou', 'Athanasiou', 'Petrou', 'Andreou', 'Oikonomou', 'Karagiannis',
    'Angelopoulos', 'Alexandrou', 'Michailidis', 'Georgiadis', 'Papadakis', 'Vlahos',
    'Papageorgiou', 'Theodorou', 'Nikou', 'Economou', 'Panagiotou', 'Makris', 'Kostopoulos'
  ],
  streets: [
    'Odos Ermou', 'Leoforos Vasilissis Sofias', 'Odos Panepistimiou', 'Odos Stadiou',
    'Leoforos Alexandras', 'Odos Akadimias', 'Odos Patision', 'Leoforos Kifisias',
    'Odos Solonos', 'Odos Athinas', 'Leoforos Mesogeion', 'Odos Voukourestiou',
    'Plateia Syntagmatos', 'Odos Mitropoleos', 'Leoforos Vouliagmenis'
  ],
  cities: [
    'Athens', 'Thessaloniki', 'Patras', 'Heraklion', 'Larissa', 'Volos', 'Ioannina',
    'Chania', 'Chalcis', 'Serres', 'Katerini', 'Kalamata', 'Kavala', 'Rhodes',
    'Agrinio', 'Trikala', 'Lamia', 'Kozani', 'Drama', 'Veria', 'Corfu', 'Xanthi'
  ],
  states: [
    'Attica', 'Central Macedonia', 'Crete', 'Thessaly', 'Western Greece', 'Peloponnese',
    'Epirus', 'Central Greece', 'Eastern Macedonia and Thrace', 'Ionian Islands',
    'Western Macedonia', 'North Aegean', 'South Aegean', 'Mount Athos'
  ],
  zipCodePattern: '### ##',
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
    const number = Random.int(1, 200);
    return `${street} ${number}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    const part1 = String(Random.int(100, 999));
    const part2 = String(Random.int(10, 99));
    return `${part1} ${part2}`;
  }
};