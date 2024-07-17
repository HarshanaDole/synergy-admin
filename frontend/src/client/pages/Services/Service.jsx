import React from "react";
import Header from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Header';
import Footer from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Footer';
import HeroService from "./HeroService";
import ServicesSection from "./ServicesSection";
import SolutionsSection from "./Solutions";

const Services = () => {
    return (
        <div className="services">
            <Header />
            <HeroService />
            <ServicesSection />
            <SolutionsSection />
            <Footer />
        </div>
    )
}

export default Services;