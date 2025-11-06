
import React, { useState, useEffect } from 'react';
import { useAuth } from '../components/Auth';
import { useNavigate } from 'react-router-dom';
import { STUDENTS_DATA, COURSES_DATA } from '../constants';
import type { Student } from '../types';
import {
  EditIcon,
  TrashIcon,
  PlusIcon,
  BadgeCheckIcon,
  ClockIcon,
  XCircleIcon,
} from '../components/icons/Icons';

const AdminDashboardPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [currentStudent, setCurrentStudent] = useState<Partial<Student>>({});

  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const storedStudents = localStorage.getItem('students_data');
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    } else {
      setStudents(STUDENTS_DATA);
    }
  }, []);

  useEffect(() => {
    // Persist changes to local storage whenever students state updates
    if (students.length > 0) {
        localStorage.setItem('students_data', JSON.stringify(students));
    }
  }, [students]);

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  const handleAddStudent = () => {
    if (!currentStudent.certificateNumber) {
        alert('Certificate Number is required.');
        return;
    }
    const certExists = students.some(s => s.certificateNumber.toLowerCase() === (currentStudent.certificateNumber || '').toLowerCase());
    if (certExists) {
        alert('A student with this certificate number already exists.');
        return;
    }

    const newStudent: Student = {
        name: '',
        courseName: '',
        certificateNumber: '',
        dateOfBirth: '',
        registrationId: '',
        batch: '',
        year: new Date().getFullYear(),
        verificationStatus: 'Pending',
        imageUrl: '',
        ...currentStudent,
    };
    
    setStudents(prevStudents => [...prevStudents, newStudent]);
    closeModal();
  };

  const handleUpdateStudent = () => {
    if (!editingStudent) return;
    setStudents(prevStudents =>
      prevStudents.map(s =>
        s.certificateNumber === editingStudent.certificateNumber
          ? { ...s, ...currentStudent } as Student
          : s
      )
    );
    closeModal();
  };

  const handleDeleteStudent = (certificateNumber: string) => {
    if (window.confirm('Are you sure you want to delete this student record?')) {
      setStudents(prevStudents =>
        prevStudents.filter(s => s.certificateNumber !== certificateNumber)
      );
    }
  };

  const openModalForAdd = () => {
    setEditingStudent(null);
    setCurrentStudent({
      name: '',
      courseName: COURSES_DATA[0]?.name || '',
      certificateNumber: '',
      dateOfBirth: '',
      registrationId: '',
      batch: '',
      year: new Date().getFullYear(),
      verificationStatus: 'Pending',
      imageUrl: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5',
    });
    setIsModalOpen(true);
  };

  const openModalForEdit = (student: Student) => {
    setEditingStudent(student);
    setCurrentStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
    setCurrentStudent({});
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentStudent(prev => ({ ...prev, [name]: name === 'year' ? parseInt(value) : value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      handleUpdateStudent();
    } else {
      handleAddStudent();
    }
  };
  
  const getStatusChip = (status: Student['verificationStatus']) => {
    switch (status) {
      case 'Verified':
        return <div className="flex items-center space-x-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-semibold"><BadgeCheckIcon className="w-3 h-3" /><span>Verified</span></div>;
      case 'Pending':
        return <div className="flex items-center space-x-1 px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold"><ClockIcon className="w-3 h-3" /><span>Pending</span></div>;
      case 'Invalid':
        return <div className="flex items-center space-x-1 px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs font-semibold"><XCircleIcon className="w-3 h-3" /><span>Invalid</span></div>;
      default:
        return null;
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-gray-50 min-h-[calc(100vh-10rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
            <p className="text-slate-500 mt-1">Manage student records for certificate verification.</p>
          </div>
          <button onClick={handleLogout} className="bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">
            Logout
          </button>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 className="text-xl font-semibold text-slate-700">Student List</h2>
            <button onClick={openModalForAdd} className="bg-pinterest-red text-white font-bold py-2 px-4 rounded-lg hover:bg-pinterest-red-hover transition-colors flex items-center">
              <PlusIcon className="w-5 h-5 mr-1" />
              Add Student
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Certificate No.</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Course</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {students.map(student => (
                  <tr key={student.certificateNumber}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full object-cover" src={student.imageUrl} alt={student.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900">{student.name}</div>
                          <div className="text-sm text-slate-500">{student.registrationId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{student.certificateNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 max-w-xs truncate">{student.courseName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{getStatusChip(student.verificationStatus)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => openModalForEdit(student)} className="text-indigo-600 hover:text-indigo-900 mr-4" title="Edit"><EditIcon className="w-5 h-5"/></button>
                      <button onClick={() => handleDeleteStudent(student.certificateNumber)} className="text-red-600 hover:text-red-900" title="Delete"><TrashIcon className="w-5 h-5" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">{editingStudent ? 'Edit Student' : 'Add New Student'}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input type="text" name="name" value={currentStudent.name || ''} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Course Name</label>
                  <select name="courseName" value={currentStudent.courseName || ''} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-pinterest-red focus:border-pinterest-red">
                    {COURSES_DATA.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Certificate Number</label>
                  <input type="text" name="certificateNumber" value={currentStudent.certificateNumber || ''} onChange={handleFormChange} required disabled={!!editingStudent} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm disabled:bg-slate-100 disabled:cursor-not-allowed"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Registration ID</label>
                  <input type="text" name="registrationId" value={currentStudent.registrationId || ''} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Date of Birth</label>
                  <input type="date" name="dateOfBirth" value={currentStudent.dateOfBirth || ''} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Batch</label>
                  <input type="text" name="batch" value={currentStudent.batch || ''} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Year of Completion</label>
                  <input type="number" name="year" value={currentStudent.year || ''} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Verification Status</label>
                  <select name="verificationStatus" value={currentStudent.verificationStatus || 'Pending'} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-pinterest-red focus:border-pinterest-red">
                    <option value="Pending">Pending</option>
                    <option value="Verified">Verified</option>
                    <option value="Invalid">Invalid</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Image URL</label>
                  <input type="text" name="imageUrl" value={currentStudent.imageUrl || ''} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-pinterest-red focus:border-pinterest-red"/>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button type="button" onClick={closeModal} className="bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">Cancel</button>
                <button type="submit" className="bg-pinterest-red text-white font-bold py-2 px-4 rounded-lg hover:bg-pinterest-red-hover transition-colors">{editingStudent ? 'Update Student' : 'Add Student'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
