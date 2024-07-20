import "../css/main.css";
import "../css/table.css";
import Header from "../components/Header";
import { ChangeEvent, useEffect, useState } from "react";
import { Project as ProjectModel } from "../models/project";
import { HiDotsVertical } from "react-icons/hi";
import * as ProjectsApi from "../../network/projects_api";
import SearchBar from "../components/Search";
import SmallButton from "../components/SmallButton";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import ActionPopup from "../components/ActionPopup";
import ConfirmationPopup from "../components/ConfirmationPopup";

function Projects() {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [showProjectsLoadingError, setShowProjectsLoadingError] =
    useState(false);
  const [query, setQuery] = useState("");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.showPopup) {
      setPopupMessage(location.state.message);
      setPopupType(location.state.type);
      setShowPopup(true);
    }
  }, [location.state]);

  useEffect(() => {
    async function loadProjects() {
      try {
        setShowProjectsLoadingError(false);
        setProjectsLoading(true);
        const projects = await ProjectsApi.fetchProjects();
        setProjects(projects);
      } catch (error) {
        console.error(error);
        setShowProjectsLoadingError(true);
      } finally {
        setProjectsLoading(false);
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
    setProjectToDelete(project._id);
    setShowDeletePopup(true);
  }

  const confirmDelete = async () => {
    if (projectToDelete) {
      try {
        await ProjectsApi.deleteProject(projectToDelete);
        setProjects(
          projects.filter(
            (existingClient) => existingClient._id !== projectToDelete
          )
        );
        setPopupMessage("Project deleted successfully!");
        setPopupType("success");
        setShowPopup(true);
      } catch (error) {
        console.error(error);
        setPopupMessage("Failed to delete project. Please try again.");
        setPopupType("error");
        setShowPopup(true);
      } finally {
        setProjectToDelete(null);
        setShowDeletePopup(false);
      }
    }
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    setProjectToDelete(null);
  };

  const filteredItems = projects.filter((project) => {
    return project.client.toLowerCase().includes(query.toLowerCase());
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const formatImageUrl = (url: string) => {
    if (url) {
      return url.replace("public\\", "http://localhost:5000/");
    }
  };

  const projectsTable = (
    <>
      {filteredItems.map((project, index) => (
        <tr key={project._id}>
          <td>{index + 1}</td>
          <td className="image-cell">
            <img
              src={formatImageUrl(project.imageUrl)}
              alt={project.imageUrl || "image"}
              className="image"
            />
          </td>
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
    </>
  );

  return (
    <div>
      <Header />
      <section>
        <div className="flex">
          <SearchBar
            query={query}
            onSearchChange={handleSearchChange}
            placeholder="Search for Client..."
          />
          <SmallButton to="/admin/projects/add" />
        </div>

        {projectsLoading && <Spinner fullPage color="var(--main-color)" />}
        {showProjectsLoadingError && (
          <p style={{ textAlign: "center" }}>
            Something went wrong. Please refresh the page.
          </p>
        )}
        {!projectsLoading && !showProjectsLoadingError && (
          <table className="tbl">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Type</th>
                <th>Client</th>
                <th>Location</th>
                <th>Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projectsTable
              ) : (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center" }}>
                    You don't have any projects yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </section>
      {showPopup && (
        <ActionPopup
          message={popupMessage}
          type={popupType}
          onClose={() => setShowPopup(false)}
          position="top-right"
        />
      )}
      {showDeletePopup && projectToDelete && (
        <ConfirmationPopup
          message={`Are you sure you want to delete this project?`}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          type="warning"
        />
      )}
    </div>
  );
}

export default Projects;
