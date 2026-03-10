import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_TN: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Ali', 'Hassan', 'Hussain', 'Abdullah', 'Omar', 'Youssef',
    'Mahmoud', 'Ibrahim', 'Khalid', 'Saad', 'Sultan', 'Fahad', 'Nasser',
    'Hamad', 'Salim', 'Rachid', 'Karim', 'Farid', 'Mourad', 'Kamel', 'Nabil',
    'Tarek', 'Slah', 'Mongi', 'Lassaad', 'Sami', 'Hichem', 'Riadh'
  ],
  firstNamesFemale: [
    'Fatima', 'Maryam', 'Aisha', 'Khadija', 'Zainab', 'Noura', 'Sarah', 'Maha',
    'Amel', 'Nadia', 'Samira', 'Houria', 'Zohra', 'Fatiha', 'Leila', 'Nassima',
    'Khadidja', 'Rahma', 'Imene', 'Yasmina', 'Salima', 'Djamila', 'Chahrazed',
    'Noor', 'Ayat', 'Sara', 'Layla', 'Rania', 'Manel', 'Asma', 'Souad', 'Ines'
  ],
  lastNames: [
    'Ben Ali', 'Ben Salem', 'Ben Mohamed', 'Ben Ahmed', 'Ben Khalifa',
    'Ben Hassen', 'Ben Ali', 'Trabelsi', 'Ghannouchi', 'Marzouki', 'Mansouri',
    'Hamdi', 'Ayari', 'Bouazizi', 'Jebali', 'Mejri', 'Bouhired', 'Louhichi',
    'Attia', 'Zaouche', 'Mzali', 'Sfar', 'Essassi', 'Gharbi', 'Oueslati'
  ],
  streets: [
    'شارع الحبيب بورقيبة', 'شارع محمد الخامس', 'شارع الاستقلال', 'شارع منجي سليم',
    'شارع فرحات حشاد', 'شارع الطاهر الحداد', 'شارع الحبيب ثنيبة', 'شارع الأندلس',
    'شارع قرطاج', 'شارع الياسمين', 'شارع الزهور', 'شارع النخيل', 'شارع البحر'
  ],
  cities: [
    'تونس', 'صفاقس', 'سوسة', 'قيروان', 'بنزرت', 'قبلي', 'قابس',
    'أريانة', 'منوبة', 'نابل', 'زغوان', 'باجة', 'جندوبة', 'الكاف',
    'سيدي بوزيد', 'القصرين', 'توزر', 'قبلي', 'مدنين', 'تطاوين', 'المهدية'
  ],
  states: [
    'تونس', 'أريانة', 'بن عروس', 'منوبة', 'نابل', 'زغوان', 'بنزرت',
    'باجة', 'جندوبة', 'الكاف', 'سليانة', 'قيروان', 'القصرين', 'سيدي بوزيد',
    'سوسة', 'المنستير', 'المهدية', 'صفاقس', 'قفصة', 'قفلي', 'توزر',
    'قبلي', 'مدنين', 'تطاوين', 'قابس', 'زغوان'
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
    const quartier = Random.pick(['وسط المدينة', 'الملز', 'المنزه', 'المروج', 'بحيرة']);
    return `${quartier}, شارع ${street}, مبنى ${buildingNumber}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+216 2# ### ###',
    '+216 5# ### ###',
    '+216 9# ### ###',
    '+216 7# ### ###',
    '+216 71 ### ###',
    '+216 73 ### ###',
    '+216 74 ### ###',
    '2# ### ###',
    '5# ### ###',
    '9# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'topnet.tn', 'tunisiana.com', 'nursat.tn', 'gouv.tn'
  ],

  companyNames: [
    'أوريدو تونس', 'أورانج تونس', 'تونس تيليكوم', 'الخطوط الجوية التونسية',
    'البنك الوطني التونسي', 'بنك تونس العربي الدولي', 'البنك التونسي',
    'شركة الكهرباء والغاز', 'شركة السكك الحديدية التونسية', 'ديوان الطيران المدني'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الطيران',
    'السياحة', 'الزراعة', 'النسيج', 'الفوسفات'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بتونس'
  ]
};
