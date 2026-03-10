import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_EC: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Luis', 'Carlos', 'Juan', 'Miguel', 'Pedro', 'Jorge', 'Antonio',
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
    'Benítez', 'Núñez', 'Salazar', 'Velásquez', 'Cordero', 'Quintero', 'Loor'
  ],
  streets: [
    'Avenida Amazonas', 'Avenida de los Shyris', 'Avenida República',
    'Avenida Patria', 'Avenida 6 de Diciembre', 'Avenida Eloy Alfaro',
    'Avenida Gran Colombia', 'Avenida 10 de Agosto', 'Avenida Oriental',
    'Avenida Occidental', 'Calle García Moreno', 'Calle Sucre', 'Calle Bolívar',
    'Calle Rocafuerte', 'Calle Olmedo', 'Avenida del Ejército', 'Avenida Napo'
  ],
  cities: [
    'Quito', 'Guayaquil', 'Cuenca', 'Santo Domingo', 'Machala', 'Durán',
    'Manta', 'Portoviejo', 'Loja', 'Ambato', 'Riobamba', 'Quevedo',
    'Milagro', 'Ibarra', 'Esmeraldas', 'Babahoyo', 'Latacunga', 'Tulcán',
    'Pasaje', 'Chone', 'Montecristi', 'Jipijapa', 'Santa Elena', 'Salinas'
  ],
  states: [
    'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Chimborazo', 'Cotopaxi',
    'El Oro', 'Esmeraldas', 'Galápagos', 'Guayas', 'Imbabura', 'Loja',
    'Los Ríos', 'Manabí', 'Morona Santiago', 'Napo', 'Orellana',
    'Pastaza', 'Pichincha', 'Santa Elena', 'Santo Domingo de los Tsáchilas',
    'Sucumbíos', 'Tungurahua', 'Zamora Chinchipe'
  ],
  zipCodePattern: '######',
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
    const street2 = Random.pick(['y', 'entre']);
    const crossStreet = Random.pick(['Av. Amazonas', 'Av. Patria', 'Av. de los Shyris', 'Calle Sucre']);
    return `${street} ${houseNumber} ${street2} ${crossStreet}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+593 99 ### ####',
    '+593 98 ### ####',
    '+593 97 ### ####',
    '+593 96 ### ####',
    '+593 2 ### ####',
    '+593 4 ### ####',
    '099 ### ####',
    '098 ### ####',
    '(02) ### ####',
    '(04) ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'telecable.com.ec', 'cnt.gob.ec', 'claro.com.ec'
  ],

  companyNames: [
    'Petroecuador', 'Banco Pichincha', 'Banco del Pacífico', 'Produbanco',
    'Banco Guayaquil', 'Corporación Favorita', 'El Rosado', 'La Fabril',
    'Pronaca', 'Nestlé Ecuador', 'Coca-Cola Femsa', 'Cervecería Nacional',
    'Holcim Ecuador', 'Cementos Selva Alegre', 'Movistar', 'Claro'
  ],

  industries: [
    'Tecnología', 'Finanzas', 'Salud', 'Educación', 'Retail',
    'Manufactura', 'Medios', 'Telecomunicaciones', 'Energía', 'Transporte',
    'Bienes Raíces', 'Consultoría', 'Hotelería', 'Automotriz', 'Aeroespacial',
    'Petróleo', 'Minería', 'Agricultura', 'Turismo'
  ],

  catchPhrases: [
    'Innovando para el futuro', 'Su éxito es nuestra misión', 'Construyendo el futuro juntos',
    'Calidad y excelencia', 'Comprometidos con Ecuador', 'Su socio de confianza',
    'Crecimiento sostenible', 'Creando valor', 'Orgullo ecuatoriano'
  ]
};
