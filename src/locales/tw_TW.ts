import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const tw_TW: LocaleDefinition = {
  lastNames: [
    'Chen', 'Lin', 'Huang', 'Zhang', 'Li', 'Wang', 'Wu', 'Liu', 'Tsai', 'Yang',
    'Chen', 'Lin', 'Huang', 'Zhang', 'Li', 'Wang', 'Wu', 'Liu', 'Tsai', 'Yang',
    'Chou', 'Hsu', 'Sun', 'Hu', 'Chuang', 'Kuo', 'Kao', 'Liao', 'Lai', 'Chien'
  ],
  firstNamesMale: [
    'Wei', 'Jun', 'Ming', 'Tao', 'Jie', 'Qiang', 'Lei', 'Yong', 'Jian', 'Ping',
    'Bin', 'Feng', 'Long', 'Chao', 'Yang', 'Lin', 'Hao', 'Gang', 'Kai', 'Peng',
    'Zhi', 'Yun', 'Bo', 'Hua', 'Xin', 'Liang', 'Chen', 'Dong', 'Fei', 'Xiong'
  ],
  firstNamesFemale: [
    'Li', 'Fang', 'Xiu', 'Ying', 'Min', 'Jing', 'Juan', 'Yan', 'Hong', 'Mei',
    'Xia', 'Qing', 'Lan', 'Yue', 'Xin', 'Ling', 'Na', 'Hui', 'Rong', 'Dan',
    'Shan', 'Yun', 'Ping', 'Jie', 'Xue', 'Fen', 'Yu', 'Qian', 'Shu', 'Wen'
  ],
  streets: [
    'Zhongshan Road', 'Zhongxiao Road', 'Renai Road', 'Minsheng Road',
    'Minquan Road', 'Heping Road', 'Jianguo Road', 'Guangfu Road',
    'Fuxing Road', 'Jianguo South Road', 'Xinyi Road', 'Songren Road',
    'Nanjing East Road', 'Beijing East Road', 'Shanghai Street', 'Guangzhou Street'
  ],
  cities: [
    'Taipei', 'New Taipei', 'Taoyuan', 'Taichung', 'Tainan', 'Kaohsiung',
    'Hsinchu', 'Keelung', 'Chiayi', 'Changhua', 'Hualien', 'Pingtung',
    'Yilan', 'Taitung', 'Penghu', 'Kinmen', 'Matsu', 'Nantou', 'Miaoli', 'Yunlin'
  ],
  states: [
    'Taipei', 'New Taipei', 'Taoyuan', 'Taichung', 'Tainan', 'Kaohsiung',
    'Hsinchu', 'Keelung', 'Chiayi', 'Changhua', 'Hualien', 'Pingtung',
    'Yilan', 'Taitung', 'Penghu', 'Kinmen', 'Lienchiang', 'Nantou', 'Miaoli', 'Yunlin'
  ],
  zipCodePattern: '###',
  jobTitles: [
    '軟體工程師', '專案經理', '數據分析師', '行銷經理',
    '業務代表', '會計師', '人資經理', '設計師',
    '營運經理', '業務分析師', '產品經理', '系統管理員',
    '品質保證工程師', '技術作家', '資料庫管理員',
    '網路工程師', 'DevOps 工程師', 'UX 設計師', '內容管理師'
  ],
  departments: [
    '工程部', '行銷部', '業務部', '人力資源部', '財務部',
    '營運部', '客服部', '資訊部', '研發部',
    '法務部', '產品管理部', '設計部', '品質保證部', '行政部'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${lastName} ${firstName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const section = Random.int(1, 5);
    const number = Random.int(1, 500);
    const floor = Random.int(1, 20);
    return `${zipCode} ${state} ${city} ${street} ${section}段${number}號${floor}樓`;
  },

  generateZipCode(): string {
    return String(Random.int(100, 999));
  },

  phoneFormats: [
    '(02) ####-####',
    '(03) ###-###',
    '(04) ###-###',
    '(07) ###-###',
    '09##-###-###',
    '+886-9##-###-###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com.tw', 'hotmail.com', 'outlook.com',
    'pchome.com.tw', 'hinet.net', 'seed.net.tw', 'msn.com'
  ],

  companyNames: [
    '台積電', '鴻海精密工業', '華碩', '宏碁', '聯發科',
    '台灣中油', '中華電信', '國泰金控', '富邦金控', '玉山銀行',
    '長榮海運', '陽明海運', '統一企業', '康師傅控股', '旺旺集團'
  ],

  industries: [
    '科技業', '金融業', '製造業', '服務業', '零售業',
    '醫療業', '教育業', '電信業', '運輸業', '建築業'
  ],

  catchPhrases: [
    '創新領先，追求卓越', '誠信經營，客戶至上', '品質第一，服務滿意',
    '科技以人为本', '創造價值，共享未來', '專業創新，永續經營'
  ]
};
