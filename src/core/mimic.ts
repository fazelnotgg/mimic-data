import { LocaleDefinition, Gender, PersonData, AddressData, PhysicalData, WorkData, AgeRange, ContactData, CompanyData } from '../types';
import { Random } from './random';

export class Mimic {
  private locale: LocaleDefinition;
  private identityCache: ReturnType<typeof this.createIdentity> | null = null;
  private locationCache: ReturnType<typeof this.createLocation> | null = null;
  private physicalCache: ReturnType<typeof this.createPhysical> | null = null;
  private workCache: ReturnType<typeof this.createWork> | null = null;

  constructor(locale: LocaleDefinition) {
    this.locale = locale;
  }

  /**
   * Update the locale and clear caches
   */
  setLocale(locale: LocaleDefinition): void {
    this.locale = locale;
    this.clearCaches();
  }

  /**
   * Clear all cached generators
   */
  private clearCaches(): void {
    this.identityCache = null;
    this.locationCache = null;
    this.physicalCache = null;
    this.workCache = null;
  }

  /**
   * Create identity generator (cached)
   */
  private createIdentity() {
    const self = this;
    return {
      firstName: (gender?: Gender): string => {
        const genderChoice = gender || Random.pick(['male', 'female'] as Gender[]);
        return genderChoice === 'male'
          ? Random.pick(self.locale.firstNamesMale)
          : Random.pick(self.locale.firstNamesFemale);
      },

      lastName: (): string => {
        return Random.pick(self.locale.lastNames);
      },

      fullName: (gender?: Gender): string => {
        const genderChoice = gender || Random.pick(['male', 'female'] as Gender[]);
        const firstName = genderChoice === 'male'
          ? Random.pick(self.locale.firstNamesMale)
          : Random.pick(self.locale.firstNamesFemale);
        const lastName = Random.pick(self.locale.lastNames);
        return self.locale.formatFullName(firstName, lastName);
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
        const age = self.identity.age(range);
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - age;
        const month = Random.int(0, 11);
        const day = Random.int(1, 28);
        return new Date(birthYear, month, day);
      },

      person: (gender?: Gender, ageRange?: AgeRange): PersonData => {
        const genderChoice = gender || Random.pick(['male', 'female'] as Gender[]);
        const firstName = genderChoice === 'male'
          ? Random.pick(self.locale.firstNamesMale)
          : Random.pick(self.locale.firstNamesFemale);
        const lastName = Random.pick(self.locale.lastNames);
        const ageVal = self.identity.age(ageRange);
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - ageVal;
        const month = Random.int(0, 11);
        const day = Random.int(1, 28);

        return {
          firstName,
          lastName,
          fullName: self.locale.formatFullName(firstName, lastName),
          gender: genderChoice,
          age: ageVal,
          dateOfBirth: new Date(birthYear, month, day)
        };
      },

      /**
       * Generate multiple persons at once
       */
      persons: (count: number, gender?: Gender, ageRange?: AgeRange): PersonData[] => {
        return Random.multiple(() => self.identity.person(gender, ageRange), count);
      },

      /**
       * Generate unique persons (no duplicate full names)
       */
      uniquePersons: (count: number, gender?: Gender, ageRange?: AgeRange): PersonData[] => {
        return Random.unique(() => self.identity.person(gender, ageRange), count);
      }
    };
  }

  /**
   * Identity generator (cached accessor)
   */
  get identity(): ReturnType<typeof this.createIdentity> {
    if (!this.identityCache) {
      this.identityCache = this.createIdentity();
    }
    return this.identityCache;
  }

