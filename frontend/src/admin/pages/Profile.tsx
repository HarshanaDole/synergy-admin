import { useState, ChangeEvent, FormEvent } from "react";
import "../css/profile.css";
import { FaUserEdit } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import DefaultProfPic from "/Synergy/Web/synergy-admin/synergy-admin/frontend/src/admin/images/user.png";
import Header from "../components/Header"; // Assuming you have a Header component
import ConfirmationPopup from "../components/ConfirmationPopup";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState<string>("John Doe");
  const [email, setEmail] = useState<string>("johndoe@example.com");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [secretKey, setSecretKey] = useState<string>("123456");
  const [profilePic, setProfilePic] = useState<string>(DefaultProfPic);
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [showLogoutPopup, setShowLogoutpopup] = useState<boolean>(false);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProfilePic(e.target.files[0]);
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Profile updated!");
    setIsEditing(false);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  const handleDeleteUser = () => {
    alert("User Deleted successfully!");
  }

  return (
    <>
      <Header />
      <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-header">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h2>{name}</h2>
          <div className="button-group">
            <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
              <FaUserEdit /> Edit Profile
            </button>
            <button className="logout-btn" onClick={() => setShowLogoutpopup(true)}>
              <GrPowerShutdown /> Logout
            </button>
            <button className="delete-btn" onClick={() => setShowDeletePopup(true)}>
              Delete Account
            </button>
          </div>
        </div>
        <form className={`profile-form ${isEditing ? "editing" : ""}`} onSubmit={handleSubmit}>
          <div className="input-box-profile">
            <label htmlFor="profilePic">Profile Picture:</label>
            <input
              type="file"
              name="profilePic"
              id="profilePic"
              accept="image/*"
              onChange={handleProfilePicChange}
              disabled={!isEditing}
            />
          </div>
          <div className="input-box-profile">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="input-box-profile">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="input-box-profile">
            <label htmlFor="secretKey">Secret Key:</label>
            <input
              type="text"
              name="secretKey"
              value={secretKey}
              readOnly
            />
          </div>
          {isEditing && (
            <>
              <div className="input-box-profile">
                <label htmlFor="password">New Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="input-box-profile">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              <button className="btn" type="submit">
                Save Changes
              </button>
            </>
          )}
        </form>
      </div>

      {showLogoutPopup && (
        <ConfirmationPopup
        message="Are you sure you want to logout?"
        onCancel={() => setShowLogoutpopup(false)}
        onConfirm={handleLogout}
        />
      )}

      {showDeletePopup && (
        <ConfirmationPopup
        message="Are you sure you want to delete your account?"
        onCancel={() => setShowDeletePopup(false)}
        onConfirm={handleDeleteUser}
        />
      )}
    </>
  );
};

export default Profile;
