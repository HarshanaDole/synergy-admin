import React from "react";
import { Link } from "react-router-dom";
import logoImage from "/Synergy/Web/synergy-admin/synergy-admin/frontend/src/admin/images/synergy-logo-white_back.png"
import "../css/404ErrorPage.css"; // Make sure to create this CSS file

const Error404Page: React.FC = () => {
  return (
    <div className="error-container">
      <div className="top-right-logo">
        <img src={logoImage} alt="Logo" /> {/* Update with the actual path to your logo */}
      </div>
      <div className="error-content">
        <h1>404</h1>
        <p>Oops! Page Not Found. Please try again.</p>
        <Link to="/admin">
          <button>Back to Home</button>
        </Link>
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
    </div>
  );
};

export default Error404Page;
