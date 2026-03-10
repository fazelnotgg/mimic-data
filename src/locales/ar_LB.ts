import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_LB: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Ali', 'Hassan', 'Hussain', 'Abdullah', 'Omar', 'Youssef',
    'Mahmoud', 'Ibrahim', 'Khalid', 'Saad', 'Fahad', 'Nasser', 'Hamad',
    'Salim', 'Rashid', 'Karim', 'Farid', 'Tariq', 'Ziad', 'Rami', 'Sami',
    'Hisham', 'Faisal', 'Majed', 'Waleed', 'Bassam', 'Jamil', 'Nabil',
    'Georges', 'Michel', 'Antoine', 'Joseph', 'Pierre', 'Claude', 'Andre'
  ],
  firstNamesFemale: [
    'Fatima', 'Maryam', 'Aisha', 'Khadija', 'Zainab', 'Noura', 'Sarah', 'Maha',
    'Layla', 'Rania', 'Amal', 'Nadia', 'Samira', 'Huda', 'Manal', 'Asma',
    'Souad', 'Hanan', 'Ghada', 'Basma', 'Arwa', 'Reema', 'Dina', 'Mona',
    'Noor', 'Ayat', 'Sara', 'Jana', 'Lama', 'Yara', 'Tala', 'Nour',
    'Marie', 'Christine', 'Nadine', 'Sylvie', 'Carine', 'Lina', 'Rita', 'Maya'
  ],
  lastNames: [
    'Al-Hariri', 'Al-Solh', 'Al-Khoury', 'Al-Chamoun', 'Al-Franjieh', 'Al-Gemayel',
    'Al-Murr', 'Al-Jumblatt', 'Al-Assaad', 'Al-Khalil', 'Al-Zein', 'Al-Asmar',
    'Al-Hajj', 'Al-Masri', 'Al-Khoury', 'Al-Najjar', 'Al-Sabbagh', 'Al-Haddad',
    'Al-Khoury', 'Al-Murr', 'Al-Jumblatt', 'Al-Assaad', 'Al-Khalil', 'Al-Zein'
  ],
  streets: [
    'شارع الحمرا', 'شارع الروشة', 'شارع المنصور', 'شارع الأشرفية', 'شارع زقاق البلاط',
    'شارع مار مخايل', 'شارع الجميزة', 'شارع ميناء الحصن', 'شارع فردان',
    'شارع بدارو', 'شارع سان نيكولا', 'شارع كليمنصو', 'شارع رستم', 'شارع عبد العزيز'
  ],
  cities: [
    'بيروت', 'طرابلس', 'صيدا', 'صور', 'جبيل', 'زحلة', 'بعلبك',
    'النبطية', 'جونية', 'عاليه', 'بكفيا', 'برمانا', 'بترون', 'بشري',
    'جزين', 'مرجعيون', 'حاصبيا', 'راشيا', 'الشوف', 'كسروان'
  ],
  states: [
    'بيروت', 'جبل لبنان', 'الشمال', 'الجنوب', 'البقاع', 'النبطية', 'عكار', 'بعلبك الهرمل'
  ],
  zipCodePattern: '#### ####',
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
    const floor = Random.int(1, 20);
    return `شارع ${street}, مبنى ${buildingNumber}, طابق ${floor}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    const code = String(Random.int(1000, 9999));
    return code.substring(0, 4) + ' ' + String(Random.int(1000, 9999)).substring(0, 4);
  },

  phoneFormats: [
    '+961 ## ### ###',
    '+961 3 ### ###',
    '+961 70 ### ###',
    '+961 71 ### ###',
    '+961 76 ### ###',
    '+961 78 ### ###',
    '+961 79 ### ###',
    '+961 1 ### ###',
    '+961 4 ### ###',
    '+961 5 ### ###',
    '+962 6 ### ###',
    '0## ### ###',
    '01 ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'terra.net.lb', 'cyberia.net.lb', 'sodetel.net.lb'
  ],

  companyNames: [
    'بنك لبنان والمهجر', 'بنك عودة', 'بنك بيبلوس', 'بنك بلوم',
    'بنك ميد', 'بنك ستاندرد تشارترد', 'توتال لبنان', 'شركة طيران الشرق الأوسط',
    'تاتش', 'ألفا', 'ليبان سيل', 'إم تي إن تاتش'
  ],

  industries: [
    'التكنولوجيا', 'المالية', 'الرعاية الصحية', 'التعليم', 'التجزئة',
    'التصنيع', 'الإعلام', 'الاتصالات', 'الطاقة', 'النقل',
    'العقارات', 'الاستشارات', 'الضيافة', 'السيارات', 'الطيران',
    'السياحة', 'البناء', 'المجوهرات'
  ],

  catchPhrases: [
    'الابتكار للمستقبل', 'نجاحكم هو عملنا', 'نبني المستقبل معاً',
    'الجودة والثقة', 'التميز والالتزام', 'حلول مستدامة',
    'نخلق القيمة', 'شريككم الموثوق', 'نفخر بلبنان'
  ]
};
