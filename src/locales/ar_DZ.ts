import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_DZ: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Ali', 'Hassan', 'Hussain', 'Abdullah', 'Omar', 'Youssef',
    'Mahmoud', 'Ibrahim', 'Khalid', 'Saad', 'Sultan', 'Fahad', 'Nasser',
    'Hamad', 'Salim', 'Rachid', 'Karim', 'Farid', 'Mourad', 'Kamel', 'Nabil',
    'Tarek', 'Zinedine', 'Riyad', 'Islam', 'Amine', 'Sofiane', 'Mehdi'
  ],
  firstNamesFemale: [
    'Fatima', 'Maryam', 'Aisha', 'Khadija', 'Zainab', 'Noura', 'Sarah', 'Maha',
    'Amel', 'Nadia', 'Samira', 'Houria', 'Zohra', 'Fatiha', 'Leila', 'Nassima',
    'Khadidja', 'Rahma', 'Imene', 'Yasmina', 'Salima', 'Djamila', 'Chahrazed',
    'Noor', 'Ayat', 'Sara', 'Layla', 'Rania', 'Manel', 'Asma', 'Souad'
  ],
  lastNames: [
    'Benali', 'Benzema', 'Brahimi', 'Mahrez', 'Feghouli', 'Slimani', 'Mandi',
    'Bounedjah', 'Belmadi', 'Halliche', 'Ghoulam', 'Bentaleb', 'Taider',
    'Soudani', 'Yacoubi', 'Medjani', 'Carl Medjani', 'Lacen', 'Kadir',
    'Mostefa', 'Mesbah', 'Ziani', 'Yahia', 'Hassouna', 'Djabou', 'Soudani'
  ],
  streets: [
    'شارع ديدوش مراد', 'شارع بن بولعيد', 'شارع العربي بن مهيدي', 'شارع الاستقلال',
    'شارع محمد الخامس', 'شارع هواري بومدين', 'شارع فرحات عباس', 'شارع عبان رمضان',
    'طريق الجزائر', 'شارع وهران', 'شارع قسنطينة', 'شارع عنابة', 'شارع البليدة'
  ],
  cities: [
    'الجزائر', 'وهران', 'قسنطينة', 'عنابة', 'البليدة', 'باتنة', 'سطيف',
    'سيدي بلعباس', 'بجاية', 'تلمسان', 'ورقلة', 'بسكرة', 'تيزي وزو',
    'بشار', 'سطيف', 'الجلفة', 'البويرة', 'تيسمسيلت', 'الوادي', 'خنشلة'
  ],
  states: [
    'الجزائر', 'وهران', 'قسنطينة', 'عنابة', 'البليدة', 'باتنة', 'سطيف',
    'سيدي بلعباس', 'بجاية', 'تلمسان', 'ورقلة', 'بسكرة', 'تيزي وزو',
    'بشار', 'الجلفة', 'البويرة', 'تيسمسيلت', 'الوادي', 'خنشلة', ' سوق أهراس'
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
    const quartier = Random.pick(['وسط', 'شمال', 'جنوب', 'شرق', 'غرب']);
    return `${buildingNumber} شارع ${street}, حي ${quartier}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+213 5## ## ## ##',
    '+213 6## ## ## ##',
    '+213 7## ## ## ##',
    '+213 21 ## ## ##',
    '+213 31 ## ## ##',
    '+213 41 ## ## ##',
    '05## ## ## ##',
    '06## ## ## ##',
    '07## ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'mail.dz', 'yahoo.dz', 'ooredoo.dz', 'mobilis.dz'
  ],

  companyNames: [
    'سوناطراك', 'جازي', 'أوريدو الجزائر', 'موبيليس', 'الخطوط الجوية الجزائرية',
    'البنك الوطني الجزائري', 'بنك الجزائر الخارجية', 'البنك الجزائري',
    'مجمع سيفيتال', 'مجمع تودرا', 'مجمع حداد', 'شركة الأسمنت الجزائرية'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الطيران',
    'النفط والغاز', 'البناء', 'الصيدلة'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بالجزائر'
  ]
};
