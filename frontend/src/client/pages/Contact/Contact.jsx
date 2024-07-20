import React from "react";
import Header from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Header';
import Footer from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Footer';
import ContactContent from "./ContactContent";

const Contact = () => {
    return (
        <div className="contact">
            <Header />
            <ContactContent />
            <Footer />
        </div>
    );
};

export default Contact;