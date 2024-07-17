import React from 'react';
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import { useNavigate } from 'react-router-dom';
import './Offer.css';

const Offer = () => {

    const navigate = useNavigate();

    const handleLearnMoreClick = (solution) => {
        navigate(`/services#${solution}`);
    };

    return (
        <section className="offer-section">
            <AnimatedSection animationType="slideInFromLeft">
                <h2 className="offer-header">
                    <span className="what-word">WHAT</span>
                    <div className="we-offer">
                        <span className="vertical-we">WE</span>
                        <span className="horizontal-offer">OFFER</span>
                    </div>
                </h2>
            </AnimatedSection>
            <AnimatedSection animationType="scaleUp">
                <div className="offer-cards">
                    <div className="offer-card1">
                        <div className="offer-content">
                            <AnimatedSection animationType="slideInFromTop">
                                <h3 className='First-head'>Mechanical</h3>
                                <h3>Solutions</h3>
                                <p>
                                    We offer tailored mechanical solutions for industrial and commercial 
                                    needs, including heat and steam systems, chilled water systems, VRF 
                                    systems, ventilation, steam and pneumatic distribution, and large-scale 
                                    air conditioning. Trust Synergy for innovative and reliable mechanical 
                                    wwengineering expertise.
                                </p>
                                <div className="button-container">
                                    <button onClick={() => handleLearnMoreClick('mechanical-solutions')}>Learn More</button>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                    <div className="offer-card2">
                        <div className="offer-content">
                            <AnimatedSection animationType="slideInFromBottom">
                                <h3 className='First-head'>Electrical</h3>
                                <h3>Solutions</h3>
                                <p>We provide complete electrical services including power substations, generators, 
                                    transformers, low and medium voltage systems, and advanced lighting solutions. 
                                    Specializing in distribution systems, surge protection, UPS systems, testing, 
                                    commissioning, and after-care, we ensure reliable and efficient electrical infrastructure 
                                    for your projects.</p>
                                <div className="button-container">
                                    <button onClick={() => handleLearnMoreClick('electrical-solutions')}>Learn More</button>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                    <div className="offer-card3">
                        <div className="offer-content">
                            <AnimatedSection animationType="slideInFromTop">
                                <h3 className='First-head'>Plumbing</h3>
                                <h3>Solutions</h3>
                                <p>We provide comprehensive plumbing services for residential and industrial needs, including water supply piping, sanitary drainage, and industrial piping. Our expertise ensures reliable, high-quality solutions tailored to your requirements.</p>
                                <div className="button-container">
                                    <button onClick={() => handleLearnMoreClick('plumbing-solutions')}>Learn More</button>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                    <div className="offer-card4">
                        <div className="offer-content">
                            <AnimatedSection animationType="slideInFromBottom">
                                <h3 className='First-head'>ELV & Data</h3>
                                <h3>Solutions</h3>
                                <p>We specialize in the design and installation of low voltage systems, including data cabling, security systems, and audiovisual solutions. Our expertise ensures reliable and efficient infrastructure to support your technology needs.</p>
                                <div className="button-container">
                                    <button onClick={() => handleLearnMoreClick('elv-solutions')}>Learn More</button>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInFromBottom">
                <div className='final-container'>
                    <div className="line-offer"></div>
                    <p className="final-text-offer">At Syngery, we offer you the best. And more.</p>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Offer;
