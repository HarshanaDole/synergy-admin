import { Link } from "react-router-dom";
// import "../css/main.css";
import "../css/login-register.css";
import React, { useState } from 'react';
import ActionPopup from "../components/ActionPopup";
// import { ChangeEvent, FormEvent, useState } from "react";

const Register: React.FC = () => {
  const [popupData, setPopupData] = useState<{ message: String; type: 'success' | 'error' | 'info'; key: number }[]>([]);
  const [key, setKey] = useState(0);

  const showPopup = (message: string, type: 'success' | 'error' | 'info') => {
    setPopupData((prev) => [...prev, { message, type, key }]);
    setKey((prev) => prev + 1);
  };

  const handleClosePopup = (key:  number) => {
    setPopupData((prev) => prev.filter((popup) => popup.key !== key));
  };
  // const [name, setName] = useState<string>();
  // const [password, setPassword] = useState<string>();

  // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setName(e.target.value);

  // const handlePasswordeChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setPassword(e.target.value);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  return (
    <div className="login-register-bg">
      <form className="login-form-container">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" name="secret_key" placeholder="Enter Secret Key" autoComplete="off" />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            autoComplete="name"
          />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Enter Password" />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
        </div>
        <button onClick={() => showPopup('Signup Successful!', 'success')} className="btn" type="submit">
          Register
        </button>
        {popupData.map((popup) => (
          <ActionPopup
          key={popup.key}
          message={popup.message}
          duration={5000}
          onClose={() => handleClosePopup(popup.key)}
          type={popup.type}
          showTimerBar
          />
        ))}
        <Link to="/admin/login" className="nav-link">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