  /**
   * Create location generator (cached)
   */
  private createLocation() {
    const self = this;
    return {
      street: (): string => {
        return Random.pick(self.locale.streets);
      },

      city: (): string => {
        return Random.pick(self.locale.cities);
      },

      state: (): string => {
        return Random.pick(self.locale.states);
      },

      zipCode: (): string => {
        return self.locale.generateZipCode();
      },

      fullAddress: (): string => {
        const street = Random.pick(self.locale.streets);
        const city = Random.pick(self.locale.cities);
        const state = Random.pick(self.locale.states);
        const zipCode = self.locale.generateZipCode();
        return self.locale.formatAddress(street, city, state, zipCode);
      },

      address: (): AddressData => {
        const street = Random.pick(self.locale.streets);
        const city = Random.pick(self.locale.cities);
        const state = Random.pick(self.locale.states);
        const zipCode = self.locale.generateZipCode();

        return {
          street,
          city,
          state,
          zipCode,
          fullAddress: self.locale.formatAddress(street, city, state, zipCode)
        };
      },

      /**
       * Generate multiple addresses at once
       */
      addresses: (count: number): AddressData[] => {
        return Random.multiple(() => self.location.address(), count);
      },

      /**
       * Generate unique addresses (no duplicate full addresses)
       */
      uniqueAddresses: (count: number): AddressData[] => {
        return Random.unique(() => self.location.address(), count);
      }
    };
  }

  /**
   * Location generator (cached accessor)
   */
  get location(): ReturnType<typeof this.createLocation> {
    if (!this.locationCache) {
      this.locationCache = this.createLocation();
    }
    return this.locationCache;
  }

