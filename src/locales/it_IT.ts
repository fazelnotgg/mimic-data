import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const it_IT: LocaleDefinition = {
  firstNamesMale: [
    'Francesco', 'Alessandro', 'Andrea', 'Lorenzo', 'Matteo', 'Gabriele', 'Mattia',
    'Marco', 'Luca', 'Giovanni', 'Giuseppe', 'Antonio', 'Roberto', 'Paolo', 'Stefano',
    'Carlo', 'Davide', 'Simone', 'Federico', 'Riccardo', 'Michele', 'Tommaso',
    'Filippo', 'Vincenzo', 'Emanuele', 'Alberto', 'Daniele', 'Leonardo', 'Pietro'
  ],
  firstNamesFemale: [
    'Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia', 'Greta',
    'Beatrice', 'Anna', 'Chiara', 'Francesca', 'Sara', 'Martina', 'Alessia', 'Elena',
    'Silvia', 'Valentina', 'Federica', 'Laura', 'Elisa', 'Claudia', 'Monica', 'Paola',
    'Roberta', 'Simona', 'Antonella', 'Maria', 'Lucia', 'Cristina', 'Isabella'
  ],
  lastNames: [
    'Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci',
    'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'De Luca', 'Costa', 'Giordano',
    'Mancini', 'Rizzo', 'Lombardi', 'Moretti', 'Barbieri', 'Fontana', 'Santoro',
    'Mariani', 'Rinaldi', 'Caruso', 'Ferrara', 'Galli', 'Martini', 'Leone', 'Longo'
  ],
  streets: [
    'Via Roma', 'Corso Italia', 'Via Garibaldi', 'Via Mazzini', 'Piazza Duomo',
    'Via Dante', 'Corso Vittorio Emanuele', 'Via Cavour', 'Via Verdi', 'Via Nazionale',
    'Corso Umberto', 'Via Milano', 'Via Torino', 'Via Napoli', 'Viale Europa',
    'Via della Repubblica', 'Corso Giuseppe Mazzini', 'Via San Francesco', 'Via Venezia'
  ],
  cities: [
    'Roma', 'Milano', 'Napoli', 'Torino', 'Palermo', 'Genova', 'Bologna', 'Firenze',
    'Bari', 'Catania', 'Venezia', 'Verona', 'Messina', 'Padova', 'Trieste', 'Brescia',
    'Parma', 'Taranto', 'Prato', 'Modena', 'Reggio Calabria', 'Reggio Emilia', 'Perugia',
    'Livorno', 'Ravenna', 'Cagliari', 'Foggia', 'Rimini', 'Salerno', 'Ferrara', 'Sassari'
  ],
  states: [
    'Lazio', 'Lombardia', 'Campania', 'Piemonte', 'Sicilia', 'Liguria', 'Emilia-Romagna',
    'Toscana', 'Puglia', 'Veneto', 'Calabria', 'Sardegna', 'Marche', 'Abruzzo',
    'Friuli-Venezia Giulia', 'Umbria', 'Basilicata', 'Molise', 'Trentino-Alto Adige', 'Valle d\'Aosta'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingegnere Software', 'Project Manager', 'Analista Dati', 'Responsabile Marketing',
    'Rappresentante Vendite', 'Commercialista', 'Responsabile HR', 'Designer',
    'Responsabile Operazioni', 'Analista di Business', 'Product Manager', 'Amministratore di Sistema'
  ],
  departments: [
    'Ingegneria', 'Marketing', 'Vendite', 'Risorse Umane', 'Finanza', 'Operazioni',
    'Servizio Clienti', 'IT', 'Ricerca e Sviluppo', 'Legale', 'Amministrazione'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 200);
    return `${street}, ${number}, ${zipCode} ${city} (${state.substring(0, 2).toUpperCase()})`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+39 0## ### ####',
    '+39 0## #######',
    '0## ### ####',
    '0## #######',
    '+39 3## ### ####',
    '3## ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.it', 'outlook.it', 'hotmail.it', 'libero.it',
    'alice.it', 'tin.it', 'virgilio.it', 'tiscali.it', 'fastwebnet.it'
  ],

  companyNames: [
    'Eni SpA', 'Enel SpA', 'Generali Italia', 'Intesa Sanpaolo', 'UniCredit SpA',
    'Stellantis Italy', 'Ferrari NV', 'Lamborghini SpA', 'Pirelli & C',
    'Telecom Italia', 'Poste Italiane', 'Leonardo SpA', 'Saipem SpA',
    'Mediaset SpA', 'Moncler SpA', 'Armani SpA', 'Prada SpA', 'Gucci SpA'
  ],

  industries: [
    'Tecnologia', 'Finanza', 'Sanità', 'Istruzione', 'Vendita al dettaglio',
    'Produzione', 'Media', 'Telecomunicazioni', 'Energia', 'Trasporti',
    'Immobiliare', 'Consulenza', 'Alberghiero', 'Automobilistico', 'Aerospaziale'
  ],

  catchPhrases: [
    'Innovare per il futuro', 'Il vostro successo è il nostro lavoro', 'Costruire il futuro insieme',
    'Qualità e fiducia', 'Eccellenza e impegno', 'Soluzioni sostenibili',
    'Creiamo valore', 'Il vostro partner di fiducia', 'Guidare il cambiamento'
  ]
};