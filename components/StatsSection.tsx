import React from 'react';
import { AcademicCapIcon, BadgeCheckIcon, BookOpenIcon, UsersIcon } from './icons/Icons';

const stats = [
  { id: 1, name: 'Students Enrolled', value: '6500+', icon: UsersIcon },
  { id: 2, name: 'Certified Students', value: '4400+', icon: BadgeCheckIcon },
  { id: 3, name: 'Courses Offered', value: '60+', icon: BookOpenIcon },
  { id: 4, name: 'Expert Instructors', value: '25+', icon: AcademicCapIcon },
];

const StatsSection: React.FC = () => {
  return (
    <div className="bg-slate-800 text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center" title={stat.name}>
              <div className="mb-4 bg-slate-700 p-4 rounded-full">
                 <stat.icon className="h-10 w-10 text-pinterest-red" />
              </div>
              <div className="text-5xl font-extrabold">{stat.value}</div>
              <div className="text-lg font-medium opacity-90 mt-1">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;