  /**
   * Create physical data generator (cached)
   */
  private createPhysical() {
    const self = this;
    return {
      height: (): PhysicalData => {
        if (self.locale.metricSystem === 'metric') {
          const height = Random.int(150, 190);
          return {
            height,
            weight: 0,
            heightUnit: 'cm',
            weightUnit: 'kg'
          };
        } else {
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
        if (self.locale.metricSystem === 'metric') {
          const weight = Random.int(45, 100);
          return {
            height: 0,
            weight,
            heightUnit: 'cm',
            weightUnit: 'kg'
          };
        } else {
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
        if (self.locale.metricSystem === 'metric') {
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
      },

      /**
       * Generate multiple physical data at once
       */
      datas: (count: number): PhysicalData[] => {
        return Random.multiple(() => self.physical.data(), count);
      }
    };
  }

  /**
   * Physical data generator (cached accessor)
   */
  get physical(): ReturnType<typeof this.createPhysical> {
    if (!this.physicalCache) {
      this.physicalCache = this.createPhysical();
    }
    return this.physicalCache;
  }

  /**
   * Create work data generator (cached)
   */
  private createWork() {
    const self = this;
    return {
      jobTitle: (): string => {
        return Random.pick(self.locale.jobTitles);
      },

      department: (): string => {
        return Random.pick(self.locale.departments);
      },

      data: (): WorkData => {
        return {
          jobTitle: Random.pick(self.locale.jobTitles),
          department: Random.pick(self.locale.departments)
        };
      },

      /**
       * Generate multiple work data at once
       */
      datas: (count: number): WorkData[] => {
        return Random.multiple(() => self.work.data(), count);
      },

      /**
       * Generate unique job titles
       */
      uniqueJobTitles: (count: number): string[] => {
        return Random.unique(() => self.work.jobTitle(), count);
      },

      /**
       * Generate unique departments
       */
      uniqueDepartments: (count: number): string[] => {
        return Random.unique(() => self.work.department(), count);
      }
    };
  }

  /**
   * Work data generator (cached accessor)
   */
  get work(): ReturnType<typeof this.createWork> {
    if (!this.workCache) {
      this.workCache = this.createWork();
    }
    return this.workCache;
  }

  /**
   * Create contact generator (cached)
   */
  private createContact() {
    const self = this;
    return {
      email: (firstName?: string, lastName?: string): string => {
        const name = firstName && lastName
          ? `${firstName}.${lastName}`
          : firstName
            ? firstName
            : self.identity.firstName();
        const domain = self.locale.emailDomains?.length
          ? Random.pick(self.locale.emailDomains)
          : Random.pick(['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com']);
        const randomNum = Random.int(1, 999);
        return `${name.toLowerCase()}${randomNum}@${domain}`;
      },

      phone: (): string => {
        if (self.locale.phoneFormats?.length) {
          const format = Random.pick(self.locale.phoneFormats);
          return self.formatPhoneNumber(format);
        }
        // Default US format
        return `+1 (${Random.int(200, 999)}) ${Random.int(200, 999)}-${Random.int(1000, 9999)}`;
      },

      website: (companyName?: string): string => {
        const name = companyName || self.company.name();
        const domain = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const tld = Random.pick(['.com', '.net', '.org', '.io', '.co']);
        return `www.${domain}${tld}`;
      },

      data: (firstName?: string, lastName?: string): ContactData => {
        return {
          email: self.contact.email(firstName, lastName),
          phone: self.contact.phone(),
          website: self.contact.website()
        };
      },

      /**
       * Generate multiple contact data at once
       */
      datas: (count: number): ContactData[] => {
        return Random.multiple(() => self.contact.data(), count);
      }
    };
  }

  /**
   * Contact generator (cached accessor)
   */
  get contact(): ReturnType<typeof this.createContact> {
    return this.createContact();
  }

  /**
   * Create company generator (cached)
   */
  private createCompany() {
    const self = this;
    return {
      name: (): string => {
        if (self.locale.companyNames?.length) {
          return Random.pick(self.locale.companyNames);
        }
        const prefixes = ['Tech', 'Global', 'Smart', 'Digital', 'Inno', 'Data', 'Cloud', 'Net', 'Cyber', 'Quantum'];
        const suffixes = ['ify', 'ly', 'hub', 'lab', 'box', 'flow', 'sync', 'grid', 'wave', 'spark'];
        const types = ['Tech', 'Solutions', 'Systems', 'Corp', 'Inc', 'Group', 'Labs', 'Works', 'Studio', 'Dynamics'];
        return `${Random.pick(prefixes)}${Random.pick(suffixes)} ${Random.pick(types)}`;
      },

      industry: (): string => {
        if (self.locale.industries?.length) {
          return Random.pick(self.locale.industries);
        }
        const industries = [
          'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
          'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
          'Real Estate', 'Consulting', 'Hospitality', 'Automotive', 'Aerospace'
        ];
        return Random.pick(industries);
      },

      catchPhrase: (): string => {
        if (self.locale.catchPhrases?.length) {
          return Random.pick(self.locale.catchPhrases);
        }
        const verbs = ['Empower', 'Transform', 'Revolutionize', 'Innovate', 'Optimize', 'Streamline', 'Accelerate', 'Maximize'];
        const nouns = ['solutions', 'experiences', 'processes', 'outcomes', 'potential', 'growth', 'success', 'future'];
        const adjectives = ['innovative', 'cutting-edge', 'seamless', 'intelligent', 'dynamic', 'scalable', 'sustainable', 'next-generation'];
        return `${Random.pick(verbs)} ${Random.pick(adjectives)} ${Random.pick(nouns)}`;
      },

      data: (): CompanyData => {
        return {
          name: self.company.name(),
          industry: self.company.industry(),
          catchPhrase: self.company.catchPhrase()
        };
      },

      /**
       * Generate multiple company data at once
       */
      datas: (count: number): CompanyData[] => {
        return Random.multiple(() => self.company.data(), count);
      }
    };
  }

  /**
   * Company generator (cached accessor)
   */
  get company(): ReturnType<typeof this.createCompany> {
    return this.createCompany();
  }

  /**
   * Format phone number from pattern
   */
  private formatPhoneNumber(format: string): string {
    return format.replace(/#/g, () => String(Random.int(0, 9)));
  }

  /**
   * Generate complete mock data for multiple entities
   */
  generateMockEntities(count: number, options?: {
    gender?: Gender;
    ageRange?: AgeRange;
  }): Array<PersonData & AddressData & PhysicalData & WorkData> {
    const { gender, ageRange } = options || {};
    
    return Random.multiple(() => ({
      ...this.identity.person(gender, ageRange),
      ...this.location.address(),
      ...this.physical.data(),
      ...this.work.data()
    }), count);
  }

  /**
   * Generate unique mock entities (no duplicate full names)
   */
  generateUniqueMockEntities(count: number, options?: {
    gender?: Gender;
    ageRange?: AgeRange;
  }): Array<PersonData & AddressData & PhysicalData & WorkData> {
    const { gender, ageRange } = options || {};
    
    return Random.unique(() => ({
      ...this.identity.person(gender, ageRange),
      ...this.location.address(),
      ...this.physical.data(),
      ...this.work.data()
    }), count);
  }
}
