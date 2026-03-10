import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_LU: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Michel', 'Marc', 'Patrick', 'Christian', 'Daniel', 'Philippe',
    'Nicolas', 'David', 'Thomas', 'Christophe', 'Stéphane', 'Eric', 'Olivier',
    'Laurent', 'Bruno', 'Frédéric', 'Sébastien', 'Julien', 'Maxime', 'Antoine'
  ],
  firstNamesFemale: [
    'Marie', 'Anne', 'Christine', 'Nathalie', 'Isabelle', 'Sophie', 'Catherine',
    'Brigitte', 'Sylvie', 'Monique', 'Patricia', 'Dominique', 'Françoise', 'Nicole',
    'Valérie', 'Sandrine', 'Virginie', 'Julie', 'Céline', 'Laurence', 'Stéphanie'
  ],
  lastNames: [
    'Schmit', 'Schmitt', 'Weber', 'Muller', 'Hoffmann', 'Weis', 'Klein',
    'Wagner', 'Léonard', 'Wolff', 'Meyer', 'Reuter', 'Fischer', 'Heinrich',
    'Hansen', 'Lucas', 'Barblé', 'Krier', 'Oberweis', 'Gilles', 'Erpelding'
  ],
  streets: [
    'Avenue de la Liberté', 'Avenue de la Gare', 'Rue du Commerce',
    'Boulevard Royal', 'Avenue Monterey', 'Rue Aldringen', 'Place d\'Armes',
    'Rue de Strasbourg', 'Boulevard F.D. Roosevelt', 'Avenue Guillaume'
  ],
  cities: [
    'Luxembourg', 'Esch-sur-Alzette', 'Differdange', 'Dudelange', 'Ettelbruck',
    'Diekirch', 'Strassen', 'Bertrange', 'Bettembourg', 'Pétange'
  ],
  states: [
    'Luxembourg', 'Esch-sur-Alzette', 'Capellen', 'Mersch', 'Grevenmacher',
    'Remich', 'Echternach', 'Diekirch', 'Redange', 'Clervaux', 'Vianden', 'Wiltz'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Ingénieur logiciel', 'Chef de projet', 'Analyste de données', 'Responsable marketing',
    'Commercial', 'Comptable', 'Responsable RH', 'Designer', 'Responsable des opérations'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Ventes', 'Ressources Humaines', 'Finance',
    'Opérations', 'Service Client', 'IT', 'Recherche et Développement', 'Juridique'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 200);
    return `${street} ${houseNumber}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+352 2# ### ###',
    '+352 4# ### ###',
    '+352 6## ### ###',
    '2# ### ###',
    '6## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.com', 'hotmail.com',
    'pt.lu', 'post.lu', 'restena.lu'
  ],

  companyNames: [
    'Banque et Caisse d\'Épargne de l\'État', 'Banque Internationale à Luxembourg',
    'BGL BNP Paribas', 'Société Générale Luxembourg', 'ArcelorMittal', 'SES'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Médias', 'Télécommunications', 'Énergie', 'Transport'
  ],

  catchPhrases: [
    'Innover pour demain', 'Votre réussite est notre mission', 'Construire l\'avenir ensemble',
    'Qualité et excellence', 'Votre partenaire de confiance'
  ]
};
