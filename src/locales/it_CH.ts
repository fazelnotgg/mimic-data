import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const it_CH: LocaleDefinition = {
  firstNamesMale: [
    'Alessandro', 'Marco', 'Luca', 'Matteo', 'Davide', 'Andrea', 'Stefano',
    'Daniel', 'Michael', 'Thomas', 'Christian', 'Patrick', 'Fabio', 'Paolo',
    'Roberto', 'Francesco', 'Giovanni', 'Antonio', 'Giuseppe', 'Mario',
    'Alberto', 'Riccardo', 'Simone', 'Emanuele', 'Federico', 'Lorenzo',
    'Nicola', 'Vincenzo', 'Salvatore', 'Pietro', 'Daniele', 'Massimo', 'Luigi'
  ],
  firstNamesFemale: [
    'Alessia', 'Sara', 'Chiara', 'Martina', 'Elisa', 'Francesca', 'Giulia',
    'Anna', 'Maria', 'Laura', 'Silvia', 'Cristina', 'Elena', 'Monica',
    'Serena', 'Valentina', 'Federica', 'Paola', 'Roberta', 'Stefania',
    'Barbara', 'Claudia', 'Daniela', 'Veronica', 'Sabrina', 'Manuela',
    'Michela', 'Angela', 'Tiziana', 'Rossana', 'Cinzia', 'Simona', 'Giovanna'
  ],
  lastNames: [
    'Bernasconi', 'Bianchi', 'Rossi', 'Ferrari', 'Riva', 'Cattaneo', 'Moro',
    'Fontana', 'Conti', 'Baroni', 'Caruso', 'Romano', 'Gatti', 'Marelli',
    'Belloni', 'Meroni', 'Proserpio', 'Pozzi', 'Bianchini', 'Colombo',
    'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conte', 'De Luca',
    'Mancini', 'Costa', 'Giordano', 'Rinaldi', 'Parisi', 'Santoro', 'Martini'
  ],
  streets: [
    'Via Nassa', 'Corso Pestalozzi', 'Via Pretorio', 'Via Bellinzona',
    'Via Lugano', 'Via Locarno', 'Via Mendrisio', 'Via Chiasso',
    'Piazza della Riforma', 'Piazza Manzoni', 'Corso Elvezia',
    'Via Francesco Soave', 'Via Giuseppe Bianchi', 'Via Cattori'
  ],
  cities: [
    'Lugano', 'Bellinzona', 'Locarno', 'Mendrisio', 'Chiasso', 'Biasca',
    'Giubiasco', 'Minusio', 'Muralto', 'Losone', 'Ascona', 'Cadenazzo',
    'Camarillo', 'Mezzovico', 'Taverne', 'Torricella', 'Coldrerio', 'Stabio'
  ],
  states: [
    'Ticino', 'Grigioni', 'Zurigo', 'Berna', 'Ginevra', 'Vaud', 'Neuchâtel',
    'Friburgo', 'Vallese', 'Soletta', 'Basilea', 'Argovia', 'Turgovia',
    'San Gallo', 'Appenzello', 'Glarona', 'Svitto', 'Uri', 'Obvaldo', 'Nidvaldo'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Ingegnere software', 'Project manager', 'Analista dati', 'Responsabile marketing',
    'Commerciale', 'Contabile', 'Responsabile risorse umane', 'Designer',
    'Responsabile operazioni', 'Analista business', 'Product manager',
    'Amministratore di sistema', 'Supporto clienti', 'Ingegnere qualità',
    'Redattore tecnico', 'Amministratore database', 'Ingegnere di rete', 'UX designer'
  ],
  departments: [
    'Ingegneria', 'Marketing', 'Vendite', 'Risorse Umane', 'Finanza',
    'Operazioni', 'Servizio Clienti', 'IT', 'Ricerca e Sviluppo',
    'Legale', 'Gestione Prodotti', 'Design', 'Controllo Qualità', 'Amministrazione'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 200);
    return `${street} ${houseNumber}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    const codes = [
      String(Random.int(6500, 6999)),
      String(Random.int(6000, 6499)),
      String(Random.int(5000, 5999))
    ];
    return codes[Math.floor(Math.random() * codes.length)];
  },

  phoneFormats: [
    '+41 91 ### ## ##',
    '+41 58 ### ## ##',
    '+41 79 ### ## ##',
    '+41 78 ### ## ##',
    '+41 77 ### ## ##',
    '+41 76 ### ## ##',
    '+41 75 ### ## ##',
    '091 ### ## ##',
    '058 ### ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.it', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'bluewin.ch', 'sunrise.ch', 'swissonline.ch', 'ticino.com'
  ],

  companyNames: [
    'UBS', 'Credit Suisse', 'Zurich Insurance', 'Swiss Re', 'Nestlé',
    'Roche', 'Novartis', 'ABB', 'Swisscom', 'SBB CFF FFS',
    'Migros', 'Coop', 'Richemont', 'Swatch Group', 'Rolex',
    'Banca Stato Ticino', 'Cornèr Banca', 'Banca Popolare di Sondrio'
  ],

  industries: [
    'Tecnologia', 'Finanza', 'Sanità', 'Educazione', 'Vendita al dettaglio',
    'Produzione', 'Media', 'Telecomunicazioni', 'Energia', 'Trasporti',
    'Immobiliare', 'Consulenza', 'Ospitalità', 'Automotive', 'Aerospaziale',
    'Farmaceutico', 'Orologeria', 'Alimentare', 'Chimica', 'Assicurazione'
  ],

  catchPhrases: [
    'Innovare per il domani', 'Il vostro successo è la nostra missione', 'Costruire il futuro insieme',
    'Qualità ed eccellenza', 'L\'eccellenza al servizio di tutti', 'Il vostro partner di fiducia',
    'Tradizione e innovazione', 'Creare valore duraturo', 'Il savoir-faire svizzero'
  ]
};
