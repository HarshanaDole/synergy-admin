import React from "react";
import Header from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Header';
import Footer from '/Synergy/Web/synergy-admin/synergy-admin/frontend/src/client/components/Footer';
import AllProjects from "./AllProjects";

const Projects = () => {
    return (
        <div className="projects">
            <Header />
            <AllProjects />
            <Footer />
        </div>
    )
}

export default Projects;