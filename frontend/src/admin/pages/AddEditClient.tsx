import Header from "../components/Header";
import "../css/main.css";
import Uploader from "../components/Uploader";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Client } from "../models/client";
import { useForm } from "react-hook-form";
import { ClientInput } from "../../network/clients_api";
import * as ClientsApi from "../../network/clients_api";

const AddEditClient = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [existingClient, setExistingClient] = useState<Client | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [defaultImage = existingClient?.imageUrl, setDefaultImage] = useState<
    string | null
  >(null);
  const [showImageError, setShowImageError] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<ClientInput>();

  useEffect(() => {
    const fetchClient = async () => {
      if (id) {
        try {
          const client = await ClientsApi.fetchClient(id);
          setExistingClient(client);
          setValue("name", client.name);
          setDefaultImage(client.imageUrl);
          setImage(null);
        } catch (error) {
          console.error(error);
          alert(error);
        }
      }
    };
    fetchClient();
  }, [id, setValue]);

  const handleImageChange = (file: File | null) => {
    console.log("image changed: ", file);
    setImage(file);
    setShowImageError(false);
  };

  async function onClientSubmit(input: ClientInput) {
    if (!image && !defaultImage) {
      setShowImageError(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", input.name);
      if (image) {
        formData.append("imageUrl", image);
      }

      if (existingClient) {
        const updatedClient = await ClientsApi.updateClient(
          existingClient._id,
          formData
        );
        onClientSave(updatedClient);
      } else {
        const newClient = await ClientsApi.createClient(formData);
        onClientSave(newClient);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  async function onClientSave(client: Client) {
    console.log("Client Saved: ", client);
    navigate("/admin/clients");
  }

  return (
    <>
      <Header />
      <section className="page-layout">
        <div className="add-items">
          <h1>{existingClient ? "Edit Client" : "Add New Client"}</h1>
          <form
            id="addEditClientForm"
            onSubmit={handleSubmit(onClientSubmit)}
            className="form-container"
            encType="multipart/form-data"
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
                <span className="title">Name</span>
                <span className="required">*</span>
              </div>
              <div
                className={`input-box ${
                  errors.name ? "invalid" : dirtyFields.name ? "valid" : ""
                }`}
              >
                <input
                  type="text"
                  {...register("name", { required: "Name is Required" })}
                  autoComplete="off"
                />
                {errors.name && (
                  <p className="error-message">{errors.name.message}</p>
                )}
              </div>
            </div>
            <div className="btn-container">
              <button
                type="submit"
                form="addEditClientForm"
                className="add-btn"
                disabled={isSubmitting}
              >
                {existingClient ? "Update Client" : "Add Client"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddEditClient;
