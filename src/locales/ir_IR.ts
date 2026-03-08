import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ir_IR: LocaleDefinition = {
  firstNamesMale: [
    'Mohammad', 'Ali', 'Reza', 'Hossein', 'Ahmad', 'Mahmoud', 'Mehdi', 'Javad',
    'Hamid', 'Masoud', 'Farid', 'Behrouz', 'Kourosh', 'Ardeshir', 'Babak',
    'Shahram', 'Parviz', 'Amir', 'Kamran', 'Hassan', 'Hussein', 'Abbas',
    'Jafar', 'Saeed', 'Omid', 'Ramin', 'Saman', 'Arash', 'Borzou', 'Farhad'
  ],
  firstNamesFemale: [
    'Fateme', 'Zahra', 'Maryam', 'Zainab', 'Khadijeh', 'Somayeh', 'Masoumeh',
    'Fatemeh', 'Hanieh', 'Narges', 'Elham', 'Marzieh', 'Leila', 'Nasrin',
    'Shirin', 'Parisa', 'Farnaz', 'Nazanin', 'Roya', 'Mahnaz', 'Shima',
    'Giti', 'Simin', 'Fariba', 'Shahla', 'Parvaneh', 'Azadeh', 'Mina', 'Sara', 'Negar'
  ],
  lastNames: [
    'Hosseini', 'Moradi', 'Karimi', 'Ahmadi', 'Rezaei', 'Mohammadi', 'Jafari',
    'Rashidi', 'Bagheri', 'Hasani', 'Nazari', 'Safari', 'Farahani', 'Yousefi',
    'Khani', 'Mirzaei', 'Haidari', 'Majidi', 'Shahidi', 'Ebrahimi', 'Ghasemi',
    'Tehrani', 'Isfahani', 'Shirazi', 'Tabatabaei', 'Hosseini', 'Rahimi', 'Zahedi'
  ],
  streets: [
    'Valiasr Street', 'Enghelab Street', 'Revolution Street', 'Ferdowsi Street',
    'Saadi Street', 'Hafez Street', 'Shariati Street', 'Mirdamad Boulevard',
    'Jordan Street', 'Africa Boulevard', 'Argentina Square', 'Tajrish Square',
    'Vanak Square', 'Seven Tir Square', 'Imam Khomeini Street', 'Ferdowsi Avenue'
  ],
  cities: [
    'Tehran', 'Mashhad', 'Isfahan', 'Karaj', 'Shiraz', 'Tabriz', 'Qom',
    'Ahvaz', 'Kermanshah', 'Urmia', 'Rasht', 'Zahedan', 'Hamadan', 'Kerman',
    'Yazd', 'Ardabil', 'Bandar Abbas', 'Arak', 'Zanjan', 'Sanandaj',
    'Qazvin', 'Khorramabad', 'Gorgan', 'Sari', 'Babol', 'Amol', 'Bushehr'
  ],
  states: [
    'Tehran', 'Razavi Khorasan', 'Isfahan', 'Alborz', 'Fars', 'East Azerbaijan',
    'Qom', 'Khuzestan', 'Kermanshah', 'West Azerbaijan', 'Gilan', 'Sistan and Baluchestan',
    'Hamadan', 'Kerman', 'Yazd', 'Ardabil', 'Hormozgan', 'Markazi', 'Zanjan',
    'Kurdistan', 'Qazvin', 'Lorestan', 'Golestan', 'Mazandaran', 'Bushehr'
  ],
  zipCodePattern: '##########',
  jobTitles: [
    'مهندس نرم‌افزار', 'مدیر پروژه', 'تحلیلگر داده', 'مدیر بازاریابی',
    'نماینده فروش', 'حسابدار', 'مدیر منابع انسانی', 'طراح', 'مدیر عملیات',
    'تحلیلگر کسب‌وکار', 'مدیر محصول', 'مدیر سیستم', 'مهندس تضمین کیفیت',
    'نویسنده فنی', 'مدیر پایگاه داده', 'مهندس شبکه', 'مهندس دوآپس'
  ],
  departments: [
    'مهندسی', 'بازاریابی', 'فروش', 'منابع انسانی', 'مالی', 'عملیات',
    'پشتیبانی مشتری', 'فناوری اطلاعات', 'تحقیق و توسعه', 'حقوقی',
    'مدیریت محصول', 'طراحی', 'تضمین کیفیت', 'اداری'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 999);
    const unit = Random.int(1, 50);
    return `${street} ${number}, Unit ${unit}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000000000, 9999999999));
  }
};
