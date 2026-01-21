import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const vi_VN: LocaleDefinition = {
  lastNames: [
    'Nguyen', 'Tran', 'Le', 'Pham', 'Hoang', 'Huynh', 'Phan', 'Vu', 'Vo', 'Dang',
    'Bui', 'Do', 'Ngo', 'Duong', 'Ly', 'Dinh', 'Trinh', 'Ha', 'Mai', 'Truong',
    'To', 'Dao', 'Lam', 'Chau', 'Doan', 'Tang', 'Quach', 'Cao', 'Tong', 'Thai'
  ],
  firstNamesMale: [
    'Van', 'Minh', 'Duc', 'Tuan', 'Thanh', 'Hieu', 'Khang', 'Phong', 'Hung',
    'Quang', 'Hoang', 'Nam', 'Duy', 'Hai', 'Long', 'Khanh', 'Son', 'Thang',
    'Dat', 'Huy', 'Trung', 'Tai', 'Vinh', 'Cuong', 'Khoa', 'Anh', 'Bao', 'Quan',
    'Tien', 'Kien', 'Linh', 'Binh', 'An', 'Phu'
  ],
  firstNamesFemale: [
    'Thi', 'Anh', 'Lan', 'Huong', 'Mai', 'Thu', 'Linh', 'Phuong', 'Ha', 'Hoa',
    'Hang', 'Thuy', 'Yen', 'Nga', 'Nhu', 'Quynh', 'Van', 'Tuyet', 'Hien', 'Nhung',
    'Dieu', 'Tam', 'My', 'Trang', 'Ngoc', 'Thao', 'Chi', 'Vy', 'Uyen', 'Khanh',
    'Nhi', 'Bich', 'Trinh', 'Minh', 'Kim', 'Hong'
  ],
  streets: [
    'Le Loi', 'Nguyen Hue', 'Tran Hung Dao', 'Ly Thai To', 'Hai Ba Trung',
    'Ba Trieu', 'Phan Chu Trinh', 'Hoang Dieu', 'Nguyen Thai Hoc', 'Nguyen Trai',
    'Tran Phu', 'Le Duan', 'Vo Thi Sau', 'Nguyen Du', 'Dong Khoi', 'Pasteur',
    'Dien Bien Phu', 'Cach Mang Thang Tam', 'Vo Van Tan', 'Tran Quoc Toan'
  ],
  cities: [
    'Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hai Phong', 'Can Tho', 'Bien Hoa',
    'Hue', 'Nha Trang', 'Buon Ma Thuot', 'Vung Tau', 'Quy Nhon', 'Nam Dinh',
    'Thai Nguyen', 'Phan Thiet', 'Thai Binh', 'Vinh', 'My Tho', 'Rach Gia',
    'Long Xuyen', 'Cam Ranh', 'Ha Long', 'Pleiku', 'Bac Lieu', 'Cao Lanh'
  ],
  states: [
    'Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hai Phong', 'Can Tho', 'Dong Nai',
    'Binh Duong', 'Ba Ria-Vung Tau', 'Khanh Hoa', 'Lam Dong', 'Thua Thien Hue',
    'Quang Nam', 'Thanh Hoa', 'Nghe An', 'Hai Duong', 'Nam Dinh', 'Thai Nguyen',
    'Bac Ninh', 'Vinh Phuc', 'Phu Tho', 'Long An', 'Tien Giang', 'Ben Tre'
  ],
  zipCodePattern: '######',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'IT', 'Research and Development', 'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${lastName} ${firstName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 999);
    const ward = Random.int(1, 20);
    const district = Random.int(1, 12);
    return `${number} ${street}, Ward ${ward}, District ${district}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  }
};