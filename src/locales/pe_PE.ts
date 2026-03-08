import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pe_PE: LocaleDefinition = {
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
    'García', 'Rodríguez', 'Sánchez', 'Flores', 'Torres', 'Ramírez', 'Pérez',
    'Díaz', 'González', 'Martínez', 'López', 'Hernández', 'Gómez', 'Ruiz',
    'Castillo', 'Mendoza', 'Rojas', 'Vargas', 'Moreno', 'Ortiz', 'Muñoz',
    'Peña', 'Delgado', 'Pacheco', 'Vásquez', 'Jiménez', 'Morales', 'Chávez', 'Reyes', 'Guerrero'
  ],
  streets: [
    'Avenida Javier Prado', 'Avenida Arequipa', 'Avenida Larco', 'Avenida Pardo',
    'Avenida Benavides', 'Avenida La Marina', 'Avenida Universitaria', 'Avenida Tacna',
    'Avenida Venezuela', 'Avenida Colonial', 'Jirón de la Unión', 'Avenida Grau',
    'Avenida Almte. Miguel Grau', 'Avenida 28 de Julio', 'Avenida Angamos', 'Avenida Reducto'
  ],
  cities: [
    'Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Piura', 'Iquitos', 'Cusco',
    'Huancayo', 'Tacna', 'Pucallpa', 'Ica', 'Juliaca', 'Sullana', 'Ayacucho',
    'Cajamarca', 'Puno', 'Tumbes', 'Huánuco', 'Tarapoto', 'Chincha Alta',
    'Huaraz', 'Cerro de Pasco', 'Moquegua', 'Tacna', 'Abancay', 'Puerto Maldonado'
  ],
  states: [
    'Lima', 'Arequipa', 'La Libertad', 'Lambayeque', 'Piura', 'Loreto', 'Cusco',
    'Junín', 'Tacna', 'Ucayali', 'Ica', 'Puno', 'Piura', 'Ayacucho', 'Cajamarca',
    'Puno', 'Tumbes', 'Huánuco', 'San Martín', 'Ica', 'Áncash', 'Pasco',
    'Moquegua', 'Tacna', 'Apurímac', 'Madre de Dios', 'Amazonas', 'Huancavelica'
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
    const urbanizacion = Random.pick(['Los Olivos', 'San Isidro', 'Miraflores', 'San Borja', 'La Molina']);
    return `${urbanizacion}, ${street} ${number}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1001, 9999));
  }
};
