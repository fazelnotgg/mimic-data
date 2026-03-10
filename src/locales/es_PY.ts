import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_PY: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Carlos', 'Juan', 'Luis', 'Miguel', 'Pedro', 'Jorge', 'Antonio',
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
    'Benítez', 'Núñez', 'Salazar', 'Velásquez', 'Cordero', 'Giménez', 'Acosta'
  ],
  streets: [
    'Avenida España', 'Avenida Mariscal López', 'Avenida Eusebio Ayala',
    'Avenida Artigas', 'Avenida San Martín', 'Avenida República',
    'Avenida Venezuela', 'Avenida Brasil', 'Avenida Argentina',
    'Calle Palma', 'Calle Olimpia', 'Calle Independencia Nacional',
    'Calle 14 de Mayo', 'Calle 25 de Mayo', 'Avenida Aviadores del Chaco',
    'Avenida Madame Lynch', 'Avenida Primer Presidente'
  ],
  cities: [
    'Asunción', 'Ciudad del Este', 'San Lorenzo', 'Luque', 'Capiatá',
    'Lambaré', 'Fernando de la Mora', 'Limpio', 'Ñemby', 'Encarnación',
    'Pedro Juan Caballero', 'Coronel Oviedo', 'Concepción', 'Villarrica',
    'Caaguazú', 'Caacupé', 'Pilar', 'Paraguarí', 'Villa Hayes', 'Benjamín Aceval'
  ],
  states: [
    'Asunción', 'Concepción', 'San Pedro', 'Cordillera', 'Guairá', 'Caaguazú',
    'Caazapá', 'Itapúa', 'Misiones', 'Paraguarí', 'Alto Paraná', 'Central',
    'Ñeembucú', 'Amambay', 'Canindeyú', 'Presidente Hayes', 'Alto Paraguay',
    'Boquerón'
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
    const entre = Random.pick(['entre', 'y']);
    const crossStreet1 = Random.pick(['Artigas', 'República', 'España']);
    const crossStreet2 = Random.pick(['Brasil', 'Argentina', 'Venezuela']);
    return `${street} N° ${houseNumber} ${entre} ${crossStreet1} y ${crossStreet2}, ${city} - ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+595 9## ### ###',
    '+595 98# ### ###',
    '+595 981 ### ###',
    '+595 982 ### ###',
    '+595 983 ### ###',
    '+595 984 ### ###',
    '+595 985 ### ###',
    '+595 986 ### ###',
    '+595 987 ### ###',
    '+595 99# ### ###',
    '+595 21 ### ###',
    '09## ### ###',
    '(021) ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'copaco.com.py', 'tigo.com.py', 'personal.com.py', 'claro.com.py'
  ],

  companyNames: [
    'Itaipú Binacional', 'Yacyretá', 'Banco Nacional de Fomento', 'Banco Visión',
    'Banco Familiar', 'Banco GNB', 'Banco Itaú Paraguay', 'Banco Continental',
    'Cervecería Paraguaya', ' Industrias del Paraguay', 'Copaco', 'Tigo',
    'Personal', 'Claro', 'Latam Airlines Paraguay', 'Amambay Seguros'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Retail',
    'Manufactura', 'Medios', 'Telecomunicaciones', 'Energía', 'Transporte',
    'Bienes Raíces', 'Consultoría', 'Hotelería', 'Automotriz', 'Agroindustria',
    'Ganadería', 'Agricultura', 'Textil', 'Turismo'
  ],

  catchPhrases: [
    'Innovando para el futuro', 'Su éxito es nuestra misión', 'Construyendo el futuro juntos',
    'Calidad y excelencia', 'Comprometidos con Paraguay', 'Su socio de confianza',
    'Crecimiento sostenible', 'Creando valor', 'Orgullo paraguayo'
  ]
};
