import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const cr_CR: LocaleDefinition = {
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
    'Jiménez', 'Morales', 'Chávez', 'Reyes', 'Guerrero', 'Méndez', 'Cruz', 'Castro', 'Solís'
  ],
  streets: [
    'Avenida Central', 'Avenida Segunda', 'Avenida Cuarta', 'Avenida Sexta',
    'Avenida Octava', 'Calle 1', 'Calle 3', 'Calle 5', 'Calle 7', 'Calle 9',
    'Paseo Colón', 'Avenida 10', 'Avenida 12', 'Avenida 14', 'Avenida 16',
    'Avenida 18', 'Avenida 20', 'Avenida 22', 'Avenida 24', 'Avenida 26',
    'Avenida 28', 'Avenida 30', 'Avenida 32', 'Avenida 34', 'Avenida 36'
  ],
  cities: [
    'San José', 'Limón', 'Alajuela', 'Heredia', 'Cartago', 'Puntarenas',
    'Liberia', 'Paraíso', 'Pérez Zeledón', 'San Isidro', 'Curridabat',
    'San Vicente', 'Purral', 'San Felipe', 'Desamparados', 'San Rafael',
    'San Francisco', 'Guadalupe', 'San Vicente', 'San Pablo', 'Santa Ana'
  ],
  states: [
    'San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'
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
    const landmark = Random.pick(['100m Norte', '100m Sur', '100m Este', '100m Oeste', '50m al Lago']);
    return `${street}, ${landmark}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 99999));
  }
};
