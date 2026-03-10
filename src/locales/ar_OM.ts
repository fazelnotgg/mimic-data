import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_OM: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Ali', 'Hassan', 'Hussain', 'Abdullah', 'Abdulrahman', 'Ibrahim',
    'Youssef', 'Mahmoud', 'Omar', 'Khalid', 'Saad', 'Sultan', 'Fahad', 'Nasser',
    'Hamad', 'Isa', 'Salman', 'Qasim', 'Jassim', 'Ebrahim', 'Adel', 'Sami',
    'Tariq', 'Zaki', 'Waleed', 'Hisham', 'Faisal', 'Abdulaziz', 'Mansour', 'Saeed'
  ],
  firstNamesFemale: [
    'Fatima', 'Maryam', 'Aisha', 'Khadija', 'Zainab', 'Noura', 'Sarah', 'Maha',
    'Hessa', 'Lulwa', 'Latifa', 'Abeer', 'Reem', 'Hind', 'Jawaher', 'Mona',
    'Amal', 'Deema', 'Lama', 'Nada', 'Hanan', 'Ghada', 'Basma', 'Arwa',
    'Noor', 'Ayat', 'Sara', 'Layla', 'Rania', 'Samira', 'Huda', 'Manal'
  ],
  lastNames: [
    'Al Busaidi', 'Al Said', 'Al Lawati', 'Al Balushi', 'Al Harthy', 'Al Kindi',
    'Al Zedjali', 'Al Mawali', 'Al Hinai', 'Al Ghafri', 'Al Wahaibi', 'Al Sheibani',
    'Al Mashikhi', 'Al Rawahi', 'Al Mazroui', 'Al Hosni', 'Al Bahri', 'Al Shukaili',
    'Al Mamari', 'Al Jabri', 'Al Safi', 'Al Obeidani', 'Al Kaabi', 'Al Nuaimi'
  ],
  streets: [
    'شارع السلطان قابوس', 'شارع القرآن الكريم', 'شارع النهضة', 'شارع النسيم',
    'شارع القرم', 'شارع شاطئ القرم', 'شارع الغبرة', 'شارع الخوير',
    'شارع المطار', 'شارع Ruwi', 'شارع Muttrah', 'شارع Nizwa', 'شارع Salalah'
  ],
  cities: [
    'مسقط', 'صلالة', 'نزوى', 'صور', 'صحار', 'عبري', 'الرستاق',
    'بركاء', 'المصنعة', 'شناص', 'صحار', 'مدحاء', 'دبا', 'خصب',
    'هيماء', 'محوت', 'أدم', 'بدبد', 'سمائل', 'بهلاء'
  ],
  states: [
    'مسقط', 'ظفار', 'الداخلية', 'الشرقية', 'الباطنة', 'الظاهرة',
    'مسندم', 'البريمي', 'شمال الشرقية', 'شمال الباطنة', 'جنوب الباطنة', 'جنوب الشرقية'
  ],
  zipCodePattern: '###',
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
    const wilayat = Random.pick(['مسقط', 'العامرات', 'بوشر', 'السيب', 'قريات']);
    return `ولاية ${wilayat}, شارع ${street}, مبنى ${buildingNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100, 999));
  },

  phoneFormats: [
    '+968 9### ####',
    '+968 7### ####',
    '+968 2### ####',
    '+968 8### ####',
    '9### ####',
    '7### ####',
    '2### ####',
    '8### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'omantel.net.om', 'nawras.com.om', 'oqal.om'
  ],

  companyNames: [
    'شركة تنمية نفط عمان', 'البنك الأهلي العماني', 'بنك مسقط',
    'البنك الوطني العماني', 'بنك ظفار', 'الخطوط الجوية العمانية',
    'عُمان تل', 'أوريدو عمان', 'فودافون عمان', 'شركة الغاز العمانية'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الطيران',
    'النفط والغاز', 'البناء', 'السياحة', 'الصيد'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بعمان'
  ]
};
