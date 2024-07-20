import React from 'react';
import './VisionMission.css';
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import visionImage from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/vision_icon.png';
import missionImage from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/mission_icon.png';

const VisionMissionSection = () => {
  console.log('Rendering VisionMissionSection');

  return (
    <AnimatedSection animationType="scaleUp">
      <section className="vision-mission">
        <div className="vision-mission-content">
          <div className="vision">
            <div className="text-container">
              <h2>Our<br /> <span className="highlight">VISION</span></h2>
              <div className="image-container">
                <img src={visionImage} alt="Vision" />
              </div>
              <p>
                “To be globally recognized as a leader in mechanical, electrical & plumbing (MEP) solutions by providing a superior service 
                and innovative solutions to our clients and becoming their preferred supplier of professional services.”
              </p>
            </div>
          </div>
          <div className='divider-about'></div>
          <div className="mission">
            <div className="text-container">
              <h2>Our<br /><span className="highlight">MISSION</span></h2>
              <div className="image-container">
                <img src={missionImage} alt="Mission" />
              </div>
              <p>
                “To deliver the best mechanical, electrical & plumbing (MEP) solutions and services to our clients that are innovative, safe, 
                energy efficient, affordable and technically superior.”
              </p>
            </div>
          </div>
        </div>
        <div className="footer-content-vimi">
          <div className="line-story"></div>
          <p className='final-text-story'>Standards set high. And Goals even higher.</p>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default VisionMissionSection;
