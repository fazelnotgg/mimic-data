import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createMimic, locales, Random } from '../index';

describe('Mimic - Identity', () => {
  it('should generate first name with gender', () => {
    const mimic = createMimic('en_US');
    const firstName = mimic.identity.firstName('male');
    expect(firstName).toBeTruthy();
    expect(typeof firstName).toBe('string');
    expect(locales.en_US.firstNamesMale).toContain(firstName);
  });

  it('should generate last name', () => {
    const mimic = createMimic('en_US');
    const lastName = mimic.identity.lastName();
    expect(lastName).toBeTruthy();
    expect(typeof lastName).toBe('string');
    expect(locales.en_US.lastNames).toContain(lastName);
  });

  it('should generate full name with correct format for Japan', () => {
    const mimic = createMimic('ja_JP');
    const fullName = mimic.identity.fullName();
    expect(fullName).toBeTruthy();
    expect(fullName.split(' ').length).toBe(2);
    // Format Jepang: LastName FirstName
  });

  it('should generate age within range', () => {
    const mimic = createMimic('en_US');
    const age = mimic.identity.age({ min: 25, max: 30 });
    expect(age).toBeGreaterThanOrEqual(25);
    expect(age).toBeLessThanOrEqual(30);
  });

  it('should generate complete person data', () => {
    const mimic = createMimic('id_ID');
    const person = mimic.identity.person('male', { min: 25, max: 40 });
    
    expect(person).toHaveProperty('firstName');
    expect(person).toHaveProperty('lastName');
    expect(person).toHaveProperty('fullName');
    expect(person).toHaveProperty('gender');
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('dateOfBirth');
    expect(person.gender).toBe('male');
    expect(person.age).toBeGreaterThanOrEqual(25);
    expect(person.age).toBeLessThanOrEqual(40);
  });
});

describe('Mimic - Location', () => {
  it('should generate full address for US', () => {
    const mimic = createMimic('en_US');
    const address = mimic.location.fullAddress();
    expect(address).toBeTruthy();
    expect(address).toMatch(/\d+.*,.*,.*\d{5}/); // Pattern: number street, city, state zipcode
  });

  it('should generate full address for Japan', () => {
    const mimic = createMimic('ja_JP');
    const address = mimic.location.fullAddress();
    expect(address).toBeTruthy();
    expect(address).toMatch(/〒\d{3}-\d{4}/); // Japanese postal code format
  });

  it('should generate full address for Indonesia', () => {
    const mimic = createMimic('id_ID');
    const address = mimic.location.fullAddress();
    expect(address).toBeTruthy();
    expect(address).toMatch(/RT \d+\/RW \d+/); // Indonesian RT/RW format
  });

  it('should generate complete address data', () => {
    const mimic = createMimic('en_US');
    const address = mimic.location.address();
    
    expect(address).toHaveProperty('street');
    expect(address).toHaveProperty('city');
    expect(address).toHaveProperty('state');
    expect(address).toHaveProperty('zipCode');
    expect(address).toHaveProperty('fullAddress');
  });
});

describe('Mimic - Physical', () => {
  it('should generate metric height for Japan', () => {
    const mimic = createMimic('ja_JP');
    const physical = mimic.physical.height();
    expect(physical.heightUnit).toBe('cm');
    expect(physical.height).toBeGreaterThanOrEqual(150);
    expect(physical.height).toBeLessThanOrEqual(190);
  });

  it('should generate imperial height for US', () => {
    const mimic = createMimic('en_US');
    const physical = mimic.physical.height();
    expect(physical.heightUnit).toBe('ft');
    expect(physical.height).toBeGreaterThanOrEqual(4.9);
    expect(physical.height).toBeLessThanOrEqual(6.3);
  });

  it('should generate complete physical data', () => {
    const mimic = createMimic('id_ID');
    const physical = mimic.physical.data();
    
    expect(physical).toHaveProperty('height');
    expect(physical).toHaveProperty('weight');
    expect(physical).toHaveProperty('heightUnit');
    expect(physical).toHaveProperty('weightUnit');
    expect(physical.heightUnit).toBe('cm');
    expect(physical.weightUnit).toBe('kg');
  });
});

