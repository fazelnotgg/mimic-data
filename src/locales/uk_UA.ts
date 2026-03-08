import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const uk_UA: LocaleDefinition = {
  firstNamesMale: [
    'Oleksandr', 'Dmytro', 'Maxym', 'Andriy', 'Serhiy', 'Oleksiy', 'Vitaliy',
    'Yuriy', 'Volodymyr', 'Ivan', 'Petro', 'Mykola', 'Roman', 'Ihor', 'Vasyl',
    'Taras', 'Bohdan', 'Vyacheslav', 'Valeriy', 'Leonid', 'Oleg', 'Viktor',
    'Anatoliy', 'Mykhaylo', 'Pavlo', 'Hryhoriy', 'Stanislav', 'Eduard', 'Yevhen', 'Artem'
  ],
  firstNamesFemale: [
    'Olena', 'Nataliya', 'Iryna', 'Tetyana', 'Oksana', 'Svitlana', 'Lyudmyla',
    'Kateryna', 'Maryana', 'Anna', 'Maria', 'Anastasiya', 'Viktoriya', 'Yuliya',
    'Olha', 'Nadiya', 'Larysa', 'Halyna', 'Ivanna', 'Roksolana', 'Solomiya',
    'Lesya', 'Daryna', 'Sofiya', 'Mariya', 'Khrystyna', 'Alina', 'Polina', 'Diana', 'Vlada'
  ],
  lastNames: [
    'Shevchenko', 'Kovalenko', 'Bondarenko', 'Tkachenko', 'Savchenko',
    'Kovalchuk', 'Koval', 'Melnyk', 'Shevchuk', 'Boyko', 'Lysenko',
    'Kravchenko', 'Karpenko', 'Yanenko', 'Oliynyk', 'Andriyenko',
    'Pavlenko', 'Semenenko', 'Petrenko', 'Marchenko', 'Ivanenko',
    'Lutsenko', 'Bilenko', 'Hrytsenko', 'Klimenko', 'Vasylchenko',
    'Hnatyuk', 'Kruk', 'Zubenko', 'Moroz', 'Ponomarenko', 'Rudenko'
  ],
  streets: [
    'Khreshchatyk Street', 'Shevchenko Boulevard', 'Franko Street',
    'Hrushevskoho Street', 'Velyka Vasylkivska', 'Peremohy Avenue',
    'Leva Tolstoho Street', 'Saksahanskoho Street', 'Vladimirska Street',
    'Yaroslaviv Val', 'Lva Tolstoho', 'Kreshatik', 'Maidan Nezalezhnosti',
    'Sofiyska Street', 'Volodymyrska Street', 'Pechersk Street', 'Podil Street'
  ],
  cities: [
    'Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Donetsk', 'Zaporizhzhia',
    'Lviv', 'Kryvyi Rih', 'Mykolaiv', 'Mariupol', 'Luhansk', 'Vinnytsia',
    'Simferopol', 'Kherson', 'Poltava', 'Chernihiv', 'Cherkasy', 'Sumy',
    'Zhytomyr', 'Khmelnytskyi', 'Rivne', 'Ivano-Frankivsk', 'Ternopil',
    'Lutsk', 'Uzhhorod', 'Chernivtsi', 'Kirovohrad', 'Sevastopol'
  ],
  states: [
    'Kyiv Oblast', 'Kharkiv Oblast', 'Odesa Oblast', 'Dnipropetrovsk Oblast',
    'Donetsk Oblast', 'Zaporizhzhia Oblast', 'Lviv Oblast', 'Mykolaiv Oblast',
    'Vinnytsia Oblast', 'Poltava Oblast', 'Chernihiv Oblast', 'Cherkasy Oblast',
    'Sumy Oblast', 'Zhytomyr Oblast', 'Khmelnytskyi Oblast', 'Rivne Oblast',
    'Ivano-Frankivsk Oblast', 'Ternopil Oblast', 'Lutsk Oblast', 'Zakarpattia Oblast',
    'Chernivtsi Oblast', 'Kirovohrad Oblast', 'Kherson Oblast', 'Luhansk Oblast'
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
    const building = Random.int(1, 200);
    const apartment = Random.int(1, 300);
    return `${street} ${building}, apt. ${apartment}, ${city}, ${state}, ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};
