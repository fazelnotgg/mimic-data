import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const bg_BG: LocaleDefinition = {
  firstNamesMale: [
    'Georgi', 'Dimitar', 'Hristo', 'Stoyan', 'Ivan', 'Petar', 'Todor', 'Nikolay',
    'Aleksandar', 'Andrey', 'Kiril', 'Borislav', 'Valentin', 'Plamen', 'Krasimir',
    'Miroslav', 'Svetoslav', 'Vladimir', 'Borimir', 'Radoslav', 'Kaloyan', 'Martin',
    'Viktor', 'Daniel', 'Emil', 'Rumen', 'Zdravko', 'Lyubomir', 'Anton', 'Stanislav'
  ],
  firstNamesFemale: [
    'Maria', 'Elena', 'Yordanka', 'Svetlana', 'Galina', 'Diana', 'Tatiana', 'Nadezhda',
    'Lyudmila', 'Veselina', 'Radost', 'Milena', 'Petya', 'Zlatka', 'Silvia', 'Maya',
    'Boryana', 'Desislava', 'Gabriela', 'Ivelina', 'Teodora', 'Aleksandra', 'Viktoria',
    'Simona', 'Denitsa', 'Kalina', 'Bilyana', 'Ina', 'Liliya', 'Nikolina'
  ],
  lastNames: [
    'Ivanov', 'Georgiev', 'Dimitrov', 'Petrov', 'Stoyanov', 'Nikolov', 'Todorov',
    'Hristov', 'Alexandrov', 'Andreev', 'Kirilov', 'Borisov', 'Valentinov', 'Plamenov',
    'Krasimirov', 'Miroslavov', 'Svetoslavov', 'Vladimirov', 'Borimirov', 'Radoslavov',
    'Kaloyanov', 'Martinov', 'Viktorov', 'Danielov', 'Emilov', 'Rumenov', 'Zdravkov'
  ],
  streets: [
    'Boulevard Vitosha', 'Boulevard Tsar Osvoboditel', 'Boulevard Dondukov',
    'Boulevard Hristo Botev', 'Boulevard Slivnitsa', 'Boulevard Maria Luiza',
    'Boulevard Knyaginya Maria Luiza', 'Boulevard Todor Aleksandrov', 'Boulevard Bulgaria',
    'Boulevard Cherni Vrah', 'Boulevard Nikola Vaptsarov', 'Boulevard Peyo Yavorov'
  ],
  cities: [
    'Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven',
    'Sliven', 'Dobrich', 'Shumen', 'Pernik', 'Haskovo', 'Yambol', 'Pazardzhik',
    'Blagoevgrad', 'Veliko Tarnovo', 'Vratsa', 'Gabrovo', 'Asenovgrad', 'Vidin',
    'Kazanlak', 'Kyustendil', 'Montana', 'Lovech', 'Silistra', 'Targovishte'
  ],
  states: [
    'Sofia-Grad', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven',
    'Sliven', 'Dobrich', 'Shumen', 'Pernik', 'Haskovo', 'Yambol', 'Pazardzhik',
    'Blagoevgrad', 'Veliko Tarnovo', 'Vratsa', 'Gabrovo', 'Kardzhali', 'Kyustendil',
    'Lovech', 'Montana', 'Pazardzhik', 'Razgrad', 'Ruse', 'Silistra', 'Sliven',
    'Smolyan', 'Sofia', 'Stara Zagora', 'Targovishte', 'Varna', 'Veliko Tarnovo', 'Vidin', 'Vratsa', 'Yambol'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Софтуерен инженер', 'Мениджър проекти', 'Анализатор данни', 'Маркетинг мениджър',
    'Търговски представител', 'Счетоводител', 'HR мениджър', 'Дизайнер',
    'Оперативен мениджър', 'Бизнес анализатор', 'Мениджър продукти', 'Системен администратор',
    'Инженер качество', 'Технически писател', 'Администратор бази данни',
    'Мрежови инженер', 'DevOps инженер', 'UX дизайнер', 'Мениджър съдържание'
  ],
  departments: [
    'Инженеринг', 'Маркетинг', 'Продажби', 'Човешки ресурси', 'Финанси',
    'Операции', 'Клиентско обслужване', 'IT', 'Научни изследвания',
    'Правен', 'Управление на продукти', 'Дизайн', 'Контрол на качеството', 'Администрация'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    const entrance = Random.pick(['A', 'B', 'V', 'G']);
    const floor = Random.int(1, 10);
    const apartment = Random.int(1, 50);
    return `${street} ${number}, вх. ${entrance}, ет. ${floor}, ап. ${apartment}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  }
};
