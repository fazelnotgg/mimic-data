import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ve_VE: LocaleDefinition = {
  firstNamesMale: [
    'José', 'Carlos', 'Luis', 'Miguel', 'Juan', 'Pedro', 'Jorge', 'Mario',
    'Rafael', 'Antonio', 'Francisco', 'Javier', 'Alejandro', 'Sergio', 'Diego',
    'Fernando', 'Gustavo', 'Mauricio', 'Pablo', 'Ricardo', 'Roberto', 'Óscar',
    'César', 'Alberto', 'Eduardo', 'Manuel', 'Raúl', 'Andrés', 'Víctor', 'Hernán'
  ],
  firstNamesFemale: [
    'María', 'Carmen', 'Ana', 'Rosa', 'Luz', 'Patricia', 'Sandra', 'Elizabeth',
    'Nancy', 'Linda', 'Gloria', 'Beatriz', 'Diana', 'Mónica', 'Silvia',
    'Andrea', 'Paola', 'Valentina', 'Daniela', 'Mariana', 'Alejandra', 'Gabriela',
    'Isabella', 'Sofía', 'Camila', 'Valeria', 'Natalia', 'Carolina', 'Juliana', 'Laura'
  ],
  lastNames: [
    'García', 'Rodríguez', 'Hernández', 'Pérez', 'Sánchez', 'Ramírez', 'López',
    'González', 'Martínez', 'Díaz', 'Flores', 'Torres', 'Gómez', 'Ruiz',
    'Castillo', 'Mendoza', 'Rojas', 'Vargas', 'Moreno', 'Ortiz', 'Muñoz',
    'Peña', 'Delgado', 'Pacheco', 'Vásquez', 'Jiménez', 'Morales', 'Chávez', 'Reyes', 'Guerrero'
  ],
  streets: [
    'Avenida Francisco de Miranda', 'Avenida Libertador', 'Avenida Bolívar',
    'Avenida Urdaneta', 'Avenida Panteón', 'Calle Carabobo', 'Calle Vargas',
    'Avenida Los Próceres', 'Avenida Principal de Las Mercedes', 'Avenida Río de Janeiro',
    'Avenida San Martín', 'Avenida Victoria', 'Calle El Conde', 'Avenida Intercomunal'
  ],
  cities: [
    'Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto', 'Maracay', 'Ciudad Guayana',
    'Barcelona', 'Maturín', 'Ciudad Bolívar', 'Cumana', 'Mérida', 'San Cristóbal',
    'Cabimas', 'Turmero', 'Barinas', 'Puerto La Cruz', 'Petare', 'Guarenas',
    'Guatire', 'Acarigua', 'Guanare', 'Valera', 'Coro', 'Los Teques', 'Carúpano'
  ],
  states: [
    'Distrito Capital', 'Zulia', 'Carabobo', 'Lara', 'Aragua', 'Bolívar',
    'Anzoátegui', 'Monagas', 'Mérida', 'Táchira', 'Sucre', 'Barinas',
    'Portuguesa', 'Falcón', 'Miranda', 'Yaracuy', 'Cojedes', 'Apure',
    'Nueva Esparta', 'Trujillo', 'Vargas', 'Amazonas', 'Delta Amacuro'
  ],
  zipCodePattern: '####',
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
    const building = Random.pick(['Edificio', 'Torre', 'Residencia']);
    const name = Random.pick(['Las Palmas', 'El Rosal', 'La Castellana', 'Altamira', 'Chacao']);
    return `${building} ${name}, ${street} ${number}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1010, 9999));
  }
};
