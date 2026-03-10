import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ar_MA: LocaleDefinition = {
  firstNamesMale: [
    'Mohammed', 'Ahmed', 'Ali', 'Hassan', 'Hussain', 'Abdul', 'Rahman', 'Rahim',
    'Karim', 'Malik', 'Imran', 'Bilal', 'Faisal', 'Waseem', 'Naveed', 'Shahid',
    'Youssef', 'Omar', 'Hamza', 'Yusuf', 'Ibrahim', 'Musa', 'Ismail', 'Zakaria',
    'Ayoub', 'Reda', 'Tarik', 'Saïd', 'Rachid', 'Mustapha', 'Hicham', 'Karim'
  ],
  firstNamesFemale: [
    'Fatima', 'Ayesha', 'Zainab', 'Khadija', 'Maryam', 'Sana', 'Hina', 'Nadia',
    'Sadia', 'Farah', 'Shazia', 'Rubab', 'Mahnoor', 'Hafsa', 'Amina', 'Sumaya',
    'Khadijah', 'Aicha', 'Rokia', 'Zahra', 'Salma', 'Meryem', 'Rajaa', 'Latifa',
    'Samira', 'Naima', 'Hassna', 'Bahija', 'Kaltoum', 'Oumaima', 'Yasmin', 'Loubna'
  ],
  lastNames: [
    'El Idrissi', 'El Fassi', 'El Filali', 'El Alami', 'El Hassani', 'El Otmani',
    'El Baghdadi', 'El Mekki', 'El Fassi', 'El Marrakchi', 'El Ouazzani', 'El Tetouani',
    'El Safi', 'El Jadidi', 'El Kelaa', 'El Bouayachi', 'El Guerrouj', 'El Haddad',
    'El Benna', 'El Amrani', 'El Kadiri', 'El Bouhali', 'El Ghazi', 'El Moutawakil'
  ],
  streets: [
    'Avenue Mohammed V', 'Boulevard Hassan II', 'Avenue des FAR', 'Rue Prince Moulay Abdellah',
    'Avenue Allal Ben Abdellah', 'Boulevard Zerktouni', 'Avenue Moulay Youssef', 'Rue Ibn Batouta',
    'Avenue Omar Ibn Al Khattab', 'Boulevard d\'Anfa', 'Corniche Ain Diab', 'Boulevard de la Corniche',
    'Avenue Mers Sultan', 'Rue Tata', 'Avenue Fquih El Gabbas', 'Boulevard Abdelmoumen'
  ],
  cities: [
    'Casablanca', 'Rabat', 'Fès', 'Marrakech', 'Tanger', 'Agadir', 'Meknès', 'Oujda',
    'Kénitra', 'Tétouan', 'Safi', 'El Jadida', 'Nador', 'Béni Mellal', 'Khouribga',
    'Settat', 'Larache', 'Ksar El Kebir', 'Guelmim', 'Berrechid', 'Taza', 'Mohammedia'
  ],
  states: [
    'Casablanca-Settat', 'Rabat-Salé-Kénitra', 'Fès-Meknès', 'Marrakech-Safi',
    'Tanger-Tétouan-Al Hoceïma', 'Souss-Massa', 'Oriental', 'Béni Mellal-Khénifra',
    'Drâa-Tafilalet', 'Guelmim-Oued Noun', 'Laâyoune-Sakia El Hamra', 'Dakhla-Oued Ed-Dahab'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Ingénieur Logiciel', 'Chef de Projet', 'Analyste de Données', 'Responsable Marketing',
    'Commercial', 'Comptable', 'Responsable RH', 'Designer', 'Responsable des Opérations',
    'Analyste d\'Affaires', 'Chef de Produit', 'Administrateur Système', 'Ingénieur Qualité',
    'Rédacteur Technique', 'Administrateur de Base de Données', 'Ingénieur Réseau', 'DevOps'
  ],
  departments: [
    'Ingénierie', 'Marketing', 'Ventes', 'Ressources Humaines', 'Finances',
    'Opérations', 'Service Client', 'IT', 'Recherche et Développement',
    'Juridique', 'Gestion de Produits', 'Design', 'Assurance Qualité', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 999);
    const quartier = Random.pick(['Centre Ville', 'Agdal', 'Hay Riad', 'Ocean', 'Massira', 'Narjiss']);
    return `${number} ${street}, ${quartier}, ${city} ${zipCode}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};
