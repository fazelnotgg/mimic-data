import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const pt_BR: LocaleDefinition = {
  firstNamesMale: [
    'Miguel', 'Arthur', 'Heitor', 'Bernardo', 'Théo', 'Davi', 'Gabriel', 'Pedro',
    'Lucas', 'Matheus', 'Rafael', 'João', 'Guilherme', 'Gustavo', 'Felipe',
    'Bruno', 'Leonardo', 'Diego', 'Rodrigo', 'Marcelo', 'Vinícius', 'André',
    'Thiago', 'Fernando', 'Ricardo', 'Daniel', 'Carlos', 'Paulo', 'José',
    'Antônio', 'Francisco', 'Marcos', 'Roberto', 'Eduardo', 'Fábio', 'César',
    'Alexandre', 'Renato', 'Márcio', 'Sérgio', 'Luciano', 'Anderson', 'Caio'
  ],
  firstNamesFemale: [
    'Alice', 'Sophia', 'Helena', 'Valentina', 'Laura', 'Isabella', 'Manuela',
    'Júlia', 'Heloísa', 'Luiza', 'Maria', 'Lorena', 'Lívia', 'Giovanna',
    'Beatriz', 'Ana', 'Fernanda', 'Camila', 'Juliana', 'Mariana', 'Patrícia',
    'Amanda', 'Letícia', 'Carolina', 'Gabriela', 'Renata', 'Bianca', 'Natália',
    'Vanessa', 'Aline', 'Cristina', 'Paula', 'Adriana', 'Sandra', 'Tatiana',
    'Luciana', 'Priscila', 'Débora', 'Simone', 'Carla', 'Andreia', 'Viviane'
  ],
  lastNames: [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves',
    'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho',
    'Almeida', 'Lopes', 'Soares', 'Fernandes', 'Vieira', 'Barbosa', 'Rocha',
    'Dias', 'Nascimento', 'Araujo', 'Monteiro', 'Cardoso', 'Nunes', 'Mendes',
    'Freitas', 'Cavalcanti', 'Castro', 'Pinto', 'Farias', 'Moreira', 'Correia',
    'Rezende', 'Campos', 'Teixeira', 'Miranda', 'Duarte', 'Aragão', 'Machado',
    'Barros', 'Andrade', 'Moura', 'Cunha', 'Azevedo', 'Melo', 'Ramos', 'Pires'
  ],
  streets: [
    'Rua das Flores', 'Avenida Paulista', 'Rua Augusta', 'Avenida Atlântica',
    'Rua Oscar Freire', 'Avenida Brasil', 'Rua XV de Novembro', 'Avenida Copacabana',
    'Rua da Consolação', 'Avenida Brigadeiro Faria Lima', 'Rua Direita',
    'Avenida Getúlio Vargas', 'Rua do Comércio', 'Avenida Rio Branco',
    'Rua Sete de Setembro', 'Avenida Presidente Vargas', 'Rua da Paz',
    'Avenida Santos Dumont', 'Rua Amazonas', 'Avenida Dom Pedro II',
    'Rua Tiradentes', 'Avenida Independência', 'Rua Marechal Deodoro',
    'Avenida Afonso Pena', 'Rua Barão do Rio Branco', 'Avenida Ipiranga'
  ],
  cities: [
    'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte',
    'Manaus', 'Curitiba', 'Recife', 'Porto Alegre', 'Goiânia', 'Belém', 'Guarulhos',
    'Campinas', 'São Luís', 'São Gonçalo', 'Maceió', 'Duque de Caxias', 'Natal',
    'Teresina', 'Campo Grande', 'Nova Iguaçu', 'São Bernardo do Campo', 'João Pessoa',
    'Santo André', 'Osasco', 'Jaboatão dos Guararapes', 'São José dos Campos',
    'Ribeirão Preto', 'Uberlândia', 'Sorocaba', 'Contagem', 'Aracaju', 'Feira de Santana'
  ],
  states: [
    'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná', 'Rio Grande do Sul',
    'Pernambuco', 'Ceará', 'Pará', 'Santa Catarina', 'Goiás', 'Maranhão', 'Espírito Santo',
    'Paraíba', 'Amazonas', 'Mato Grosso', 'Rio Grande do Norte', 'Alagoas', 'Piauí',
    'Distrito Federal', 'Mato Grosso do Sul', 'Sergipe', 'Rondônia', 'Tocantins',
    'Acre', 'Amapá', 'Roraima'
  ],
  zipCodePattern: '#####-###',
  jobTitles: [
    'Engenheiro de Software', 'Gerente de Projetos', 'Analista de Dados',
    'Gerente de Marketing', 'Representante de Vendas', 'Contador', 'Gerente de RH',
    'Designer', 'Gerente de Operações', 'Analista de Negócios', 'Analista Financeiro',
    'Gerente de Produto', 'Administrador de Sistemas', 'Atendente ao Cliente',
    'Engenheiro de Qualidade', 'Redator Técnico', 'Administrador de Banco de Dados',
    'Engenheiro de Redes', 'Coordenador de Marketing', 'Supervisor de Vendas'
  ],
  departments: [
    'Engenharia', 'Marketing', 'Vendas', 'Recursos Humanos', 'Financeiro',
    'Operações', 'Atendimento ao Cliente', 'TI', 'Pesquisa e Desenvolvimento',
    'Jurídico', 'Gestão de Produtos', 'Design', 'Qualidade', 'Administração'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    const complement = Random.pick(['Apto', 'Casa', 'Sala', 'Bloco']);
    const complementNumber = Random.int(1, 500);
    return `${street}, ${houseNumber} - ${complement} ${complementNumber}, ${city} - ${state}, CEP ${zipCode}`;
  },

  generateZipCode(): string {
    const part1 = String(Random.int(10000, 99999));
    const part2 = String(Random.int(100, 999));
    return `${part1}-${part2}`;
  }
};