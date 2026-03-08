import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const et_EE: LocaleDefinition = {
  firstNamesMale: [
    'Martin', 'Andrei', 'Sergei', 'Dmitri', 'Alexander', 'Igor', 'Jüri', 'Toomas',
    'Tarmo', 'Marek', 'Rainer', 'Kristjan', 'Marko', 'Andres', 'Peeter',
    'Kalle', 'Indrek', 'Matti', 'Urmas', 'Erik', 'Oliver', 'Markus', 'Daniel',
    'Kevin', 'Joonas', 'Sander', 'Rasmus', 'Henri', 'Richard', 'Robert'
  ],
  firstNamesFemale: [
    'Jelena', 'Anna', 'Natalja', 'Irina', 'Katrin', 'Marina', 'Olga', 'Svetlana',
    'Tatjana', 'Nadežda', 'Galina', 'Ljudmila', 'Ene', 'Sirje', 'Piret',
    'Kadri', 'Kristiina', 'Liina', 'Mari', 'Eva', 'Laura', 'Karin', 'Signe',
    'Helena', 'Victoria', 'Emma', 'Sofia', 'Elisabeth', 'Maria', 'Anastasia'
  ],
  lastNames: [
    'Tamm', 'Kask', 'Mägi', 'Koppel', 'Aas', 'Sepp', 'Kuznetsov', 'Ivanov',
    'Smirnov', 'Toom', 'Lepik', 'Kivi', 'Mets', 'Lill', 'Oja', 'Saar',
    'Volkov', 'Sokolov', 'Kruus', 'Rand', 'Kütt', 'Mänd', 'Puu', 'Kallas',
    'Hein', 'Karu', 'Ilves', 'Kalda', 'Laur', 'Pärn', 'Roos', 'Tamme'
  ],
  streets: [
    'Narva maantee', 'Pärnu maantee', 'Tartu maantee', 'Viru tänav', 'Vabaduse puiestee',
    'Estonia puiestee', 'Liivalaia tänav', 'Sakala tänav', 'Endla tänav', 'Paldiski maantee',
    'Suur-Ameerika tänav', 'Telliskivi tänav', 'Kopli tänav', 'Sõle tänav', 'Rannamäe tee',
    'Kloostrimetsa tee', 'Peterburi tee', 'Lasnamäe tänav', 'Mustamäe tee', 'Ehitajate tee'
  ],
  cities: [
    'Tallinn', 'Tartu', 'Narva', 'Pärnu', 'Kohtla-Järve', 'Viljandi', 'Rakvere',
    'Maardu', 'Sillamäe', 'Kuressaare', 'Võru', 'Valga', 'Haapsalu', 'Jõhvi',
    'Paide', 'Keila', 'Kiviõli', 'Tapa', 'Põlva', 'Türi', 'Elva', 'Rapla'
  ],
  states: [
    'Harjumaa', 'Tartumaa', 'Ida-Virumaa', 'Pärnumaa', 'Lääne-Virumaa',
    'Viljandimaa', 'Võrumaa', 'Saaremaa', 'Hiiumaa', 'Järvamaa',
    'Raplamaa', 'Valgamaa', 'Põlvamaa', 'Läänemaa', 'Jõgevamaa'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Tarkvaraarendaja', 'Projektijuht', 'Andmeanalüütik', 'Turundusjuht',
    'Müügiesindaja', 'Raamatupidaja', 'Personalijuht', 'Disainer', 'Tegevusjuht',
    'Ärianalüütik', 'Tootejuht', 'Süsteemiadministraator', 'Kvaliteediinsener',
    'Tehniline kirjutaja', 'Andmebaasi administraator', 'Võrguinsener', 'DevOps insener'
  ],
  departments: [
    'Arendus', 'Turundus', 'Müük', 'Personal', 'Rahandus', 'Operatsioonid',
    'Klienditugi', 'IT', 'Teadus ja arendus', 'Juriidiline', 'Tootejuhtimine',
    'Disain', 'Kvaliteedikontroll', 'Administratsioon'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 100);
    const apartment = Random.int(1, 50);
    return `${street} ${number}-${apartment}, ${zipCode} ${city}, ${state}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};
