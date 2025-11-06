import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      <div className="py-3">
        <p className="whitespace-nowrap animate-marquee text-sm font-medium">
          <span className="mx-8">New Spoken English batches are starting soon! Admission open.</span>
          <span className="text-pinterest-red mx-8">|</span>
          <span className="mx-8">Enroll now for our popular ADCA course. Limited seats available!</span>
          <span className="text-pinterest-red mx-8">|</span>
          <span className="mx-8">Become job-ready with our Tally & Financial Accounting course.</span>
           <span className="text-pinterest-red mx-8">|</span>
          <span className="mx-8">New Spoken English batches are starting soon! Admission open.</span>
          <span className="text-pinterest-red mx-8">|</span>
          <span className="mx-8">Enroll now for our popular ADCA course. Limited seats available!</span>
          <span className="text-pinterest-red mx-8">|</span>
          <span className="mx-8">Become job-ready with our Tally & Financial Accounting course.</span>
        </p>
      </div>
    </div>
  );
};

const marqueeAnimation = `
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

const style = document.createElement('style');
style.innerHTML = marqueeAnimation + ` .animate-marquee { display: inline-block; animation: marquee 25s linear infinite; }`;
document.head.appendChild(style);


export default Marquee;