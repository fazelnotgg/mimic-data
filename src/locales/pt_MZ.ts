import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_MZ: LocaleDefinition = {
  firstNamesMale: [
    'João', 'Pedro', 'Paulo', 'José', 'Carlos', 'Luís', 'Miguel', 'António',
    'Francisco', 'Manuel', 'Jorge', 'Daniel', 'David', 'Ricardo', 'Bruno',
    'André', 'Tiago', 'Diogo', 'Rui', 'Nuno', 'Gonçalo', 'Mário', 'Sérgio',
    'Fernando', 'Alberto', 'Roberto', 'Eduardo', 'Hugo', 'Igor', 'Ivan'
  ],
  firstNamesFemale: [
    'Maria', 'Ana', 'Catarina', 'Joana', 'Sofia', 'Mariana', 'Beatriz', 'Inês',
    'Francisca', 'Leonor', 'Matilde', 'Carolina', 'Benedita', 'Dinis', 'Laura',
    'Madalena', 'Salomé', 'Vitória', 'Gabriela', 'Patricia', 'Sandra', 'Cristina',
    'Fernanda', 'Isabel', 'Teresa', 'Rosa', 'Albertina', 'Conceição', 'Fátima'
  ],
  lastNames: [
    'Machava', 'Mondlane', 'Nhaca', 'Cossa', 'Matsinhe', 'Sitoe', 'Chongo',
    'Macamo', 'Muianga', 'Fumo', 'Bila', 'Chapual', 'Guebuza', 'Hume',
    'Karamba', 'Loforte', 'Macuácua', 'Namburete', 'Osório', 'Panguana',
    'Queface', 'Ribeiro', 'Sumbana', 'Tembe', 'Uaciquete', 'Valigy', 'Zucula'
  ],
  streets: [
    'Avenida Julius Nyerere', 'Avenida 24 de Julho', 'Avenida da Zimpeto',
    'Avenida de Moçambique', 'Avenida 25 de Setembro', 'Rua da Argélia',
    'Rua de Bagamoyo', 'Rua de Lourenço Marques', 'Avenida Mártires de Inhaminga'
  ],
  cities: [
    'Maputo', 'Matola', 'Nampula', 'Beira', 'Chimoio', 'Nacala', 'Quelimane',
    'Tete', 'Lichinga', 'Pemba', 'Inhambane', 'Maxixe', 'Gaza', 'Manica',
    'Dondo', 'Xai-Xai', 'Cuamba', 'Montepuez', 'Gurué', 'Angoche'
  ],
  states: [
    'Maputo Cidade', 'Maputo Província', 'Gaza', 'Inhambane', 'Sofala',
    'Manica', 'Tete', 'Zambézia', 'Nampula', 'Cabo Delgado', 'Niassa'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Engenheiro de Software', 'Gestor de Projeto', 'Analista de Dados',
    'Gestor de Marketing', 'Representante de Vendas', 'Contabilista',
    'Gestor de Recursos Humanos', 'Designer', 'Gestor de Operações'
  ],
  departments: [
    'Engenharia', 'Marketing', 'Vendas', 'Recursos Humanos', 'Finanças',
    'Operações', 'Atendimento ao Cliente', 'TI', 'Pesquisa e Desenvolvimento'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    const bairro = Random.pick(['Central', 'Polana', 'Sommerschield', 'Katembe', 'Zimpeto']);
    return `Bairro ${bairro}, ${street} ${houseNumber}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+258 8# ### ####',
    '+258 82 ### ####',
    '+258 83 ### ####',
    '+258 84 ### ####',
    '+258 85 ### ####',
    '+258 86 ### ####',
    '+258 87 ### ####',
    '8# ### ####',
    '82 ### ####',
    '84 ### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'teledata.mz', 'vodacom.co.mz', 'movitel.co.mz'
  ],

  companyNames: [
    'Vodacom Moçambique', 'Movitel', 'TMcel', 'Banco de Moçambique',
    'Millennium BIM', 'BCI', 'Standard Bank', 'Banco Nacional de Investimento',
    'Sasol Moçambique', 'ENH', 'CFM', 'LAM Moçambique Airlines'
  ],

  industries: [
    'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Varejo',
    'Manufatura', 'Mídia', 'Telecomunicações', 'Energia', 'Transporte',
    'Imobiliário', 'Consultoria', 'Hotelaria', 'Automotivo', 'Mineração',
    'Gás Natural', 'Agricultura', 'Pesca'
  ],

  catchPhrases: [
    'Inovando para o futuro', 'O seu sucesso é a nossa missão', 'Construindo o futuro juntos',
    'Qualidade e excelência', 'Comprometidos com Moçambique', 'O seu parceiro de confiança'
  ]
};
