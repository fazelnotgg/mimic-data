import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_SY: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Ali', 'Hassan', 'Hussain', 'Abdullah', 'Omar', 'Youssef',
    'Mahmoud', 'Ibrahim', 'Khalid', 'Saad', 'Fahad', 'Nasser', 'Hamad',
    'Salim', 'Rashid', 'Karim', 'Farid', 'Tariq', 'Zaid', 'Rami', 'Sami',
    'Hisham', 'Faisal', 'Majed', 'Waleed', 'Bassam', 'Jamil', 'Nabil',
    'Bashar', 'Hafez', 'Shukri', 'Quwatli', 'Atassi', 'Azm', 'Kudsi'
  ],
  firstNamesFemale: [
    'Fatima', 'Maryam', 'Aisha', 'Khadija', 'Zainab', 'Noura', 'Sarah', 'Maha',
    'Layla', 'Rania', 'Amal', 'Nadia', 'Samira', 'Huda', 'Manal', 'Asma',
    'Souad', 'Hanan', 'Ghada', 'Basma', 'Arwa', 'Reema', 'Dina', 'Mona',
    'Noor', 'Ayat', 'Sara', 'Jana', 'Lama', 'Yara', 'Tala', 'Nour',
    'Rima', 'Lina', 'Sana', 'Hala', 'Nahed', 'Salwa', 'Fayza', 'Randa'
  ],
  lastNames: [
    'Al-Assad', 'Al-Sharaa', 'Al-Faruq', 'Al-Halabi', 'Al-Dimashqi', 'Al-Homsi',
    'Al-Hamawi', 'Al-Laziqi', 'Al-Tartousi', 'Al-Idlibi', 'Al-Hasaki', 'Al-Deiri',
    'Al-Sweidi', 'Al-Quwatli', 'Al-Atassi', 'Al-Azm', 'Al-Kudsi', 'Al-Bitar',
    'Al-Hourani', 'Al-Arsuzi', 'Al-Bunni', 'Al-Masri', 'Al-Jabiri', 'Al-Khatib'
  ],
  streets: [
    'شارع بغداد', 'شارع حمص', 'شارع حلب', 'شارع دمشق', 'شارع النيل',
    'شارع الملك فيصل', 'شارع الشهبندر', 'شارع أبو رمانة', 'شارع الصالحية',
    'شارع المزة', 'شارع كفر سوسة', 'شارع البرامكة', 'شارع بغداد', 'شارع يابور'
  ],
  cities: [
    'دمشق', 'حلب', 'حمص', 'اللاذقية', 'حماة', 'دير الزور', 'الحسكة',
    'درعا', 'السويداء', 'طرطوس', 'إدلب', 'الرقة', 'القنيطرة', 'تدمر',
    'دوما', 'الزبداني', 'صافيتا', 'جبلَة', 'منبج', 'أعزاز'
  ],
  states: [
    'دمشق', 'ريف دمشق', 'حلب', 'حمص', 'حماة', 'اللاذقية', 'طرطوس',
    'إدلب', 'درعا', 'السويداء', 'دير الزور', 'الحسكة', 'الرقة', 'القنيطرة'
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
    const district = Random.pick(['أبو رمانة', 'الصالحية', 'المزة', 'كفر سوسة', 'برزة', 'القابون']);
    return `حي ${district}, شارع ${street}, مبنى ${buildingNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+963 9## ### ####',
    '+963 93# ### ###',
    '+963 94# ### ###',
    '+963 95# ### ###',
    '+963 96# ### ###',
    '+963 98# ### ###',
    '+963 99# ### ###',
    '+963 11 ### ####',
    '+963 21 ### ####',
    '09## ### ####',
    '011 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'syrianmail.com', 'net.sy', 'gov.sy'
  ],

  companyNames: [
    'المصرف التجاري السوري', 'مصرف سوريا المركزي', 'المصرف العقاري',
    'مصرف التسليف الشعبي', 'الخطوط الجوية السورية', 'المؤسسة العامة للاتصالات',
    'سيريتل', 'ام تي ان سوريا', 'شركة السكك الحديدية', 'مؤسسة الكهرباء'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الزراعة',
    'النسيج', 'البناء', 'السياحة'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بسوريا'
  ]
};
