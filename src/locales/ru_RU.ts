import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ru_RU: LocaleDefinition = {
  firstNamesMale: [
    'Alexander', 'Dmitry', 'Maxim', 'Sergey', 'Andrey', 'Alexey', 'Artem', 'Ivan',
    'Mikhail', 'Roman', 'Vladimir', 'Nikita', 'Yegor', 'Denis', 'Pavel', 'Kirill',
    'Anton', 'Oleg', 'Konstantin', 'Igor', 'Evgeny', 'Viktor', 'Nikolay', 'Ilya',
    'Timur', 'Daniil', 'Vadim', 'Georgy', 'Stanislav', 'Gleb', 'Ruslan', 'Yaroslav'
  ],
  firstNamesFemale: [
    'Anastasia', 'Maria', 'Daria', 'Anna', 'Ekaterina', 'Victoria', 'Polina', 'Elizaveta',
    'Alexandra', 'Natalia', 'Olga', 'Tatiana', 'Irina', 'Yulia', 'Elena', 'Ksenia',
    'Svetlana', 'Marina', 'Vera', 'Sophia', 'Alina', 'Valeria', 'Veronika', 'Kristina',
    'Diana', 'Lyubov', 'Galina', 'Nina', 'Larisa', 'Ludmila', 'Angelina', 'Arina'
  ],
  lastNames: [
    'Ivanov', 'Smirnov', 'Kuznetsov', 'Popov', 'Vasiliev', 'Petrov', 'Sokolov', 'Mikhailov',
    'Novikov', 'Fedorov', 'Morozov', 'Volkov', 'Alexeev', 'Lebedev', 'Semenov', 'Egorov',
    'Pavlov', 'Kozlov', 'Stepanov', 'Nikolaev', 'Orlov', 'Andreev', 'Makarov', 'Nikitin',
    'Zakharov', 'Zaitsev', 'Soloviev', 'Borisov', 'Yakovlev', 'Grigoriev', 'Romanov'
  ],
  streets: [
    'Lenina Street', 'Pushkina Street', 'Sovetskaya Street', 'Tsentralnaya Street',
    'Mira Avenue', 'Gagarina Street', 'Komsomolskaya Street', 'Kirova Street',
    'Pobedy Avenue', 'Oktyabrskaya Street', 'Sadovaya Street', 'Moskovskaya Street',
    'Nevsky Prospekt', 'Tverskaya Street', 'Arbat Street', 'Prospekt Mira',
    'Kutuzovsky Prospekt', 'Leningradsky Prospekt', 'Novinsky Boulevard'
  ],
  cities: [
    'Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod',
    'Chelyabinsk', 'Samara', 'Omsk', 'Rostov-on-Don', 'Ufa', 'Krasnoyarsk', 'Voronezh',
    'Perm', 'Volgograd', 'Krasnodar', 'Saratov', 'Tyumen', 'Tolyatti', 'Izhevsk',
    'Barnaul', 'Ulyanovsk', 'Irkutsk', 'Khabarovsk', 'Yaroslavl', 'Vladivostok', 'Tomsk'
  ],
  states: [
    'Moscow Oblast', 'Saint Petersburg', 'Moscow', 'Sverdlovsk Oblast', 'Tatarstan',
    'Krasnodar Krai', 'Chelyabinsk Oblast', 'Nizhny Novgorod Oblast', 'Samara Oblast',
    'Bashkortostan', 'Rostov Oblast', 'Krasnoyarsk Krai', 'Novosibirsk Oblast',
    'Perm Krai', 'Voronezh Oblast', 'Volgograd Oblast', 'Saratov Oblast'
  ],
  zipCodePattern: '######',
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
    const building = Random.int(1, 200);
    const apartment = Random.int(1, 150);
    return `${state}, ${city}, ${street}, d. ${building}, kv. ${apartment}, ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  }
};