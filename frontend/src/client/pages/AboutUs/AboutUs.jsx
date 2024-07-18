import React from "react";
import Header from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Header';
import Footer from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Footer';
import HeroAbout from '../AboutUs/HeroAbout';
import VisionMissionSection from "./VisionMission";
import OurClients from "./OurClients";
import WhyUs from "./WhyUS";
import CertificatesSection from "./OtherAbout";

const AboutUs = () => {
    return (
        <div className="aboutus">
            <Header />
            <HeroAbout />
            <VisionMissionSection />
            <OurClients />
            <WhyUs />
            <CertificatesSection />
            <Footer />
        </div>
    );
};

export default AboutUs;