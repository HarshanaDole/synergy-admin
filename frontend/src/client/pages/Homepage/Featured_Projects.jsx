import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection";
import './Featured_Projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Back1 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Epic_Ethiopia.png';
import Back2 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/MAS_fabric.png';
import Back3 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Trischel.png';

const projectData = [
    {
        title: "Project Title 1",
        description: "Description 1",
        backgroundImage: Back1
    },
    {
        title: "Project Title 2",
        description: "Description 2",
        backgroundImage: Back2
    },
    {
        title: "Project Title 3",
        description: "Description 3",
        backgroundImage: Back3
    },
    // Add more projects as needed
];

const Projects = () => {
    const navigate = useNavigate(); // Use useNavigate hook here

    const handleSeeMoreClick = () => {
        navigate('/projects'); // Use navigate function from useNavigate
        window.scrollTo(0, 0);
    }

    const [currentProject, setCurrentProject] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentProject(newIndex),
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="featured-projects-section">
            <div
                className="featured-projects-container"
                style={{ backgroundImage: `url(${projectData[currentProject].backgroundImage})` }}
            >
                <div className="featured-projects-overlay">
                    <div className="featured-projects-content">
                        <AnimatedSection animationType="slideInFromLeft">
                            <h2>Featured Projects</h2>
                            <p>Explore our work to see how we bring complex ideas to life and set new standards in engineering excellence.</p>
                            <button onClick={handleSeeMoreClick} className="see-more-button">See More</button>
                        </AnimatedSection>
                    </div>
                    <div className="project-title">
                        <AnimatedSection animationType="slideInFromRight">
                            <h3>{projectData[currentProject].title}</h3>
                            <p>{projectData[currentProject].description}</p>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
            <div className="last">
                <AnimatedSection animationType="slideInFromBottom">
                    <div className="line-project"></div>
                    <p className="final-text-projects">Build to Last. Handled to Perfection.</p>
                </AnimatedSection>
            </div>
            <Slider {...settings} className="project-slider">
                {projectData.map((project, index) => (
                    <div key={index}>
                        <div className="project-slide">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Projects;
