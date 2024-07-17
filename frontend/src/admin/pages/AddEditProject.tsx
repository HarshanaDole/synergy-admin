import Header from "../components/Header";
import "../css/main.css";
import Uploader from "../components/Uploader";
import { Project } from "../models/project";
import { useForm } from "react-hook-form";
import { ProjectInput } from "../../network/projects_api";
import * as ProjectsApi from "../../network/projects_api";
import * as ClientsApi from "../../network/clients_api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Client } from "../models/client";
import CustomDropdown from "../components/CustomDropdown";

const AddEditProject = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [existingProject, setExistingProject] = useState<Project | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [defaultImage = existingProject?.imageUrl, setDefaultImage] = useState<
    string | null
  >(null);
  const [showImageError, setShowImageError] = useState(false);
  const [clientError, setClientError] = useState<string | undefined>(undefined);
  const [isClientValid, setIsClientValid] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<ProjectInput>();

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        try {
          const project = await ProjectsApi.fetchProject(id);
          setExistingProject(project);
          setDefaultImage(project.imageUrl);
          setImage(null);
          setValue("type", project.type);
          setValue("client", project.client);
          setValue("location", project.location);
          setValue("year", project.year);
          setValue("description", project.description);
          setIsClientValid(true);
        } catch (error) {
          console.error(error);
          alert(error);
        }
      }
    };

    async function loadClients() {
      try {
        const clients = await ClientsApi.fetchClients();
        setClients(clients);
      } catch (error) {
        console.error(error);
      }
    }

    loadClients();
    fetchProject();
  }, [id, setValue]);

  const handleImageChange = (file: File | null) => {
    console.log("image changed: ", file);
    setImage(file);
    setShowImageError(false);
  };

  const validateForm = async () => {
    const isValid = await trigger();
    let hasError = false;

    if (!image && !defaultImage) {
      setShowImageError(true);
      hasError = true;
    } else {
      setShowImageError(false);
    }

    if (!isClientValid) {
      setClientError("Client is Required");
      hasError = true;
    } else {
      setClientError(undefined);
    }

    return isValid && !hasError;
  };

  async function onProjectSubmit(input: ProjectInput) {
    const isValid = await validateForm();

    if (!isValid) {
      return;
    }

    try {
      const formData = new FormData();
      if (image) {
        formData.append("imageUrl", image);
      }
      formData.append("type", input.type);
      formData.append("client", input.client);
      formData.append("location", input.location);
      formData.append("year", input.year.toString());
      if (input.description) {
        formData.append("description", input.description);
      }

      if (existingProject) {
        const updatedProject = await ProjectsApi.updateProject(
          existingProject._id,
          formData
        );
        onProjectSave(updatedProject);
      } else {
        const newProject = await ProjectsApi.createProject(formData);
        onProjectSave(newProject);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  async function onProjectSave(project: Project) {
    console.log("Project Saved: ", project);
    navigate("/admin/projects");
  }

  const handleClientChange = (selectedClient: string) => {
    setValue("client", selectedClient);
    setIsClientValid(true);
  };

  return (
    <>
      <Header />
      <section className="page-layout">
        <div className="add-items">
          <h1>{existingProject ? "Edit Project" : "Add New Project"}</h1>
          <form
            id="addEditProjectForm"
            onSubmit={handleSubmit(onProjectSubmit)}
            className="form-container"
          >
            <Uploader
              onImageChange={handleImageChange}
              setImage={setImage}
              image={image}
              setDefaultImage={setDefaultImage}
              defaultImage={defaultImage}
              showError={showImageError}
            />
            <div className="input-box-container">
              <div className="title-container">
                <span className="title">Type</span>
                <span className="required">*</span>
              </div>
              <div
                className={`input-box ${
                  errors.type ? "invalid" : dirtyFields.type ? "valid" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="e.g. : Electrical Installation"
                  {...register("type", { required: "Type is Required" })}
                  autoComplete="off"
                />
                {errors.type && (
                  <p className="error-message">{errors.type.message}</p>
                )}
              </div>
            </div>
            <div className="input-box-container">
              <div className="title-container">
                <span className="title">Client</span>
                <span className="required"> *</span>
              </div>
              <CustomDropdown
                options={clients.map((client) => client.name)}
                defaultValue={existingProject?.client || "Select Client"}
                onChange={handleClientChange}
                error={clientError}
                isValid={isClientValid}
              />
              {clientError && <p className="error-message">{clientError}</p>}
            </div>
            <div className="input-box-container">
              <div className="title-container">
                <span className="title">Location</span>
                <span className="required"> *</span>
              </div>
              <div
                className={`input-box ${
                  errors.location
                    ? "invalid"
                    : dirtyFields.location
                    ? "valid"
                    : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Enter Project Address"
                  {...register("location", {
                    required: "Location is Required",
                  })}
                  autoComplete="off"
                />
                {errors.location && (
                  <p className="error-message">{errors.location.message}</p>
                )}
              </div>
            </div>
            <div className="input-box-container">
              <div className="title-container">
                <span className="title">Year</span>
                <span className="required"> *</span>
              </div>
              <div
                className={`input-box ${
                  errors.year ? "invalid" : dirtyFields.year ? "valid" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Enter Project Year"
                  {...register("year", {
                    required: "Year is Required",
                    validate: {
                      validYear: (value) =>
                        (/^\d{4}$/.test(value.toString()) &&
                          value >= 1900 &&
                          value <= new Date().getFullYear()) ||
                        "Year must be a valid year",
                    },
                  })}
                  autoComplete="off"
                />
                {errors.year && (
                  <p className="error-message">{errors.year.message}</p>
                )}
              </div>
            </div>
            <div className="input-area-container">
              <div className="title-container">
                <span className="title">Description</span>
              </div>
              <div
                className={`input-area ${
                  errors.description
                    ? "invalid"
                    : dirtyFields.description
                    ? "valid"
                    : ""
                }`}
              >
                <textarea
                  placeholder="Type Project Description"
                  {...register("description")}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="btn-container">
              <button
                type="submit"
                form="addEditProjectForm"
                className="add-btn"
                onClick={validateForm}
                disabled={isSubmitting}
              >
                {existingProject ? "Update Project" : "Add Project"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddEditProject;
