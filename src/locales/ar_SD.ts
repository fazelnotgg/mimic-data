import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_SD: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Ali', 'Hassan', 'Hussain', 'Abdullah', 'Omar', 'Youssef',
    'Mahmoud', 'Ibrahim', 'Khalid', 'Saad', 'Sultan', 'Fahad', 'Nasser',
    'Hamad', 'Salim', 'Rashid', 'Karim', 'Farid', 'Tariq', 'Zaid', 'Rami',
    'Sami', 'Hisham', 'Faisal', 'Majed', 'Waleed', 'Bassam', 'Jamil'
  ],
  firstNamesFemale: [
    'Fatima', 'Maryam', 'Aisha', 'Khadija', 'Zainab', 'Noura', 'Sarah', 'Maha',
    'Layla', 'Rania', 'Amal', 'Nadia', 'Samira', 'Huda', 'Manal', 'Asma',
    'Souad', 'Hanan', 'Ghada', 'Basma', 'Arwa', 'Reema', 'Dina', 'Mona',
    'Noor', 'Ayat', 'Sara', 'Jana', 'Lama', 'Yara', 'Tala', 'Nour'
  ],
  lastNames: [
    'Al-Mahdi', 'Al-Mirghani', 'Al-Attab', 'Al-Hindi', 'Al-Zubeir', 'Al-Nur',
    'Al-Tijani', 'Al-Sadiq', 'Al-Hassan', 'Al-Bashir', 'Al-Turabi', 'Al-Khalifa',
    'Al-Sayed', 'Al-Sharif', 'Al-Ansari', 'Al-Khatmiyya', 'Al-Azhari',
    'Al-Mekki', 'Al-Madani', 'Al-Sudan', 'Al-Nile', 'Al-Khartoum'
  ],
  streets: [
    'شارع النيل', 'شارع القصر', 'شارع الجامعة', 'شارع المطار',
    'شارع عبيد ختم', 'شارع السيد عبد الرحمن', 'شارع المك نمر',
    'شارع الأزهري', 'شارع محمد نجيب', 'شارع السجانة', 'شارع كوبري'
  ],
  cities: [
    'الخرطوم', 'أم درمان', 'الخرطوم بحري', 'بورتسودان', 'كسلا', 'القضارف',
    'ود مدني', 'الأبيض', 'عطبرة', 'شندي', 'دنقلا', 'حلفا الجديدة',
    'بورتسودان', 'كادوقلي', 'نيالا', 'الفاشر', 'جنينة', 'زالنجي'
  ],
  states: [
    'الخرطوم', 'الجزيرة', 'كسلا', 'القضارف', 'سنار', 'النيل الأزرق',
    'شمال كردفان', 'جنوب كردفان', 'غرب كردفان', 'النيل الأبيض',
    'نهر النيل', 'الشمالية', 'البحر الأحمر', 'كسلا', 'دارفور'
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
    const district = Random.pick(['العائلات', 'الرياض', 'السجانة', 'كوبر', 'أم درمان', 'بحري']);
    return `حي ${district}, شارع ${street}, مبنى ${buildingNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+249 9## ### ####',
    '+249 90## ### ###',
    '+249 91## ### ###',
    '+249 92## ### ###',
    '+249 1## ### ###',
    '09## ### ####',
    '01## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'sudanmail.net', 'sudantel.net.sd', 'zain.sd'
  ],

  companyNames: [
    'شركة سوداتل', 'زين السودان', 'ام تي ان السودان', 'سوداني',
    'بنك الخرطوم', 'البنك الأهلي السوداني', 'بنك فيصل الإسلامي',
    'شركة خطوط الطيران السودانية', 'مصرف الوحدة', 'بنك أم درمان الوطني'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الزراعة',
    'التعدين', 'البناء', 'الثروة الحيوانية'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بالسودان'
  ]
};
