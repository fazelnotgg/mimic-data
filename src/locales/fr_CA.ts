import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_CA: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'Pierre', 'Michel', 'Daniel', 'Marc', 'Patrick', 'Christian', 'Philippe',
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
    'Tremblay', 'Gagnon', 'Roy', 'Côté', 'Bouchard', 'Gauthier', 'Morin',
    'Lavoie', 'Fortin', 'Gagné', 'Blais', 'Bélanger', 'Lévesque', 'Bergeron',
    'Pelletier', 'Li', 'Beaulieu', 'Lachance', 'Girard', 'Ouellet', 'Bédard',
    'Bilodeau', 'Cournoyer', 'Fontaine', 'Gosselin', 'Lambert', 'Leclerc',
    'Martin', 'Bernard', 'Dubois', 'Thomas', 'Petit', 'Robert', 'Richard',
    'Durand', 'Leroy', 'Moreau', 'Simon', 'Lefebvre', 'Michel', 'Garcia'
  ],
  streets: [
    'Rue Sainte-Catherine', 'Boulevard Saint-Laurent', 'Avenue du Parc',
    'Rue Notre-Dame', 'Boulevard René-Lévesque', 'Rue Sherbrooke',
    'Avenue Mont-Royal', 'Rue Saint-Denis', 'Boulevard Maisonneuve',
    'Rue de la Montagne', 'Rue Wellington', 'Avenue Laurier',
    'Boulevard Saint-Germain', 'Rue du Petit-Champlain', 'Grande Allée',
    'Boulevard Champlain', 'Route 132', 'Autoroute 40', 'Autoroute 20'
  ],
  cities: [
    'Montréal', 'Québec', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke',
    'Saguenay', 'Lévis', 'Trois-Rivières', 'Terrebonne', 'Saint-Jean-sur-Richelieu',
    'Repentigny', 'Brossard', 'Drummondville', 'Saint-Jérôme', 'Granby',
    'Blainville', 'Shawinigan', 'Rimouski', 'Victoriaville', 'Alma',
    'Rouyn-Noranda', 'Sorel-Tracy', 'Val-d\'Or', 'Sept-Îles'
  ],
  states: [
    'Québec', 'Ontario', 'Colombie-Britannique', 'Alberta', 'Manitoba',
    'Saskatchewan', 'Nouvelle-Écosse', 'Nouveau-Brunswick', 'Terre-Neuve-et-Labrador',
    'Île-du-Prince-Édouard', 'Territoires du Nord-Ouest', 'Yukon', 'Nunavut'
  ],
  zipCodePattern: 'H#A #A#',
  jobTitles: [
    'Ingénieur logiciel', 'Chef de projet', 'Analyste de données', 'Responsable marketing',
    'Commercial', 'Comptable', 'Responsable RH', 'Designer', 'Responsable des opérations',
    'Analyste d\'affaires', 'Chef de produit', 'Administrateur système', 'Support client',
    'Ingénieur qualité', 'Rédacteur technique', 'Administrateur de base de données',
    'Ingénieur réseau', 'Designer UX', 'Rédacteur de contenu', 'Responsable de compte'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Ventes', 'Ressources Humaines', 'Finance',
    'Opérations', 'Service Client', 'TI', 'Recherche et Développement',
    'Juridique', 'Gestion de Produit', 'Design', 'Assurance Qualité', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    const apt = Random.int(1, 500);
    return `${houseNumber} ${street}, apt ${apt}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter1 = letters.charAt(Random.int(0, 25));
    const digit1 = String(Random.int(0, 9));
    const letter2 = letters.charAt(Random.int(0, 25));
    const digit2 = String(Random.int(0, 9));
    const letter3 = letters.charAt(Random.int(0, 25));
    const digit3 = String(Random.int(0, 9));
    return `${letter1}${digit1}${letter2} ${digit2}${letter3}${digit3}`;
  },

  phoneFormats: [
    '+1 514 ###-####',
    '+1 438 ###-####',
    '+1 450 ###-####',
    '+1 581 ###-####',
    '+1 418 ###-####',
    '+1 819 ###-####',
    '(514) ###-####',
    '(438) ###-####',
    '(450) ###-####',
    '(581) ###-####',
    '(418) ###-####',
    '(819) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.ca', 'outlook.com', 'hotmail.com',
    'videotron.ca', 'bell.net', 'sympatico.ca', 'icloud.com',
    'protonmail.com', 'mail.com', 'zoho.com'
  ],

  companyNames: [
    'Bombardier', 'Air Canada', 'Banque Nationale', 'Desjardins',
    'Couche-Tard', 'Saputo', 'Power Corporation', 'Jean Coutu',
    'Metro', 'Canadian National', 'CNRC', 'Hydro-Québec',
    'Bell Canada', 'Rogers', 'Telus', 'Loblaws'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Médias', 'Télécommunications', 'Énergie', 'Transport',
    'Immobilier', 'Conseil', 'Hôtellerie', 'Automobile', 'Aérospatial',
    'Pharmaceutique', 'Agroalimentaire', 'Foresterie', 'Mines'
  ],

  catchPhrases: [
    'Innover pour demain', 'Votre réussite est notre mission', 'Construire l\'avenir ensemble',
    'Qualité et excellence', 'L\'innovation au service de tous', 'Votre partenaire de confiance',
    'Engagés pour votre succès', 'Créer de la valeur durable', 'Fierté québécoise'
  ]
};
