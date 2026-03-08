import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const is_IS: LocaleDefinition = {
  firstNamesMale: [
    'Jón', 'Sigurður', 'Guðmundur', 'Björn', 'Kristján', 'Magnús', 'Einar', 'Pétur',
    'Ari', 'Gunnar', 'Ragnar', 'Stefán', 'Tómas', 'Ólafur', 'Eggert', 'Hannes',
    'Hilmar', 'Indriði', 'Karl', 'Leifur', 'Páll', 'Sveinn', 'Valdimar', 'Árni',
    'Benedikt', 'Daníel', 'Emil', 'Felix', 'Gabriel', 'Hugo', 'Isak', 'Jonas'
  ],
  firstNamesFemale: [
    'Guðrún', 'Anna', 'Kristín', 'Margrét', 'Sigríður', 'Ingibjörg', 'Helga', 'Sigrún',
    'Björk', 'Ásta', 'Hrefna', 'Katrín', 'Lilja', 'María', 'Ragnheiður', 'Sólveig',
    'Unnur', 'Valgerður', 'Þórdís', 'Þuríður', 'Agnes', 'Dagný', 'Elín', 'Friðrikka',
    'Guðbjörg', 'Hallgerður', 'Iris', 'Jóhanna', 'Kolbrún', ' Laufey', 'Nanna', 'Oddný'
  ],
  lastNames: [
    'Jónsson', 'Sigurðsson', 'Guðmundsson', 'Björnsson', 'Kristjánsson', 'Magnússon',
    'Einarsson', 'Pétursson', 'Arason', 'Gunnarsson', 'Ragnarsson', 'Stefánsson',
    'Tómasson', 'Ólafsson', 'Eggertsson', 'Hannesson', 'Hilmarsson', 'Indriðason',
    'Karlsson', 'Leifsson', 'Pálsson', 'Sveinsson', 'Valdimarsson', 'Árnason',
    'Benediktsson', 'Daníelsson', 'Emilsson', 'Felixsson', 'Gabrielsson', 'Húgósson'
  ],
  streets: [
    'Laugavegur', 'Skólavörðustígur', 'Bankastræti', 'Austurstræti', 'Hafnarstræti',
    'Borgartún', 'Skaftahlíð', 'Háaleitisbraut', 'Bústaðavegur', 'Suðurlandsbraut',
    'Kringlan', 'Tryggvagata', 'Geirsgata', 'Hverfisgata', 'Bergstaðastræti',
    'Frakkastígur', 'Hverfisgata', 'Kalkofnsvegur', 'Rauðarárstígur', 'Vesturgata'
  ],
  cities: [
    'Reykjavík', 'Kópavogur', 'Hafnarfjörður', 'Akureyri', 'Reykjanesbær', 'Garðabær',
    'Mosfellsbær', 'Árborg', 'Akranes', 'Fjarðabyggð', 'Ísafjarðarbær', 'Vestmannaeyjar',
    'Grindavík', 'Selfoss', 'Seltjarnarnes', 'Húsavík', 'Egilsstaðir', 'Borgarnes',
    'Keflavík', 'Njarðvík', 'Sauðárkrókur', 'Dalvík', 'Ólafsvík', 'Stykkishólmur'
  ],
  states: [
    'Höfuðborgarsvæðið', 'Suðurnes', 'Vesturland', 'Vestfirðir', 'Norðurland Vestra',
    'Norðurland Eystra', 'Austurland', 'Suðurland'
  ],
  zipCodePattern: '###',
  jobTitles: [
    'Hugbúnaðarverkfræðingur', 'Verkefnastjóri', 'Gagnagreinandi', 'Markaðsstjóri',
    'Sölufulltrúi', 'Bókari', 'Mannauðsstjóri', 'Hönnuður', 'Reksturstjóri',
    'Viðskiptagreinandi', 'Vörustjóri', 'Kerfisstjóri', 'Gæðaverkfræðingur',
    'Tækniritstjóri', 'Gagnagrunnsstjóri', 'Netverkfræðingur', 'DevOps verkfræðingur'
  ],
  departments: [
    'Verkfræði', 'Markaður', 'Sala', 'Mannauður', 'Fjármál', 'Rekstur',
    'Þjónusta', 'Upplýsingatækni', 'Rannsóknir og þróun', 'Lögfræði',
    'Vörustjórnun', 'Hönnun', 'Gæðastjórnun', 'Stjórnun'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 100);
    const apartment = Random.int(1, 50);
    return `${street} ${number}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(101, 999));
  }
};
