import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ko_KR: LocaleDefinition = {
  // Nama keluarga Korea (성)
  lastNames: [
    'Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Cho', 'Yoon', 'Jang',
    'Lim', 'Han', 'Oh', 'Seo', 'Shin', 'Kwon', 'Hwang', 'Ahn', 'Song',
    'Hong', 'Jeon', 'Ko', 'Moon', 'Son', 'Yang', 'Baek', 'Heo', 'Nam',
    'Shim', 'Roh', 'Ha', 'Joo', 'Koo', 'Chung', 'Min', 'Yoo', 'Sung',
    'Ji', 'Woo', 'Chae', 'Yeo', 'Do', 'Bae', 'Noh', 'Pyo', 'Tae'
  ],
  // Nama depan pria Korea (이름 - 남성)
  firstNamesMale: [
    'Minho', 'Joon', 'Hyun', 'Seung', 'Woong', 'Jin', 'Sung', 'Tae',
    'Young', 'Dong', 'Soo', 'Jun', 'Woo', 'Hoon', 'Jae', 'Kyung',
    'Ho', 'Chan', 'Hyuk', 'Min', 'Joon-Ho', 'Ji-Hoon', 'Seo-Jun', 'Do-Yun',
    'Si-Woo', 'Ye-Jun', 'Min-Jun', 'Joo-Won', 'Ha-Jun', 'Woo-Jin',
    'Yu-Jun', 'Hyun-Woo', 'Jun-Seo', 'Geon-Woo', 'Ji-Hu', 'Yoon-Seo'
  ],
  // Nama depan wanita Korea (이름 - 여성)
  firstNamesFemale: [
    'Hye', 'Min', 'Ji', 'Soo', 'Young', 'Eun', 'Mi', 'Sun', 'Kyung',
    'Jung', 'Hee', 'Jin', 'Yeon', 'Seo', 'Ha', 'Yoo', 'Ah', 'Na',
    'Seo-Yun', 'Ji-Woo', 'Ha-Eun', 'Min-Seo', 'Seo-Hyun', 'Ji-Ah', 'Yoo-Na',
    'Soo-Ah', 'Chae-Won', 'Eun-Seo', 'Ha-Yoon', 'Ji-Yoo', 'Ah-Rin',
    'Ye-Eun', 'Ga-Eun', 'Yu-Ri', 'Hye-Won', 'So-Yeon', 'Da-Eun', 'Bo-Ra'
  ],
  streets: [
    'Gangnam-daero', 'Teheran-ro', 'Seocho-daero', 'Yeongdong-daero',
    'Sejong-daero', 'Jongno', 'Euljiro', 'Myeongdong-gil', 'Insadong-gil',
    'Dongdaemun-ro', 'Sinchon-ro', 'Hongik-ro', 'Itaewon-ro', 'Apgujeong-ro',
    'Garosu-gil', 'Cheonggyecheon-ro', 'Hangang-daero', 'Olympic-ro',
    'Dongho-ro', 'Seongbuk-ro', 'Bukchon-ro', 'Samcheong-ro', 'Sajik-ro'
  ],
  cities: [
    'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon',
    'Ulsan', 'Changwon', 'Goyang', 'Yongin', 'Seongnam', 'Bucheon', 'Ansan',
    'Cheongju', 'Jeonju', 'Anyang', 'Cheonan', 'Pohang', 'Gimhae', 'Pyeongtaek',
    'Uijeongbu', 'Siheung', 'Paju', 'Jinju', 'Gimpo', 'Iksan', 'Wonju'
  ],
  // Provinsi Korea (도/광역시)
  states: [
    'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Ulsan',
    'Sejong', 'Gyeonggi-do', 'Gangwon-do', 'North Chungcheong', 'South Chungcheong',
    'North Jeolla', 'South Jeolla', 'North Gyeongsang', 'South Gyeongsang', 'Jeju'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer',
    'Operations Manager', 'Business Analyst', 'Financial Analyst', 'Product Manager',
    'System Administrator', 'Customer Service Representative', 'QA Engineer',
    'Technical Writer', 'Database Administrator', 'Network Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Product Management', 'Design', 'Quality Assurance', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    // Format Korea: Nama Keluarga + Nama Depan
    return `${lastName} ${firstName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    // Format alamat Korea: Provinsi, Kota, Jalan, Nomor bangunan, Kode Pos
    const buildingNumber = Random.int(1, 500);
    const dong = Random.pick(['Gangnam-gu', 'Seocho-gu', 'Songpa-gu', 'Jongno-gu', 'Jung-gu', 'Yongsan-gu']);
    return `${state}, ${city}, ${dong}, ${street} ${buildingNumber}, ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+82-##-####-####',
    '0##-###-####',
    '010-####-####',
    '011-###-####',
    '016-###-####',
    '019-###-####',
    '02-###-####',
    '031-###-####',
    '032-###-####',
    '051-###-####'
  ],

  emailDomains: [
    'gmail.com', 'naver.com', 'daum.net', 'nate.com', 'yahoo.co.kr',
    'hotmail.com', 'outlook.com', 'hanmail.net', 'paran.com', 'empas.com'
  ],

  companyNames: [
    '삼성전자', '현대자동차', 'SK 하이닉스', 'LG 전자', 'POSCO',
    'KB 국민은행', '삼성생명', '현대모비스', '기아', 'LG 화학',
    'SK 텔레콤', 'KT', 'LG 유플러스', 'NAVER', '카카오',
    '셀트리온', '삼성바이오로직스', '현대중공업', '두산', '롯데그룹'
  ],

  industries: [
    '기술', '금융', '의료', '교육', '유통',
    '제조', '미디어', '통신', '에너지', '운송',
    '부동산', '컨설팅', '호텔', '자동차', '항공우주'
  ],

  catchPhrases: [
    '미래를 창조합니다', '고객의 성공이 우리의 사명', '함께 미래를築습니다',
    '품질과 신뢰', '혁신과 전통', '최고의 서비스를 제공합니다',
    '지속 가능한 성장', '가치를 창출합니다', '당신의 파트너'
  ]
};