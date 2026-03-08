import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const rs_RS: LocaleDefinition = {
  firstNamesMale: [
    'Marko', 'Nikola', 'Aleksandar', 'Stefan', 'Filip', 'Luka', 'Nemanja', 'Viktor',
    'Uroš', 'Miloš', 'Vladimir', 'Mihailo', 'Petar', 'Jovan', 'Andrej', 'Ilija',
    'Lazar', 'Vasilije', 'Pavle', 'Đorđe', 'Bogdan', 'Sava', 'Vojin', 'Rastko',
    'Dragan', 'Zoran', 'Goran', 'Predrag', 'Dejan', 'Saša', 'Nebojša', 'Slobodan'
  ],
  firstNamesFemale: [
    'Marija', 'Ana', 'Jelena', 'Milica', 'Sofija', 'Nina', 'Maja', 'Ivana',
    'Teodora', 'Tijana', 'Bojana', 'Snežana', 'Vesna', 'Dragana', 'Biljana',
    'Sanja', 'Marina', 'Irena', 'Katarina', 'Aleksandra', 'Jasmina', 'Natasha',
    'Olivera', 'Sladjana', 'Zorica', 'Radmila', 'Ljubica', 'Gordana', 'Mirjana', 'Vera'
  ],
  lastNames: [
    'Jovanović', 'Petrović', 'Nikolić', 'Stojanović', 'Đorđević', 'Stanković',
    'Pavlović', 'Marković', 'Ilić', 'Milošević', 'Popović', 'Lukić', 'Simić',
    'Živković', 'Mitić', 'Vasić', 'Krstić', 'Jović', 'Savić', 'Perić',
    'Rajić', 'Mihailović', 'Lazarević', 'Veličković', 'Stefanović', 'Todorović',
    'Nedeljković', 'Miljković', 'Bošković', 'Gajić', 'Ristić', 'Kostić', 'Tomić'
  ],
  streets: [
    'Knez Mihailova', 'Terazije', 'Kralja Milana', 'Bulevar kralja Aleksandra',
    'Nemanjina ulica', 'Kraljice Natalije', 'Makedonska ulica', 'Takovska ulica',
    'Cara Lazara', 'Svetogorska ulica', 'Hilandarska ulica', 'Džordža Vašingtona',
    'Bulevar umetnosti', 'Gandijeva ulica', 'Jurija Gagarina', 'Antifašističke borbe',
    'Vojvode Putnika', 'Bulevar Zorana Đinđića', 'Autoput za Zagreb', 'Resavska ulica'
  ],
  cities: [
    'Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Zrenjanin', 'Pančevo',
    'Čačak', 'Kraljevo', 'Smederevo', 'Leskovac', 'Užice', 'Valjevo', 'Šabac',
    'Vranje', 'Kruševac', 'Sombor', 'Požarevac', 'Pirot', 'Zaječar', 'Kikinda',
    'Sremska Mitrovica', 'Jagodina', 'Vršac', 'Bor', 'Gornji Milanovac', 'Negotin'
  ],
  states: [
    'Beograd', 'Vojvodina', 'Šumadija i Zapadna Srbija', 'Južna i Istočna Srbija',
    'Autonomna Pokrajina Vojvodina', 'Autonomna Pokrajina Kosovo i Metohija'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Softverski inženjer', 'Menadžer projekata', 'Analitičar podataka', 'Marketing menadžer',
    'Prodajni predstavnik', 'Računovođa', 'HR menadžer', 'Dizajner', 'Operativni menadžer',
    'Poslovni analitičar', 'Produkt menadžer', 'Sistem administrator', 'QA inženjer',
    'Tehnički pisac', 'Administrator baza podataka', 'Mrežni inženjer', 'DevOps inženjer'
  ],
  departments: [
    'Inženjering', 'Marketing', 'Prodaja', 'Ljudski resursi', 'Finansije',
    'Operacije', 'Korisnička podrška', 'IT', 'Istraživanje i razvoj',
    'Pravno', 'Upravljanje proizvodima', 'Dizajn', 'Kontrola kvalitete', 'Administracija'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    const apartment = Random.int(1, 100);
    return `${street} ${number}/${apartment}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(11000, 38999));
  }
};
