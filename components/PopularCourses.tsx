import React from 'react';
import { NavLink } from 'react-router-dom';
import { COURSES_DATA } from '../constants';
import CourseCard from './CourseCard';

const PopularCourses: React.FC = () => {
  const popularCourses = COURSES_DATA.slice(0, 3);

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-pinterest-red tracking-wide uppercase">Our Programs</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Popular Courses
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard key={course.name} course={course} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <NavLink
            to="/courses"
            className="inline-block bg-pinterest-red text-white font-bold py-3 px-8 rounded-full text-md hover:bg-pinterest-red-hover transition-transform duration-300 transform hover:scale-105"
          >
            View All Courses
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;