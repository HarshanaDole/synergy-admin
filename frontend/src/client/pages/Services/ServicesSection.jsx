import React from 'react';
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <AnimatedSection animationType="slideInFromBottom">
        <div className='line-servicesSec'></div>
        <h2>Our Services</h2>
      </AnimatedSection>
      <AnimatedSection animationType="slideInFromBottom">
      <div className="services-container">
        <div className="service-card service-card-consulting">
        <AnimatedSection animationType="slideInFromLeft">
          <h3>Consulting</h3>
          <p>
            Synergy Engineering provides expert consulting services to guide your projects from conception to completion. Our team offers strategic advice and technical expertise to ensure efficient, cost-effective solutions tailored to your unique needs.
          </p>
          </AnimatedSection>
        </div>
        <div className="service-card service-card-designing">
        <AnimatedSection animationType="zoomIn">
          <h3>Designing</h3>
          <p>
            Our designing services focus on creating innovative and functional designs that meet the highest standards of quality and sustainability. We collaborate closely with clients to develop customized plans that optimize performance and aesthetics.
          </p>
          </AnimatedSection>
        </div>  
        <div className="service-card service-card-contracting">
        <AnimatedSection animationType="slideInFromRight">
          <h3>Contracting</h3>
          <p>
            We offer comprehensive contracting services, managing every aspect of your project with precision and professionalism. We ensure timely execution, adherence to budgets, and superior quality in all our endeavors.
          </p>
          </AnimatedSection>
        </div>
      </div>
      </AnimatedSection>
      <AnimatedSection animationType="slideInFromBottom">
      <div className='line-servicesSec-last'></div>
      <p className='final-text-serviceSec'>From start to finish, we are with you at every step</p>
      </AnimatedSection>
    </section>
  );
};

export default ServicesSection;
