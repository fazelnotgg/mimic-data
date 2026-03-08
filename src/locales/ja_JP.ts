import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ja_JP: LocaleDefinition = {
  // Nama keluarga Jepang (姓)
  lastNames: [
    'Satou', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Itou', 'Yamamoto',
    'Nakamura', 'Kobayashi', 'Katou', 'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi',
    'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu', 'Yamazaki', 'Mori',
    'Abe', 'Ikeda', 'Hashimoto', 'Yamashita', 'Ishikawa', 'Nakajima', 'Maeda',
    'Fujita', 'Ogawa', 'Gotou', 'Okada', 'Hasegawa', 'Murakami', 'Kondou',
    'Ishii', 'Saitou', 'Sakamoto', 'Endou', 'Fujii', 'Nishimura', 'Fukuda',
    'Ootani', 'Miura', 'Okamoto', 'Matsuda', 'Nakano', 'Harada'
  ],
  // Nama depan pria (男性名)
  firstNamesMale: [
    'Hiroshi', 'Takeshi', 'Kenji', 'Kazuo', 'Masao', 'Toshio', 'Minoru',
    'Makoto', 'Satoshi', 'Yuji', 'Koji', 'Takashi', 'Shinji', 'Hideki',
    'Masashi', 'Kenichi', 'Yuki', 'Haruki', 'Daiki', 'Ryouta', 'Shou',
    'Kaito', 'Hayato', 'Souta', 'Yuuto', 'Kouki', 'Ren', 'Haruto',
    'Akira', 'Ryuu', 'Tatsuya', 'Daisuke', 'Naoki', 'Tomoya', 'Shun',
    'Ryousuke', 'Kenta', 'Yousuke', 'Taichi', 'Yuuma', 'Shouta', 'Riku'
  ],
  // Nama depan wanita (女性名)
  firstNamesFemale: [
    'Yuko', 'Keiko', 'Kumiko', 'Sachiko', 'Yoshiko', 'Kazuko', 'Michiko',
    'Akiko', 'Noriko', 'Yuki', 'Emi', 'Aiko', 'Mayumi', 'Naoko', 'Tomoko',
    'Yuka', 'Ayumi', 'Haruka', 'Miho', 'Maki', 'Sakura', 'Hana', 'Yui',
    'Rina', 'Nana', 'Ami', 'Mei', 'Momoka', 'Hina', 'Aoi', 'Mio',
    'Nanami', 'Riko', 'Kana', 'Ayaka', 'Akari', 'Yuna', 'Sara', 'Miyu',
    'Honoka', 'Koharu', 'Himari', 'Miku', 'Rin', 'Saki', 'Hinata'
  ],
  streets: [
    'Chuo-dori', 'Sakura-dori', 'Midori-cho', 'Higashi-cho', 'Nishi-cho',
    'Minami-cho', 'Kita-cho', 'Honcho', 'Miyuki-dori', 'Ekimae-dori',
    'Showa-dori', 'Taisho-dori', 'Heisei-dori', 'Reiwa-dori', 'Yanagi-cho',
    'Matsu-cho', 'Take-cho', 'Ume-cho', 'Momo-cho', 'Kiku-cho', 'Tsubaki-cho',
    'Fuji-cho', 'Asahi-cho', 'Hoshi-cho', 'Tsuki-cho', 'Sora-cho', 'Umi-cho'
  ],
  cities: [
    'Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe',
    'Kyoto', 'Kawasaki', 'Saitama', 'Hiroshima', 'Sendai', 'Chiba', 'Kitakyushu',
    'Sakai', 'Niigata', 'Hamamatsu', 'Kumamoto', 'Sagamihara', 'Shizuoka',
    'Okayama', 'Kagoshima', 'Hachioji', 'Matsuyama', 'Utsunomiya', 'Matsudo'
  ],
  // Prefektur Jepang (都道府県)
  states: [
    'Tokyo', 'Osaka', 'Kyoto', 'Hokkaido', 'Aichi', 'Fukuoka', 'Kanagawa',
    'Saitama', 'Chiba', 'Hyogo', 'Hiroshima', 'Miyagi', 'Niigata', 'Shizuoka',
    'Okayama', 'Kumamoto', 'Kagoshima', 'Nagano', 'Gifu', 'Fukushima', 'Gunma',
    'Ibaraki', 'Tochigi', 'Mie', 'Nara', 'Wakayama', 'Shiga', 'Yamanashi',
    'Ishikawa', 'Toyama', 'Fukui', 'Yamaguchi', 'Ehime', 'Kagawa', 'Tokushima',
    'Kochi', 'Saga', 'Nagasaki', 'Oita', 'Miyazaki', 'Okinawa', 'Aomori',
    'Iwate', 'Akita', 'Yamagata', 'Tottori', 'Shimane'
  ],
  zipCodePattern: '###-####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Sales Manager', 'Accountant',
    'HR Manager', 'Marketing Specialist', 'Data Analyst', 'Designer',
    'Operations Manager', 'Business Analyst', 'System Administrator',
    'Product Manager', 'Customer Support', 'Quality Assurance Engineer',
    'Technical Writer', 'Database Administrator', 'Network Engineer'
  ],
  departments: [
    'Engineering', 'Sales', 'Marketing', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Administration', 'Quality Assurance'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    // Format Jepang: Nama Keluarga + Nama Depan
    return `${lastName} ${firstName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    // Format alamat Jepang: 〒Kode Pos, Prefektur, Kota, Jalan, Nomor
    const choume = Random.int(1, 5);
    const banchi = Random.int(1, 20);
    const gou = Random.int(1, 30);
    return `〒${zipCode} ${state}, ${city}, ${street} ${choume}-${banchi}-${gou}`;
  },

  generateZipCode(): string {
    const part1 = String(Random.int(100, 999));
    const part2 = String(Random.int(1000, 9999));
    return `${part1}-${part2}`;
  },

  phoneFormats: [
    '+81-##-####-####',
    '0#-####-####',
    '0##-###-####',
    '0###-##-####',
    '090-####-####',
    '080-####-####',
    '070-####-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.co.jp', 'outlook.com', 'hotmail.co.jp',
    'docomo.ne.jp', 'au.com', 'softbank.ne.jp', 'ezweb.ne.jp',
    'excite.co.jp', 'livedoor.com', 'goo.ne.jp', 'nifty.com'
  ],

  companyNames: [
    'トヨタ自動車', 'ソニーグループ', 'キーエンス', 'ファーストリテイリング',
    '日本電信電話', '三菱商事', '三井物産', '伊藤忠商事', '住友商事',
    '丸紅', '双日', '豊田通商', '本田技研工業', '日産自動車', 'マツダ',
    'パナソニック', '東芝', '日立製作所', '富士通', 'NEC', 'シャープ'
  ],

  industries: [
    '技術', '金融', '医療', '教育', '小売',
    '製造', 'メディア', '通信', 'エネルギー', '運輸',
    '不動産', 'コンサルティング', 'ホテル', '自動車', '航空宇宙'
  ],

  catchPhrases: [
    '未来を創造する', 'お客様の成功が私たちの使命', '共に未来を築く',
    '品質と信頼', '革新と伝統', '最高のサービスをお届け',
    '持続可能な成長', '価値を創出する', 'あなたのパートナー'
  ]
};