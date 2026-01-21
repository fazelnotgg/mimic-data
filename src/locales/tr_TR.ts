import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const tr_TR: LocaleDefinition = {
  firstNamesMale: [
    'Mehmet', 'Mustafa', 'Ahmet', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'İsmail',
    'Yusuf', 'Murat', 'Süleyman', 'Ömer', 'Emre', 'Can', 'Burak', 'Kemal', 'Onur',
    'Serkan', 'Fatih', 'Oğuz', 'Eren', 'Cem', 'Deniz', 'Barış', 'Kaan', 'Arda',
    'Emir', 'Efe', 'Okan', 'Furkan', 'Yasin', 'Berkay', 'Umut', 'Volkan'
  ],
  firstNamesFemale: [
    'Ayşe', 'Fatma', 'Emine', 'Hatice', 'Zeynep', 'Elif', 'Merve', 'Büşra', 'Esra',
    'Sultan', 'Hanife', 'Meryem', 'Şeyma', 'Fadime', 'Cemre', 'Selin', 'Yasemin',
    'Özlem', 'Gül', 'Aylin', 'Deniz', 'Ceren', 'Ece', 'Beyza', 'Tuğba', 'Burcu',
    'Ebru', 'Nur', 'Buse', 'Defne', 'Ada', 'Aslı', 'Seda', 'Meltem'
  ],
  lastNames: [
    'Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Çelik', 'Yıldız', 'Yıldırım', 'Öztürk',
    'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Kara',
    'Koç', 'Kurt', 'Özkan', 'Şimşek', 'Erdoğan', 'Aksoy', 'Güneş', 'Çakır',
    'Özgür', 'Korkmaz', 'Acar', 'Polat', 'Aktaş', 'Özer', 'Demirci', 'Yavuz'
  ],
  streets: [
    'Atatürk Caddesi', 'İstiklal Caddesi', 'Cumhuriyet Caddesi', 'Barbaros Bulvarı',
    'Bağdat Caddesi', 'Gazi Mustafa Kemal Bulvarı', 'Ankara Caddesi', 'İnönü Caddesi',
    'Fevzi Çakmak Caddesi', 'Mithatpaşa Caddesi', 'Kızılay Meydanı', 'Fatih Caddesi',
    'Yeşilırmak Sokak', 'Mehmet Akif Caddesi', 'Hürriyet Bulvarı', 'Mimar Sinan Caddesi'
  ],
  cities: [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep',
    'Şanlıurfa', 'Kocaeli', 'Mersin', 'Diyarbakır', 'Hatay', 'Manisa', 'Kayseri',
    'Samsun', 'Balıkesir', 'Kahramanmaraş', 'Van', 'Aydın', 'Denizli', 'Sakarya',
    'Tekirdağ', 'Muğla', 'Eskişehir', 'Mardin', 'Malatya', 'Erzurum', 'Trabzon'
  ],
  states: [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep',
    'Mersin', 'Kocaeli', 'Diyarbakır', 'Hatay', 'Manisa', 'Kayseri', 'Samsun',
    'Balıkesir', 'Tekirdağ', 'Trabzon', 'Erzurum', 'Malatya', 'Van', 'Şanlıurfa'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Yazılım Mühendisi', 'Proje Yöneticisi', 'Veri Analisti', 'Pazarlama Müdürü',
    'Satış Temsilcisi', 'Muhasebeci', 'İnsan Kaynakları Müdürü', 'Tasarımcı',
    'Operasyon Müdürü', 'İş Analisti', 'Ürün Müdürü', 'Sistem Yöneticisi', 'Kalite Mühendisi'
  ],
  departments: [
    'Mühendislik', 'Pazarlama', 'Satış', 'İnsan Kaynakları', 'Finans', 'Operasyon',
    'Müşteri Hizmetleri', 'BT', 'Araştırma ve Geliştirme', 'Hukuk', 'İdari İşler'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const mahalle = Random.pick(['Merkez', 'Yeni', 'Çarşı', 'Kale', 'Bahçelievler']);
    const no = Random.int(1, 200);
    const daire = Random.int(1, 50);
    return `${mahalle} Mah., ${street} No:${no} D:${daire}, ${zipCode} ${city}/${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};