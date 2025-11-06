import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialSection from '../components/SpecialSection';
import StatsSection from '../components/StatsSection';
import PopularCourses from '../components/PopularCourses';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <WhyChooseUs />
      <SpecialSection />
      <StatsSection />
      <PopularCourses />
      <Testimonials />
    </div>
  );
};

export default HomePage;