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
  }
};