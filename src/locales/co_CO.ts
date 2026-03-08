import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const co_CO: LocaleDefinition = {
  firstNamesMale: [
    'Juan', 'Carlos', 'Andrés', 'Luis', 'Jorge', 'Mario', 'José', 'Pedro',
    'Miguel', 'Ángel', 'Rafael', 'Antonio', 'Francisco', 'Javier', 'Alejandro',
    'Sergio', 'Diego', 'Fernando', 'Gustavo', 'Hernán', 'Mauricio', 'Pablo',
    'Ricardo', 'Roberto', 'Óscar', 'César', 'Alberto', 'Eduardo', 'Manuel', 'Raúl'
  ],
  firstNamesFemale: [
    'María', 'Ana', 'Carmen', 'Lucía', 'Sandra', 'Patricia', 'Luz', 'Nancy',
    'Linda', 'Gloria', 'Beatriz', 'Diana', 'Mónica', 'Silvia', 'Andrea',
    'Paola', 'Valentina', 'Daniela', 'Mariana', 'Alejandra', 'Gabriela',
    'Isabella', 'Sofía', 'Camila', 'Valeria', 'Natalia', 'Carolina', 'Juliana', 'Laura'
  ],
  lastNames: [
    'García', 'Rodríguez', 'Martínez', 'López', 'González', 'Hernández',
    'Pérez', 'Sánchez', 'Ramírez', 'Torres', 'Flores', 'Rivera', 'Gómez',
    'Díaz', 'Morales', 'Ruiz', 'Jiménez', 'Vásquez', 'Castillo', 'Mendoza',
    'Rojas', 'Vargas', 'Moreno', 'Ortiz', 'Muñoz', 'Peña', 'Delgado', 'Pacheco'
  ],
  streets: [
    'Carrera 7', 'Carrera 15', 'Carrera 11', 'Calle 85', 'Calle 100',
    'Avenida El Dorado', 'Avenida Jiménez', 'Avenida Caracas', 'Avenida Boyacá',
    'Carrera 53', 'Carrera 43A', 'Calle 72', 'Calle 127', 'Transversal 17',
    'Avenida Suba', 'Carrera 9', 'Calle 26', 'Avenida Chile', 'Zona Rosa'
  ],
  cities: [
    'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga',
    'Pereira', 'Santa Marta', 'Ibagué', 'Pasto', 'Manizales', 'Cúcuta',
    'Soledad', 'Armenia', 'Villavicencio', 'Valledupar', 'Montería',
    'Neiva', 'Palmira', 'Popayán', 'Sincelejo', 'Tunja', 'Florencia', 'Quibdó'
  ],
  states: [
    'Bogotá D.C.', 'Antioquia', 'Valle del Cauca', 'Atlántico', 'Bolívar',
    'Santander', 'Risaralda', 'Magdalena', 'Tolima', 'Nariño', 'Caldas',
    'Norte de Santander', 'Atlántico', 'Quindío', 'Meta', 'Cesar', 'Córdoba',
    'Huila', 'Valle del Cauca', 'Cauca', 'Sucre', 'Boyacá', 'Caquetá', 'Chocó'
  ],
  zipCodePattern: '######',
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
    const number = Random.int(1, 999);
    const apartment = Random.int(1, 500);
    return `${street} # ${number}-${Random.int(10, 99)}, Apto ${apartment}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(110111, 999999));
  }
};
