import { describe, it, expect } from 'vitest';
import { createMimic, locales } from '../index';

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