import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const de_LU: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Michel', 'Marc', 'Patrick', 'Christian', 'Daniel', 'Philippe',
    'Nicolas', 'David', 'Thomas', 'Christophe', 'Stéphane', 'Eric', 'Olivier',
    'Laurent', 'Bruno', 'Frédéric', 'Sébastien', 'Julien', 'Maxime', 'Antoine',
    'Guillaume', 'Alexandre', 'Romain', 'Vincent', 'William', 'Richard',
    'Robert', 'Charles', 'Louis', 'Henri', 'Georges', 'Albert', 'Joseph',
    'François', 'André', 'Gilles', 'Yves', 'Mario', 'Martin', 'Claude'
  ],
  firstNamesFemale: [
    'Marie', 'Anne', 'Christine', 'Nathalie', 'Isabelle', 'Sophie', 'Catherine',
    'Brigitte', 'Sylvie', 'Monique', 'Patricia', 'Dominique', 'Françoise', 'Nicole',
    'Valérie', 'Sandrine', 'Virginie', 'Julie', 'Céline', 'Laurence', 'Stéphanie',
    'Caroline', 'Nadine', 'Véronique', 'Corinne', 'Sabrina', 'Audrey', 'Elodie',
    'Mélanie', 'Jessica', 'Laura', 'Sarah', 'Emma', 'Léa', 'Chloé', 'Gabrielle'
  ],
  lastNames: [
    'Schmit', 'Schmitt', 'Weber', 'Muller', 'Hoffmann', 'Weis', 'Klein',
    'Wagner', 'Léonard', 'Wolff', 'Meyer', 'Reuter', 'Fischer', 'Heinrich',
    'Hansen', 'Klein', 'Lucas', 'Barblé', 'Krier', 'Oberweis', 'Gilles',
    'Erpelding', 'Jung', 'Biver', 'Blaise', 'Hamilius', 'Kemp', 'Koener'
  ],
  streets: [
    'Avenue de la Liberté', 'Avenue de la Gare', 'Rue du Commerce',
    'Boulevard Royal', 'Avenue Monterey', 'Rue Aldringen', 'Place d\'Armes',
    'Rue de Strasbourg', 'Boulevard F.D. Roosevelt', 'Avenue Guillaume',
    'Rue Notre-Dame', 'Montée du Grund', 'Rue du Marché-aux-Herbes',
    'Place Guillaume II', 'Boulevard Joseph II', 'Rue Chimay'
  ],
  cities: [
    'Luxembourg', 'Esch-sur-Alzette', 'Differdange', 'Dudelange', 'Ettelbruck',
    'Diekirch', 'Strassen', 'Bertrange', 'Bettembourg', 'Pétange',
    'Echternach', 'Rumelange', 'Wiltz', 'Grevenmacher', 'Remich', 'Vianden'
  ],
  states: [
    'Luxembourg', 'Esch-sur-Alzette', 'Capellen', 'Mersch', 'Grevenmacher',
    'Remich', 'Echternach', 'Diekirch', 'Redange', 'Clervaux', 'Vianden', 'Wiltz'
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
    const houseNumber = Random.int(1, 200);
    return `${street} ${houseNumber}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    const codes = [
      String(Random.int(1000, 1999)),
      String(Random.int(2000, 2999)),
      String(Random.int(3000, 3999)),
      String(Random.int(4000, 4999)),
      String(Random.int(5000, 5999)),
      String(Random.int(6000, 6999)),
      String(Random.int(7000, 7999)),
      String(Random.int(8000, 8999)),
      String(Random.int(9000, 9999))
    ];
    return codes[Math.floor(Math.random() * codes.length)];
  },

  phoneFormats: [
    '+352 2# ### ###',
    '+352 4# ### ###',
    '+352 5# ### ###',
    '+352 6## ### ###',
    '+352 26## ## ##',
    '+352 27## ## ##',
    '2# ### ###',
    '4# ### ###',
    '6## ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'mail.com', 'protonmail.com',
    'pt.lu', 'post.lu', 'restena.lu', 'joinville.lu'
  ],

  companyNames: [
    'Banque et Caisse d\'Épargne de l\'État', 'Banque Internationale à Luxembourg',
    'BGL BNP Paribas', 'Société Générale Luxembourg', 'Raiffeisen',
    'ArcelorMittal', 'SES', 'Post Luxembourg', 'CFL', 'Enovos',
    'Creos', 'Deloitte Luxembourg', 'PwC Luxembourg', 'KPMG Luxembourg'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Médias', 'Télécommunications', 'Énergie', 'Transport',
    'Immobilier', 'Conseil', 'Hôtellerie', 'Automobile', 'Aérospatial',
    'Acier', 'Fiscalité', 'Assurance'
  ],

  catchPhrases: [
    'Innover pour demain', 'Votre réussite est notre mission', 'Construire l\'avenir ensemble',
    'Qualité et excellence', 'L\'innovation au service de tous', 'Votre partenaire de confiance',
    'Engagés pour votre succès', 'Créer de la valeur durable', 'Fierté luxembourgeoise'
  ]
};
