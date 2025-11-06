import React from 'react';
import { QuoteIcon } from './icons/Icons';

const testimonials = [
  {
    quote: "The DCA course was amazing. The teachers explained everything so simply. I got a job right after finishing the course!",
    author: "Priya S.",
    course: "Diploma in Computer Application",
    imageUrl: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "I was very hesitant to speak English, but the teachers here made me so confident. The classes are fun and very practical.",
    author: "Raj K.",
    course: "Spoken English",
    imageUrl: "https://images.unsplash.com/photo-1618237226689-e19485e87959?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Best place for Tally. The teachers focus on real accounting work, not just theory. It helped me get a good position in a local company.",
    author: "Anjali M.",
    course: "CFAM with Tally",
    imageUrl: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-pinterest-red tracking-wide uppercase">Student Stories</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            What Our Students Say About Us
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative">
               <QuoteIcon className="absolute top-4 right-4 w-20 h-20 text-slate-100/70" />
              <div className="flex-grow z-10">
                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6 flex items-center z-10">
                <img className="h-14 w-14 rounded-full object-cover" src={testimonial.imageUrl} alt={testimonial.author} />
                <div className="ml-4">
                  <div className="text-base font-bold text-slate-800">{testimonial.author}</div>
                  <div className="text-sm text-pinterest-red font-semibold">{testimonial.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;