import { NavLink, useNavigate } from "react-router-dom";
import "../css/header.css";
import { useEffect, useState } from "react";
import logoImage from "/Synergy/Web/synergy-admin/synergy-admin/frontend/src/admin/images/synergy-logo.png";
import ConfirmationPopup from "./ConfirmationPopup";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showLogoutPopup, setShowLogoutpopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleScroll = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/admin/login");
  };

  return (
    <header className="header">
      <section className="flex">
        <NavLink to="/admin">
          <div className="logo-container">
            <div className="img-container">
              <img src={logoImage} alt="synergy-logo" />
            </div>
            <div className="header-title">
              <span className="admin">Admin</span>
              <span className="panel">Panel</span>
            </div>
          </div>
        </NavLink>
        <nav className={isActive === true ? "navbar active" : "navbar"}>
          <NavLink
            to="/admin"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/admin/blogs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/admin/messages"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Messages
          </NavLink>
          <NavLink
            to="/admin/clients"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Clients
          </NavLink>
        </nav>

        <div className="icons">
          <i className="ri-menu-line" id="menu-icon" onClick={toggleMenu}></i>
          <i className="ri-user-3-fill" id="profile-icon" onClick={handleDropdownToggle}></i>
          {isDropdownVisible && (
            <div className="dropdown-menu" onMouseLeave={() => setIsDropdownVisible(false)}>
              <NavLink to="/admin/profile" className="dropdown-item">
                Manage My Account
              </NavLink>
              <div className="dropdown-item" onClick={() => setShowLogoutpopup(true)}>
                Logout
              </div>

              {showLogoutPopup && (
                <ConfirmationPopup
                message="Are you sure you want to logout?"
                onCancel={() => setShowLogoutpopup(false)}
                onConfirm={handleLogout}
                />
              )}
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