describe('Mimic - Work', () => {
  it('should generate job title', () => {
    const mimic = createMimic('en_US');
    const jobTitle = mimic.work.jobTitle();
    expect(jobTitle).toBeTruthy();
    expect(typeof jobTitle).toBe('string');
  });

  it('should generate department', () => {
    const mimic = createMimic('en_US');
    const department = mimic.work.department();
    expect(department).toBeTruthy();
    expect(typeof department).toBe('string');
  });

  it('should generate complete work data', () => {
    const mimic = createMimic('en_US');
    const work = mimic.work.data();
    
    expect(work).toHaveProperty('jobTitle');
    expect(work).toHaveProperty('department');
  });
});

describe('Mimic - Locale Switching', () => {
  it('should switch locale correctly', () => {
    const mimic = createMimic('en_US');
    const usName = mimic.identity.fullName();

    mimic.setLocale(locales.ja_JP);
    const jpName = mimic.identity.fullName();

    expect(usName).not.toBe(jpName);
  });

  it('should throw error for invalid locale', () => {
    expect(() => createMimic('invalid_locale')).toThrow();
  });
});

describe('Mimic - Bulk Generation', () => {
  it('should generate multiple persons at once', () => {
    const mimic = createMimic('en_US');
    const persons = mimic.identity.persons(5);

    expect(persons).toHaveLength(5);
    persons.forEach(person => {
      expect(person).toHaveProperty('firstName');
      expect(person).toHaveProperty('fullName');
      expect(person).toHaveProperty('age');
    });
  });

  it('should generate multiple addresses at once', () => {
    const mimic = createMimic('en_US');
    const addresses = mimic.location.addresses(3);

    expect(addresses).toHaveLength(3);
    addresses.forEach(address => {
      expect(address).toHaveProperty('street');
      expect(address).toHaveProperty('city');
      expect(address).toHaveProperty('fullAddress');
    });
  });

  it('should generate multiple physical data at once', () => {
    const mimic = createMimic('en_US');
    const physicalData = mimic.physical.datas(4);

    expect(physicalData).toHaveLength(4);
    physicalData.forEach(data => {
      expect(data).toHaveProperty('height');
      expect(data).toHaveProperty('weight');
    });
  });

  it('should generate multiple work data at once', () => {
    const mimic = createMimic('en_US');
    const workData = mimic.work.datas(3);

    expect(workData).toHaveLength(3);
    workData.forEach(data => {
      expect(data).toHaveProperty('jobTitle');
      expect(data).toHaveProperty('department');
    });
  });

  it('should generate complete mock entities', () => {
    const mimic = createMimic('id_ID');
    const entities = mimic.generateMockEntities(5, { gender: 'male', ageRange: { min: 25, max: 35 } });

    expect(entities).toHaveLength(5);
    entities.forEach(entity => {
      expect(entity).toHaveProperty('fullName');
      expect(entity).toHaveProperty('fullAddress');
      expect(entity).toHaveProperty('height');
      expect(entity).toHaveProperty('jobTitle');
      expect(entity.gender).toBe('male');
      expect(entity.age).toBeGreaterThanOrEqual(25);
      expect(entity.age).toBeLessThanOrEqual(35);
    });
  });
});

describe('Mimic - Unique Generation', () => {
  it('should generate unique persons (no duplicate full names)', () => {
    const mimic = createMimic('en_US');
    const persons = mimic.identity.uniquePersons(10);

    const fullNames = persons.map(p => p.fullName);
    const uniqueNames = new Set(fullNames);

    expect(fullNames.length).toBe(uniqueNames.size);
  });

  it('should generate unique addresses (no duplicate full addresses)', () => {
    const mimic = createMimic('en_US');
    const addresses = mimic.location.uniqueAddresses(10);

    const fullAddresses = addresses.map(a => a.fullAddress);
    const uniqueAddresses = new Set(fullAddresses);

    expect(fullAddresses.length).toBe(uniqueAddresses.size);
  });

  it('should generate unique job titles', () => {
    const mimic = createMimic('en_US');
    const jobTitles = mimic.work.uniqueJobTitles(5);

    const uniqueTitles = new Set(jobTitles);
    expect(jobTitles.length).toBe(uniqueTitles.size);
  });

  it('should throw error when requesting more unique values than available', () => {
    const mimic = createMimic('en_US');
    // Request more unique job titles than available in the locale
    expect(() => mimic.work.uniqueJobTitles(1000)).toThrow();
  });
});

