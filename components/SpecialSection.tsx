import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckIcon } from './icons/Icons';

const features = [
  'Job-focused training programs',
  'Learn from expert teachers',
  'Friendly and supportive classes',
  'Build practical, real-world skills',
];

const SpecialSection: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <img
              className="rounded-xl shadow-2xl w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="An engaging classroom session at Cybotech Campus with a teacher and attentive Indian students."
            />
          </div>
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
              Get the Skills That Get You Hired
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We offer a different kind of learning experience. Our courses are made for success, taught by friendly experts in a modern classroom where every student gets attention.
            </p>
            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((feature) => (
                <div key={feature} className="relative">
                  <dt>
                    <CheckIcon className="absolute h-6 w-6 text-pinterest-red" aria-hidden="true" />
                    <p className="ml-9 text-lg leading-6 font-medium text-slate-700">{feature}</p>
                  </dt>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <NavLink
                to="/contact"
                className="inline-block bg-pinterest-red text-white font-bold py-3 px-8 rounded-full text-md hover:bg-pinterest-red-hover transition-transform duration-300 transform hover:scale-105"
              >
                Talk to Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;