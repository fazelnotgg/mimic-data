import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ro_RO: LocaleDefinition = {
  firstNamesMale: [
    'Ion', 'Gheorghe', 'Nicolae', 'Vasile', 'Constantin', 'Andrei', 'Mihai', 'Alexandru',
    'Adrian', 'Cristian', 'Florin', 'Marian', 'Daniel', 'Ionuț', 'Gabriel', 'Bogdan',
    'Ștefan', 'Vlad', 'Radu', 'George', 'David', 'Cosmin', 'Dragoș', 'Ciprian',
    'Sorin', 'Dan', 'Viorel', 'Petru', 'Dumitru', 'Emil', 'Liviu', 'Ovidiu'
  ],
  firstNamesFemale: [
    'Maria', 'Elena', 'Ana', 'Ioana', 'Andreea', 'Alexandra', 'Mihaela', 'Cristina',
    'Gabriela', 'Alina', 'Daniela', 'Monica', 'Simona', 'Diana', 'Raluca', 'Adriana',
    'Laura', 'Nicoleta', 'Corina', 'Carmen', 'Oana', 'Roxana', 'Valentina', 'Camelia',
    'Florentina', 'Georgeta', 'Mariana', 'Luminița', 'Silvia', 'Anca', 'Magdalena', 'Irina'
  ],
  lastNames: [
    'Popescu', 'Ionescu', 'Popa', 'Radu', 'Dumitrescu', 'Georgescu', 'Stan', 'Stoica',
    'Constantin', 'Munteanu', 'Dima', 'Vasile', 'Barbu', 'Preda', 'Mocanu', 'Ilie',
    'Mihai', 'Dobre', 'Andrei', 'Stanciu', 'Tudor', 'Enache', 'Ștefan', 'Marin',
    'Niculescu', 'Drăghici', 'Alexandru', 'Matei', 'Sandu', 'Cristea', 'Oprea', 'Munteanu'
  ],
  streets: [
    'Strada Independenței', 'Bulevardul Unirii', 'Strada Republicii', 'Calea Victoriei',
    'Strada Libertății', 'Bulevardul Carol I', 'Strada Mihai Viteazu', 'Strada Aviatorilor',
    'Bulevardul Magheru', 'Strada Dorobanți', 'Calea Moșilor', 'Strada Lipscani',
    'Bulevardul Brâncoveanu', 'Strada Obor', 'Calea Grivița', 'Bulevardul Pache Protopopescu'
  ],
  cities: [
    'București', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Craiova', 'Brașov',
    'Galați', 'Ploiești', 'Oradea', 'Brăila', 'Arad', 'Pitești', 'Sibiu', 'Bacău',
    'Târgu Mureș', 'Baia Mare', 'Buzău', 'Botoșani', 'Satu Mare', 'Râmnicu Vâlcea',
    'Suceava', 'Piatra Neamț', 'Drobeta-Turnu Severin', 'Focșani', 'Târgoviște', 'Tulcea'
  ],
  states: [
    'București', 'Cluj', 'Timiș', 'Iași', 'Constanța', 'Dolj', 'Brașov', 'Galați',
    'Prahova', 'Bihor', 'Brăila', 'Arad', 'Argeș', 'Sibiu', 'Bacău', 'Mureș',
    'Maramureș', 'Buzău', 'Botoșani', 'Satu Mare', 'Vâlcea', 'Suceava', 'Neamț',
    'Mehedinți', 'Vrancea', 'Dâmbovița', 'Tulcea', 'Bistrița-Năsăud', 'Caraș-Severin'
  ],
  zipCodePattern: '######',
  jobTitles: [
    'Inginer Software', 'Manager de Proiect', 'Analist de Date', 'Manager Marketing',
    'Reprezentant Vânzări', 'Contabil', 'Manager HR', 'Designer', 'Manager Operațiuni',
    'Analist de Afaceri', 'Manager Produs', 'Administrator Sistem', 'Inginer Calitate'
  ],
  departments: [
    'Inginerie', 'Marketing', 'Vânzări', 'Resurse Umane', 'Finanțe', 'Operațiuni',
    'Servicii Clienți', 'IT', 'Cercetare și Dezvoltare', 'Juridic', 'Administrație'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    const bloc = Random.pick(['A', 'B', 'C', 'D']);
    const scara = Random.int(1, 4);
    const ap = Random.int(1, 50);
    return `${street} nr. ${number}, Bl. ${bloc}, Sc. ${scara}, Ap. ${ap}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  }
};