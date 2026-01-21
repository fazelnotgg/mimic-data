import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_MX: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Luis', 'Miguel', 'Carlos', 'Antonio', 'Francisco', 'Alejandro',
    'Pedro', 'Jesús', 'Manuel', 'Rafael', 'Javier', 'Daniel', 'Ricardo', 'Fernando',
    'Jorge', 'Roberto', 'Eduardo', 'Sergio', 'Raúl', 'Arturo', 'Gerardo', 'Héctor',
    'Andrés', 'Diego', 'Gabriel', 'Oscar', 'Julio', 'Ramón', 'Armando', 'Enrique'
  ],
  firstNamesFemale: [
    'María', 'Guadalupe', 'Juana', 'Margarita', 'Rosa', 'Francisca', 'Teresa', 'Ana',
    'Patricia', 'Carmen', 'Laura', 'Gabriela', 'Verónica', 'Silvia', 'Martha', 'Diana',
    'Karla', 'Leticia', 'Sandra', 'Elena', 'Claudia', 'Alejandra', 'Daniela', 'Sofía',
    'Adriana', 'Andrea', 'Monica', 'Beatriz', 'Cecilia', 'Paola', 'Fernanda', 'Lucía'
  ],
  lastNames: [
    'Hernández', 'García', 'Martínez', 'López', 'González', 'Rodríguez', 'Pérez', 'Sánchez',
    'Ramírez', 'Torres', 'Flores', 'Rivera', 'Gómez', 'Díaz', 'Cruz', 'Morales',
    'Reyes', 'Gutiérrez', 'Ortiz', 'Mendoza', 'Castillo', 'Vargas', 'Romero', 'Jiménez',
    'Ruiz', 'Álvarez', 'Vázquez', 'Medina', 'Aguilar', 'Salazar', 'Rojas', 'Herrera'
  ],
  streets: [
    'Avenida Reforma', 'Calle Juárez', 'Avenida Insurgentes', 'Calle Hidalgo',
    'Avenida Revolución', 'Calle Morelos', 'Avenida Universidad', 'Calle Independencia',
    'Avenida Constitución', 'Calle 5 de Mayo', 'Avenida Chapultepec', 'Calle Madero',
    'Avenida Patriotismo', 'Calle Guerrero', 'Avenida División del Norte', 'Calle Cuauhtémoc'
  ],
  cities: [
    'Ciudad de México', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León',
    'Juárez', 'Zapopan', 'Mérida', 'San Luis Potosí', 'Querétaro', 'Toluca',
    'Chihuahua', 'Aguascalientes', 'Saltillo', 'Mexicali', 'Culiacán', 'Acapulco',
    'Cancún', 'Veracruz', 'Hermosillo', 'Morelia', 'Durango', 'Oaxaca', 'Tampico'
  ],
  states: [
    'Ciudad de México', 'Jalisco', 'Nuevo León', 'Puebla', 'Baja California', 'Guanajuato',
    'Chihuahua', 'Yucatán', 'San Luis Potosí', 'Querétaro', 'Estado de México',
    'Veracruz', 'Aguascalientes', 'Coahuila', 'Sinaloa', 'Sonora', 'Michoacán',
    'Guerrero', 'Quintana Roo', 'Tamaulipas', 'Oaxaca', 'Chiapas', 'Durango'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Gerente de Proyecto', 'Analista de Datos', 'Gerente de Marketing',
    'Representante de Ventas', 'Contador', 'Gerente de RH', 'Diseñador', 'Gerente de Operaciones',
    'Analista de Negocios', 'Gerente de Producto', 'Administrador de Sistemas'
  ],
  departments: [
    'Ingeniería', 'Marketing', 'Ventas', 'Recursos Humanos', 'Finanzas', 'Operaciones',
    'Servicio al Cliente', 'TI', 'Investigación y Desarrollo', 'Legal', 'Administración'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 999);
    const colonia = Random.pick(['Centro', 'Norte', 'Sur', 'Oriente', 'Poniente']);
    return `${street} ${number}, Col. ${colonia}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};