import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_CH: LocaleDefinition = {
  firstNamesMale: [
    'Alain', 'Bernard', 'Claude', 'Daniel', 'David', 'Eric', 'Fabrice', 'François',
    'Frédéric', 'Georges', 'Gilbert', 'Gilles', 'Henri', 'Jacques', 'Jean',
    'Jean-Claude', 'Jean-Paul', 'Jean-Pierre', 'Joseph', 'Julien', 'Laurent',
    'Marc', 'Mario', 'Martin', 'Michel', 'Nicolas', 'Patrick', 'Paul',
    'Philippe', 'Pierre', 'René', 'Richard', 'Robert', 'Roger', 'Stéphane',
    'Thierry', 'Thomas', 'Victor', 'William', 'Yves', 'André', 'Christian'
  ],
  firstNamesFemale: [
    'Anne', 'Brigitte', 'Caroline', 'Catherine', 'Chantal', 'Christiane', 'Christine',
    'Claire', 'Corinne', 'Danielle', 'Dominique', 'Elisabeth', 'Florence', 'Françoise',
    'Geneviève', 'Hélène', 'Isabelle', 'Jacqueline', 'Jeanne', 'Josiane', 'Julie',
    'Laurence', 'Liliane', 'Marie', 'Marie-Claire', 'Martine', 'Monique', 'Nadine',
    'Nathalie', 'Nicole', 'Odette', 'Pascale', 'Patricia', 'Sandrine', 'Sophie',
    'Stéphanie', 'Sylvie', 'Valérie', 'Véronique', 'Yvette', 'Yvonne', 'Céline'
  ],
  lastNames: [
    'Müller', 'Frey', 'Bieri', 'Gasser', 'Keller', 'Haller', 'Studer', 'Gerber',
    'Brunner', 'Schmid', 'Weber', 'Meier', 'Schneider', 'Fischer', 'Kaufmann',
    'Baumann', 'Huber', 'Moser', 'Roth', 'Schwarz', 'Graf', 'Steiner', 'Vogel',
    'Berger', 'Francois', 'Dubois', 'Martin', 'Bernard', 'Petit', 'Robert',
    'Richard', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre',
    'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier'
  ],
  streets: [
    'Rue du Rhône', 'Bahnhofstrasse', 'Rue de la Confédération', 'Avenue de la Gare',
    'Rue du Marché', 'Rue de Lausanne', 'Avenue du Théâtre', 'Rue de Carouge',
    'Rue Verdaine', 'Rue de l\'Hôtel-de-Ville', 'Rue Calvin', 'Rue de la Servette',
    'Route de Chêne', 'Route de Malagnou', 'Avenue de Champel', 'Rue de Monthoux',
    'Rue de la Corraterie', 'Quai du Mont-Blanc', 'Rue de Richemont', 'Rue de Monthoux'
  ],
  cities: [
    'Zürich', 'Genève', 'Basel', 'Lausanne', 'Bern', 'Winterthur', 'Luzern',
    'St. Gallen', 'Lugano', 'Biel/Bienne', 'Thun', 'Köniz', 'La Chaux-de-Fonds',
    'Schaffhausen', 'Fribourg', 'Vernier', 'Chur', 'Neuchâtel', 'Uster',
    'Sion', 'Emmen', 'Yverdon-les-Bains', 'Zug', 'Kloten', 'Dietikon'
  ],
  states: [
    'Zürich', 'Genève', 'Bern', 'Vaud', 'Valais', 'Neuchâtel', 'Fribourg',
    'Jura', 'Bâle-Ville', 'Bâle-Campagne', 'Argovie', 'Soleure', 'Lucerne',
    'Tessin', 'Grisons', 'Saint-Gall', 'Thurgovie', 'Schwytz', 'Obwald', 'Nidwald'
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
    const houseNumber = Random.int(1, 300);
    return `${street} ${houseNumber}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+41 21 ### ## ##',
    '+41 22 ### ## ##',
    '+41 31 ### ## ##',
    '+41 32 ### ## ##',
    '+41 41 ### ## ##',
    '+41 43 ### ## ##',
    '+41 44 ### ## ##',
    '+41 52 ### ## ##',
    '+41 55 ### ## ##',
    '+41 56 ### ## ##',
    '+41 58 ### ## ##',
    '+41 61 ### ## ##',
    '+41 62 ### ## ##',
    '+41 71 ### ## ##',
    '+41 81 ### ## ##',
    '+41 91 ### ## ##',
    '+41 79 ### ## ##',
    '+41 78 ### ## ##',
    '+41 77 ### ## ##',
    '+41 76 ### ## ##',
    '+41 75 ### ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.fr', 'outlook.com', 'hotmail.com',
    'bluewin.ch', 'sunrise.ch', 'swissonline.ch', 'quicknet.ch',
    'vtxnet.ch', 'icloud.com', 'protonmail.com', 'mail.com'
  ],

  companyNames: [
    'Nestlé', 'Roche', 'Novartis', 'UBS', 'Credit Suisse', 'Zurich Insurance',
    'Swiss Re', 'ABB', 'Glencore', 'Trafigura', 'Mercuria', 'LafargeHolcim',
    'Syngenta', 'Swisscom', 'SBB CFF FFS', 'Migros', 'Coop', 'Richemont',
    'Swatch Group', 'Rolex'
  ],

  industries: [
    'Technologie', 'Finance', 'Santé', 'Éducation', 'Commerce de détail',
    'Fabrication', 'Médias', 'Télécommunications', 'Énergie', 'Transport',
    'Immobilier', 'Conseil', 'Hôtellerie', 'Automobile', 'Aérospatial',
    'Pharmaceutique', 'Horlogerie', 'Agroalimentaire', 'Chimie', 'Assurance'
  ],

  catchPhrases: [
    'Précision et excellence', 'Votre réussite est notre engagement', 'Innovation suisse',
    'Qualité et fiabilité', 'L\'excellence au service de tous', 'Votre partenaire de confiance',
    'Tradition et innovation', 'Créer de la valeur durable', 'Le savoir-faire suisse'
  ]
};
