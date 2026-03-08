import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_PT: LocaleDefinition = {
  firstNamesMale: [
    'João', 'Francisco', 'Miguel', 'Rodrigo', 'Pedro', 'Tiago', 'Gonçalo', 'Diogo',
    'José', 'António', 'Manuel', 'Carlos', 'Paulo', 'Rui', 'Luís', 'Bruno',
    'Ricardo', 'Hugo', 'André', 'Nuno', 'Rafael', 'Daniel', 'David', 'Tomás',
    'Bernardo', 'Martim', 'Santiago', 'Afonso', 'Duarte', 'Gabriel', 'Gustavo'
  ],
  firstNamesFemale: [
    'Maria', 'Ana', 'Beatriz', 'Sofia', 'Mariana', 'Inês', 'Carolina', 'Catarina',
    'Rita', 'Joana', 'Francisca', 'Teresa', 'Helena', 'Isabel', 'Leonor', 'Lara',
    'Sara', 'Marta', 'Margarida', 'Diana', 'Matilde', 'Alice', 'Mafalda', 'Adriana',
    'Carlota', 'Constança', 'Gabriela', 'Luísa', 'Melissa', 'Raquel', 'Cristina'
  ],
  lastNames: [
    'Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins',
    'Jesus', 'Sousa', 'Fernandes', 'Gonçalves', 'Gomes', 'Lopes', 'Marques', 'Alves',
    'Almeida', 'Ribeiro', 'Pinto', 'Carvalho', 'Teixeira', 'Moreira', 'Correia', 'Mendes',
    'Nunes', 'Soares', 'Vieira', 'Monteiro', 'Cardoso', 'Rocha', 'Neves', 'Coelho'
  ],
  streets: [
    'Avenida da Liberdade', 'Rua Augusta', 'Rua da Prata', 'Avenida Almirante Reis',
    'Rua Garrett', 'Praça do Comércio', 'Rua de Santa Catarina', 'Avenida dos Aliados',
    'Rua das Flores', 'Avenida da República', 'Rua do Ouro', 'Rua Direita', 'Rua da Madalena',
    'Avenida Fontes Pereira de Melo', 'Rua Braamcamp', 'Rua Alexandre Herculano'
  ],
  cities: [
    'Lisboa', 'Porto', 'Vila Nova de Gaia', 'Amadora', 'Braga', 'Coimbra', 'Funchal',
    'Setúbal', 'Almada', 'Agualva-Cacém', 'Queluz', 'Rio Tinto', 'Barreiro', 'Aveiro',
    'Évora', 'Odivelas', 'Corroios', 'Loures', 'Gondomar', 'Guimarães', 'Matosinhos',
    'Faro', 'Portimão', 'Leiria', 'Viseu', 'Castelo Branco', 'Vila Real', 'Santarém'
  ],
  states: [
    'Lisboa', 'Porto', 'Braga', 'Aveiro', 'Faro', 'Setúbal', 'Coimbra', 'Leiria',
    'Viseu', 'Santarém', 'Viana do Castelo', 'Vila Real', 'Évora', 'Beja',
    'Castelo Branco', 'Guarda', 'Portalegre', 'Bragança', 'Açores', 'Madeira'
  ],
  zipCodePattern: '####-###',
  jobTitles: [
    'Engenheiro de Software', 'Gestor de Projeto', 'Analista de Dados', 'Gestor de Marketing',
    'Representante de Vendas', 'Contabilista', 'Gestor de RH', 'Designer', 'Gestor de Operações',
    'Analista de Negócios', 'Gestor de Produto', 'Administrador de Sistemas'
  ],
  departments: [
    'Engenharia', 'Marketing', 'Vendas', 'Recursos Humanos', 'Finanças', 'Operações',
    'Apoio ao Cliente', 'IT', 'Investigação e Desenvolvimento', 'Jurídico', 'Administração'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 300);
    const floor = Random.int(1, 8);
    const door = Random.pick(['A', 'B', 'C', 'D', 'E']);
    return `${street}, ${number}, ${floor}º ${door}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    const part1 = String(Random.int(1000, 9999));
    const part2 = String(Random.int(100, 999));
    return `${part1}-${part2}`;
  },

  phoneFormats: [
    '+351 ### ### ###',
    '### ### ###',
    '+351 (###) ### ###',
    '(###) ### ###',
    '9## ### ###',
    '91# ### ###',
    '92# ### ###',
    '93# ### ###',
    '96# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.pt', 'outlook.pt', 'hotmail.pt', 'live.pt',
    'sapo.pt', 'iol.pt', 'netcabo.pt', 'clix.pt', 'aeiou.pt'
  ],

  companyNames: [
    'EDP Energias de Portugal', 'Galp Energia', 'The Navigator Company', 'Jerónimo Martins',
    'Sonae SGPS', 'NOS SGPS', 'CTT Correios', 'Banco Comercial Português', 'Caixa Geral de Depósitos',
    'Novo Banco', 'Banco Santander Totta', 'Fidelidade Seguros', 'TAP Air Portugal',
    'Sumol+Compal', 'Sogrape Vinhos', 'Corticeira Amorim', 'Impresa SGPS', 'Global Match'
  ],

  industries: [
    'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Retalho',
    'Manufatura', 'Media', 'Telecomunicações', 'Energia', 'Transportes',
    'Imobiliário', 'Consultoria', 'Hotelaria', 'Automóvel', 'Aeroespacial'
  ],

  catchPhrases: [
    'Inovar para o futuro', 'O seu sucesso é o nosso negócio', 'Construir o futuro juntos',
    'Qualidade e confiança', 'Excelência e compromisso', 'Soluções sustentáveis',
    'Criar valor', 'O seu parceiro de confiança', 'Liderar a mudança'
  ]
};