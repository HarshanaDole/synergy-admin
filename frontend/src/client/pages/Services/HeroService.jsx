import React from 'react';
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import './HeroService.css';
import heroImage from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/services-cover.png'; 

const HeroService = () => {

  return (
    <div className="services-page">
      <AnimatedSection animationType="fadeIn">
      <section className="hero-section">
        <img src={heroImage} alt="Hero Section" className="hero-image" />
        <div className="hero-text">
          <h1>What We<br /> <span className="highlight">OFFER</span></h1>
          <p>
            At Synergy Engineering, we provide a comprehensive suite of services and solutions designed to meet the diverse needs of our clients. With providing scalable and reliable services and solutions, we bring innovative, efficient, and excellence projects for you.
          </p>
        </div>
      </section>
      </AnimatedSection>
    </div>
  );
};

export default HeroService;
