import React from 'react';
import './OurClients.css';
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import client1 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/CMA_CGM_logo.png';
import client2 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Courtlauds_clothing.jpg';
import client3 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/EAM_maliban.jpg';
import client4 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Food_studio_logo.png';
import client5 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/MAS-logo.png';
import client6 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Oasis_hospital.jpg';
import client7 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Printcare.jpg';
import client8 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Quantum_clothing.png';
import client9 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/South_asia_textiles.jpg';
import client10 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Timex_garments.jpg';
import client11 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Unililever-logo.png';
import client12 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/amsafe_bridport_logo.jpg';
import client13 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/brandix-logo.png';
import client14 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/coca_cola_beverages_sri_lanka_ltd_logo.jpg';
import client15 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/compass_international_logo.jpg';
import client16 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/epic_apperal.jpg';
import client17 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/kings_hospital_colombo_logo.jpg';
import client18 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/maldives_airports_company.jpg';
import client19 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/dilmah-logo.jpg';
import client20 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Bookingcom-logo.png';
import client21 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/fonterra_logo.jpeg';
import client22 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/ansell-logo.jpeg';

const OurClients = () => {
  return (
    <section className="our-clients">
      <AnimatedSection animationType="slideInFromBottom">
        <div className="line-ourclients"></div>
        <h2>Our Clients</h2>
      </AnimatedSection>
      <div className="clients-container">
      <AnimatedSection animationType="zoomIn">
      <img src={client1} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client2} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client3} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client4} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client5} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client6} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client7} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client8} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client9} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client10} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client11} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client12} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client13} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client14} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client15} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client16} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client17} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client18} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client19} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client20} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client21} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      <AnimatedSection animationType="zoomIn">
      <img src={client22} alt="Our Clients" className="clients-image" />
      </AnimatedSection>
      </div>
    </section>
  );
};

export default OurClients;
