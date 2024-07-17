import "../css/main.css";
import "../css/table.css";
import Header from "../components/Header";
import { ChangeEvent, useEffect, useState } from "react";
import { Client as ProjectModel } from "../models/project";
import { HiDotsVertical } from "react-icons/hi";
import * as ProjectsApi from "../../network/projects_api";
import SearchBar from "../components/SearchProject";
import SmallButton from "../components/SmallButton";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [query, setQuery] = useState("");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProjects() {
      try {
        const projects = await ProjectsApi.fetchProjects();
        setProjects(projects);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadProjects();
  }, []);

  const togglePopup = (projectId: string) => {
    setActiveProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  const handleEditClick = (project: ProjectModel) => {
    navigate(`/admin/projects/edit/${project._id}`);
  };

  async function handleDeleteClick(project: ProjectModel) {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await ProjectsApi.deleteProject(project._id);
        setProjects(
          projects.filter(
            (existingProject) => existingProject._id !== project._id
          )
        );
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  }

  const filteredItems = projects.filter((project) => {
    return project.client.toLowerCase().includes(query.toLowerCase());
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div>
      <Header />
      <section>
        <div className="flex">
          <SearchBar query={query} onSearchChange={handleSearchChange} />
          <SmallButton to="/admin/projects/add" />
        </div>

        <table className="tbl">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Client</th>
              <th>Location</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((project, index) => (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.type}</td>
                <td>{project.client}</td>
                <td>{project.location}</td>
                <td>{project.year}</td>
                <td id="menu-container">
                  {activeProjectId === project._id && (
                    <div className="popup-menu">
                      <button
                        className="popup-btn"
                        onClick={() => handleEditClick(project)}
                      >
                        Edit
                      </button>
                      <button
                        className="popup-btn"
                        onClick={() => handleDeleteClick(project)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  <button
                    className="menu-icon"
                    onClick={() => {
                      togglePopup(project._id);
                    }}
                  >
                    <HiDotsVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Projects;
