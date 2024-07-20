import React from 'react';
import Header from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Header';
import Footer from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Footer';
import HeroSection from './HeroSection';
import About from './About'
import Services from './Services';
import Offer from './Offer';
import Projects from './Featured_Projects';
import Clients from './Client_testimonials';
import Blog from './Blog_home';
import GlobalPresence from './Global_Presence';
import ContactUs from './ContactusSection';
import './Home.css'


const Home = () => {

    return (
        <div className='home'>
            <Header />
            <HeroSection />
            <About />
            <Services />
            <Offer />
            <Projects />
            <Clients />
            <Blog />
            <GlobalPresence />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;