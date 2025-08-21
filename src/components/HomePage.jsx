import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import NewsletterSection from './NewsletterSection';

function HomePage({ onGetWord }) {
  return (
    <>
      <HeroSection onGetWord={onGetWord} />
      <FeaturesSection />
      <NewsletterSection />
    </>
  );
}

export default HomePage;
