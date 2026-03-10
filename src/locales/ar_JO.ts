import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_JO: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Ali', 'Hassan', 'Hussain', 'Abdullah', 'Omar', 'Youssef',
    'Mahmoud', 'Ibrahim', 'Khalid', 'Saad', 'Fahad', 'Nasser', 'Hamad',
    'Salim', 'Rashid', 'Karim', 'Farid', 'Tariq', 'Zaid', 'Rami', 'Sami',
    'Hisham', 'Faisal', 'Majed', 'Waleed', 'Bassam', 'Jamil', 'Nabil'
  ],
  firstNamesFemale: [
    'Fatima', 'Maryam', 'Aisha', 'Khadija', 'Zainab', 'Noura', 'Sarah', 'Maha',
    'Layla', 'Rania', 'Amal', 'Nadia', 'Samira', 'Huda', 'Manal', 'Asma',
    'Souad', 'Hanan', 'Ghada', 'Basma', 'Arwa', 'Reema', 'Dina', 'Mona',
    'Noor', 'Ayat', 'Sara', 'Jana', 'Lama', 'Yara', 'Tala', 'Nour'
  ],
  lastNames: [
    'Al-Hashemi', 'Al-Masri', 'Al-Jordan', 'Al-Amman', 'Al-Zarqa', 'Al-Irbid',
    'Al-Karak', 'Al-Salt', 'Al-Mafraq', 'Al-Aqaba', 'Al-Jerash', 'Al-Petra',
    'Al-Hussein', 'Al-Abdullah', 'Al-Hassan', 'Al-Faisal', 'Al-Talal',
    'Al-Ghazi', 'Al-Rashid', 'Al-Said', 'Al-Majed', 'Al-Fahd', 'Al-Saud'
  ],
  streets: [
    'شارع الملك عبدالله', 'شارع الملك طلال', 'شارع الملك حسين', 'شارع المدينة المنورة',
    'شارع مكة المكرمة', 'شارع القدس', 'شارع بيروت', 'شارع دمشق',
    'شارع الرياض', 'شارع الخليج', 'شارع الاستقلال', 'شارع الثقافة', 'شارع الجامعة'
  ],
  cities: [
    'عمان', 'الزرقاء', 'إربد', 'الرصيفة', 'وادي السير', 'العقبة', 'السلط',
    'مادبا', 'الكرك', 'المفرق', 'جرش', 'عجلون', 'معان', 'طفيلة', 'الرمثا'
  ],
  states: [
    'عمان', 'الزرقاء', 'إربد', 'العقبة', 'البلقاء', 'مادبا', 'الكرك',
    'المفرق', 'جرش', 'عجلون', 'معان', 'طفيلة'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'مهندس برمجيات', 'مدير مشروع', 'محلل بيانات', 'مدير تسويق',
    'مندوب مبيعات', 'محاسب', 'مدير موارد بشرية', 'مصمم', 'مدير عمليات',
    'محلل أعمال', 'مدير منتج', 'مسؤول نظام', 'مندوب خدمة عملاء',
    'مهندس جودة', 'كاتب تقني', 'مسؤول قاعدة بيانات', 'مهندس شبكات'
  ],
  departments: [
    'الهندسة', 'التسويق', 'المبيعات', 'الموارد البشرية', 'المالية',
    'العمليات', 'خدمة العملاء', 'تكنولوجيا المعلومات', 'البحث والتطوير',
    'القانونية', 'إدارة المنتجات', 'التصميم', 'ضمان الجودة', 'الإدارة'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const buildingNumber = Random.int(1, 9999);
    const area = Random.pick(['العبدلي', 'الجبيهة', 'صويلح', 'تلاع العلي', 'الشميساني', 'مدينة الحسين']);
    return `${area}, شارع ${street}, مبنى ${buildingNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+962 7## ### ####',
    '+962 77## ####',
    '+962 78## ####',
    '+962 79## ####',
    '+962 6 ### ####',
    '+962 2 ### ####',
    '+962 3 ### ####',
    '07## ### ####',
    '06 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'jo.mail.com', 'zain.jo', 'orange.jo', 'umnia.jo'
  ],

  companyNames: [
    'شركة الاتصالات الأردنية', 'زين الأردن', 'أورانج الأردن', 'أمنية',
    'البنك الأهلي الأردني', 'بنك الإسكان', 'البنك العربي', 'بنك الأردن',
    'الخطوط الجوية الملكية الأردنية', 'شركة الكهرباء الوطنية', 'منجم الفوسفات الأردني'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الطيران',
    'التعدين', 'البناء', 'السياحة'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بالأردن'
  ]
};
