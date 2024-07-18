import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnimatedSection from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection';
import './HeroSection.css';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/services'); // Use the navigate function directly
    window.scrollTo(0, 0); // Optionally scroll to top
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <AnimatedSection animationType="fadeIn">
      <section className='hero'>
        <Slider {...settings}>
          <div className='hero-slide hero-slide1'>
            <div className="content">
              <h1>Securing Tomorrow,<br /> Today.</h1>
              <p>Providing innovative Engineering solutions to transform ideas into reality.</p>
              <button onClick={handleLearnMoreClick}>
                Learn More
                <FaArrowRight size={20}/>
              </button>
            </div>
          </div>
          <div className='hero-slide hero-slide2'>
            <div className="content">
              <h1>Engineering Excellence,<br /> Building the Future</h1>
              <p>Delivering cutting-edge technology and engineering expertise.</p>
              <button onClick={handleLearnMoreClick}>
                Learn More
                <FaArrowRight size={20}/>
              </button> 
            </div>
          </div> 
          <div className='hero-slide hero-slide3'>
            <div className="content">
              <h1>Designing the Future,<br /> One innovation at a Time</h1>
              <p>Partnering with you to bring your projects to life with excellence.</p>
              <button onClick={handleLearnMoreClick}>
                Learn More
                <FaArrowRight size={20}/>
              </button>
            </div>
          </div>
        </Slider>
      </section>
    </AnimatedSection>
  );
};

export default HeroSection;
