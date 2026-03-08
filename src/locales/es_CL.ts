import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_CL: LocaleDefinition = {
  firstNamesMale: [
    'Juan', 'Pedro', 'José', 'Luis', 'Carlos', 'Jorge', 'Miguel', 'Andrés',
    'Francisco', 'Ricardo', 'Manuel', 'Alejandro', 'Diego', 'Sebastián', 'Cristian',
    'Matías', 'Felipe', 'Gonzalo', 'Rodrigo', 'Javier', 'Pablo', 'Marcelo',
    'Gabriel', 'Nicolás', 'Maximiliano', 'Tomás', 'Martín', 'Ignacio', 'Joaquín'
  ],
  firstNamesFemale: [
    'María', 'Carmen', 'Rosa', 'Ana', 'Isabel', 'Teresa', 'Gloria', 'Patricia',
    'Claudia', 'Andrea', 'Carolina', 'Francisca', 'Daniela', 'Camila', 'Javiera',
    'Valentina', 'Constanza', 'Fernanda', 'Catalina', 'Isidora', 'Sofía', 'Martina',
    'Florencia', 'Antonia', 'Emilia', 'Trinidad', 'Maite', 'Josefa', 'Amanda'
  ],
  lastNames: [
    'González', 'Muñoz', 'Rojas', 'Díaz', 'Pérez', 'Soto', 'Contreras', 'Silva',
    'Martínez', 'Sepúlveda', 'Morales', 'Rodríguez', 'López', 'Fuentes', 'Hernández',
    'Torres', 'Araya', 'Flores', 'Espinoza', 'Valenzuela', 'Castillo', 'Tapia',
    'Reyes', 'Vásquez', 'Ramírez', 'Núñez', 'Pizarro', 'Carrasco', 'Gutiérrez', 'Herrera'
  ],
  streets: [
    'Avenida Libertador Bernardo O\'Higgins', 'Avenida Providencia', 'Avenida Apoquindo',
    'Avenida Las Condes', 'Avenida Vicuña Mackenna', 'Avenida Grecia', 'Calle Huérfanos',
    'Calle Agustinas', 'Avenida Pedro de Valdivia', 'Avenida Bilbao', 'Calle Bandera',
    'Avenida República', 'Calle Estado', 'Avenida Irarrázaval', 'Avenida Ñuñoa'
  ],
  cities: [
    'Santiago', 'Valparaíso', 'Viña del Mar', 'Concepción', 'La Serena', 'Antofagasta',
    'Temuco', 'Rancagua', 'Talca', 'Arica', 'Puerto Montt', 'Chillán', 'Iquique',
    'Los Ángeles', 'Coyhaique', 'Punta Arenas', 'Valdivia', 'Osorno', 'Quillota',
    'Curicó', 'Calama', 'Copiapó', 'Linares', 'Ovalle', 'San Antonio'
  ],
  states: [
    'Región Metropolitana', 'Valparaíso', 'Biobío', 'Araucanía', 'Los Lagos',
    'Maule', 'Antofagasta', 'Coquimbo', 'O\'Higgins', 'Tarapacá', 'Los Ríos',
    'Aysén', 'Magallanes', 'Atacama', 'Arica y Parinacota', 'Ñuble'
  ],
  zipCodePattern: '#######',
  jobTitles: [
    'Ingeniero en Software', 'Jefe de Proyecto', 'Analista de Datos', 'Jefe de Marketing',
    'Ejecutivo Comercial', 'Contador', 'Jefe de RRHH', 'Diseñador', 'Jefe de Operaciones',
    'Analista de Negocios', 'Product Manager', 'Administrador de Sistemas'
  ],
  departments: [
    'Ingeniería', 'Marketing', 'Ventas', 'Recursos Humanos', 'Finanzas', 'Operaciones',
    'Atención al Cliente', 'TI', 'Investigación y Desarrollo', 'Legal', 'Administración'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 9999);
    const depto = Random.int(1, 500);
    return `${street} ${number}, Depto ${depto}, ${city}, ${state}, ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000000, 9999999));
  },

  phoneFormats: [
    '+56 9 #### ####',
    '9 #### ####',
    '+56 (9) #### ####',
    '(9) #### ####',
    '02 #### ####',
    '032 #### ####',
    '041 #### ####',
    '055 #### ####',
    '061 #### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.cl', 'outlook.cl', 'hotmail.cl', 'live.cl',
    'vtr.net', 'movistar.cl', 'entel.cl', 'claro.cl', 'telsur.cl'
  ],

  companyNames: [
    'Sociedad Química y Minera', 'Banco de Chile', 'Banco Santander Chile', 'Banco Estado',
    'Latam Airlines', 'Falabella SA', 'Cencosud SA', 'Ripley Corp', 'Parque Arauco',
    'Mallplaza', 'Empresas Copec', 'Colbún SA', 'Enel Chile', 'Enel Distribución',
    'Chilectra', 'Aguas Andinas', 'CCU Compañía de las Cervecerías Unidas', 'Viña Concha y Toro'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Venta minorista',
    'Fabricación', 'Medios', 'Telecomunicaciones', 'Energía', 'Transporte',
    'Inmobiliaria', 'Consultoría', 'Hostelería', 'Automoción', 'Aeroespacial'
  ],

  catchPhrases: [
    'Innovando para el futuro', 'Su éxito es nuestro negocio', 'Construyendo el futuro juntos',
    'Calidad y confianza', 'Excelencia y compromiso', 'Soluciones sostenibles',
    'Creamos valor', 'Su socio de confianza', 'Liderando el cambio'
  ]
};