import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_YE: LocaleDefinition = {
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
    'Al-Saleh', 'Al-Houthi', 'Al-Ahmar', 'Al-Iryani', 'Al-Attas', 'Al-Baidhani',
    'Al-Jawfi', 'Al-Sharjabi', 'Al-Maqaleh', 'Al-Saqqaf', 'Al-Kaf', 'Al-Basha',
    'Al-Zubairi', 'Al-Shami', 'Al-Yemeni', 'Al-Sanaani', 'Al-Taizi', 'Al-Adeni',
    'Al-Hadhrami', 'Al-Mahri', 'Al-Socotri', 'Al-Razi', 'Al-Kalani', 'Al-Mansour'
  ],
  streets: [
    'شارع الستين', 'شارع صنعاء', 'شارع تعز', 'شارع عدن', 'شارع الحديدة',
    'شارع إب', 'شارع ذمار', 'شارع المكلا', 'شارع سيئون', 'شارع زنجبار',
    'شارع التحرير', 'شارع الثورة', 'شارع الوحدة', 'شارع فلسطين', 'شارع بغداد'
  ],
  cities: [
    'صنعاء', 'عدن', 'تعز', 'الحديدة', 'إب', 'ذمار', 'المكلا',
    'سيئون', 'زنجبار', 'عتق', 'صعدة', 'عمران', 'حجة', 'المحويت',
    'ريمة', 'البيضاء', 'مارب', 'الجوف', 'شبوة', 'حضرموت', 'المهرة', 'سقطرى'
  ],
  states: [
    'أمانة العاصمة', 'عدن', 'تعز', 'الحديدة', 'إب', 'ذمار', 'حضرموت',
    'المكلا', 'صعدة', 'عمران', 'حجة', 'المحويت', 'ريمة', 'البيضاء',
    'مارب', 'الجوف', 'شبوة', 'المهرة', 'سقطرى', 'لحج', 'أبين', 'الضالع'
  ],
  zipCodePattern: '',
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
    const district = Random.pick(['التحرير', 'الشعب', 'الوحدة', 'الثورة', 'السبعين', 'بئر العزب']);
    return `منطقة ${district}, شارع ${street}, مبنى ${buildingNumber}, ${city}, ${state}`;
  },

  generateZipCode(): string {
    return '';
  },

  phoneFormats: [
    '+967 1## ### ###',
    '+967 2## ### ###',
    '+967 3## ### ###',
    '+967 4## ### ###',
    '+967 5## ### ###',
    '+967 6## ### ###',
    '+967 7## ### ###',
    '+967 71## ### ###',
    '+967 73## ### ###',
    '+967 77## ### ###',
    '01## ### ###',
    '07## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'yemen.net.ye', 'yemenonline.com', 'saba.net.ye'
  ],

  companyNames: [
    'شركة الاتصالات اليمنية', 'سبأفون', 'إم تي إن اليمن', 'واي يمن',
    'البنك المركزي اليمني', 'البنك الأهلي اليمني', 'بنك الكريمي',
    'الخطوط الجوية اليمنية', 'شركة النفط اليمنية', 'مؤسسة الكهرباء'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الزراعة',
    'الصيد', 'البناء', 'النسيج'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر باليمن'
  ]
};
