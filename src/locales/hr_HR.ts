import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const hr_HR: LocaleDefinition = {
  firstNamesMale: [
    'Ivan', 'Marko', 'Luka', 'Josip', 'Matej', 'Filip', 'Petar', 'Ante',
    'Tomislav', 'Stjepan', 'Nikola', 'David', 'Karlo', 'Vedran', 'Igor',
    'Goran', 'Zoran', 'Damir', 'Mario', 'Dario', 'Robert', 'Andrej',
    'Miran', 'Bruno', 'Ivica', 'Davor', 'Krešimir', 'Domagoj', 'Lovro', 'Roko'
  ],
  firstNamesFemale: [
    'Ana', 'Marija', 'Ivana', 'Maja', 'Petra', 'Lucija', 'Katarina', 'Ema',
    'Sara', 'Lara', 'Nina', 'Lea', 'Dora', 'Laura', 'Tina', 'Martina',
    'Sanja', 'Vesna', 'Dragana', 'Biljana', 'Snježana', 'Dubravka', 'Jasna',
    'Marina', 'Irena', 'Vedrana', 'Andrea', 'Monika', 'Kristina', 'Antonija'
  ],
  lastNames: [
    'Horvat', 'Kovačević', 'Babić', 'Petrović', 'Jurić', 'Marković',
    'Radić', 'Kovač', 'Knežević', 'Savić', 'Horvat', 'Galić', 'Bilić',
    'Tomić', 'Vuković', 'Pavić', 'Lončar', 'Matić', 'Vidović', 'Jurić',
    'Bošnjak', 'Dedić', 'Kralj', 'Bencić', 'Perić', 'Radoš', 'Šimić',
    'Lukić', 'Varga', 'Nikolić', 'Stojanović', 'Mihalić', 'Rajić', 'Župan'
  ],
  streets: [
    'Ilica', 'Varšavska ulica', 'Tkalčićeva ulica', 'Preradovićeva ulica',
    'Gajeva ulica', 'Masarykova ulica', 'Kneza Mislava', 'Jurišićeva ulica',
    'Hebrangova ulica', 'Strossmayerovo šetalište', 'Zrinjevac', 'Frankopanska ulica',
    'Palmotićeva ulica', 'Gundulićeva ulica', 'Praška ulica', 'Draškovićeva ulica',
    'Vlaška ulica', 'Maksimirska ulica', 'Savska ulica', 'Vukovarska ulica'
  ],
  cities: [
    'Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar', 'Pula', 'Slavonski Brod',
    'Karlovac', 'Varaždin', 'Šibenik', 'Sisak', 'Velika Gorica', 'Vinkovci',
    'Dubrovnik', 'Bjelovar', 'Virovitica', 'Požega', 'Koprivnica', 'Čakovec',
    'Krapina', 'Gospić', 'Pazin', 'Rovinj', 'Makarska', 'Trogir', 'Korčula'
  ],
  states: [
    'Zagrebačka županija', 'Splitsko-dalmatinska županija', 'Primorsko-goranska županija',
    'Osječko-baranjska županija', 'Zadarska županija', 'Istarska županija',
    'Brodsko-posavska županija', 'Karlovačka županija', 'Varaždinska županija',
    'Šibensko-kninska županija', 'Sisačko-moslavačka županija', 'Vukovarsko-srijemska županija',
    'Dubrovačko-neretvanska županija', 'Bjelovarsko-bilogorska županija', 'Virovitičko-podravska županija',
    'Požeško-slavonska županija', 'Koprivničko-križevačka županija', 'Međimurska županija',
    'Krapinsko-zagorska županija', 'Ličko-senjska županija'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Softverski inženjer', 'Voditelj projekata', 'Analitičar podataka', 'Marketing menadžer',
    'Prodajni predstavnik', 'Računovođa', 'HR menadžer', 'Dizajner', 'Operativni menadžer',
    'Poslovni analitičar', 'Produkt menadžer', 'Sistem administrator', 'QA inženjer',
    'Tehnički pisac', 'Administrator baza podataka', 'Mrežni inženjer', 'DevOps inženjer'
  ],
  departments: [
    'Inženjering', 'Marketing', 'Prodaja', 'Ljudski resursi', 'Financije',
    'Operacije', 'Korisnička podrška', 'IT', 'Istraživanje i razvoj',
    'Pravno', 'Upravljanje proizvodima', 'Dizajn', 'Kontrola kvalitete', 'Administracija'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street} ${number}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};
