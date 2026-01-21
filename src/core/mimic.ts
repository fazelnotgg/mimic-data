import { LocaleDefinition, Gender, PersonData, AddressData, PhysicalData, WorkData, AgeRange } from '../types';
import { Random } from './random';

export class Mimic {
  private locale: LocaleDefinition;

  constructor(locale: LocaleDefinition) {
    this.locale = locale;
  }

  /**
   * Update the locale
   */
  setLocale(locale: LocaleDefinition): void {
    this.locale = locale;
  }

  /**
   * Identity generator
   */
  get identity() {
    return {
      firstName: (gender?: Gender): string => {
        const genderChoice = gender || Random.pick(['male', 'female'] as Gender[]);
        return genderChoice === 'male' 
          ? Random.pick(this.locale.firstNamesMale)
          : Random.pick(this.locale.firstNamesFemale);
      },

      lastName: (): string => {
        return Random.pick(this.locale.lastNames);
      },

      fullName: (gender?: Gender): string => {
        const genderChoice = gender || Random.pick(['male', 'female'] as Gender[]);
        const firstName = genderChoice === 'male'
          ? Random.pick(this.locale.firstNamesMale)
          : Random.pick(this.locale.firstNamesFemale);
        const lastName = Random.pick(this.locale.lastNames);
        return this.locale.formatFullName(firstName, lastName);
      },

      gender: (): Gender => {
        return Random.pick(['male', 'female'] as Gender[]);
      },

      age: (range?: AgeRange): number => {
        const min = range?.min ?? 18;
        const max = range?.max ?? 65;
        return Random.int(min, max);
      },

      dateOfBirth: (range?: AgeRange): Date => {
        const age = this.identity.age(range);
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - age;
        const month = Random.int(0, 11);
        const day = Random.int(1, 28);
        return new Date(birthYear, month, day);
      },

      person: (gender?: Gender, ageRange?: AgeRange): PersonData => {
        const genderChoice = gender || Random.pick(['male', 'female'] as Gender[]);
        const firstName = genderChoice === 'male'
          ? Random.pick(this.locale.firstNamesMale)
          : Random.pick(this.locale.firstNamesFemale);
        const lastName = Random.pick(this.locale.lastNames);
        const age = this.identity.age(ageRange);
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - age;
        const month = Random.int(0, 11);
        const day = Random.int(1, 28);

        return {
          firstName,
          lastName,
          fullName: this.locale.formatFullName(firstName, lastName),
          gender: genderChoice,
          age,
          dateOfBirth: new Date(birthYear, month, day)
        };
      }
    };
  }

  /**
   * Location generator
   */
  get location() {
    return {
      street: (): string => {
        return Random.pick(this.locale.streets);
      },

      city: (): string => {
        return Random.pick(this.locale.cities);
      },

      state: (): string => {
        return Random.pick(this.locale.states);
      },

      zipCode: (): string => {
        return this.locale.generateZipCode();
      },

      fullAddress: (): string => {
        const street = Random.pick(this.locale.streets);
        const city = Random.pick(this.locale.cities);
        const state = Random.pick(this.locale.states);
        const zipCode = this.locale.generateZipCode();
        return this.locale.formatAddress(street, city, state, zipCode);
      },

      address: (): AddressData => {
        const street = Random.pick(this.locale.streets);
        const city = Random.pick(this.locale.cities);
        const state = Random.pick(this.locale.states);
        const zipCode = this.locale.generateZipCode();

        return {
          street,
          city,
          state,
          zipCode,
          fullAddress: this.locale.formatAddress(street, city, state, zipCode)
        };
      }
    };
  }

  /**
   * Physical data generator
   */
  get physical() {
    return {
      height: (): PhysicalData => {
        if (this.locale.metricSystem === 'metric') {
          // Tinggi dalam cm (150-190 cm)
          const height = Random.int(150, 190);
          return {
            height,
            weight: 0,
            heightUnit: 'cm',
            weightUnit: 'kg'
          };
        } else {
          // Tinggi dalam feet (4.9 - 6.3 ft)
          const height = Random.float(4.9, 6.3, 1);
          return {
            height,
            weight: 0,
            heightUnit: 'ft',
            weightUnit: 'lb'
          };
        }
      },

      weight: (): PhysicalData => {
        if (this.locale.metricSystem === 'metric') {
          // Berat dalam kg (45-100 kg)
          const weight = Random.int(45, 100);
          return {
            height: 0,
            weight,
            heightUnit: 'cm',
            weightUnit: 'kg'
          };
        } else {
          // Berat dalam lb (100-220 lb)
          const weight = Random.int(100, 220);
          return {
            height: 0,
            weight,
            heightUnit: 'ft',
            weightUnit: 'lb'
          };
        }
      },

      data: (): PhysicalData => {
        if (this.locale.metricSystem === 'metric') {
          return {
            height: Random.int(150, 190),
            weight: Random.int(45, 100),
            heightUnit: 'cm',
            weightUnit: 'kg'
          };
        } else {
          return {
            height: Random.float(4.9, 6.3, 1),
            weight: Random.int(100, 220),
            heightUnit: 'ft',
            weightUnit: 'lb'
          };
        }
      }
    };
  }

  /**
   * Work data generator
   */
  get work() {
    return {
      jobTitle: (): string => {
        return Random.pick(this.locale.jobTitles);
      },

      department: (): string => {
        return Random.pick(this.locale.departments);
      },

      data: (): WorkData => {
        return {
          jobTitle: Random.pick(this.locale.jobTitles),
          department: Random.pick(this.locale.departments)
        };
      }
    };
  }
}