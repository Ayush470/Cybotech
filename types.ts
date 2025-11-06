export interface Course {
  name: string;
  duration: string;
  modules: string[];
}

export interface Student {
  certificateNumber: string;
  name: string;
  courseName: string;
  dateOfBirth: string; // YYYY-MM-DD
  registrationId: string;
  batch: string;
  year: number;
  verificationStatus: 'Verified' | 'Pending' | 'Invalid';
  imageUrl: string;
}
