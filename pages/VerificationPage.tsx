import React, { useState, useEffect } from 'react';
import { STUDENTS_DATA, COURSES_DATA } from '../constants';
import type { Student } from '../types';
import { BadgeCheckIcon, ClockIcon, SearchIcon, XCircleIcon, CalendarIcon } from '../components/icons/Icons';

const VerificationPage: React.FC = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [courseName, setCourseName] = useState('');
  const [dob, setDob] = useState('');

  const [student, setStudent] = useState<Student | null | undefined>(undefined); // undefined: initial, null: not found
  const [isLoading, setIsLoading] = useState(false);
  
  const [studentData, setStudentData] = useState<Student[]>([]);

  useEffect(() => {
    // Load student data from localStorage to reflect admin changes
    const storedStudents = localStorage.getItem('students_data');
    if (storedStudents) {
      setStudentData(JSON.parse(storedStudents));
    } else {
      // Fallback to initial data if nothing in localStorage
      setStudentData(STUDENTS_DATA);
    }
  }, []);


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!certificateNumber || !courseName || !dob) {
        alert("Please fill all three fields for verification.");
        return;
    }

    setIsLoading(true);
    setStudent(undefined);

    // Simulate API call
    setTimeout(() => {
      const formattedInputCert = certificateNumber.replace(/-/g, '').toLowerCase();
      const foundStudent = studentData.find(
        s => s.certificateNumber.replace(/-/g, '').toLowerCase() === formattedInputCert &&
             s.courseName === courseName &&
             s.dateOfBirth === dob
      );
      setStudent(foundStudent || null);
      setIsLoading(false);
    }, 1000);
  };

  const getStatusChip = (status: Student['verificationStatus']) => {
    switch (status) {
      case 'Verified':
        return <div className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold"><BadgeCheckIcon className="w-4 h-4" /><span>Verified</span></div>;
      case 'Pending':
        return <div className="flex items-center space-x-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold"><ClockIcon className="w-4 h-4" /><span>Pending</span></div>;
      case 'Invalid':
        return <div className="flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold"><XCircleIcon className="w-4 h-4" /><span>Invalid</span></div>;
      default:
        return null;
    }
  };


  return (
    <div className="min-h-[calc(100vh-10rem)] py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-pinterest-red tracking-wide uppercase">Certificate Verification</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Check a Student's Certificate
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500">
            Enter the student's Certificate Number, Course Name, and Date of Birth below to confirm that their certificate is genuine.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
                <label htmlFor="certificateNumber" className="block text-sm font-medium text-slate-700 mb-1">
                Certificate Number
                </label>
                <input
                    type="text"
                    id="certificateNumber"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    className="block w-full px-4 py-3 bg-white text-slate-900 border-slate-300 rounded-lg shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"
                    placeholder="e.g., CYBOADCA001"
                    required
                />
            </div>
            <div>
                <label htmlFor="courseName" className="block text-sm font-medium text-slate-700 mb-1">
                Course Name
                </label>
                <select 
                    id="courseName"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    className="block w-full px-4 py-3 bg-white text-slate-900 border-slate-300 rounded-lg shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"
                    required
                >
                    <option value="" disabled>Select a course</option>
                    {COURSES_DATA.map(course => <option key={course.name} value={course.name}>{course.name}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="dob" className="block text-sm font-medium text-slate-700 mb-1">
                Date of Birth
                </label>
                <div className="relative">
                    <input
                        type="text"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => {
                            if (!e.target.value) {
                                e.target.type = 'text';
                            }
                        }}
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="custom-date-icon block w-full pl-4 pr-10 py-3 bg-white text-slate-900 border-slate-300 rounded-lg shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"
                        placeholder="mm/dd/yyyy"
                        required
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
            </div>
            <button
                type="submit"
                className="mt-4 w-full bg-pinterest-red text-white font-bold py-3 px-4 rounded-lg hover:bg-pinterest-red-hover transition-colors duration-300 flex items-center justify-center"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Verifying...</span>
                    </>
                ) : (
                    <>
                      <SearchIcon className="w-5 h-5 mr-2" />
                      <span>Verify Certificate</span>
                    </>
                )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        <div className="mt-12">
          {isLoading && (
            <div className="text-center text-slate-500">
              <p>Searching for certificate...</p>
            </div>
          )}
          
          {student === null && (
            <div className="max-w-md mx-auto bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg" role="alert">
              <p className="font-bold">Not Found</p>
              <p>No student record was found with the provided details. Please check the information and try again.</p>
            </div>
          )}

          {student && (
             <div className="animate-fade-in-up">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800">Verification Successful</h3>
                  <p className="mt-2 text-md text-slate-600">The following student record has been verified in our database.</p>
                </div>
                <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                    <img 
                      src={student.imageUrl} 
                      alt={student.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-4 sm:mb-0 sm:mr-8 flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
                        <h3 className="text-2xl font-bold text-slate-800">{student.name}</h3>
                        {getStatusChip(student.verificationStatus)}
                      </div>
                      <p className="text-lg font-medium text-pinterest-red">{student.courseName}</p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-slate-200 pt-6">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                      <div className="sm:col-span-2">
                        <dt className="font-medium text-slate-500">Certificate Number</dt>
                        <dd className="mt-1 text-slate-900 font-semibold">{student.certificateNumber}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-slate-500">Registration ID</dt>
                        <dd className="mt-1 text-slate-900">{student.registrationId}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-slate-500">Date of Birth</dt>
                        <dd className="mt-1 text-slate-900">{student.dateOfBirth}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-slate-500">Batch</dt>
                        <dd className="mt-1 text-slate-900">{student.batch}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-slate-500">Year of Completion</dt>
                        <dd className="mt-1 text-slate-900">{student.year}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;