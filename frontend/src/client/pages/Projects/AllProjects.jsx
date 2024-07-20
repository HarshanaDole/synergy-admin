import React, { useState } from "react";
import AnimatedSection from "/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/AnimatedSection";
import './AllProjects.css'
import Image1 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Epic_Ethiopia.png';
import Image2 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/MAS_fabric.png';
import Image3 from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/images/Trischel.png';

const projects = [
    {
        name: "Project1",
        client: "Client1",
        description: "Description1",
        year: 2017,
        image: Image1,
    },
    {
        name: "Project2",
        client: "Client2",
        description: "Description2",
        year: 2017,
        image: Image2,
    },
    {
        name: "Project3",
        client: "Client3",
        description: "Description3",
        year: 2017,
        image: Image3,
    },
    {
        name: "Project4",
        client: "Client4",
        description: "Description4",
        year: 2017,
        image: Image1,
    },
    {
        name: "Project5",
        client: "Client5",
        description: "Description5",
        year: 2017,
        image: Image2,
    },
];

const AllProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    // Logic for displaying current projects
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    // Logic for pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <section className="all-projects">
            <AnimatedSection animationType="slideInFromBottom">
                <h2 className="allproj-head">Our <br /><span className="highlight-projects">PROJECTS</span></h2>
                <div className="project-cards">
                    {currentProjects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <div className="project-content">
                                <h3>{project.name}</h3>
                                <p>{project.client}</p>
                                <p>{project.description}</p>
                                <p>{project.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    {pageNumbers.map(number => (
                        <span
                            key={number}
                            className={`page-number ${currentPage === number ? "active" : ""}`}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </span>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default AllProjects;
