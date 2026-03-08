import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const sk_SK: LocaleDefinition = {
  firstNamesMale: [
    'Jakub', 'Martin', 'Matúš', 'Lukáš', 'Michal', 'Peter', 'Ján', 'Pavol',
    'Stanislav', 'Tomáš', 'Juraj', 'Filip', 'Ondrej', 'Vladimír', 'Marián',
    'Jozef', 'Miroslav', 'Róbert', 'Dušan', 'Milan', 'Richard', 'Patrik',
    'Erik', 'Daniel', 'Samuel', 'Alex', 'Dominik', 'Kristián', 'Sebastián', 'Adam'
  ],
  firstNamesFemale: [
    'Mária', 'Jana', 'Eva', 'Anna', 'Zuzana', 'Katarína', 'Natália', 'Lucia',
    'Martina', 'Petra', 'Veronika', 'Simona', 'Andrea', 'Monika', 'Nikola',
    'Dominika', 'Kristína', 'Michaela', 'Patrícia', 'Laura', 'Sofia', 'Emma',
    'Nina', 'Timea', 'Viktória', 'Adriana', 'Daniela', 'Jana', 'Renáta', 'Tatiana'
  ],
  lastNames: [
    'Horváth', 'Kováč', 'Varga', 'Tóth', 'Balogh', 'Nagy', 'Szabó', 'Molnár',
    'Balog', 'Lakatoš', 'Vass', 'Rigó', 'Gál', 'Farkas', 'Kiss', 'Németh',
    'Mészáros', 'Takács', 'Szűcs', 'Kováčová', 'Horváthová', 'Vargová',
    'Tóthová', 'Baloghová', 'Nagyová', 'Szabóová', 'Molnárová', 'Balogová',
    'Lakatošová', 'Vassová', 'Rigóová', 'Gálová', 'Farkasová', 'Kissóvá'
  ],
  streets: [
    'Hlavná ulica', 'Dunajská ulica', 'Obchodná ulica', 'Štefánikova ulica',
    'Kollárova ulica', 'Hviezdoslavovo námestie', 'SNP ulica', 'Partizánska ulica',
    'Mierová ulica', 'Slobody ulica', 'Nová ulica', 'Záhradná ulica', 'Lipová ulica',
    'Javorová ulica', 'Brežská ulica', 'Smreková ulica', 'Borová ulica', 'Jeseniová ulica'
  ],
  cities: [
    'Bratislava', 'Košice', 'Prešov', 'Žilina', 'Banská Bystrica', 'Nitra',
    'Trnava', 'Trenčín', 'Martin', 'Poprad', 'Prievidza', 'Zvolen', 'Považská Bystrica',
    'Michalovce', 'Spišská Nová Ves', 'Komárno', 'Levice', 'Bardejov', 'Liptovský Mikuláš',
    'Ružomberok', 'Piešťany', 'Topoľčany', 'Humenné', 'Senica', 'Dunajská Streda'
  ],
  states: [
    'Bratislavský kraj', 'Trnavský kraj', 'Trenčiansky kraj', 'Nitriansky kraj',
    'Žilinský kraj', 'Banskobystrický kraj', 'Prešovský kraj', 'Košický kraj'
  ],
  zipCodePattern: '### ##',
  jobTitles: [
    'Softvérový inžinier', 'Projektový manažér', 'Dátový analytik', 'Marketingový manažér',
    'Obchodný zástupca', 'Účtovník', 'HR manažér', 'Dizajnér', 'Prevádzkový manažér',
    'Business analytik', 'Produktový manažér', 'System administrátor', 'QA inžinier',
    'Technický spisovateľ', 'Databázový administrátor', 'Sieťový inžinier', 'DevOps inžinier'
  ],
  departments: [
    'Engineering', 'Marketing', 'Predaj', 'Ľudské zdroje', 'Financie',
    'Prevádzka', 'Zákaznícky servis', 'IT', 'Vývoj a výskum',
    'Právne oddelenie', 'Product Management', 'Design', 'Kvalita', 'Administratíva'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 500);
    return `${street} ${number}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    const part1 = String(Random.int(100, 999));
    const part2 = String(Random.int(10, 99));
    return `${part1} ${part2}`;
  }
};
