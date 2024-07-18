import { NavLink } from "react-router-dom";
import "../css/header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleScroll = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <header className="header">
      <section className="flex">
        <NavLink to="/admin">
          <div className="logo-container">
            <div className="img-container">
              <img src="/img/synergylogo.png" alt="synergy-logo" />
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
          <NavLink to="/admin/profile" className="p">
            <i className="ri-user-3-fill" id="profile-icon"></i>
          </NavLink>
        </div>
      </section>
    </header>
  );
};

export default Header;
