import React from 'react';
import { AcademicCapIcon, LightBulbIcon, ClockIcon, UsersIcon } from './icons/Icons';

const features = [
  {
    name: 'Expert Teachers',
    description: 'Our friendly teachers are experts in their fields. They provide personal attention to make sure you learn properly and clear all your doubts.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Confidence Building',
    description: 'We focus on more than just subjects. Our classes help you build confidence, improve personality, and prepare for job interviews.',
    icon: LightBulbIcon,
  },
  {
    name: 'Flexible Class Timings',
    description: 'We offer classes at different times to fit your schedule. Learn comfortably without disturbing your daily routine.',
    icon: ClockIcon,
  },
  {
    name: 'Lifetime Support',
    description: 'Our support doesn’t end with the course. You are part of our family, and we are always here to help you with your career.',
    icon: UsersIcon,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-pinterest-red tracking-wide uppercase">Why Join Us?</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            A Better Way to Learn and Grow
          </p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300" title={feature.name}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pinterest-red text-white mx-auto mb-5">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">{feature.name}</h3>
              <p className="mt-2 text-base text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;