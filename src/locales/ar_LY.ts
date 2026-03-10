import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_LY: LocaleDefinition = {
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
    'Al-Gaddafi', 'Al-Senussi', 'Al-Misrati', 'Al-Tarhouni', 'Al-Zintani',
    'Al-Warfalli', 'Al-Magariaf', 'Al-Abbar', 'Al-Suwaihli', 'Al-Hasi',
    'Al-Barghathi', 'Al-Dabaashi', 'Al-Ghwell', 'Al-Thinni', 'Al-Abadi',
    'Al-Mismari', 'Al-Sharif', 'Al-Alawi', 'Al-Idrisi', 'Al-Mahdi'
  ],
  streets: [
    'شارع عمر المختار', 'شارع الاستقلال', 'شارع طرابلس', 'شارع بنغازي',
    'شارع الزاوية', 'شارع مصراتة', 'شارع سبها', 'شارع درنة',
    'شارع البيضاء', 'شارع طبرق', 'شارع الخمس', 'شارع الزاوية', 'شارع غريان'
  ],
  cities: [
    'طرابلس', 'بنغازي', 'مصراتة', 'الزاوية', 'البيضاء', 'سبها', 'درنة',
    'الخمس', 'زليتن', 'أجدابيا', 'تبرق', 'غات', 'غدامس', 'الكفرة',
    'مرزق', 'ترهونة', 'غريان', 'نالوت', 'زوارة', 'بن جواد'
  ],
  states: [
    'طرابلس', 'بنغازي', 'مصراتة', 'الجبل الغربي', 'الجبل الأخضر', 'فزان',
    'برقة', 'الزاوية', 'الخمسة', 'سبها', 'درنة', 'البيضاء', 'تبرق'
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
    const district = Random.pick(['وسط المدينة', 'الضاحية', 'المنطقة الصناعية', 'المنطقة السكنية']);
    return `المنطقة ${district}, شارع ${street}, مبنى ${buildingNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+218 91 ### ####',
    '+218 92 ### ####',
    '+218 93 ### ####',
    '+218 94 ### ####',
    '+218 21 ### ####',
    '+218 23 ### ####',
    '+218 24 ### ####',
    '091 ### ####',
    '092 ### ####',
    '021 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'libya.ly', 'lapost.ly', 'mtt.gov.ly'
  ],

  companyNames: [
    'المؤسسة الوطنية للنفط', 'مصرف ليبيا المركزي', 'مصرف الصحابة',
    'مصرف الوحدة', 'المصرف التجاري الوطني', 'مصرف الجمهورية',
    'الخطوط الجوية الليبية', 'ليبيانا', 'المدار الجديد', 'حاتم'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الطيران',
    'النفط والغاز', 'البناء', 'الزراعة'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بليبيا'
  ]
};
