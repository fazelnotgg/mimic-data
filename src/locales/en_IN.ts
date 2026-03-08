import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_IN: LocaleDefinition = {
  firstNamesMale: [
    'Rahul', 'Amit', 'Raj', 'Rohan', 'Arjun', 'Aditya', 'Aryan', 'Vikram', 'Suresh',
    'Karan', 'Sandeep', 'Rajesh', 'Manoj', 'Ashok', 'Deepak', 'Ajay', 'Ravi',
    'Krishna', 'Sanjay', 'Vijay', 'Anil', 'Ramesh', 'Rakesh', 'Nitin', 'Vivek',
    'Sachin', 'Akash', 'Nikhil', 'Siddharth', 'Ankit', 'Varun', 'Kunal', 'Harsh'
  ],
  firstNamesFemale: [
    'Priya', 'Pooja', 'Anita', 'Sneha', 'Kavita', 'Neha', 'Ritu', 'Anjali', 'Divya',
    'Preeti', 'Sunita', 'Asha', 'Rekha', 'Sonal', 'Manisha', 'Deepika', 'Simran',
    'Nisha', 'Swati', 'Meera', 'Radha', 'Seema', 'Geeta', 'Riya', 'Shreya',
    'Ayesha', 'Sakshi', 'Tanvi', 'Aditi', 'Kritika', 'Ishita', 'Dia', 'Mira'
  ],
  lastNames: [
    'Sharma', 'Verma', 'Singh', 'Kumar', 'Gupta', 'Patel', 'Shah', 'Reddy', 'Desai',
    'Joshi', 'Rao', 'Mehta', 'Nair', 'Iyer', 'Chopra', 'Malhotra', 'Kapoor', 'Agarwal',
    'Bansal', 'Jain', 'Sinha', 'Khan', 'Menon', 'Kulkarni', 'Bhatt', 'Trivedi',
    'Pandey', 'Mishra', 'Yadav', 'Saxena', 'Bose', 'Ghosh', 'Chatterjee', 'Das'
  ],
  streets: [
    'MG Road', 'Nehru Street', 'Gandhi Nagar', 'Park Street', 'Brigade Road',
    'Anna Salai', 'Mall Road', 'Station Road', 'Marine Drive', 'Linking Road',
    'Main Road', 'Church Street', 'Cross Road', 'Ring Road', 'Service Road',
    'Residency Road', 'Commercial Street', 'Infantry Road', 'Richmond Road'
  ],
  cities: [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
    'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Visakhapatnam',
    'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut',
    'Rajkot', 'Kalyan', 'Vasai', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar'
  ],
  states: [
    'Maharashtra', 'Delhi', 'Karnataka', 'Telangana', 'Tamil Nadu', 'West Bengal',
    'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'Bihar', 'Kerala',
    'Andhra Pradesh', 'Haryana', 'Punjab', 'Odisha', 'Jharkhand', 'Uttarakhand',
    'Himachal Pradesh', 'Assam', 'Chhattisgarh', 'Goa', 'Jammu and Kashmir'
  ],
  zipCodePattern: '######',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Executive', 'Chartered Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Analyst'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Support', 'IT', 'Research & Development', 'Legal', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNo = Random.int(1, 999);
    const sector = Random.pick(['A', 'B', 'C', 'D', 'E']);
    return `${houseNo}/${sector}, ${street}, ${city}, ${state} - ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+91 ##### #####',
    '0##### #####',
    '+91 (0)##### #####',
    '9##### #####',
    '8##### #####',
    '7##### #####',
    '6##### #####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.co.in', 'outlook.in', 'hotmail.co.in', 'live.in',
    'rediffmail.com', 'sify.com', 'sancharnet.in', 'vsnl.com', 'dataone.in'
  ],

  companyNames: [
    'Tata Consultancy Services', 'Reliance Industries', 'HDFC Bank', 'Infosys Limited',
    'ICICI Bank', 'Hindustan Unilever', 'ITC Limited', 'Bharti Airtel',
    'State Bank of India', 'Larsen & Toubro', 'Wipro Limited', 'Tata Motors',
    'Mahindra & Mahindra', 'Maruti Suzuki', 'Bajaj Finance', 'Asian Paints',
    'Titan Company', 'Sun Pharmaceutical', 'Dr Reddy\'s Laboratories', 'Zomato Limited'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Automotive', 'Aerospace'
  ],

  catchPhrases: [
    'Innovating for the future', 'Your success is our business', 'Building the future together',
    'Quality and trust', 'Excellence and commitment', 'Sustainable solutions',
    'Creating value', 'Your trusted partner', 'Leading the change'
  ]
};