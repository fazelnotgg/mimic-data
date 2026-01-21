import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const es_AR: LocaleDefinition = {
  firstNamesMale: [
    'Juan', 'Carlos', 'José', 'Luis', 'Jorge', 'Ricardo', 'Daniel', 'Marcelo',
    'Alejandro', 'Pablo', 'Diego', 'Martín', 'Fernando', 'Gonzalo', 'Matías',
    'Sebastián', 'Nicolás', 'Federico', 'Gabriel', 'Andrés', 'Ezequiel', 'Facundo',
    'Maximiliano', 'Rodrigo', 'Germán', 'Luciano', 'Ignacio', 'Agustín', 'Franco'
  ],
  firstNamesFemale: [
    'María', 'Ana', 'Laura', 'Marta', 'Silvia', 'Andrea', 'Gabriela', 'Claudia',
    'Carolina', 'Valeria', 'Natalia', 'Paula', 'Verónica', 'Cecilia', 'Patricia',
    'Sofía', 'Martina', 'Lucía', 'Valentina', 'Florencia', 'Camila', 'Milagros',
    'Victoria', 'Catalina', 'Antonella', 'Agustina', 'Micaela', 'Julieta', 'Guadalupe'
  ],
  lastNames: [
    'González', 'Rodríguez', 'Fernández', 'López', 'Martínez', 'García', 'Pérez', 'Gómez',
    'Sánchez', 'Romero', 'Álvarez', 'Díaz', 'Torres', 'Ruiz', 'Ramírez', 'Flores',
    'Benítez', 'Acosta', 'Medina', 'Castro', 'Molina', 'Moreno', 'Suárez', 'Vega',
    'Pereyra', 'Gutiérrez', 'Silva', 'Vargas', 'Cabrera', 'Ramos', 'Navarro', 'Sosa'
  ],
  streets: [
    'Avenida Corrientes', 'Avenida Santa Fe', 'Avenida 9 de Julio', 'Avenida Rivadavia',
    'Calle Florida', 'Avenida de Mayo', 'Calle San Martín', 'Avenida Callao',
    'Calle Lavalle', 'Avenida Córdoba', 'Avenida Belgrano', 'Calle Reconquista',
    'Avenida Libertador', 'Calle Maipú', 'Avenida Pueyrredón', 'Calle Defensa',
    'Avenida Independencia', 'Calle Rodríguez Peña', 'Avenida Las Heras'
  ],
  cities: [
    'Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'San Miguel de Tucumán',
    'Mar del Plata', 'Salta', 'Santa Fe', 'San Juan', 'Resistencia', 'Neuquén',
    'Corrientes', 'Santiago del Estero', 'Posadas', 'Bahía Blanca', 'Paraná',
    'San Salvador de Jujuy', 'Formosa', 'La Rioja', 'Catamarca', 'San Luis', 'Río Cuarto'
  ],
  states: [
    'Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Tucumán', 'Entre Ríos',
    'Salta', 'Chaco', 'Corrientes', 'Misiones', 'San Juan', 'Jujuy', 'Santiago del Estero',
    'San Luis', 'Catamarca', 'La Rioja', 'Formosa', 'Neuquén', 'Río Negro',
    'Chubut', 'Santa Cruz', 'Tierra del Fuego', 'La Pampa'
  ],
  zipCodePattern: '@####@@@',
  jobTitles: [
    'Ingeniero de Software', 'Gerente de Proyecto', 'Analista de Datos', 'Gerente de Marketing',
    'Representante de Ventas', 'Contador', 'Gerente de RRHH', 'Diseñador', 'Gerente de Operaciones',
    'Analista de Negocios', 'Gerente de Producto', 'Administrador de Sistemas'
  ],
  departments: [
    'Ingeniería', 'Marketing', 'Ventas', 'Recursos Humanos', 'Finanzas', 'Operaciones',
    'Atención al Cliente', 'IT', 'Investigación y Desarrollo', 'Legal', 'Administración'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 9999);
    const piso = Random.int(1, 20);
    const depto = Random.pick(['A', 'B', 'C', 'D', 'E']);
    return `${street} ${number}, Piso ${piso} Dpto ${depto}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    const letter = String.fromCharCode(65 + Random.int(0, 25));
    const digits = String(Random.int(1000, 9999));
    const letters = String.fromCharCode(65 + Random.int(0, 25)) +
                    String.fromCharCode(65 + Random.int(0, 25)) +
                    String.fromCharCode(65 + Random.int(0, 25));
    return `${letter}${digits}${letters}`;
  }
};