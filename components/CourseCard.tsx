// Fix: Implement the CourseCard component to correctly display course details.
import React from 'react';
import { NavLink } from 'react-router-dom';
import type { Course } from '../types';
import { ClockIcon, CheckCircleIcon } from './icons/Icons';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{course.name}</h3>
        <div className="flex items-center text-sm text-slate-500 mb-4">
          <ClockIcon className="w-5 h-5 mr-2 text-pinterest-red" />
          <span>Duration: {course.duration}</span>
        </div>
        <p className="text-slate-600 font-semibold mb-3">Modules Covered:</p>
        <ul className="space-y-2 flex-grow">
          {course.modules.map((module, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-600">{module}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 px-6 py-4 mt-auto">
        <NavLink to="/contact" className="text-sm font-semibold text-pinterest-red hover:text-pinterest-red-hover">
          Enroll Now &rarr;
        </NavLink>
      </div>
    </div>
  );
};

export default CourseCard;
