import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ca_ES: LocaleDefinition = {
  firstNamesMale: [
    'Jordi', 'Josep', 'Joan', 'Marc', 'Pere', 'Francesc', 'Miquel', 'David',
    'Daniel', 'Alex', 'Robert', 'Javier', 'Sergi', 'Carles', 'Albert',
    'Ramon', 'Lluís', 'Enric', 'Ferran', 'Oriol', 'Pol', 'Arnau', 'Guillem',
    'Martí', 'Aleix', 'Nil', 'Jan', 'Biel', 'Hugo', 'Eric', 'Pau', 'Ian'
  ],
  firstNamesFemale: [
    'Maria', 'Montserrat', 'Carme', 'Anna', 'Rosa', 'Mercè', 'Dolors', 'Núria',
    'Laura', 'Sílvia', 'Cristina', 'Marta', 'Eva', 'Sara', 'Laia', 'Clara',
    'Júlia', 'Emma', 'Paula', 'Aina', 'Naia', 'Leire', 'Irene', 'Sofia',
    'Carla', 'Berta', 'Rocío', 'Andrea', 'Marina', 'Helena', 'Victoria', 'Mireia'
  ],
  lastNames: [
    'Garcia', 'Martinez', 'Lopez', 'Gonzalez', 'Rodriguez', 'Hernandez',
    'Perez', 'Sanchez', 'Romero', 'Torres', 'Gomez', 'Navarro', 'Ruiz',
    'Alvarez', 'Castillo', 'Jimenez', 'Moreno', 'Muñoz', 'Alonso', 'Gutierrez',
    'Pujol', 'Vila', 'Serra', 'Ferran', 'Riera', 'Casas', 'Roca', 'Pelegri'
  ],
  streets: [
    'La Rambla', 'Passeig de Gràcia', 'Avinguda Diagonal', 'Gran Via de les Corts Catalanes',
    'Carrer de Balmes', 'Carrer de Pau Claris', 'Carrer del Consell de Cent',
    'Carrer de València', 'Carrer de Provença', 'Carrer de Mallorca',
    'Carrer de Girona', 'Carrer de Roger de Llúria', 'Passeig de Sant Joan'
  ],
  cities: [
    'Barcelona', 'L\'Hospitalet de Llobregat', 'Badalona', 'Terrassa', 'Sabadell',
    'Lleida', 'Tarragona', 'Mataró', 'Santa Coloma de Gramenet', 'Reus',
    'Girona', 'Manresa', 'Vic', 'Igualada', 'Vilanova i la Geltrú', 'Granollers'
  ],
  states: [
    'Barcelona', 'Girona', 'Lleida', 'Tarragona', 'Catalunya'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Enginyer de programari', 'Gestor de projectes', 'Analista de dades',
    'Gerent de màrqueting', 'Representant de vendes', 'Comptable',
    'Gerent de recursos humans', 'Dissenyador', 'Gerent d\'operacions',
    'Analista de negocis', 'Gerent de producte', 'Administrador de sistemes',
    'Representant d\'atenció al client', 'Enginyer de qualitat'
  ],
  departments: [
    'Enginyeria', 'Màrqueting', 'Vendes', 'Recursos Humans', 'Finances',
    'Operacions', 'Atenció al Client', 'TI', 'Recerca i Desenvolupament',
    'Legal', 'Gestió de Productes', 'Disseny', 'Control de Qualitat', 'Administració'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 999);
    const floor = Random.int(1, 10);
    const door = Random.pick(['1a', '1b', '2a', '2b', '3a', '3b']);
    return `${street} ${houseNumber}, ${floor}º ${door}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(8000, 43999));
  },

  phoneFormats: [
    '+34 93 ### ## ##',
    '+34 97 ### ## ##',
    '+34 6## ### ###',
    '+34 7## ### ###',
    '93 ### ## ##',
    '97 ### ## ##',
    '6## ### ###',
    '7## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.es', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'telefonica.net', 'ono.com', 'orange.es', 'vodafone.es'
  ],

  companyNames: [
    'La Caixa', 'Banco Sabadell', 'Gas Natural Fenosa', 'Repsol', 'Seat',
    'Agbar', 'Grup Godó', 'RAC1', 'TV3', 'El Periódico', 'La Vanguardia',
    'Mercadona', 'Bon Preu', 'Consum', 'Puig', 'Mango', 'Desigual'
  ],

  industries: [
    'Tecnologia', 'Finances', 'Sanitat', 'Educació', 'Comerç',
    'Manufactura', 'Mitjans', 'Telecomunicacions', 'Energia', 'Transport',
    'Immobiliari', 'Consultoria', 'Hostaleria', 'Automoció', 'Aeroespacial',
    'Turisme', 'Tèxtil', 'Alimentació'
  ],

  catchPhrases: [
    'Innovant per al futur', 'El vostre èxit és la nostra missió', 'Construïm el futur junts',
    'Qualitat i excel·lència', 'Compromesos amb Catalunya', 'El vostre soci de confiança',
    'Creixement sostenible', 'Creant valor', 'Orgull català'
  ]
};
