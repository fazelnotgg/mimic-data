import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const he_IL: LocaleDefinition = {
  firstNamesMale: [
    'David', 'Moshe', 'Yosef', 'Daniel', 'Uri', 'Avi', 'Amit', 'Or', 'Yonatan', 'Eitan',
    'Noam', 'Itai', 'Rotem', 'Lior', 'Omri', 'Alon', 'Yuval', 'Gal', 'Idan', 'Nir',
    'Ariel', 'Ben', 'Shai', 'Yair', 'Tom', 'Adam', 'Tomer', 'Dor', 'Oren', 'Elad',
    'Chen', 'Ran', 'Roi', 'Omer'
  ],
  firstNamesFemale: [
    'Sarah', 'Miriam', 'Rachel', 'Tamar', 'Noa', 'Shira', 'Maya', 'Yael', 'Hila',
    'Dana', 'Tal', 'Lihi', 'Noga', 'Adi', 'Roni', 'Noy', 'Shani', 'Mia', 'Ella',
    'Yarden', 'Lian', 'Agam', 'Rotem', 'Lior', 'Amit', 'Carmel', 'Talia', 'Neta',
    'Efrat', 'Gal', 'Inbar', 'Avigail', 'Chen'
  ],
  lastNames: [
    'Cohen', 'Levy', 'Mizrahi', 'Peretz', 'Biton', 'Dahan', 'Avraham', 'Friedman',
    'Azoulay', 'Yosef', 'Katz', 'Kaplan', 'Ben David', 'Ben Ami', 'Malka', 'Shapiro',
    'Amar', 'Ohana', 'Elkayam', 'Golan', 'Goldberg', 'Stein', 'Schwartz', 'Levi',
    'Ben Haim', 'Abuksis', 'Israeli', 'Sharon', 'Barak', 'Shalom', 'Weiss', 'Klein'
  ],
  streets: [
    'Dizengoff Street', 'Rothschild Boulevard', 'Ben Yehuda Street', 'Allenby Street',
    'King George Street', 'Jaffa Road', 'HaYarkon Street', 'Sderot Ben Gurion',
    'Herzl Street', 'Weizmann Street', 'Basel Street', 'Nordau Boulevard', 'Ibn Gvirol Street',
    'Rabin Square', 'Carmel Market', 'Neve Tzedek', 'Florentin', 'Sarona'
  ],
  cities: [
    'Jerusalem', 'Tel Aviv', 'Haifa', 'Rishon LeZion', 'Petah Tikva', 'Ashdod', 'Netanya',
    'Beer Sheva', 'Holon', 'Bnei Brak', 'Ramat Gan', 'Rehovot', 'Bat Yam', 'Ashkelon',
    'Herzliya', 'Kfar Saba', 'Hadera', 'Modi\'in', 'Nazareth', 'Lod', 'Ramla', 'Nahariya',
    'Rosh HaAyin', 'Givatayim', 'Kiryat Ata', 'Raanana', 'Acre', 'Eilat'
  ],
  states: [
    'Jerusalem', 'Tel Aviv', 'Haifa', 'Central', 'Southern', 'Northern', 'Judea and Samaria'
  ],
  zipCodePattern: '#######',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'IT', 'Research and Development', 'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const building = Random.int(1, 200);
    const apartment = Random.int(1, 50);
    return `${street} ${building}, Apt ${apartment}, ${city} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000000, 9999999));
  },

  phoneFormats: [
    '+972 ## ### ####',
    '0## ### ####',
    '+972 (0)## ### ####',
    '05# ### ####',
    '050 ### ####',
    '051 ### ####',
    '052 ### ####',
    '053 ### ####',
    '054 ### ####',
    '055 ### ####',
    '056 ### ####',
    '057 ### ####',
    '058 ### ####',
    '059 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.co.il', 'outlook.co.il', 'hotmail.co.il', 'live.co.il',
    'walla.co.il', 'nana.co.il', '012.net.il', 'bezeqint.net', 'zahav.net.il'
  ],

  companyNames: [
    'Elbit Systems', 'Israel Aerospace Industries', 'Rafael Advanced Defense Systems',
    'Teva Pharmaceutical Industries', 'Check Point Software Technologies',
    'Nice Systems', 'Amdocs Limited', 'Verint Systems', 'NICE Ltd',
    'Bank Hapoalim', 'Bank Leumi', 'Israel Discount Bank', 'Bank Mizrahi-Tefahot',
    'Cellcom Israel', 'Partner Communications', 'Pelephone Communications',
    'Bezeq The Israeli Telecommunication', 'Hot Telecommunication Systems'
  ],

  industries: [
    'טכנולוגיה', 'פיננסים', 'בריאות', 'חינוך', 'קמעונאות',
    'ייצור', 'מדיה', 'תקשורת', 'אנרגיה', 'תחבורה',
    'נדל"ן', 'ייעוץ', 'מלונאות', 'רכב', 'תעופה'
  ],

  catchPhrases: [
    'חדשנות לעתיד', 'ההצלחה שלך היא העסק שלנו', 'בונים את העתיד יחד',
    'איכות ואמון', 'מצוינות ומחויבות', 'פתרונות בני קיימא',
    'יוצרים ערך', 'השותף האמין שלך', 'מובילים את השינוי'
  ]
};