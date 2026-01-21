import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const fr_FR: LocaleDefinition = {
  firstNamesMale: [
    'Gabriel', 'Raphaël', 'Léo', 'Louis', 'Lucas', 'Adam', 'Arthur', 'Hugo',
    'Jules', 'Maël', 'Noah', 'Tom', 'Nathan', 'Ethan', 'Paul', 'Théo',
    'Pierre', 'Jean', 'Marc', 'François', 'Michel', 'Nicolas', 'Antoine',
    'Philippe', 'Jacques', 'Christophe', 'Olivier', 'Julien', 'David',
    'Alexandre', 'Sébastien', 'Laurent', 'Guillaume', 'Maxime', 'Benjamin',
    'Thomas', 'Vincent', 'Daniel', 'Patrick', 'Christian', 'Bernard', 'André'
  ],
  firstNamesFemale: [
    'Emma', 'Léa', 'Chloé', 'Manon', 'Camille', 'Zoé', 'Sarah', 'Lola',
    'Inès', 'Jade', 'Louise', 'Lina', 'Rose', 'Alice', 'Juliette', 'Clara',
    'Marie', 'Sophie', 'Isabelle', 'Julie', 'Nathalie', 'Caroline', 'Laura',
    'Émilie', 'Pauline', 'Charlotte', 'Lucie', 'Céline', 'Marine', 'Sandra',
    'Valérie', 'Sylvie', 'Catherine', 'Martine', 'Christine', 'Françoise',
    'Monique', 'Nicole', 'Véronique', 'Brigitte', 'Dominique', 'Anne', 'Claire'
  ],
  lastNames: [
    'Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard', 'Durand',
    'Dubois', 'Moreau', 'Laurent', 'Simon', 'Michel', 'Lefebvre', 'Leroy',
    'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard', 'Bonnet',
    'Dupont', 'Lambert', 'Fontaine', 'Rousseau', 'Vincent', 'Muller', 'Lefevre',
    'Faure', 'Andre', 'Mercier', 'Blanc', 'Guerin', 'Boyer', 'Garnier',
    'Chevalier', 'Francois', 'Legrand', 'Gauthier', 'Garcia', 'Perrin',
    'Robin', 'Clement', 'Morin', 'Nicolas', 'Henry', 'Roussel', 'Matthieu'
  ],
  streets: [
    'Rue de la Paix', 'Avenue des Champs-Élysées', 'Boulevard Haussmann',
    'Rue de Rivoli', 'Rue Saint-Honoré', 'Avenue Montaigne', 'Rue du Faubourg',
    'Boulevard Saint-Germain', 'Rue de Vaugirard', 'Avenue Victor Hugo',
    'Rue Lafayette', 'Boulevard Voltaire', 'Rue de la République', 'Place de la Concorde',
    'Rue Nationale', 'Avenue Jean Jaurès', 'Rue Pasteur', 'Boulevard Gambetta',
    'Rue du Général de Gaulle', 'Avenue de la Liberté', 'Rue Carnot', 'Place du Marché',
    'Rue Victor Hugo', 'Boulevard de la Mer', 'Rue des Écoles', 'Avenue du Président'
  ],
  cities: [
    'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg',
    'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne',
    'Toulon', 'Grenoble', 'Dijon', 'Angers', 'Nîmes', 'Villeurbanne', 'Saint-Denis',
    'Le Mans', 'Aix-en-Provence', 'Clermont-Ferrand', 'Brest', 'Limoges', 'Tours',
    'Amiens', 'Perpignan', 'Metz', 'Besançon', 'Boulogne-Billancourt', 'Orléans',
    'Mulhouse', 'Rouen', 'Caen', 'Nancy', 'Argenteuil', 'Montreuil', 'Saint-Paul'
  ],
  states: [
    'Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes',
    'Nouvelle-Aquitaine', 'Occitanie', 'Hauts-de-France', 'Pays de la Loire',
    'Bretagne', 'Grand Est', 'Normandie', 'Bourgogne-Franche-Comté',
    'Centre-Val de Loire', 'Corse'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingénieur Logiciel', 'Chef de Projet', 'Analyste de Données', 'Responsable Marketing',
    'Commercial', 'Comptable', 'Responsable RH', 'Designer', 'Responsable des Opérations',
    'Analyste d\'Affaires', 'Analyste Financier', 'Chef de Produit',
    'Administrateur Système', 'Chargé de Clientèle', 'Ingénieur Qualité',
    'Rédacteur Technique', 'Administrateur de Base de Données', 'Ingénieur Réseau'
  ],
  departments: [
    'Engineering', 'Marketing', 'Commercial', 'Ressources Humaines', 'Finance',
    'Opérations', 'Service Client', 'IT', 'Recherche et Développement',
    'Juridique', 'Gestion de Produit', 'Design', 'Assurance Qualité', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 300);
    return `${houseNumber} ${street}, ${zipCode} ${city}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};