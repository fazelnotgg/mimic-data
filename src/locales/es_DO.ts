import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_DO: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Pedro', 'Jorge', 'Antonio',
    'Manuel', 'Francisco', 'David', 'Daniel', 'Alex', 'Ricardo', 'Fernando',
    'Gustavo', 'Raúl', 'Jesús', 'Eduardo', 'Andrés', 'Roberto', 'Mario',
    'Alberto', 'Ángel', 'Enrique', 'Sergio', 'Pablo', 'Sebastián', 'Nicolás',
    'Santiago', 'Matías', 'Benjamín', 'Agustín', 'Emiliano', 'Maximiliano'
  ],
  firstNamesFemale: [
    'María', 'Carmen', 'Rosa', 'Ana', 'Luisa', 'Patricia', 'Elizabeth', 'Sandra',
    'Mónica', 'Silvia', 'Verónica', 'Gabriela', 'Andrea', 'Daniela', 'Paola',
    'Carolina', 'Mariana', 'Alejandra', 'Valeria', 'Fernanda', 'Isabel', 'Laura',
    'Elena', 'Sofía', 'Victoria', 'Camila', 'Valentina', 'Martina', 'Lucía',
    'Regina', 'Diana', 'Natalia', 'Adriana', 'Juliana', 'Emilia'
  ],
  lastNames: [
    'Rodríguez', 'González', 'Gómez', 'Pérez', 'Sánchez', 'Ramírez', 'Cruz',
    'Alvarez', 'Flores', 'Reyes', 'Morales', 'Vargas', 'Castillo', 'Jiménez',
    'Hidalgo', 'Moreno', 'Ruiz', 'Díaz', 'Torres', 'Ortiz', 'Romero', 'Mendoza',
    'Silva', 'Espinoza', 'Vásquez', 'Aguilar', 'Ríos', 'Campos', 'Vega',
    'Fuentes', 'Guerrero', 'Paredes', 'Montero', 'Domínguez', 'Carrasco'
  ],
  streets: [
    'Avenida George Washington', 'Avenida 27 de Febrero', 'Avenida Winston Churchill',
    'Avenida John F. Kennedy', 'Avenida Tiradentes', 'Avenida Lope de Vega',
    'Avenida Sarasota', 'Avenida Rómulo Betancourt', 'Calle El Conde',
    'Calle Las Damas', 'Calle Hostos', 'Calle Mercedes', 'Calle Arzobispo Meriño'
  ],
  cities: [
    'Santo Domingo', 'Santiago de los Caballeros', 'La Romana', 'San Pedro de Macorís',
    'San Cristóbal', 'Puerto Plata', 'La Vega', 'Higüey', 'San Francisco de Macorís',
    'Moca', 'Bonao', 'Azua', 'Baní', 'Mao', 'Nagua', 'Samaná', 'Barahona'
  ],
  states: [
    'Distrito Nacional', 'Santiago', 'La Romana', 'San Pedro de Macorís',
    'San Cristóbal', 'Puerto Plata', 'La Vega', 'Higüey', 'San Francisco de Macorís',
    'Espaillat', 'Bonao', 'Azua', 'Peravia', 'Valverde', 'María Trinidad Sánchez',
    'Samaná', 'Barahona', 'Independencia', 'Pedernales', 'Monte Cristi'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Gerente de Proyecto', 'Analista de Datos',
    'Gerente de Marketing', 'Ejecutivo de Ventas', 'Contador',
    'Gerente de Recursos Humanos', 'Diseñador', 'Gerente de Operaciones',
    'Analista de Negocios', 'Gerente de Producto', 'Administrador de Sistemas',
    'Atención al Cliente', 'Ingeniero de Calidad', 'Redactor Técnico'
  ],
  departments: [
    'Ingeniería', 'Marketing', 'Ventas', 'Recursos Humanos', 'Finanzas',
    'Operaciones', 'Servicio al Cliente', 'TI', 'Investigación y Desarrollo',
    'Legal', 'Gestión de Productos', 'Diseño', 'Control de Calidad', 'Administración'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    const sector = Random.pick(['Piantini', 'Naco', 'Bella Vista', 'Gazcue', 'Ensanche La Fe']);
    return `${sector}, ${street} #${houseNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+1 809 ### ####',
    '+1 829 ### ####',
    '+1 849 ### ####',
    '(809) ###-####',
    '(829) ###-####',
    '(849) ###-####',
    '809-###-####',
    '829-###-####',
    '849-###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'codetel.net.do', 'verizon.net.do', 'orange.com.do'
  ],

  companyNames: [
    'Grupo Punta Cana', 'Cementos Cibao', 'Cervecería Nacional Dominicana',
    'Banco Popular Dominicano', 'Banco BHD', 'Banco León', 'Banco Reservas',
    'Claro Dominicana', 'Altice Dominicana', 'Viva Dominicana',
    'La Sirena', 'Olimpica', 'Supermercados Nacional', 'PriceSmart'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Retail',
    'Manufactura', 'Medios', 'Telecomunicaciones', 'Energía', 'Transporte',
    'Bienes Raíces', 'Consultoría', 'Hotelería', 'Automotriz', 'Turismo',
    'Zonas Francas', 'Minería', 'Agricultura'
  ],

  catchPhrases: [
    'Innovando para el futuro', 'Su éxito es nuestra misión', 'Construyendo el futuro juntos',
    'Calidad y excelencia', 'Comprometidos con República Dominicana', 'Su socio de confianza',
    'Crecimiento sostenible', 'Creando valor', 'Orgullo dominicano'
  ]
};
