import React from 'react';
import { COURSES_DATA } from '../constants';
import CourseCard from '../components/CourseCard';

const CoursesPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-pinterest-red tracking-wide uppercase">Our Courses</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Find the Right Course for You
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            We offer many job-oriented courses in computers and English. Browse our list and find the perfect program to start your career journey.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.name} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;