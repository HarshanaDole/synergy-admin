import "../css/main.css";
import "../css/table.css";
import Header from "../components/Header";
import { ChangeEvent, useEffect, useState } from "react";
import { Client as ClientModel } from "../models/client";
import { HiDotsVertical } from "react-icons/hi";
import * as ClientsApi from "../../network/clients_api";
import SearchBar from "../components/SearchClient";
import SmallButton from "../components/SmallButton";
import { useNavigate } from "react-router-dom";

function Clients() {
  const [clients, setClients] = useState<ClientModel[]>([]);
  const [query, setQuery] = useState("");
  const [activeClientId, setActiveClientId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadClients() {
      try {
        const clients = await ClientsApi.fetchClients();
        setClients(clients);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadClients();
  }, []);

  const togglePopup = (clientId: string) => {
    setActiveClientId((prevId) => (prevId === clientId ? null : clientId));
  };

  const handleEditClick = (client: ClientModel) => {
    navigate(`/admin/clients/edit/${client._id}`);
  };

  async function handleDeleteClick(client: ClientModel) {
    if (window.confirm("Are you sure you want to delete this client?")) {
      try {
        await ClientsApi.deleteClient(client._id);
        setClients(
          clients.filter((existingClient) => existingClient._id !== client._id)
        );
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  }

  const filteredItems = clients.filter((client) => {
    return client.name.toLowerCase().includes(query.toLowerCase());
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const formatImageUrl = (url: string) => {
    return url.replace("public\\", "http://localhost:5000/");
  };

  return (
    <div>
      <Header />
      <section>
        <div className="flex">
          <SearchBar query={query} onSearchChange={handleSearchChange} />
          <SmallButton to="/admin/clients/add" />
        </div>

        <table className="tbl">
          <thead>
            <tr>
              <th className="hd-id"></th>
              <th className="hd-image">Image</th>
              <th className="hd-name">Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((client, index) => (
              <tr key={client._id}>
                <td>{index + 1}</td>
                <td className="image-cell">
                  <img
                    src={formatImageUrl(client.imageUrl)}
                    alt={client.name}
                    className="image"
                  />
                </td>
                <td>{client.name}</td>
                <td id="menu-container">
                  {activeClientId === client._id && (
                    <div className="popup-menu">
                      <button
                        className="popup-btn"
                        onClick={() => handleEditClick(client)}
                      >
                        Edit
                      </button>
                      <button
                        className="popup-btn"
                        onClick={() => handleDeleteClick(client)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  <button
                    className="menu-icon"
                    onClick={() => {
                      togglePopup(client._id);
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

export default Clients;
