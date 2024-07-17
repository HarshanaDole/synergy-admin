import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Client_testimonials.css';
import client1 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/MAS-logo.png';
import client2 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/brandix-logo.png';
import client3 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Unililever-logo.png';
import client4 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/coca_cola_beverages_sri_lanka_ltd_logo.jpg';
import client5 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/South_asia_textiles.jpg';
import client6 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/elephant-house.jpg';
import client7 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/maldives_airports_company.jpg';
import client8 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/CMA_CGM_logo.png';
import client9 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Courtlauds_clothing.jpg';
import client10 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/EAM_maliban.jpg';
import client11 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Food_studio_logo.png';
import client12 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Oasis_hospital.jpg';
import client13 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Printcare.jpg';
import client14 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Quantum_clothing.png';
import client15 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Timex_garments.jpg';
import client16 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/amsafe_bridport_logo.jpg';
import client17 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/compass_international_logo.jpg';
import client18 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/epic_apperal.jpg';
import client19 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/kings_hospital_colombo_logo.jpg';
import client20 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/nishatmillsltd_logo.jpg';
import Client21 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/dilmah-logo.jpg';
import Client22 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/fonterra_logo.jpeg';
import Client23 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Bookingcom-logo.png';
import Client24 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/ansell-logo.jpeg';

const logos = [
    { src: client1, alt: "MAS" },
    { src: client2, alt: "Brandix" },
    { src: client3, alt: "Uniliver" },
    { src: client4, alt: "Coca Cola Sri Lanka" },
    { src: client5, alt: "South Asia" },
    { src: client6, alt: "Elephant House" },
    { src: client7, alt: "Maldives airport Company" },
    { src: client8, alt: "CMA CGM" },
    { src: client9, alt: "Courtlauds Clothing" },
    { src: client10, alt: "EAM Maliban" },
    { src: client11, alt: "Food Studio" },
    { src: client12, alt: "Oasis Hospital" },
    { src: client13, alt: "Printcare" },
    { src: client14, alt: "Quantum Clothing" },
    { src: client15, alt: "Timex Garments" },
    { src: client16, alt: "amsafe Bridport" },
    { src: client17, alt: "compass International" },
    { src: client18, alt: "epic Apperal" },
    { src: client19, alt: "kings Hospital" },
    { src: client20, alt: "Nishat Mills" },
    { src: Client21, alt: "Dilmah" },
    { src: Client22, alt: "Fonterra" },
    { src: Client23, alt: "Booking.com" },
    { src: Client24, alt: "Ansell" }
];

const ClientCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="client-carousel-section">
            <div className="line-testi"></div>
            <h2 className="header-test">Our Clients</h2>
            <Slider {...settings}>
                {logos.map((logo, i) => (
                    <div key={i} className="client-logo-container">
                        <img src={logo.src} alt={logo.alt} className="client-logo" />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ClientCarousel;
