// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Sections from './components/Sections';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      <Header />
      <Hero />
      <Sections/>
      <ReferralBenefits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
