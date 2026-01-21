export type Gender = 'male' | 'female';

export type MetricSystem = 'metric' | 'imperial';

export interface PersonData {
  firstName: string;
  lastName: string;
  fullName: string;
  gender: Gender;
  age: number;
  dateOfBirth: Date;
}

export interface AddressData {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress: string;
}

export interface PhysicalData {
  height: number;
  weight: number;
  heightUnit: 'cm' | 'ft';
  weightUnit: 'kg' | 'lb';
}

export interface WorkData {
  jobTitle: string;
  department: string;
}

export interface AgeRange {
  min?: number;
  max?: number;
}

export interface LocaleData {
  firstNamesMale: string[];
  firstNamesFemale: string[];
  lastNames: string[];
  streets: string[];
  cities: string[];
  states: string[];
  zipCodePattern: string;
  jobTitles: string[];
  departments: string[];
  metricSystem: MetricSystem;
}

export interface LocaleDefinition extends LocaleData {
  formatFullName(firstName: string, lastName: string): string;
  formatAddress(street: string, city: string, state: string, zipCode: string): string;
  generateZipCode(): string;
}