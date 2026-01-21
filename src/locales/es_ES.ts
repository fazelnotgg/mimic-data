import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_ES: LocaleDefinition = {
  firstNamesMale: [
    'Antonio', 'Manuel', 'José', 'Francisco', 'David', 'Juan', 'Javier', 'Daniel',
    'Carlos', 'Miguel', 'Alejandro', 'Pedro', 'Jesús', 'Pablo', 'Sergio', 'Rafael',
    'Ángel', 'José Antonio', 'Fernando', 'Luis', 'Alberto', 'Jorge', 'Adrián',
    'Álvaro', 'Diego', 'Raúl', 'Enrique', 'Rubén', 'Iván', 'Gonzalo', 'Hugo'
  ],
  firstNamesFemale: [
    'María', 'Carmen', 'Ana', 'Isabel', 'Dolores', 'Pilar', 'Teresa', 'Rosa',
    'Lucía', 'Paula', 'Sara', 'Laura', 'Marta', 'Elena', 'Cristina', 'Andrea',
    'Sofía', 'Beatriz', 'Alba', 'Nuria', 'Silvia', 'Patricia', 'Raquel', 'Marina',
    'Clara', 'Irene', 'Julia', 'Natalia', 'Rocío', 'Eva', 'Mónica', 'Susana'
  ],
  lastNames: [
    'García', 'Fernández', 'González', 'Rodríguez', 'López', 'Martínez', 'Sánchez', 'Pérez',
    'Gómez', 'Martín', 'Jiménez', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Muñoz',
    'Álvarez', 'Romero', 'Alonso', 'Gutiérrez', 'Navarro', 'Torres', 'Domínguez',
    'Vázquez', 'Ramos', 'Gil', 'Ramírez', 'Serrano', 'Blanco', 'Molina', 'Morales'
  ],
  streets: [
    'Calle Mayor', 'Gran Vía', 'Calle Real', 'Paseo de la Castellana', 'Avenida de Andalucía',
    'Calle Alcalá', 'Paseo del Prado', 'Calle de Serrano', 'Avenida Diagonal',
    'Ronda de Segovia', 'Calle Toledo', 'Plaza de España', 'Calle Atocha',
    'Paseo de Gracia', 'Calle Preciados', 'Avenida de América', 'Calle Génova'
  ],
  cities: [
    'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Murcia',
    'Palma', 'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo',
    'Gijón', 'Hospitalet', 'Vitoria', 'Granada', 'Elche', 'Oviedo', 'Badalona',
    'Cartagena', 'Terrassa', 'Jerez', 'Sabadell', 'Santa Cruz', 'Pamplona', 'Almería'
  ],
  states: [
    'Madrid', 'Cataluña', 'Comunidad Valenciana', 'Andalucía', 'Aragón', 'Galicia',
    'Castilla y León', 'País Vasco', 'Canarias', 'Castilla-La Mancha', 'Murcia',
    'Asturias', 'Islas Baleares', 'Extremadura', 'Navarra', 'Cantabria', 'La Rioja'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Jefe de Proyecto', 'Analista de Datos', 'Responsable de Marketing',
    'Comercial', 'Contable', 'Jefe de RRHH', 'Diseñador', 'Responsable de Operaciones',
    'Analista de Negocio', 'Jefe de Producto', 'Administrador de Sistemas'
  ],
  departments: [
    'Ingeniería', 'Marketing', 'Ventas', 'Recursos Humanos', 'Finanzas', 'Operaciones',
    'Atención al Cliente', 'Informática', 'Investigación y Desarrollo', 'Legal', 'Administración'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 300);
    const piso = Random.int(1, 8);
    const puerta = Random.pick(['A', 'B', 'C', 'D']);
    return `${street}, ${number}, ${piso}º ${puerta}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};