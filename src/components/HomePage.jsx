
// HomePage combines the hero, features, and newsletter sections for the landing page.
import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import NewsletterSection from './NewsletterSection';

// onGetWord: callback to navigate to today's word
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
