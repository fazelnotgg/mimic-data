import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const zh_CN: LocaleDefinition = {
  lastNames: [
    'Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou',
    'Xu', 'Sun', 'Ma', 'Zhu', 'Hu', 'Guo', 'He', 'Gao', 'Lin', 'Luo',
    'Zheng', 'Liang', 'Xie', 'Song', 'Tang', 'Xu', 'Deng', 'Han', 'Feng', 'Cao',
    'Peng', 'Zeng', 'Xiao', 'Tian', 'Dong', 'Pan', 'Yuan', 'Cai', 'Jiang', 'Yu'
  ],
  firstNamesMale: [
    'Wei', 'Jun', 'Ming', 'Tao', 'Jie', 'Qiang', 'Lei', 'Yong', 'Jian', 'Ping',
    'Bin', 'Feng', 'Long', 'Chao', 'Yang', 'Lin', 'Hao', 'Gang', 'Kai', 'Peng',
    'Zhi', 'Yun', 'Bo', 'Hua', 'Xin', 'Liang', 'Chen', 'Dong', 'Fei', 'Xiong',
    'Huan', 'Yu', 'Rui', 'Jing', 'Song', 'Zhen', 'Kun', 'Han', 'Xi', 'Cheng'
  ],
  firstNamesFemale: [
    'Li', 'Fang', 'Xiu', 'Ying', 'Min', 'Jing', 'Juan', 'Yan', 'Hong', 'Mei',
    'Xia', 'Qing', 'Lan', 'Yue', 'Xin', 'Ling', 'Na', 'Hui', 'Rong', 'Dan',
    'Shan', 'Yun', 'Ping', 'Jie', 'Xue', 'Fen', 'Yu', 'Qian', 'Shu', 'Wen',
    'Zhen', 'Xiang', 'Cui', 'Lin', 'Ran', 'Meng', 'Rou', 'Yi', 'Ning', 'Qin'
  ],
  streets: [
    'Zhongshan Road', 'Renmin Road', 'Jiefang Road', 'Changjiang Road', 'Huanghe Road',
    'Beijing Road', 'Shanghai Road', 'Guangzhou Road', 'Nanjing Road', 'Chengdu Road',
    'Dongfeng Road', 'Xin Avenue', 'Heping Road', 'Wenhua Road', 'Jianshe Road',
    'Minzhu Road', 'Gongyuan Road', 'Xueyuan Road', 'Keji Road', 'Binhe Road'
  ],
  cities: [
    'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Chongqing', 'Tianjin',
    'Wuhan', 'Hangzhou', 'Nanjing', 'Xi\'an', 'Shenyang', 'Harbin', 'Changchun',
    'Dalian', 'Qingdao', 'Jinan', 'Zhengzhou', 'Shijiazhuang', 'Taiyuan', 'Hefei',
    'Changsha', 'Nanchang', 'Fuzhou', 'Kunming', 'Guiyang', 'Nanning', 'Lanzhou'
  ],
  states: [
    'Beijing', 'Shanghai', 'Tianjin', 'Chongqing', 'Hebei', 'Shanxi', 'Liaoning',
    'Jilin', 'Heilongjiang', 'Jiangsu', 'Zhejiang', 'Anhui', 'Fujian', 'Jiangxi',
    'Shandong', 'Henan', 'Hubei', 'Hunan', 'Guangdong', 'Hainan', 'Sichuan',
    'Guizhou', 'Yunnan', 'Shaanxi', 'Gansu', 'Qinghai', 'Xinjiang', 'Guangxi'
  ],
  zipCodePattern: '######',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'IT', 'R&D', 'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${lastName} ${firstName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const building = Random.int(1, 999);
    const unit = Random.int(1, 50);
    return `${state} Province, ${city}, ${street} No.${building}, Unit ${unit}, ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  }
};