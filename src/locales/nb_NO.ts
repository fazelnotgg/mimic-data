import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const nb_NO: LocaleDefinition = {
  firstNamesMale: [
    'Jan', 'Per', 'Bjørn', 'Ole', 'Lars', 'Knut', 'Arne', 'Kjell', 'Tor', 'Svein',
    'Thomas', 'Andreas', 'Martin', 'Daniel', 'Henrik', 'Magnus', 'Jonas', 'Emil',
    'Alexander', 'Markus', 'Kristian', 'Fredrik', 'Marius', 'Erik', 'Øyvind',
    'Adrian', 'Lucas', 'Tobias', 'Noah', 'Oliver', 'William', 'Filip', 'Jakob'
  ],
  firstNamesFemale: [
    'Anne', 'Marit', 'Inger', 'Kari', 'Nina', 'Lise', 'Eva', 'Hilde', 'Ingrid',
    'Emma', 'Nora', 'Sara', 'Sofie', 'Emilie', 'Ingrid', 'Thea', 'Maja', 'Eline',
    'Ida', 'Julie', 'Maria', 'Vilde', 'Frida', 'Amalie', 'Victoria', 'Anna',
    'Mathilde', 'Mia', 'Hanna', 'Linnea', 'Leah', 'Isabella', 'Ella', 'Hedda'
  ],
  lastNames: [
    'Hansen', 'Johansen', 'Olsen', 'Larsen', 'Andersen', 'Pedersen', 'Nilsen', 'Kristiansen',
    'Jensen', 'Karlsen', 'Johnsen', 'Pettersen', 'Eriksen', 'Berg', 'Haugen', 'Hagen',
    'Johannessen', 'Andreassen', 'Jacobsen', 'Olsen', 'Solberg', 'Moen', 'Lund', 'Bakke',
    'Lie', 'Strand', 'Nguyen', 'Halvorsen', 'Svendsen', 'Martinsen', 'Mikkelsen'
  ],
  streets: [
    'Storgata', 'Kirkegata', 'Hovedgata', 'Karl Johans gate', 'Prinsens gate',
    'Torgallmenningen', 'Grensen', 'Stortingsgata', 'Bogstadveien', 'Bygdøy allé',
    'Parkveien', 'Skippergata', 'Kongens gate', 'Drammensveien', 'Pilestredet',
    'Ullevålsveien', 'Markveien', 'Thorvald Meyers gate', 'Akersgata', 'Møllergata'
  ],
  cities: [
    'Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Drammen', 'Fredrikstad', 'Kristiansand',
    'Sandnes', 'Tromsø', 'Sarpsborg', 'Skien', 'Ålesund', 'Sandefjord', 'Haugesund',
    'Tønsberg', 'Moss', 'Porsgrunn', 'Bodø', 'Arendal', 'Hamar', 'Larvik', 'Halden',
    'Askøy', 'Lillehammer', 'Mo i Rana', 'Molde', 'Horten', 'Gjøvik', 'Kongsberg'
  ],
  states: [
    'Oslo', 'Viken', 'Innlandet', 'Vestfold og Telemark', 'Agder', 'Rogaland',
    'Vestland', 'Møre og Romsdal', 'Trøndelag', 'Nordland', 'Troms og Finnmark'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Programvareingeniør', 'Prosjektleder', 'Dataanalytiker', 'Markedssjef',
    'Selger', 'Regnskapsfører', 'HR-leder', 'Designer', 'Driftsleder',
    'Forretningsanalytiker', 'Produktleder', 'Systemadministrator', 'Kvalitetsingeniør'
  ],
  departments: [
    'Ingeniør', 'Markedsføring', 'Salg', 'Personale', 'Økonomi', 'Drift',
    'Kundeservice', 'IT', 'Forskning og utvikling', 'Juridisk', 'Administrasjon'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street} ${number}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+47 ### ## ###',
    '### ## ###',
    '+47 ## ## ## ##',
    '## ## ## ##',
    '4## ## ###',
    '9## ## ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.no', 'outlook.no', 'hotmail.no', 'live.no',
    'online.no', 'home.no', 'getmail.no', 'broadpark.no', 'icloud.com'
  ],

  companyNames: [
    'Equinor ASA', 'DNB ASA', 'Telenor ASA', 'Yara International', 'Norsk Hydro',
    'Orkla ASA', 'Kongsberg Gruppen', 'Aker ASA', 'Mowi ASA', 'Lerøy Seafood',
    'SalMar ASA', 'Gjensidige Forsikring', 'Storebrand', 'Wilh. Wilhelmsen',
    'Frontline Ltd', 'Golden Ocean', 'Aker BP', 'Vår Energi', 'Höegh Autoliners'
  ],

  industries: [
    'Teknologi', 'Finans', 'Helsevesen', 'Utdanning', 'Detaljhandel',
    'Produksjon', 'Media', 'Telekom', 'Energi', 'Transport',
    'Eiendom', 'Konsulent', 'Hoteller', 'Bilindustri', 'Luftfart'
  ],

  catchPhrases: [
    'Innovasjon for fremtiden', 'Din suksess er vår sak', 'Bygger fremtiden sammen',
    'Kvalitet og tillit', 'Fortreffelighet og engasjement', 'Bærekraftige løsninger',
    'Skaper verdi', 'Din pålitelige partner', 'Leder endring'
  ]
};