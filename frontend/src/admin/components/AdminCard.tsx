
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AdminCard.css';

interface AdminCardProps {
  admin: {
    id: number;
    name: string;
    profilePic: string;
  };
  onDelete: (id: number) => void;
  loggedInAdminId: number;
}

const AdminCard: React.FC<AdminCardProps> = ({ admin, onDelete, loggedInAdminId }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/admin/profile/${admin.id}`);
  };

  const handleDeleteProfile = () => {
    onDelete(admin.id);
  };

  return (
    <div className="admin-card">
      <img src={admin.profilePic} alt={admin.name} className="admin-profile-pic" />
      <h2>{admin.name}</h2>
      {admin.id === loggedInAdminId && (
        <div className="button-group">
          <button onClick={handleViewProfile}>View Profile</button>
          <button className="delete-btn" onClick={handleDeleteProfile}>Delete Profile</button>
        </div>
      )}
    </div>
  );
};

export default AdminCard;
