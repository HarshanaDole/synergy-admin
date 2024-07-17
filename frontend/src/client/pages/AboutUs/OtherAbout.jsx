import React from 'react';
import './OtherAbout.css';
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import certificate1 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/ictad-cert.png'; 
import certificate2 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/iso-cert.png'; 

const CertificatesSection = () => {
  return (
    <section className="certificates-section">
      <div className="certificates-container">
        <div className="certificate">
        <p>CIDA Certification</p>
        <AnimatedSection animationType="zoomIn">
        <img src={certificate1} alt="Certificate 1" />
        </AnimatedSection>
        </div>
        <div className="certificate">
        <p>ISO Certification</p>
        <AnimatedSection animationType="zoomIn">
        <img src={certificate2} alt="Certificate 2" />
        </AnimatedSection>
        </div>
      </div>
      <AnimatedSection animationType="slideInFromBottom">
        <div className='line-other'></div>
        <p className='final-text-other'>Providing witness to our claims.</p>
      </AnimatedSection>
    </section>
  );
};

export default CertificatesSection;
