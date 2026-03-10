import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_BH: LocaleDefinition = {
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
    'Al Khalifa', 'Al Zayani', 'Al Noaimi', 'Al Mulla', 'Al Qassim', 'Al Bin Ali',
    'Al Arrayed', 'Al Doseri', 'Al Marzooq', 'Al Shamlan', 'Al Tajir', 'Al Fardan',
    'Al Moayyed', 'Al Aali', 'Al Ansari', 'Al Kooheji', 'Al Mudharib', 'Al Baharna',
    'Al Saie', 'Al Maskari', 'Al Lawati', 'Al Balushi', 'Al Harthy', 'Al Kindi'
  ],
  streets: [
    'شارع الملك فهد', 'شارع الحكومة', 'شارع فيصل بن فهد', 'شارع الشيخ عيسى',
    'طريق البديع', 'شارع المحرق', 'شارع المنامة', 'شارع الرفاع', 'شارع عوالي',
    'طريق الدرين', 'شارع جلفار', 'شارع القفول', 'شارع النخيل', 'شارع اللؤلؤ'
  ],
  cities: [
    'المنامة', 'المحرق', 'الرفاع', 'مدينة حمد', 'مدينة عيسى', 'سترة',
    'جد حفص', 'البديع', 'باربار', 'درز', 'كرباباد', 'النويدرات', 'القفل'
  ],
  states: [
    'العاصمة', 'المحرق', 'الشمالية', 'الجنوبية'
  ],
  zipCodePattern: '####',
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
    const block = Random.int(1, 999);
    return `مبنى ${buildingNumber}, شارع ${street}, مجمع ${block}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+973 #### ####',
    '+973 3### ####',
    '+973 6### ####',
    '+973 7### ####',
    '#### ####',
    '3### ####',
    '6### ####',
    '7### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'batelco.com.bh', 'benefit.com.bh', 'zain.com'
  ],

  companyNames: [
    'ألبا', 'بتلكو', 'بنك البحرين الوطني', 'بنك البحرين الإسلامي',
    'أهلية يونايتد', 'شركة طيران الخليج', 'زين البحرين', 'ستكو',
    'مصرف السلام', 'بيت التمويل الخليجي', 'شركة نور المالية'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الطيران',
    'النفط والغاز', 'الألمنيوم', 'البناء'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بالبحرين'
  ]
};
