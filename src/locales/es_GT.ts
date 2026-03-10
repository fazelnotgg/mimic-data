import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_GT: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Juan', 'Carlos', 'Luis', 'Miguel', 'Pedro', 'Jorge', 'Mario',
    'Víctor', 'Manuel', 'Raúl', 'Fernando', 'Alberto', 'Francisco', 'Antonio',
    'Ricardo', 'Roberto', 'César', 'Óscar', 'Gustavo', 'Hugo', 'Sergio',
    'Diego', 'Alejandro', 'Pablo', 'Andrés', 'Mauricio', 'Eduardo', 'Jesús', 'Rubén'
  ],
  firstNamesFemale: [
    'María', 'Carmen', 'Ana', 'Rosa', 'Luz', 'Juana', 'Patricia', 'Sandra',
    'Elizabeth', 'Nancy', 'Linda', 'Gloria', 'Beatriz', 'Diana', 'Mónica',
    'Silvia', 'Andrea', 'Paola', 'Valentina', 'Daniela', 'Mariana', 'Alejandra',
    'Gabriela', 'Isabella', 'Sofía', 'Camila', 'Valeria', 'Natalia', 'Carolina', 'Juliana'
  ],
  lastNames: [
    'García', 'Rodríguez', 'Hernández', 'Pérez', 'Sánchez', 'Ramírez', 'López',
    'González', 'Martínez', 'Díaz', 'Flores', 'Torres', 'Gómez', 'Ruiz',
    'Castillo', 'Mendoza', 'Rojas', 'Vargas', 'Moreno', 'Ortiz', 'Muñoz',
    'González', 'Ruiz', 'Hernández', 'Morales', 'Chávez', 'Reyes', 'Guerrero', 'Méndez', 'Cruz'
  ],
  streets: [
    'Avenida La Reforma', 'Avenida Bolívar', 'Avenida Hincapié', 'Avenida Simeón Cañas',
    'Avenida Elena', 'Calle del Comercio', 'Avenida Petapa', 'Avenida Aguilar Batres',
    'Avenida Las Américas', 'Avenida Soto', 'Avenida Gualberto Campos', 'Avenida 18',
    'Avenida 12', 'Avenida 7', 'Avenida 3', 'Avenida 1', 'Avenida 30', 'Avenida 25'
  ],
  cities: [
    'Ciudad de Guatemala', 'Mixco', 'Villa Nueva', 'Petapa', 'San Juan Sacatepéquez',
    'Quetzaltenango', 'Villa Canales', 'Escuintla', 'Chinautla', 'Chimaltenango',
    'Huehuetenango', 'Amatitlán', 'Totonicapán', 'Santa Catarina Pinula', 'Cobán',
    'Puerto Barrios', 'San Marcos', 'Jalapa', 'Jutiapa', 'Antigua Guatemala', 'Retalhuleu'
  ],
  states: [
    'Guatemala', 'Huehuetenango', 'San Marcos', 'Quiché', 'Alta Verapaz',
    'Petén', 'Izabal', 'Baja Verapaz', 'Quetzaltenango', 'Totonicapán',
    'Sololá', 'Suchitepéquez', 'Retalhuleu', 'Chimaltenango', 'Sacatepéquez',
    'Escuintla', 'Santa Rosa', 'Jutiapa', 'Jalapa', 'Zacapa', 'El Progreso'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingeniero de Software', 'Gerente de Proyecto', 'Analista de Datos', 'Gerente de Marketing',
    'Representante de Ventas', 'Contador', 'Gerente de Recursos Humanos', 'Diseñador',
    'Gerente de Operaciones', 'Analista de Negocio', 'Gerente de Producto', 'Administrador de Sistemas',
    'Ingeniero de Calidad', 'Escritor Técnico', 'Administrador de Base de Datos',
    'Ingeniero de Redes', 'Ingeniero DevOps', 'Diseñador UX', 'Gerente de Contenido'
  ],
  departments: [
    'Ingeniería', 'Marketing', 'Ventas', 'Recursos Humanos', 'Finanzas',
    'Operaciones', 'Servicio al Cliente', 'TI', 'Investigación y Desarrollo',
    'Legal', 'Gestión de Productos', 'Diseño', 'Aseguramiento de Calidad', 'Administración'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 9999);
    const zone = Random.int(1, 25);
    return `${street} ${number}, Zona ${zone}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1001, 99999));
  }
};
