import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const id_ID: LocaleDefinition = {
  firstNamesMale: [
    'Budi', 'Ahmad', 'Agus', 'Andi', 'Bambang', 'Dedi', 'Eko', 'Hadi',
    'Iwan', 'Joko', 'Rudi', 'Slamet', 'Teguh', 'Wawan', 'Yudi', 'Rizki',
    'Fajar', 'Bayu', 'Dimas', 'Arif', 'Indra', 'Gunawan', 'Hendra', 'Firman',
    'Aditya', 'Putra', 'Gilang', 'Yoga', 'Rama', 'Satria', 'Wahyu', 'Rizal',
    'Firdaus', 'Ilham', 'Ridwan', 'Surya', 'Akbar', 'Pratama', 'Nugroho'
  ],
  firstNamesFemale: [
    'Siti', 'Dewi', 'Ani', 'Sri', 'Ratna', 'Rina', 'Endang', 'Fitri',
    'Diah', 'Yuni', 'Wati', 'Ayu', 'Indah', 'Maya', 'Lestari', 'Putri',
    'Sari', 'Rini', 'Tuti', 'Nur', 'Lia', 'Dian', 'Ika', 'Nia', 'Mega',
    'Andini', 'Citra', 'Kartika', 'Puspita', 'Cahaya', 'Anggraini', 'Permata',
    'Safitri', 'Rahayu', 'Maharani', 'Pratiwi', 'Kusuma', 'Melati', 'Zahra'
  ],
  lastNames: [
    'Santoso', 'Wijaya', 'Susanto', 'Pranowo', 'Saputra', 'Kurniawan', 'Wibowo',
    'Prasetyo', 'Hidayat', 'Setiawan', 'Nugroho', 'Hakim', 'Gunawan', 'Firmansyah',
    'Budiman', 'Hermawan', 'Putra', 'Cahyadi', 'Utomo', 'Suharto', 'Handoko',
    'Kusuma', 'Rahmat', 'Irawan', 'Sinaga', 'Sitorus', 'Sihotang', 'Simanjuntak',
    'Tampubolon', 'Nababan', 'Manurung', 'Siregar', 'Panjaitan', 'Pasaribu',
    'Hasibuan', 'Sembiring', 'Tarigan', 'Lubis', 'Nasution', 'Situmorang',
    'Pardede', 'Simbolon', 'Silalahi', 'Aritonang', 'Simatupang', 'Hutapea'
  ],
  streets: [
    'Jl. Merdeka', 'Jl. Sudirman', 'Jl. Gatot Subroto', 'Jl. Ahmad Yani',
    'Jl. Diponegoro', 'Jl. Veteran', 'Jl. Pahlawan', 'Jl. Hayam Wuruk',
    'Jl. Gajah Mada', 'Jl. Kartini', 'Jl. Proklamasi', 'Jl. Kemerdekaan',
    'Jl. Imam Bonjol', 'Jl. Pemuda', 'Jl. Pattimura', 'Jl. Sisingamangaraja',
    'Jl. Thamrin', 'Jl. Rasuna Said', 'Jl. MT Haryono', 'Jl. Basuki Rahmat',
    'Jl. Wolter Monginsidi', 'Jl. Teuku Umar', 'Jl. Cut Nyak Dien', 'Jl. Majapahit'
  ],
  cities: [
    'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar', 'Palembang',
    'Tangerang', 'Depok', 'Bekasi', 'Bogor', 'Yogyakarta', 'Malang', 'Batam',
    'Pekanbaru', 'Bandar Lampung', 'Padang', 'Denpasar', 'Samarinda', 'Banjarmasin',
    'Pontianak', 'Balikpapan', 'Jambi', 'Manado', 'Mataram', 'Kupang', 'Ambon'
  ],
  states: [
    'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten',
    'Sumatera Utara', 'Sumatera Barat', 'Sumatera Selatan', 'Riau', 'Lampung',
    'Kepulauan Riau', 'Bangka Belitung', 'Jambi', 'Bengkulu', 'Aceh',
    'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur',
    'Kalimantan Utara', 'Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan',
    'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat', 'Bali', 'Nusa Tenggara Barat',
    'Nusa Tenggara Timur', 'Maluku', 'Maluku Utara', 'Papua', 'Papua Barat',
    'DI Yogyakarta'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Akuntan', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Financial Analyst', 'Product Manager', 'System Administrator',
    'Customer Service', 'Quality Assurance Engineer', 'Technical Writer',
    'Database Administrator', 'Network Engineer', 'Content Writer', 'Account Manager'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Product Management', 'Design', 'Quality Assurance', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 999);
    const rt = Random.int(1, 20);
    const rw = Random.int(1, 15);
    return `${street} No. ${number}, RT ${rt}/RW ${rw}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  }
};