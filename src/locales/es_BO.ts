import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_BO: LocaleDefinition = {
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
    'Fuentes', 'Guerrero', 'Paredes', 'Montero', 'Domínguez', 'Carrasco',
    'Benítez', 'Núñez', 'Salazar', 'Velásquez', 'Cordero', 'Quispe', 'Mamani'
  ],
  streets: [
    'Avenida 16 de Julio', 'Avenida Illimani', 'Avenida Buenos Aires',
    'Avenida Arce', 'Avenida Banzer', 'Avenida Cristo Redentor',
    'Avenida Ballivián', 'Avenida Sánchez Lima', 'Calle Comercio',
    'Calle Potosí', 'Calle Oruro', 'Calle Chuquisaca', 'Calle Tarija',
    'Calle Beni', 'Calle Pando', 'Avenida Simón Bolívar', 'Avenida 6 de Agosto'
  ],
  cities: [
    'La Paz', 'Santa Cruz de la Sierra', 'Cochabamba', 'Sucre', 'Oruro',
    'Potosí', 'Tarija', 'Trinidad', 'Cobija', 'Montero', 'Warnes',
    'Quillacollo', 'Sacaba', 'El Alto', 'Viacha', 'Yacuiba', 'Tarija',
    'Llallagua', 'Uyuni', 'Villazón', 'Guayaramerín', 'Riberalta', 'Reyes'
  ],
  states: [
    'Chuquisaca', 'La Paz', 'Cochabamba', 'Oruro', 'Potosí', 'Tarija',
    'Santa Cruz', 'Beni', 'Pando'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Ingeniero de Software', 'Gerente de Proyecto', 'Analista de Datos',
    'Gerente de Marketing', 'Ejecutivo de Ventas', 'Contador',
    'Gerente de Recursos Humanos', 'Diseñador', 'Gerente de Operaciones',
    'Analista de Negocios', 'Gerente de Producto', 'Administrador de Sistemas',
    'Atención al Cliente', 'Ingeniero de Calidad', 'Redactor Técnico',
    'Administrador de Base de Datos', 'Ingeniero de Redes', 'Diseñador UX'
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
    const zone = Random.pick(['Centro', 'Zona Sur', 'Zona Norte', 'Calacoto', 'Sopocachi', 'Miraflores']);
    return `${street} N° ${houseNumber}, Zona ${zone}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+591 7## ## ###',
    '+591 6## ## ###',
    '+591 2 ### ####',
    '+591 3 ### ####',
    '+591 4 ### ####',
    '7## ## ###',
    '6## ## ###',
    '(2) ### ####',
    '(3) ### ####',
    '(4) ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'entel.bo', 'tigo.bo', 'viva.bo', 'gmail.bo'
  ],

  companyNames: [
    'YPFB', 'Banco Unión', 'Banco Nacional de Bolivia', 'Banco Mercantil',
    'Banco BCP', 'Banco Ganadero', 'Banco Fassil', 'Cervecería Boliviana Nacional',
    'Pil Andina', 'Soboce', 'Fancesa', 'Cementos Fancesa', 'Tigo', 'Entel', 'Viva'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Retail',
    'Manufactura', 'Medios', 'Telecomunicaciones', 'Energía', 'Transporte',
    'Bienes Raíces', 'Consultoría', 'Hotelería', 'Automotriz', 'Minería',
    'Hidrocarburos', 'Agricultura', 'Textil', 'Turismo'
  ],

  catchPhrases: [
    'Innovando para el futuro', 'Su éxito es nuestra misión', 'Construyendo el futuro juntos',
    'Calidad y excelencia', 'Comprometidos con Bolivia', 'Su socio de confianza',
    'Crecimiento sostenible', 'Creando valor', 'Orgullo boliviano'
  ]
};
