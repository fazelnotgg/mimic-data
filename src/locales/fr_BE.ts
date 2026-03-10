import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_BE: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Marc', 'Michel', 'Philippe', 'Patrick', 'Christian', 'Daniel',
    'Nicolas', 'Thomas', 'David', 'Christophe', 'Stéphane', 'Eric', 'Olivier',
    'Laurent', 'Bruno', 'Frédéric', 'Sébastien', 'Julien', 'Maxime', 'Antoine',
    'Guillaume', 'Alexandre', 'Romain', 'Vincent', 'William', 'Richard',
    'Robert', 'Charles', 'Louis', 'Henri', 'Georges', 'Albert', 'Joseph'
  ],
  firstNamesFemale: [
    'Marie', 'Anne', 'Christine', 'Nathalie', 'Isabelle', 'Sophie', 'Catherine',
    'Brigitte', 'Sylvie', 'Monique', 'Patricia', 'Dominique', 'Françoise', 'Nicole',
    'Valérie', 'Sandrine', 'Virginie', 'Julie', 'Céline', 'Laurence', 'Stéphanie',
    'Caroline', 'Nadine', 'Véronique', 'Corinne', 'Sabrina', 'Audrey', 'Elodie',
    'Mélanie', 'Jessica', 'Laura', 'Sarah', 'Emma', 'Léa', 'Chloé'
  ],
  lastNames: [
    'Dubois', 'Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard',
    'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel',
    'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier', 'Morel',
    'Girard', 'Andre', 'Lefevre', 'Mercier', 'Dupont', 'Lambert', 'Bonnet',
    'Francois', 'Martinez', 'Legrand', 'Garnier', 'Faure', 'Rousseau',
    'Blanc', 'Guerin', 'Boyer', 'Gautier', 'Perrin', 'Robin', 'Morin'
  ],
  streets: [
    'Rue de la Loi', 'Avenue Louise', 'Boulevard du Régent', 'Rue Royale',
    'Chaussée de Wavre', 'Avenue de Tervueren', 'Rue du Midi', 'Boulevard Anspach',
    'Chaussée d\'Ixelles', 'Rue de Namur', 'Avenue Brugmann', 'Rue de Stassart',
    'Chaussée de Charleroi', 'Boulevard Léopold II', 'Avenue du Port',
    'Rue Haute', 'Chaussée de Gand', 'Boulevard Saint-Michel', 'Avenue Paul Héger'
  ],
  cities: [
    'Bruxelles', 'Anvers', 'Gand', 'Charleroi', 'Liège', 'Bruges', 'Namur',
    'Louvain', 'Mons', 'Alost', 'Malines', 'Courtrai', 'Verviers', 'Ostende',
    'Tournai', 'Genk', 'Seraing', 'Roeselare', 'Mouscron', 'Bressoux',
    'Jambes', 'Saint-Nicolas', 'Wavre', 'Beveren', 'Kortrijk'
  ],
  states: [
    'Bruxelles-Capitale', 'Flandre', 'Wallonie', 'Anvers', 'Flandre-Orientale',
    'Flandre-Occidentale', 'Hainaut', 'Liège', 'Namur', 'Brabant wallon',
    'Brabant flamand', 'Limbourg', 'Luxembourg'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Ingénieur logiciel', 'Chef de projet', 'Analyste de données', 'Responsable marketing',
    'Commercial', 'Comptable', 'Responsable RH', 'Designer', 'Responsable des opérations',
    'Analyste d\'affaires', 'Chef de produit', 'Administrateur système', 'Support client',
    'Ingénieur qualité', 'Rédacteur technique', 'Administrateur de base de données',
    'Ingénieur réseau', 'Designer UX', 'Rédacteur de contenu', 'Responsable de compte'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Ventes', 'Ressources Humaines', 'Finance',
    'Opérations', 'Service Client', 'IT', 'Recherche et Développement',
    'Juridique', 'Gestion de Produit', 'Design', 'Assurance Qualité', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 500);
    const box = Random.int(1, 50);
    return `${street} ${houseNumber} bte ${box}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+32 2 ### ## ##',
    '+32 3 ### ## ##',
    '+32 4## ## ## ##',
    '02 ### ## ##',
    '03 ### ## ##',
    '04## ## ## ##',
    '09 ### ## ##',
    '047# ## ## ##',
    '048# ## ## ##',
    '049# ## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.com', 'hotmail.com',
    'skynet.be', 'belgacom.net', 'telenet.be', 'proximus.be',
    'voo.be', 'scarlet.be', 'mail.com', 'icloud.com'
  ],

  companyNames: [
    'Anheuser-Busch InBev', 'TotalEnergies', 'Umicore', 'KBC Group', 'Belfius',
    'BNP Paribas Fortis', 'ING Belgique', 'Solvay', 'Ageas', 'Proximus',
    'Colruyt', 'Delhaize', 'Carrefour Belgique', 'Telenet', 'VRT', 'RTBF'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Médias', 'Télécommunications', 'Énergie', 'Transport',
    'Immobilier', 'Conseil', 'Hôtellerie', 'Automobile', 'Aérospatial',
    'Pharmaceutique', 'Agroalimentaire', 'Chimie'
  ],

  catchPhrases: [
    'Innover pour demain', 'Votre réussite est notre mission', 'Construire l\'avenir ensemble',
    'Qualité et excellence', 'L\'innovation au service de tous', 'Votre partenaire de confiance',
    'Engagés pour votre succès', 'Créer de la valeur durable', 'L\'expertise belge'
  ]
};