describe('Random - Seeded Generation', () => {
  beforeEach(() => {
    Random.seed(12345);
  });

  afterEach(() => {
    Random.unseed();
  });

  it('should generate reproducible sequences with seed', () => {
    Random.seed(12345);
    const values1 = [Random.int(1, 100), Random.int(1, 100), Random.int(1, 100)];

    Random.seed(12345);
    const values2 = [Random.int(1, 100), Random.int(1, 100), Random.int(1, 100)];

    expect(values1).toEqual(values2);
  });

  it('should generate different sequences with different seeds', () => {
    Random.seed(12345);
    const values1 = [Random.int(1, 100), Random.int(1, 100), Random.int(1, 100)];

    Random.seed(54321);
    const values2 = [Random.int(1, 100), Random.int(1, 100), Random.int(1, 100)];

    expect(values1).not.toEqual(values2);
  });

  it('should generate reproducible person data with seed', () => {
    const mimic = createMimic('en_US');

    Random.seed(999);
    const person1 = mimic.identity.person('male', { min: 20, max: 30 });

    Random.seed(999);
    const person2 = mimic.identity.person('male', { min: 20, max: 30 });

    expect(person1.firstName).toBe(person2.firstName);
    expect(person1.lastName).toBe(person2.lastName);
    expect(person1.age).toBe(person2.age);
  });

  it('should generate reproducible full mock entities with seed', () => {
    const mimic = createMimic('id_ID');

    Random.seed(777);
    const entities1 = mimic.generateMockEntities(3);

    Random.seed(777);
    const entities2 = mimic.generateMockEntities(3);

    expect(entities1.map(e => e.fullName)).toEqual(entities2.map(e => e.fullName));
    expect(entities1.map(e => e.fullAddress)).toEqual(entities2.map(e => e.fullAddress));
  });
});

describe('Random - Multiple and Unique Utilities', () => {
  it('should generate multiple values using Random.multiple', () => {
    const results = Random.multiple(() => Random.int(1, 10), 5);
    expect(results).toHaveLength(5);
    results.forEach(r => {
      expect(r).toBeGreaterThanOrEqual(1);
      expect(r).toBeLessThanOrEqual(10);
    });
  });

  it('should generate unique values using Random.unique', () => {
    const results = Random.unique(() => Random.int(1, 100), 10);
    const uniqueResults = new Set(results);
    expect(results.length).toBe(uniqueResults.size);
  });

  it('should throw error when unique generation fails', () => {
    // Try to generate 20 unique values from only 5 possible values
    expect(() => Random.unique(() => Random.int(1, 5), 20)).toThrow();
  });
});

describe('Mimic - Performance Caching', () => {
  it('should cache identity generator', () => {
    const mimic = createMimic('en_US');
    const identity1 = mimic.identity;
    const identity2 = mimic.identity;

    expect(identity1).toBe(identity2);
  });

  it('should cache location generator', () => {
    const mimic = createMimic('en_US');
    const location1 = mimic.location;
    const location2 = mimic.location;

    expect(location1).toBe(location2);
  });

  it('should cache physical generator', () => {
    const mimic = createMimic('en_US');
    const physical1 = mimic.physical;
    const physical2 = mimic.physical;

    expect(physical1).toBe(physical2);
  });

  it('should cache work generator', () => {
    const mimic = createMimic('en_US');
    const work1 = mimic.work;
    const work2 = mimic.work;

    expect(work1).toBe(work2);
  });

  it('should clear caches when locale is changed', () => {
    const mimic = createMimic('en_US');
    const identity1 = mimic.identity;

    mimic.setLocale(locales.ja_JP);
    const identity2 = mimic.identity;

    expect(identity1).not.toBe(identity2);
  });
});