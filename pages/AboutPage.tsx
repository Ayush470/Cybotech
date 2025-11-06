import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-pinterest-red tracking-wide uppercase">Our Story</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            From a Small Room to a Leading Institute
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Cybotech Campus started with a simple idea: give the youth of Hisua the practical skills they need to get good jobs and build great careers.
          </p>
        </div>

        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-800 sm:text-3xl">Our Goal</h3>
              <p className="mt-3 text-lg text-slate-500">
                Our main goal is simple: to help you succeed. We want every student who walks through our doors to leave with confidence, valuable skills, and a job offer in hand. We believe in practical, hands-on training that prepares you for the real world, not just for exams.
              </p>

              <h3 className="mt-12 text-2xl font-extrabold text-slate-800 sm:text-3xl">Our Promise</h3>
              <p className="mt-3 text-lg text-slate-500">
                We promise to provide the best possible training with experienced teachers in a friendly, supportive environment. We are committed to your growth, not just during the course, but for your entire career. Your success is our success.
              </p>
            </div>
            <div className="mt-10 lg:mt-0" aria-hidden="true">
              <img 
                className="mx-auto rounded-lg shadow-xl w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="An experienced Indian teacher leading a class at Cybotech Campus."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;